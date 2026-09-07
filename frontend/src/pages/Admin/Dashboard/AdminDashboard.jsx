import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getAdminDashboard } from "../../../services/admin";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadDashboard = async () => {
            try {
                const data = await getAdminDashboard();
                setDashboard(data);
            } catch (error) {
                console.error(
                    "Failed to load admin dashboard:",
                    error
                );

                setError(
                    error.response?.data?.detail ||
                    "Failed to load dashboard."
                );
            } finally {
                setLoading(false);
            }
        };

        loadDashboard();
    }, []);

    const pending =
        dashboard?.pending ??
        dashboard?.pending_count ??
        0;

    const active =
        dashboard?.active ??
        dashboard?.active_count ??
        0;

    const resolved =
        dashboard?.resolved ??
        dashboard?.resolved_count ??
        0;

    if (loading) {
        return (
            <div className="admin-layout">
                <div className="admin-body">
                    <Sidebar />

                    <main className="admin-content">
                        <p>Loading dashboard...</p>
                    </main>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-layout">
            <div className="admin-body">
                <Sidebar />

                <main className="admin-content">
                    <h1>Admin Dashboard</h1>

                    <p>
                        Monitor emergencies and coordinate assistance.
                    </p>

                    {error && (
                        <div className="empty-state">
                            {error}
                        </div>
                    )}

                    <div className="admin-stats">
                        <div className="stat-card">
                            <h3>Pending</h3>
                            <strong>{pending}</strong>
                        </div>

                        <div className="stat-card">
                            <h3>Active</h3>
                            <strong>{active}</strong>
                        </div>

                        <div className="stat-card">
                            <h3>Resolved</h3>
                            <strong>{resolved}</strong>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;

