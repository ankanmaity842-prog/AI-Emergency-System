import React from "react";
import "./AlertCard.css";

const AlertCard = ({
    alert,
    onRead,
}) => {
    if (!alert) return null;

    const {
        id,
        title,
        message,
        type,
        is_read,
        created_at,
    } = alert;

    const getTypeClass = () => {
        switch (type?.toLowerCase()) {
            case "emergency":
                return "alert-emergency";

            case "medical":
                return "alert-medical";

            case "ambulance":
                return "alert-ambulance";

            case "hospital":
                return "alert-hospital";

            case "disaster":
                return "alert-disaster";

            case "shelter":
                return "alert-shelter";

            default:
                return "alert-general";
        }
    };

    return (
        <div
            className={`alert-card ${!is_read ? "unread" : ""}`}
            onClick={() => onRead && onRead(alert)}
        >

            <div className={`alert-icon ${getTypeClass()}`}>
                🔔
            </div>

            <div className="alert-content">

                <div className="alert-header">

                    <h4>
                        {title || "Emergency Alert"}
                    </h4>

                    {!is_read && (
                        <span className="unread-dot"></span>
                    )}

                </div>

                <p>
                    {message || "You have a new emergency notification."}
                </p>

                {created_at && (
                    <span className="alert-time">
                        {new Date(created_at).toLocaleString()}
                    </span>
                )}

            </div>

        </div>
    );
};

export default AlertCard;