
import api from "./api";

export const uploadImage = async (file) => {
    const formData = new FormData();

    // Must match the backend's UploadFile parameter
    formData.append("image", file);

    const response = await api.post(
        "/detector/",
        formData
    );

    return response.data;
};

export const analyzeImage = async (file) => {
    const formData = new FormData();

    // Use "image" here too if /detector/analyze
    // expects the same field name.
    formData.append("image", file);

    const response = await api.post(
        "/detector/analyze",
        formData
    );

    return response.data;
};
