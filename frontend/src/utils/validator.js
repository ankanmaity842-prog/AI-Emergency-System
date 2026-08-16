export const isRequired = (value) => {
    return (
        value !== undefined &&
        value !== null &&
        String(value).trim().length > 0
    );
};

export const isValidEmail = (email) => {
    if (!email) return false;

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
};

export const isValidPassword = (password) => {
    return typeof password === "string" && password.length >= 6;
};

export const passwordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
};

export const isValidPhone = (phone) => {
    if (!phone) return false;

    const phoneRegex = /^[0-9]{10}$/;

    return phoneRegex.test(phone);
};

export const validateLogin = (data) => {
    const errors = {};

    if (!isRequired(data.email)) {
        errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
        errors.email = "Enter a valid email address";
    }

    if (!isRequired(data.password)) {
        errors.password = "Password is required";
    }

    return errors;
};

export const validateRegister = (data) => {
    const errors = {};

    if (!isRequired(data.name)) {
        errors.name = "Name is required";
    }

    if (!isRequired(data.email)) {
        errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
        errors.email = "Enter a valid email address";
    }

    if (!isRequired(data.password)) {
        errors.password = "Password is required";
    } else if (!isValidPassword(data.password)) {
        errors.password =
            "Password must contain at least 6 characters";
    }

    if (!passwordsMatch(data.password, data.confirmPassword)) {
        errors.confirmPassword =
            "Passwords do not match";
    }

    return errors;
};

export const validateEmergency = (data) => {
    const errors = {};

    if (!isRequired(data.category)) {
        errors.category = "Emergency category is required";
    }

    if (!isRequired(data.description)) {
        errors.description =
            "Please provide a short description";
    }

    if (!isRequired(data.requirements)) {
        errors.requirements =
            "Please specify what help is required";
    }

    if (!isRequired(data.location)) {
        errors.location =
            "Location is required";
    }

    return errors;
};