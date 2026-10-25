import api from "./api";

export const transcribeAudio = async (
    audioBlob,
    imageContext = null,
    language = "auto"
) => {
    const formData = new FormData();

    const extension = audioBlob.type.includes("mp4") ? "m4a" : "webm";

    formData.append("audio", audioBlob, `recording.${extension}`);
    formData.append("language", language);

    if (imageContext) {
        formData.append("context", JSON.stringify(imageContext));
    }

    const response = await api.post("/chatbot/voice", formData);
    return response.data;
};


