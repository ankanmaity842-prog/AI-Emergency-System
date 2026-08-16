import api from "./api";

export const sendChatMessage = async (
    message,
    language = "auto"
) => {
    const response = await api.post(
        "/chatbot/",
        {
            message,
            language,
        }
    );

    return response.data;
};

export const clearChatSession = async () => {
    const response = await api.post(
        "/chatbot/reset"
    );

    return response.data;
};

export const getChatHistory = async () => {
    const response = await api.get(
        "/chatbot/history"
    );

    return response.data;
};