import api from "./api";

export const getAdminDashboard = async () => {
    const response = await api.get("/admin/dashboard");
    return response.data;
};

export const getAdminAlerts = async () => {
    const response = await api.get("/admin/alerts");
    return response.data;
};

export const getAdminEmergencies = async () => {
    const response = await api.get("/admin/emergencies");
    return response.data;
};

export const getAdminUsers = async () => {
    const response = await api.get("/admin/users");
    return response.data;
};

export const getAdminReports = async () => {
    const response = await api.get("/admin/reports");
    return response.data;
};

export const updateEmergencyStatus = async (emergencyId, data) => {
    const response = await api.put(
        `/admin/emergencies/${emergencyId}`,
        data
    );

    return response.data;
};

export const sendAlertToUser = async (userId, alertData) => {
    const response = await api.post(
        `/admin/users/${userId}/alerts`,
        alertData
    );

    return response.data;
};

