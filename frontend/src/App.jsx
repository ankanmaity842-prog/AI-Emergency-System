import React from "react";

import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { EmergencyProvider } from "./context/EmergencyContext";
import { NotificationProvider } from "./context/NotificationContext";
import { LocationProvider } from "./context/LocationContext";

import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <EmergencyProvider>
                    <NotificationProvider>
                        <LocationProvider>
                            <AppRoutes />
                        </LocationProvider>
                    </NotificationProvider>
                </EmergencyProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;