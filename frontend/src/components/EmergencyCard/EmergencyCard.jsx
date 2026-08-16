import React from "react";
import "./EmergencyCard.css";

const EmergencyCard = ({
    emergency,
    onView,
    onCancel,
}) => {
    if (!emergency) return null;

    const {
        id,
        category,
        description,
        location,
        status,
        created_at,
    } = emergency;

    const getStatusClass = () => {
        switch (status?.toLowerCase()) {
            case "pending":
                return "status-pending";

            case "processing":
                return "status-processing";

            case "responding":
                return "status-responding";

            case "resolved":
                return "status-resolved";

            case "cancelled":
                return "status-cancelled";

            default:
                return "status-pending";
        }
    };

    return (
        <div className="emergency-card">

            <div className="emergency-card-header">

                <div>
                    <span className="emergency-label">
                        Emergency #{id}
                    </span>

                    <h3>{category || "Emergency"}</h3>
                </div>

                <span className={`emergency-status ${getStatusClass()}`}>
                    {status || "Pending"}
                </span>

            </div>

            <div className="emergency-card-body">

                <p className="emergency-description">
                    {description || "No description provided."}
                </p>

                {location && (
                    <div className="emergency-location">
                        <span>📍</span>
                        <span>{location}</span>
                    </div>
                )}

                {created_at && (
                    <div className="emergency-time">
                        {new Date(created_at).toLocaleString()}
                    </div>
                )}

            </div>

            <div className="emergency-card-actions">

                {onView && (
                    <button
                        className="btn-view"
                        onClick={() => onView(emergency)}
                    >
                        View Details
                    </button>
                )}

                {onCancel &&
                    status !== "resolved" &&
                    status !== "cancelled" && (
                        <button
                            className="btn-cancel"
                            onClick={() => onCancel(emergency)}
                        >
                            Cancel
                        </button>
                    )}

            </div>

        </div>
    );
};

export default EmergencyCard;