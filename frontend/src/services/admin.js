import api from "./api";

// ===============================
// ADMIN DASHBOARD
// ===============================

export const getAdminDashboard = async () => {
    const response = await api.get("/admin/dashboard");
    return response.data;
};


// ===============================
// ALERTS
// ===============================

export const getAllAlerts = async () => {
    const response = await api.get("/admin/alerts");
    return response.data;
};


// ===============================
// EMERGENCIES
// ===============================

export const getAllEmergencies = async () => {
    const response = await api.get("/admin/emergencies");
    return response.data;
};


// ===============================
// USERS
// ===============================

export const getAllUsers = async () => {
    const response = await api.get("/admin/users");
    return response.data;
};


// ===============================
// REPORTS
// ===============================

export const getAllReports = async () => {
    const response = await api.get("/admin/reports");
    return response.data;
};


// ===============================
// UPDATE EMERGENCY
// ===============================

export const updateEmergencyStatus = async (emergencyId, data) => {
    const response = await api.put(
        `/admin/emergencies/${emergencyId}`,
        data
    );

    return response.data;
};


// ===============================
// SEND ALERT TO USER
// ===============================

export const sendAlertToUser = async (userId, alertData) => {
    const response = await api.post(
        `/admin/users/${userId}/alerts`,
        alertData
    );

    return response.data;
};