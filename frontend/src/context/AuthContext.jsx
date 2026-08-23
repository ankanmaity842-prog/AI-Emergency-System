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
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /*
     * Restore the authentication session when
     * the application starts or the page is refreshed.
     */
    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem("access_token");

            // No token means user is not logged in
            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                /*
                 * Validate the token with the backend
                 * and retrieve the current user.
                 */
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

                /*
                 * Token is invalid/expired.
                 * Clear the local authentication session.
                 */
                logoutUser();
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    /*
     * Login
     */
    const login = async (email, password) => {
        try {
            /*
             * loginUser() stores the access token.
             */
            await loginUser({
                email,
                password,
            });

            /*
             * Retrieve authenticated user.
             */
            const currentUser = await getCurrentUser();

            setUser(currentUser);

            localStorage.setItem(
                "user",
                JSON.stringify(currentUser)
            );

            return currentUser;
        } catch (error) {
            console.error(
                "Login failed:",
                error
            );

            logoutUser();
            setUser(null);

            throw error;
        }
    };

    /*
     * Register
     */
    const register = async (userData) => {
        return await registerUser(userData);
    };

    /*
     * Logout
     */
    const logout = () => {
        logoutUser();
        setUser(null);
    };

    const value = {
        user,
        loading,

        /*
         * Single source of truth for authentication.
         */
        isAuthenticated: !!user,

        /*
         * Role-based authentication.
         */
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