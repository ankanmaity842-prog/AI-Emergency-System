import { useState } from "react";
import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import {
    House,
    UserRound,
    ShieldCheck,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";

import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { login } = useAuth();

    const [loginType, setLoginType] = useState("user");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError("");
    };

    const handleLoginTypeChange = (type) => {
        setLoginType(type);
        setError("");

        setFormData({
            email: "",
            password: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const user = await login(
                formData.email,
                formData.password
            );

            if (!user) {
                throw new Error(
                    "Unable to retrieve user information"
                );
            }

            if (
                loginType === "admin" &&
                user.role !== "admin"
            ) {
                throw new Error(
                    "This account does not have administrator access."
                );
            }

            if (
                loginType === "user" &&
                user.role === "admin"
            ) {
                throw new Error(
                    "Please use Admin Login to access this account."
                );
            }

            if (user.role === "admin") {
                navigate("/admin", { replace: true });
                return;
            }

            const requestedPath =
                location.state?.from?.pathname;

            if (requestedPath) {
                navigate(requestedPath, {
                    replace: true,
                });
            } else {
                navigate("/dashboard", {
                    replace: true,
                });
            }

        } catch (err) {
            const detail =
                err?.response?.data?.detail;

            if (Array.isArray(detail)) {
                setError(
                    detail
                        .map((item) => item.msg)
                        .join(", ")
                );
            } else if (
                typeof detail === "string"
            ) {
                setError(detail);
            } else {
                setError(
                    err?.message ||
                    "Invalid email or password"
                );
            }
        } finally {
            setLoading(false);
        }
    };

    const isAdminLogin = loginType === "admin";

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
                    {isAdminLogin
                        ? "Admin Login"
                        : "Welcome Back"}
                </h1>

                <p className="auth-subtitle">
                    {isAdminLogin
                        ? "Sign in to access the Safe Guardian administration panel"
                        : "Sign in to access Safe Guardian"}
                </p>

                <div className="login-type-selector">

                    <button
                        type="button"
                        className={
                            !isAdminLogin
                                ? "login-type active"
                                : "login-type"
                        }
                        onClick={() =>
                            handleLoginTypeChange("user")
                        }
                    >
                        <UserRound size={17} />
                        <span>User Login</span>
                    </button>

                    <button
                        type="button"
                        className={
                            isAdminLogin
                                ? "login-type admin active"
                                : "login-type admin"
                        }
                        onClick={() =>
                            handleLoginTypeChange("admin")
                        }
                    >
                        <ShieldCheck size={17} />
                        <span>Admin Login</span>
                    </button>

                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label htmlFor="email">
                            {isAdminLogin
                                ? "Admin Email"
                                : "Email"}
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={
                                isAdminLogin
                                    ? "Enter admin email"
                                    : "Enter your email"
                            }
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
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className={
                            isAdminLogin
                                ? "auth-button admin-button"
                                : "auth-button"
                        }
                        disabled={loading}
                    >
                        {loading
                            ? "Signing in..."
                            : isAdminLogin
                                ? "Sign In as Admin"
                                : "Sign In"}
                    </button>

                </form>

                {!isAdminLogin && (
                    <p className="auth-footer">
                        Don't have an account?{" "}
                        <Link to="/register">
                            Create Account
                        </Link>
                    </p>
                )}

                {isAdminLogin && (
                    <p className="admin-login-note">
                        <ShieldCheck size={14} />
                        Administrator access is restricted
                        to authorized accounts.
                    </p>
                )}

            </div>

        </div>
    );
};

export default Login;