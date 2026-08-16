import { STORAGE_KEYS } from "./constants";

export const setToken = (token) => {
    if (!token) return;

    localStorage.setItem(
        STORAGE_KEYS.TOKEN,
        token
    );
};

export const getToken = () => {
    return localStorage.getItem(
        STORAGE_KEYS.TOKEN
    );
};

export const removeToken = () => {
    localStorage.removeItem(
        STORAGE_KEYS.TOKEN
    );
};

export const setUser = (user) => {
    if (!user) return;

    localStorage.setItem(
        STORAGE_KEYS.USER,
        JSON.stringify(user)
    );
};

export const getUser = () => {
    const user = localStorage.getItem(
        STORAGE_KEYS.USER
    );

    if (!user) {
        return null;
    }

    try {
        return JSON.parse(user);
    } catch {
        return null;
    }
};

export const removeUser = () => {
    localStorage.removeItem(
        STORAGE_KEYS.USER
    );
};

export const clearStorage = () => {
    removeToken();
    removeUser();
};