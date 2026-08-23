import React from "react";
import {
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
    const location = useLocation();

    const {
        user,
        loading,
        isAuthenticated,
    } = useAuthContext();

    if (loading) {
        return (
            <div className="auth-loading">
                Checking authentication...
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    if (
        allowedRoles &&
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user?.role)
    ) {
        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;