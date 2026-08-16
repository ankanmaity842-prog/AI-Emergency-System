import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    AlertTriangle,
    MessageCircle,
    History,
    FileText,
    Bell,
    User,
    X,
    LogOut,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";

import "./Sidebar.css";

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const isAdmin = user?.role === "admin";

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const userLinks = [
        {
            path: "/emergency",
            label: "Emergency",
            icon: AlertTriangle,
        },
        {
            path: "/chat",
            label: "AI Assistant",
            icon: MessageCircle,
        },
        {
            path: "/history",
            label: "History",
            icon: History,
        },
        {
            path: "/reports",
            label: "Reports",
            icon: FileText,
        },
        {
            path: "/notifications",
            label: "Notifications",
            icon: Bell,
        },
        {
            path: "/profile",
            label: "Profile",
            icon: User,
        },
    ];

    const adminLinks = [
        {
            path: "/admin/dashboard",
            label: "Dashboard",
            icon: LayoutDashboard,
        },
        {
            path: "/admin/emergencies",
            label: "Emergencies",
            icon: AlertTriangle,
        },
        {
            path: "/admin/alerts",
            label: "Alerts",
            icon: Bell,
        },
        {
            path: "/admin/users",
            label: "Users",
            icon: User,
        },
        {
            path: "/admin/reports",
            label: "Reports",
            icon: FileText,
        },
    ];

    const links = isAdmin ? adminLinks : userLinks;

    return (
        <>
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={onClose}
                />
            )}

            <aside
                className={`sidebar ${
                    isOpen ? "sidebar-open" : ""
                }`}
            >
                <div className="sidebar-user">
                    <div className="sidebar-avatar">
                        {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>

                    <div className="sidebar-user-info">
                        <strong>
                            {user?.name || "User"}
                        </strong>

                        <span>
                            {isAdmin ? "Administrator" : "User"}
                        </span>
                    </div>

                    <button
                        className="sidebar-close"
                        onClick={onClose}
                        aria-label="Close sidebar"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="sidebar-navigation">
                    <p className="sidebar-section-title">
                        MENU
                    </p>

                    {links.map((link) => {
                        const Icon = link.icon;

                        return (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `sidebar-link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                <Icon size={20} />

                                <span>
                                    {link.label}
                                </span>
                            </NavLink>
                        );
                    })}
                </nav>

                <div className="sidebar-footer">
                    <button
                        className="sidebar-logout"
                        onClick={handleLogout}
                    >
                        <LogOut size={20} />

                        <span>
                            Logout
                        </span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;