import api from "./api";

export const uploadImage = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/detector/",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};

export const analyzeImage = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/detector/analyze",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};