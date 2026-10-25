const LANGUAGE_LOCALES = {
    en: "en-IN",
    hi: "hi-IN",
    bn: "bn-IN",
};

let currentUtterance = null;
let currentResolve = null;

const getSpeechSynthesis = () => {
    if (typeof window === "undefined") return null;

    if (!("speechSynthesis" in window)) return null;

    return window.speechSynthesis;
};

export const stopSpeaking = () => {
    const synth = getSpeechSynthesis();

    if (!synth) return;

    // Clear references before cancellation to avoid stale callbacks.
    const resolve = currentResolve;

    currentUtterance = null;
    currentResolve = null;

    synth.cancel();

    if (resolve) {
        resolve({ status: "cancelled" });
    }
};

const cleanText = (text) => {
    return String(text || "")
        .replace(/```[\s\S]*?```/g, " Code block omitted. ")
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/<[^>]*>/g, " ")
        .replace(/#{1,6}\s?/g, "")
        .replace(/(\*\*|__)(.*?)\1/g, "$2")
        .replace(/(\*|_)(.*?)\1/g, "$2")
        .replace(/[`~]/g, "")
        .replace(/^\s*[-*+]\s+/gm, "")
        .replace(/^\s*\d+\.\s+/gm, "")
        .replace(/\s+/g, " ")
        .trim();
};

const waitForVoices = (synth, timeout = 1000) => {
    const voices = synth.getVoices();

    if (voices.length > 0) {
        return Promise.resolve(voices);
    }

    return new Promise((resolve) => {
        let finished = false;

        const finish = () => {
            if (finished) return;

            finished = true;
            clearTimeout(timer);
            synth.removeEventListener?.("voiceschanged", finish);

            resolve(synth.getVoices());
        };

        const timer = setTimeout(finish, timeout);

        synth.addEventListener?.("voiceschanged", finish);

        // Handle browsers that don't emit voiceschanged.
        if (!synth.addEventListener) {
            setTimeout(finish, 100);
        }
    });
};

export const speakReply = async (text, language = "en") => {
    const synth = getSpeechSynthesis();

    if (!synth) {
        throw new Error("Speech synthesis is not supported by this browser.");
    }

    const readableText = cleanText(text);

    if (!readableText) {
        throw new Error("There is no text available to read aloud.");
    }

    stopSpeaking();

    const lang = String(language || "en")
        .toLowerCase()
        .split("-")[0];

    const locale = LANGUAGE_LOCALES[lang] || LANGUAGE_LOCALES.en;

    const utterance = new SpeechSynthesisUtterance(readableText);

    utterance.lang = locale;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = await waitForVoices(synth);

    // Don't start speaking if another action cancelled this request
    // while the browser was loading its voices.
    if (currentUtterance !== null) {
        return { status: "cancelled" };
    }

    const matchingVoice =
        voices.find(
            (voice) =>
                voice.lang.toLowerCase() === locale.toLowerCase()
        ) ||
        voices.find(
            (voice) =>
                voice.lang.toLowerCase().startsWith(`${lang}-`)
        );

    if (matchingVoice) {
        utterance.voice = matchingVoice;
    }

    return new Promise((resolve, reject) => {
        currentUtterance = utterance;

        let settled = false;

        const finish = (status) => {
            if (settled) return;

            settled = true;

            if (currentUtterance === utterance) {
                currentUtterance = null;
                currentResolve = null;
            }

            resolve({ status });
        };

        utterance.onend = () => {
            finish("completed");
        };

        utterance.onerror = (event) => {
            if (event.error === "canceled" || event.error === "interrupted") {
                finish("cancelled");
                return;
            }

            if (currentUtterance === utterance) {
                currentUtterance = null;
                currentResolve = null;
            }

            if (!settled) {
                settled = true;
                reject(
                    new Error(
                        `Speech playback failed: ${event.error || "unknown error"}`
                    )
                );
            }
        };

        currentResolve = (result) => {
            if (settled) return;

            settled = true;
            resolve(result);
        };

        try {
            synth.speak(utterance);
        } catch (error) {
            currentUtterance = null;
            currentResolve = null;

            if (!settled) {
                settled = true;
                reject(error);
            }
        }
    });
};
