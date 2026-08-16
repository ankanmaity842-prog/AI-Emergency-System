import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    House
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (formData.password.length < 8) {
            setError(
                "Password must contain at least 8 characters."
            );
            return;
        }

        setLoading(true);

        try {
            await register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            setSuccess(
                "Account created successfully. You can now sign in."
            );

            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            setTimeout(() => {
                navigate("/login");
            }, 1200);

        } catch (err) {
            const detail = err?.response?.data?.detail;

            if (Array.isArray(detail)) {
                setError(
                    detail
                        .map((item) => item.msg)
                        .join(", ")
                );
            } else if (typeof detail === "string") {
                setError(detail);
            } else {
                setError(
                    err?.message ||
                    "Unable to create your account."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <button
                   type="button"
                     className="back-home-button"
                      onClick={() => navigate("/")}
>
                      <House size={16} />
                        Back to Home
                </button>

                <div className="auth-logo">
                    <img
                        src="/logo.png"
                        alt="Safe Guardian"
                    />
                </div>

                <h1>
                    Create Account
                </h1>

                <p className="auth-subtitle">
                    Join Safe Guardian and stay prepared
                </p>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="success-message">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label htmlFor="name">
                            Full Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            autoComplete="name"
                            minLength={2}
                            maxLength={100}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            autoComplete="email"
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            autoComplete="new-password"
                            minLength={8}
                            maxLength={128}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>

                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                            minLength={8}
                            maxLength={128}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </button>

                </form>

                <p className="auth-footer">
                    Already have an account?{" "}
                    <Link to="/login">
                        Sign In
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Register;