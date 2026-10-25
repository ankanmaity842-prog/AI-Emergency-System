
import api from "./api";

export const transcribeAudio = async (
    audioBlob,
    context = null,
    language = "auto"
) => {
    if (!audioBlob || audioBlob.size === 0) {
        throw new Error("No audio was recorded. Please try again.");
    }

    const formData = new FormData();

    const extension = audioBlob.type.includes("mp4")
        ? "m4a"
        : audioBlob.type.includes("ogg")
            ? "ogg"
            : audioBlob.type.includes("wav")
                ? "wav"
                : "webm";

    formData.append("audio", audioBlob, `recording.${extension}`);
    formData.append("language", language || "auto");

    if (context) {
        formData.append("context", JSON.stringify(context));
    }

    const response = await api.post("/chatbot/voice", formData);

    return response.data;
};



