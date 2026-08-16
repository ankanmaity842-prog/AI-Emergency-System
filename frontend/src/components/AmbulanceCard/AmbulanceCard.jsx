import React from "react";
import "./AmbulanceCard.css";

const AmbulanceCard = ({
    ambulance,
    onContact,
    onTrack,
}) => {
    if (!ambulance) {
        return null;
    }

    const {
        ambulance_id,
        driver_name,
        driver_phone,
        vehicle_number,
        status,
        estimated_time,
        hospital_name,
        hospital_address,
    } = ambulance;

    const getStatusClass = () => {
        switch (status?.toLowerCase()) {
            case "available":
                return "status-available";

            case "on the way":
            case "on_way":
                return "status-on-way";

            case "arrived":
                return "status-arrived";

            case "busy":
                return "status-busy";

            default:
                return "status-unknown";
        }
    };

    return (
        <div className="ambulance-card">

            <div className="ambulance-header">
                <div className="ambulance-icon">
                    🚑
                </div>

                <div className="ambulance-title">
                    <h3>Ambulance</h3>

                    <span className={`ambulance-status ${getStatusClass()}`}>
                        {status || "Unknown"}
                    </span>
                </div>
            </div>

            <div className="ambulance-details">

                {ambulance_id && (
                    <div className="detail-row">
                        <span className="detail-label">
                            Ambulance ID
                        </span>

                        <span className="detail-value">
                            #{ambulance_id}
                        </span>
                    </div>
                )}

                {vehicle_number && (
                    <div className="detail-row">
                        <span className="detail-label">
                            Vehicle
                        </span>

                        <span className="detail-value">
                            {vehicle_number}
                        </span>
                    </div>
                )}

                {driver_name && (
                    <div className="detail-row">
                        <span className="detail-label">
                            Driver
                        </span>

                        <span className="detail-value">
                            {driver_name}
                        </span>
                    </div>
                )}

                {driver_phone && (
                    <div className="detail-row">
                        <span className="detail-label">
                            Contact
                        </span>

                        <span className="detail-value">
                            {driver_phone}
                        </span>
                    </div>
                )}

                {estimated_time && (
                    <div className="detail-row eta-row">
                        <span className="detail-label">
                            Estimated Arrival
                        </span>

                        <span className="detail-value eta">
                            {estimated_time}
                        </span>
                    </div>
                )}
            </div>

            {hospital_name && (
                <div className="destination-section">

                    <h4>Destination Hospital</h4>

                    <p className="hospital-name">
                        {hospital_name}
                    </p>

                    {hospital_address && (
                        <p className="hospital-address">
                            {hospital_address}
                        </p>
                    )}

                </div>
            )}

            <div className="ambulance-actions">

                {driver_phone && onContact && (
                    <button
                        className="contact-btn"
                        onClick={() => onContact(driver_phone)}
                    >
                        📞 Contact
                    </button>
                )}

                {onTrack && (
                    <button
                        className="track-btn"
                        onClick={() => onTrack(ambulance)}
                    >
                        📍 Track
                    </button>
                )}

            </div>

        </div>
    );
};

export default AmbulanceCard;