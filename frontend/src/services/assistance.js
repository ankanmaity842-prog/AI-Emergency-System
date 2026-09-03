import api from "./api";

export const getNearbyAssistance = async (
    latitude,
    longitude,
    radius = 10
) => {

    const response = await api.get(
        "/assistance/nearby",
        {
            params: {
                latitude,
                longitude,
                radius,
            },
        }
    );

    return response.data;
};