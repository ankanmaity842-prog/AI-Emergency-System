import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Circle
} from "react-leaflet";

import L from "leaflet";

import {
    MapPin,
    ShieldAlert,
    Hospital,
    Flame
} from "lucide-react";

import "leaflet/dist/leaflet.css";


// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});


const getFacilityIcon = (type) => {

    if (type === "hospital") {
        return "🏥";
    }

    if (type === "police") {
        return "👮";
    }

    if (type === "fire_station") {
        return "🚒";
    }

    if (type === "safety_centre") {
        return "🛡️";
    }

    return "📍";
};


function EmergencyMap({
    latitude,
    longitude,
    facilities = []
}) {

    if (
        latitude === null ||
        latitude === undefined ||
        longitude === null ||
        longitude === undefined
    ) {
        return (
            <div className="emergency-map-empty">
                <MapPin size={28} />

                <p>
                    Location is not available.
                </p>
            </div>
        );
    }


    return (
        <div className="emergency-map">

            <MapContainer
                center={[
                    latitude,
                    longitude
                ]}
                zoom={15}
                scrollWheelZoom={true}
                style={{
                    width: "100%",
                    height: "100%"
                }}
            >

                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {/* User location */}

                <Marker
                    position={[
                        latitude,
                        longitude
                    ]}
                >
                    <Popup>
                        <strong>
                            Your Location
                        </strong>

                        <br />

                        Emergency location
                    </Popup>
                </Marker>


                <Circle
                    center={[
                        latitude,
                        longitude
                    ]}
                    radius={100}
                    pathOptions={{
                        color: "#2563eb",
                        fillColor: "#2563eb",
                        fillOpacity: 0.12
                    }}
                />


                {/* Nearby facilities */}

                {facilities.map(
                    (facility, index) => {

                        if (
                            facility.latitude === undefined ||
                            facility.longitude === undefined
                        ) {
                            return null;
                        }

                        return (
                            <Marker
                                key={
                                    facility.id ||
                                    index
                                }
                                position={[
                                    facility.latitude,
                                    facility.longitude
                                ]}
                            >

                                <Popup>

                                    <strong>
                                        {
                                            getFacilityIcon(
                                                facility.type
                                            )
                                        }{" "}
                                        {facility.name}
                                    </strong>

                                    <br />

                                    {facility.address && (
                                        <>
                                            {
                                                facility.address
                                            }

                                            <br />
                                        </>
                                    )}

                                    {facility.distance !==
                                        undefined && (
                                        <>
                                            Distance:{" "}
                                            {
                                                facility.distance
                                            }

                                            km
                                        </>
                                    )}

                                </Popup>

                            </Marker>
                        );
                    }
                )}

            </MapContainer>

        </div>
    );
}

export default EmergencyMap;