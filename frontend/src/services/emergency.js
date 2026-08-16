import api from "./api";

export const createEmergency = async (emergencyData) => {
    const response = await api.post(
        "/emergency/",
        emergencyData
    );

    return response.data;
};

export const getMyEmergencies = async () => {
    const response = await api.get("/emergency/");
    return response.data;
};

export const getEmergencyById = async (emergencyId) => {
    const response = await api.get(
        `/emergency/${emergencyId}`
    );

    return response.data;
};

export const cancelEmergency = async (emergencyId) => {
    const response = await api.put(
        `/emergency/${emergencyId}/cancel`
    );

    return response.data;
};