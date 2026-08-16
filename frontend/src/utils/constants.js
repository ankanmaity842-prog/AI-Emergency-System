// Application
export const APP_NAME = "Safe Guardian";

export const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

// Emergency categories
export const EMERGENCY_CATEGORIES = [
    {
        value: "medical",
        label: "Medical Emergency"
    },
    {
        value: "accident",
        label: "Accident"
    },
    {
        value: "fire",
        label: "Fire"
    },
    {
        value: "disaster",
        label: "Natural Disaster"
    },
    {
        value: "other",
        label: "Other Emergency"
    }
];

// Emergency priorities
export const EMERGENCY_PRIORITIES = [
    {
        value: "low",
        label: "Low"
    },
    {
        value: "medium",
        label: "Medium"
    },
    {
        value: "high",
        label: "High"
    },
    {
        value: "critical",
        label: "Critical"
    }
];

// Emergency status
export const EMERGENCY_STATUS = {
    PENDING: "pending",
    PROCESSING: "processing",
    RESPONDED: "responded",
    RESOLVED: "resolved",
    CANCELLED: "cancelled"
};

// Alert status
export const ALERT_STATUS = {
    UNREAD: "unread",
    READ: "read",
    RESOLVED: "resolved"
};

// User roles
export const USER_ROLES = {
    USER: "user",
    ADMIN: "admin"
};

// Local storage keys
export const STORAGE_KEYS = {
    TOKEN: "safe_guardian_token",
    USER: "safe_guardian_user"
};