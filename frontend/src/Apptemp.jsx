import React from "react";

import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { EmergencyProvider } from "./context/EmergencyContext";
import { NotificationProvider } from "./context/NotificationContext";

import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <EmergencyProvider>
                    <NotificationProvider>
                        <AppRoutes />
                    </NotificationProvider>
                </EmergencyProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;