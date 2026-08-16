import React from "react";
import "./LocationCard.css";

const LocationCard = ({
    location,
    onSelect,
}) => {
    if (!location) return null;

    const {
        name,
        type,
        address,
        landmark,
        distance,
        phone,
    } = location;

    const getIcon = () => {
        switch (type?.toLowerCase()) {
            case "hospital":
                return "🏥";

            case "ambulance":
                return "🚑";

            case "pharmacy":
                return "💊";

            case "shelter":
                return "🏠";

            case "police":
                return "👮";

            case "fire":
                return "🚒";

            default:
                return "📍";
        }
    };

    return (
        <div className="location-card">

            <div className="location-icon">
                {getIcon()}
            </div>

            <div className="location-info">

                <h3>{name || "Nearby Location"}</h3>

                {type && (
                    <span className="location-type">
                        {type}
                    </span>
                )}

                {address && (
                    <p>
                        <strong>Address:</strong>{" "}
                        {address}
                    </p>
                )}

                {landmark && (
                    <p>
                        <strong>Landmark:</strong>{" "}
                        {landmark}
                    </p>
                )}

                {distance && (
                    <p>
                        <strong>Distance:</strong>{" "}
                        {distance}
                    </p>
                )}

                {phone && (
                    <p>
                        <strong>Phone:</strong>{" "}
                        {phone}
                    </p>
                )}

                {onSelect && (
                    <button
                        className="location-select-btn"
                        onClick={() => onSelect(location)}
                    >
                        Select
                    </button>
                )}

            </div>

        </div>
    );
};

export default LocationCard;