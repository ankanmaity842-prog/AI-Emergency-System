import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    loginUser,
    registerUser,
    getCurrentUser,
    logoutUser,
} from "../services/auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");

        try {
            return savedUser ? JSON.parse(savedUser) : null;
        } catch {
            localStorage.removeItem("user");
            return null;
        }
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem("access_token");

            if (!token) {
                setUser(null);
                localStorage.removeItem("user");
                setLoading(false);
                return;
            }

            try {
                const currentUser = await getCurrentUser();

                setUser(currentUser);

                localStorage.setItem(
                    "user",
                    JSON.stringify(currentUser)
                );
            } catch (error) {
                console.error(
                    "Authentication initialization failed:",
                    error
                );

                logoutUser();
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const login = async (email, password) => {
        try {
            await loginUser({
                email,
                password,
            });

            const currentUser = await getCurrentUser();

            setUser(currentUser);

            localStorage.setItem(
                "user",
                JSON.stringify(currentUser)
            );

            return currentUser;
        } catch (error) {
            console.error("Login failed:", error);

            logoutUser();
            setUser(null);

            throw error;
        }
    };

    const register = async (userData) => {
        return await registerUser(userData);
    };

    const logout = () => {
        logoutUser();
        setUser(null);
    };

    const value = {
        user,
        loading,
        isAuthenticated: Boolean(user),
        isAdmin: user?.role === "admin",
        login,
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthContext must be used inside AuthProvider"
        );
    }

    return context;
};

export default AuthContext;