export const formatDate = (date) => {
    if (!date) return "N/A";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "N/A";
    }

    return parsedDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
};

export const formatDateTime = (date) => {
    if (!date) return "N/A";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "N/A";
    }

    return parsedDate.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};

export const formatStatus = (status) => {
    if (!status) return "Unknown";

    return status
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const formatCategory = (category) => {
    if (!category) return "Unknown";

    return category
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const truncateText = (text, maxLength = 100) => {
    if (!text) return "";

    if (text.length <= maxLength) {
        return text;
    }

    return `${text.substring(0, maxLength)}...`;
};

export const formatLocation = (location) => {
    if (!location) {
        return "Location unavailable";
    }

    if (typeof location === "string") {
        return location;
    }

    const parts = [
        location.address,
        location.landmark,
        location.city,
        location.district,
        location.state,
        location.pincode
    ];

    return parts
        .filter(Boolean)
        .join(", ");
};