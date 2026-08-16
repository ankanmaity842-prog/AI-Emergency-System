import api from "./api";

export const getEmergencyHistory = async () => {
    const response = await api.get(
        "/history/"
    );

    return response.data;
};

export const getHistoryById = async (historyId) => {
    const response = await api.get(
        `/history/${historyId}`
    );

    return response.data;
};