import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getAllAlerts } from "../../../services/admin";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getAllAlerts();
                setAlerts(data || []);
            } catch (error) {
                console.error("Failed to load admin alerts:", error);
            }
        };

        loadData();
    }, []);

    const pending = alerts.filter(
        (alert) => alert.status === "pending"
    ).length;

    const active = alerts.filter(
        (alert) => alert.status === "active"
    ).length;

    const resolved = alerts.filter(
        (alert) => alert.status === "resolved"
    ).length;

    return (
        <div className="admin-layout">

            <div className="admin-body">
                <Sidebar />

                <main className="admin-content">
                    <h1>Admin Dashboard</h1>

                    <p>
                        Monitor emergencies and coordinate assistance.
                    </p>

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