import api from "./api";

/**
 * Get reports for the currently authenticated user
 */
export const getReports = async () => {
  const response = await api.get("/reports/");
  return response.data;
};

export const getReportById = async (reportId) => {
  const response = await api.get(`/reports/${reportId}`);
  return response.data;
};

/**
 * Create a new report
 */
export const createReport = async (reportData) => {
  const response = await api.post("/reports/", reportData);
  return response.data;
};

/**
 * Delete a report
 */
export const deleteReport = async (reportId) => {
  const response = await api.delete(`/reports/${reportId}`);
  return response.data;
};