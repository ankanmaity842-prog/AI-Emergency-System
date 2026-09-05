import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Circle,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

// USER ICON


const userIcon = new L.Icon({
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});



// FACILITY ICON


const facilityIcon = new L.Icon({
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});



// COMPONENT


const EmergencyMap = ({
    latitude,
    longitude,
    radius = 5000,
    facilities = [],
}) => {

    if (
        latitude === null ||
        latitude === undefined ||
        longitude === null ||
        longitude === undefined
    ) {
        return (
            <div className="emergency-map-empty">
                Location unavailable.
            </div>
        );
    }


    const center = [
        latitude,
        longitude,
    ];


    return (
        <div className="emergency-map">

            <MapContainer
                center={center}
                zoom={14}
                scrollWheelZoom={true}
                style={{
                    width: "100%",
                    height: "400px",
                }}
            >

                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {/* USER LOCATION */}

                <Marker
                    position={center}
                    icon={userIcon}
                >
                    <Popup>
                        <strong>
                            Your Location
                        </strong>
                    </Popup>
                </Marker>


                {/* SEARCH RADIUS */}

                <Circle
                    center={center}
                    radius={radius}
                    pathOptions={{
                        fillOpacity: 0.08,
                    }}
                />


                {/* NEARBY FACILITIES */}

                {facilities.map(
                    (facility, index) => {

                        if (
                            facility?.latitude === undefined ||
                            facility?.longitude === undefined
                        ) {
                            return null;
                        }


                        const type =
                            String(
                                facility?.type || ""
                            ).toLowerCase();


                        const distance =
                            facility?.distance_km ??
                            facility?.distance;


                        return (
                            <Marker
                                key={
                                    facility.id ??
                                    `${type}-${index}`
                                }
                                position={[
                                    facility.latitude,
                                    facility.longitude,
                                ]}
                                icon={facilityIcon}
                            >

                                <Popup>

                                    <div>

                                        <strong>
                                            {facility.name ||
                                                "Emergency Facility"}
                                        </strong>

                                        <br />

                                        <span>
                                            {type === "police"
                                                ? "Police Station"
                                                : type === "hospital"
                                                    ? "Hospital / Clinic"
                                                    : type === "fire_station"
                                                        ? "Fire Station"
                                                        : "Safety Facility"}
                                        </span>


                                        {distance !== undefined &&
                                            distance !== null && (
                                                <>
                                                    <br />
                                                    <span>
                                                        {distance} km away
                                                    </span>
                                                </>
                                            )}


                                        {facility.address && (
                                            <>
                                                <br />
                                                <span>
                                                    {facility.address}
                                                </span>
                                            </>
                                        )}

                                    </div>

                                </Popup>

                            </Marker>
                        );
                    }
                )}

            </MapContainer>

        </div>
    );
};


export default EmergencyMap;