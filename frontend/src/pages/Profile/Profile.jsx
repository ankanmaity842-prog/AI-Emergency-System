import { useEffect, useMemo, useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    ShieldCheck,
    Pencil,
    Save,
    X,
    Siren,
    Clock3,
    CheckCircle2,
    AlertCircle,
    Activity,
    Hash,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";
import { getMyEmergencies } from "../../services/emergency";

import "./Profile.css";

const Profile = () => {
    const { user } = useAuth();

    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [emergencies, setEmergencies] = useState([]);
    const [loadingEmergencies, setLoadingEmergencies] = useState(true);

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        address: user?.address || "",
    });

    useEffect(() => {
        if (!user) {
            return;
        }

        setFormData({
            name: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            address: user.address || "",
        });
    }, [user]);

    useEffect(() => {
        const loadEmergencies = async () => {
            try {
                setLoadingEmergencies(true);

                const data = await getMyEmergencies();

                setEmergencies(
                    Array.isArray(data)
                        ? data
                        : data?.items || data?.emergencies || []
                );
            } catch (err) {
                console.error(
                    "Failed to load emergency history:",
                    err
                );

                setEmergencies([]);
            } finally {
                setLoadingEmergencies(false);
            }
        };

        loadEmergencies();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError("");
        setSuccess("");
    };

    const handleCancel = () => {
        setFormData({
            name: user?.name || "",
            email: user?.email || "",
            phone: user?.phone || "",
            address: user?.address || "",
        });

        setEditing(false);
        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSaving(true);
        setError("");
        setSuccess("");

        try {
            /*
             * Connect this section to your profile update API.
             *
             * Example:
             * await updateProfile({
             *     name: formData.name,
             *     phone: formData.phone,
             *     address: formData.address,
             * });
             */

            localStorage.setItem(
                "user",
                JSON.stringify({
                    ...user,
                    name: formData.name,
                    phone: formData.phone,
                    address: formData.address,
                })
            );

            setSuccess(
                "Your profile details have been updated successfully."
            );

            setEditing(false);
        } catch (err) {
            console.error(
                "Profile update failed:",
                err
            );

            setError(
                err?.response?.data?.detail ||
                "Unable to update your profile. Please try again."
            );
        } finally {
            setSaving(false);
        }
    };

    const getEmergencyId = (emergency) => {
        return (
            emergency?.request_number ||
            emergency?.emergency_number ||
            emergency?.request_id ||
            emergency?.id ||
            "N/A"
        );
    };

    const getEmergencyType = (emergency) => {
        return (
            emergency?.type ||
            emergency?.emergency_type ||
            emergency?.category ||
            emergency?.incident_type ||
            "Emergency"
        );
    };

    const getEmergencyDate = (emergency) => {
        return (
            emergency?.created_at ||
            emergency?.createdAt ||
            emergency?.date ||
            emergency?.timestamp ||
            null
        );
    };

    const getEmergencyStatus = (emergency) => {
        return (
            emergency?.status ||
            "Recorded"
        );
    };

    const formatDate = (date) => {
        if (!date) {
            return "Date unavailable";
        }

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) {
            return date;
        }

        return parsedDate.toLocaleString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }
        );
    };

    const statistics = useMemo(() => {
        const total = emergencies.length;

        const active = emergencies.filter(
            (item) =>
                String(
                    item?.status || ""
                ).toLowerCase() === "active" ||
                String(
                    item?.status || ""
                ).toLowerCase() === "pending"
        ).length;

        const completed = emergencies.filter(
            (item) =>
                String(
                    item?.status || ""
                ).toLowerCase() === "completed" ||
                String(
                    item?.status || ""
                ).toLowerCase() === "resolved"
        ).length;

        return {
            total,
            active,
            completed,
        };
    }, [emergencies]);

    const initials =
        user?.name
            ?.split(" ")
            .map((name) => name[0])
            .join("")
            .substring(0, 2)
            .toUpperCase() || "U";

    return (
        <div className="profile-page">

            <main className="profile-container">

                {/* Header */}

                <div className="profile-header">

                    <div>
                        <span className="profile-label">
                            ACCOUNT CENTER
                        </span>

                        <h1>
                            My Profile
                        </h1>

                        <p>
                            Manage your personal information
                            and track your emergency activity.
                        </p>
                    </div>

                </div>

                {/* Profile Overview */}

                <section className="profile-overview">

                    <div className="profile-identity">

                        <div className="profile-avatar">
                            {initials}
                        </div>

                        <div className="profile-identity-info">

                            <h2>
                                {user?.name || "User"}
                            </h2>

                            <p>
                                <Mail size={15} />
                                {user?.email || "Email unavailable"}
                            </p>

                            <span className="profile-role">
                                <ShieldCheck size={14} />
                                {user?.role === "admin"
                                    ? "Administrator"
                                    : "Registered User"}
                            </span>

                        </div>

                    </div>

                    {!editing && (
                        <button
                            className="edit-profile-button"
                            onClick={() => {
                                setEditing(true);
                                setSuccess("");
                            }}
                        >
                            <Pencil size={17} />
                            Edit Profile
                        </button>
                    )}

                </section>

                {/* Statistics */}

                <section className="profile-statistics">

                    <div className="stat-card">

                        <div className="stat-icon blue">
                            <Activity size={21} />
                        </div>

                        <div>
                            <span>
                                Total Incidents
                            </span>

                            <strong>
                                {statistics.total}
                            </strong>
                        </div>

                    </div>

                    <div className="stat-card">

                        <div className="stat-icon orange">
                            <Siren size={21} />
                        </div>

                        <div>
                            <span>
                                Active Requests
                            </span>

                            <strong>
                                {statistics.active}
                            </strong>
                        </div>

                    </div>

                    <div className="stat-card">

                        <div className="stat-icon green">
                            <CheckCircle2 size={21} />
                        </div>

                        <div>
                            <span>
                                Resolved
                            </span>

                            <strong>
                                {statistics.completed}
                            </strong>
                        </div>

                    </div>

                </section>

                {/* Personal Details */}

                <section className="profile-section">

                    <div className="section-title">

                        <div>
                            <h2>
                                Personal Information
                            </h2>

                            <p>
                                Keep your emergency contact
                                information up to date.
                            </p>
                        </div>

                    </div>

                    {error && (
                        <div className="profile-message error">
                            <AlertCircle size={17} />
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="profile-message success">
                            <CheckCircle2 size={17} />
                            {success}
                        </div>
                    )}

                    <form
                        className="profile-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="profile-field">

                            <label>
                                <User size={15} />
                                Full Name
                            </label>

                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={!editing}
                                placeholder="Enter your name"
                            />

                        </div>

                        <div className="profile-field">

                            <label>
                                <Mail size={15} />
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                disabled
                            />

                            <small>
                                Email cannot be changed from
                                the profile page.
                            </small>

                        </div>

                        <div className="profile-field">

                            <label>
                                <Phone size={15} />
                                Phone Number
                            </label>

                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={!editing}
                                placeholder="Enter phone number"
                            />

                        </div>

                        <div className="profile-field">

                            <label>
                                <CalendarDays size={15} />
                                Account Role
                            </label>

                            <input
                                value={
                                    user?.role === "admin"
                                        ? "Administrator"
                                        : "Registered User"
                                }
                                disabled
                            />

                        </div>

                        <div className="profile-field full">

                            <label>
                                <MapPin size={15} />
                                Address
                            </label>

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                disabled={!editing}
                                placeholder="Enter your current address"
                            />

                        </div>

                        {editing && (
                            <div className="profile-form-actions">

                                <button
                                    type="button"
                                    className="cancel-button"
                                    onClick={handleCancel}
                                >
                                    <X size={17} />
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-profile-button"
                                    disabled={saving}
                                >
                                    <Save size={17} />

                                    {saving
                                        ? "Saving..."
                                        : "Save Changes"}
                                </button>

                            </div>
                        )}

                    </form>

                </section>

                {/* Emergency Activity */}

                <section className="profile-section">

                    <div className="section-title">

                        <div>
                            <h2>
                                Emergency Activity
                            </h2>

                            <p>
                                Track your previous emergency
                                requests and incident history.
                            </p>
                        </div>

                        <div className="incident-count">
                            {statistics.total}{" "}
                            {statistics.total === 1
                                ? "Incident"
                                : "Incidents"}
                        </div>

                    </div>

                    {loadingEmergencies ? (
                        <div className="empty-history">
                            <div className="history-loader"></div>
                            <p>
                                Loading your emergency activity...
                            </p>
                        </div>
                    ) : emergencies.length === 0 ? (
                        <div className="empty-history">

                            <div className="empty-history-icon">
                                <Siren size={27} />
                            </div>

                            <h3>
                                No emergency incidents yet
                            </h3>

                            <p>
                                Your emergency requests will
                                appear here once you use the
                                emergency response service.
                            </p>

                        </div>
                    ) : (
                        <div className="incident-list">

                            {emergencies.map(
                                (emergency, index) => (
                                    <div
                                        className="incident-card"
                                        key={
                                            emergency?.id ||
                                            emergency?.request_id ||
                                            index
                                        }
                                    >

                                        <div className="incident-number">

                                            <span>
                                                REQUEST
                                            </span>

                                            <strong>
                                                #{getEmergencyId(
                                                    emergency
                                                )}
                                            </strong>

                                        </div>

                                        <div className="incident-info">

                                            <div className="incident-main">

                                                <Siren size={18} />

                                                <div>
                                                    <h3>
                                                        {getEmergencyType(
                                                            emergency
                                                        )}
                                                    </h3>

                                                    <span>
                                                        Emergency
                                                        Request
                                                    </span>
                                                </div>

                                            </div>

                                            <div className="incident-meta">

                                                <span>
                                                    <Hash size={15} />
                                                    {getEmergencyId(
                                                        emergency
                                                    )}
                                                </span>

                                                <span>
                                                    <Clock3 size={15} />
                                                    {formatDate(
                                                        getEmergencyDate(
                                                            emergency
                                                        )
                                                    )}
                                                </span>

                                            </div>

                                        </div>

                                        <div
                                            className={`incident-status ${String(
                                                getEmergencyStatus(
                                                    emergency
                                                )
                                            ).toLowerCase()}`}
                                        >
                                            {getEmergencyStatus(
                                                emergency
                                            )}
                                        </div>

                                    </div>
                                )
                            )}

                        </div>
                    )}

                </section>

            </main>

        </div>
    );
};

export default Profile;