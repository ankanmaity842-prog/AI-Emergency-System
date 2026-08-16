import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const ProtectedRoute = ({ allowedRoles }) => {
    const location = useLocation();

    const token = localStorage.getItem("access_token");
    const user = JSON.parse(localStorage.getItem("user") || "null");

    // User is not logged in
    if (!token) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    // Check role if allowedRoles is provided
    if (
        allowedRoles &&
        allowedRoles.length > 0 &&
        (!user || !allowedRoles.includes(user.role))
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