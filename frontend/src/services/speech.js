
import api from "./api";

export const transcribeAudio = async (audioBlob) => {
    const formData = new FormData();

    formData.append(
        "audio",
        audioBlob,
        "recording.webm"
    );

    const response = await api.post(
        "/chatbot/voice",
        formData
    );

    return response.data;
};


