import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    LogIn,
    User,
    LogOut,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";
import logo from "../../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleFeaturesClick = (event) => {
        event.preventDefault();

        if (window.location.pathname === "/") {
            document.getElementById("features")?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            navigate("/#features");
        }
    };

    return (
        <header className="navbar">

            <div className="navbar-left">

                <Link
                    to="/"
                    className="navbar-logo"
                    aria-label="Safe Guardian Home"
                >
                    <img
                        src={logo}
                        alt="Safe Guardian Logo"
                        className="navbar-logo-image"
                    />

                    <span className="navbar-logo-text">
                        <span className="logo-safe">Safe</span>{" "}
                        <span className="logo-guardian">Guardian</span>
                    </span>
                </Link>

            </div>

            <nav className="navbar-links">

                <Link to="/">
                    Home
                </Link>

                <a
                    href="/#features"
                    onClick={handleFeaturesClick}
                >
                    Features
                </a>

                <Link to="/learn">
                    Safety
                </Link>

            </nav>

            <div className="navbar-right">

                {!user ? (
                    <div className="auth-actions">

                        <button
                            className="login-button"
                            onClick={() => navigate("/login")}
                        >
                            <LogIn size={18} />
                            <span>Login</span>
                        </button>

                        <button
                            className="register-button"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </button>

                    </div>
                ) : (
                    <div className="user-actions">

                        <button
                            className="profile-button"
                            onClick={() => navigate("/profile")}
                        >
                            <User size={19} />

                            <span>
                                {user.name || user.email || "Profile"}
                            </span>
                        </button>

                        <button
                            className="logout-button"
                            onClick={handleLogout}
                            title="Logout"
                        >
                            <LogOut size={18} />
                            <span>Logout</span>
                        </button>

                    </div>
                )}

            </div>

        </header>
    );
};

export default Navbar;