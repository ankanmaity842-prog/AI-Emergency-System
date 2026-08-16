
import React, { useEffect, useState } from "react";
import "./NotificationBell.css";

import AlertCard from "../AlertCard/AlertCard";

import {
    getAlerts,
    markAlertAsRead,
} from "../../services/alerts";

const NotificationBell = () => {
    const [alerts, setAlerts] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadAlerts = async () => {
        try {
            setLoading(true);

            const data = await getAlerts();

            setAlerts(
                Array.isArray(data) ? data : []
            );
        } catch (error) {
            console.error(
                "Failed to load alerts:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAlerts();

        // Refresh alerts every 30 seconds
        const interval = setInterval(
            loadAlerts,
            30000
        );

        return () => clearInterval(interval);
    }, []);

    const unreadCount = alerts.filter(
        (alert) => !alert.is_read
    ).length;

    const handleRead = async (alert) => {
        if (alert.is_read) {
            return;
        }

        try {
            await markAlertAsRead(alert.id);

            setAlerts((previousAlerts) =>
                previousAlerts.map((item) =>
                    item.id === alert.id
                        ? {
                              ...item,
                              is_read: true,
                          }
                        : item
                )
            );
        } catch (error) {
            console.error(
                "Failed to mark alert as read:",
                error
            );
        }
    };

    return (
        <div className="notification-container">
            <button
                className="notification-button"
                onClick={() => setOpen(!open)}
            >
                🔔

                {unreadCount > 0 && (
                    <span className="notification-badge">
                        {unreadCount > 99
                            ? "99+"
                            : unreadCount}
                    </span>
                )}
            </button>

            {open && (
                <div className="notification-dropdown">
                    <div className="notification-header">
                        <h3>Notifications</h3>

                        <span>
                            {unreadCount} unread
                        </span>
                    </div>

                    <div className="notification-list">
                        {loading && (
                            <p className="notification-message">
                                Loading...
                            </p>
                        )}

                        {!loading &&
                            alerts.length === 0 && (
                                <p className="notification-message">
                                    No notifications
                                </p>
                            )}

                        {!loading &&
                            alerts.map((alert) => (
                                <AlertCard
                                    key={alert.id}
                                    alert={alert}
                                    onRead={handleRead}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationBell;

