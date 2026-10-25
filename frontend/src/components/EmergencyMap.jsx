
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Circle,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createMarkerIcon = () =>
    new L.Icon({
        iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

const userIcon = createMarkerIcon();
const facilityIcon = createMarkerIcon();

const getFacilityType = (type = "") => {
    const normalized = String(type).toLowerCase();

    if (normalized.includes("police")) {
        return "Police Station";
    }

    if (
        normalized.includes("hospital") ||
        normalized.includes("clinic") ||
        normalized.includes("health")
    ) {
        return "Hospital / Clinic";
    }

    if (
        normalized.includes("fire") ||
        normalized.includes("fire_station")
    ) {
        return "Fire Station";
    }

    if (
        normalized.includes("shelter") ||
        normalized.includes("safety") ||
        normalized.includes("social_facility")
    ) {
        return "Safety Centre / Shelter";
    }

    return "Emergency Facility";
};

const EmergencyMap = ({
    latitude,
    longitude,
    radius = 5000,
    facilities = [],
}) => {
    const lat = Number(latitude);
    const lon = Number(longitude);

    const validLocation =
        latitude !== null &&
        latitude !== undefined &&
        longitude !== null &&
        longitude !== undefined &&
        Number.isFinite(lat) &&
        Number.isFinite(lon) &&
        lat >= -90 &&
        lat <= 90 &&
        lon >= -180 &&
        lon <= 180;

    if (!validLocation) {
        return (
            <div className="emergency-map-empty">
                Location unavailable. Enable location access to display
                your position and nearby emergency facilities.
            </div>
        );
    }

    const center = [lat, lon];

    const validFacilities = Array.isArray(facilities)
        ? facilities
        : [];

    return (
        <div className="emergency-map">
            <MapContainer
                center={center}
                zoom={14}
                scrollWheelZoom={true}
                style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "12px",
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* User's current location */}
                <Marker position={center} icon={userIcon}>
                    <Popup>
                        <strong>Your Location</strong>
                        <br />
                        {lat.toFixed(6)}, {lon.toFixed(6)}
                    </Popup>
                </Marker>

                {/* Nearby search radius, in meters */}
                <Circle
                    center={center}
                    radius={radius}
                    pathOptions={{
                        color: "#2563eb",
                        fillColor: "#3b82f6",
                        fillOpacity: 0.08,
                    }}
                />

                {/* Nearby emergency facilities */}
                {validFacilities.map((facility, index) => {
                    const facilityLat = Number(facility?.latitude);
                    const facilityLon = Number(facility?.longitude);

                    const validCoordinates =
                        facility?.latitude !== null &&
                        facility?.latitude !== undefined &&
                        facility?.longitude !== null &&
                        facility?.longitude !== undefined &&
                        Number.isFinite(facilityLat) &&
                        Number.isFinite(facilityLon) &&
                        facilityLat >= -90 &&
                        facilityLat <= 90 &&
                        facilityLon >= -180 &&
                        facilityLon <= 180;

                    if (!validCoordinates) {
                        return null;
                    }

                    const name =
                        facility.name || "Emergency Facility";

                    const type = getFacilityType(facility.type);

                    const distance =
                        facility.distance_km ?? facility.distance;

                    const directionsUrl =
                        `https://www.google.com/maps/dir/?api=1&destination=${facilityLat},${facilityLon}`;

                    const mapsUrl =
                        `https://www.google.com/maps/search/?api=1&query=${facilityLat},${facilityLon}`;

                    const phone = facility.phone
                        ? String(facility.phone).trim()
                        : "";

                    const website = facility.website
                        ? String(facility.website).trim()
                        : "";

                    return (
                        <Marker
                            key={
                                facility.id ??
                                `${facilityLat}-${facilityLon}-${index}`
                            }
                            position={[facilityLat, facilityLon]}
                            icon={facilityIcon}
                        >
                            <Popup>
                                <div className="facility-popup">
                                    <strong>{name}</strong>

                                    <div className="facility-popup-type">
                                        {type}
                                    </div>

                                    {distance !== null &&
                                        distance !== undefined &&
                                        Number.isFinite(Number(distance)) && (
                                            <p>
                                                <strong>Distance:</strong>{" "}
                                                {Number(distance).toFixed(2)} km
                                            </p>
                                        )}

                                    {facility.address && (
                                        <p>
                                            <strong>Address:</strong>{" "}
                                            {facility.address}
                                        </p>
                                    )}

                                    {phone && (
                                        <p>
                                            <strong>Phone:</strong>{" "}
                                            <a href={`tel:${phone}`}>
                                                {phone}
                                            </a>
                                        </p>
                                    )}

                                    {facility.opening_hours && (
                                        <p>
                                            <strong>Hours:</strong>{" "}
                                            {facility.opening_hours}
                                        </p>
                                    )}

                                    <div className="facility-popup-actions">
                                        <a
                                            href={directionsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Get Directions
                                        </a>

                                        {website && (
                                            <a
                                                href={website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Website
                                            </a>
                                        )}

                                        <a
                                            href={mapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View on Maps
                                        </a>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
};

export default EmergencyMap;
