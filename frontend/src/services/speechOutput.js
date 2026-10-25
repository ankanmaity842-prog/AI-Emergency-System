
const LANGUAGE_LOCALES = {
    en: "en-IN",
    hi: "hi-IN",
    bn: "bn-IN",
};

export const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
};

export const speakReply = (text, language = "en") => {
    if (!("speechSynthesis" in window) || !text) {
        return false;
    }

    const locale =
        LANGUAGE_LOCALES[language] ||
        LANGUAGE_LOCALES.en;

    // Strip common Markdown formatting before reading the reply.
    const readableText = String(text)
        .replace(/```[\s\S]*?```/g, " Code block omitted. ")
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[#*_>`~-]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    if (!readableText) return false;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(readableText);
    utterance.lang = locale;
    utterance.rate = 1;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const requestedLanguage = locale.toLowerCase();

    const matchingVoice = voices.find(
        (voice) => voice.lang.toLowerCase() === requestedLanguage
    );

    if (matchingVoice) {
        utterance.voice = matchingVoice;
    }

    window.speechSynthesis.speak(utterance);
    return true;
};
