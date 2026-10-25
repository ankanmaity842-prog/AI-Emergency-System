import api from "./api";

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await api.post("/detector/", formData);
    return response.data;
};

export const analyzeImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await api.post("/detector/analyze", formData);
    return response.data;
};
