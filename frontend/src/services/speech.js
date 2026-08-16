import api from "./api";

export const transcribeAudio = async (audioBlob) => {
    const formData = new FormData();

    formData.append(
        "audio",
        audioBlob,
        "recording.webm"
    );

    const response = await api.post(
        "/speech/",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

