import api from "./api";

export const getAlerts = async () => {
    const response = await api.get("/alerts/");
    return response.data;
};

export const markAlertAsRead = async (alertId) => {
    const response = await api.put(
        `/alerts/${alertId}/read`
    );

    return response.data;
};