import React from "react";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import { useAuth } from "../../hooks/useAuth";

import "./AppLayout.css";

const AppLayout = ({ children }) => {
    const { user } = useAuth();

    const isLoggedIn = Boolean(user);

    return (
        <div className="app-layout">
            <Navbar />

            {isLoggedIn && (
                <Sidebar />
            )}

            <main
                className={
                    isLoggedIn
                        ? "app-main app-main-with-sidebar"
                        : "app-main"
                }
            >
                {children}
            </main>
        </div>
    );
};

export default AppLayout;