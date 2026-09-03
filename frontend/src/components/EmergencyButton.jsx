import { useState } from "react";
import { AlertTriangle, Loader2 } from "lucide-react";
import api from "../services/api";

function EmergencyButton({
    category = "auto",
    onEmergencyCreated
}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleEmergency = () => {
        setError("");

        if (!navigator.geolocation) {
            setError("GPS location is not supported by this browser.");
            return;
        }

        setLoading(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const latitude =
                        position.coords.latitude;

                    const longitude =
                        position.coords.longitude;

                    const response = await api.post(
                        "/emergency/",
                        {
                            message:
                                "Emergency assistance requested.",
                            language: "auto",
                            category,
                            latitude,
                            longitude
                        }
                    );

                    if (onEmergencyCreated) {
                        onEmergencyCreated(
                            response.data,
                            latitude,
                            longitude
                        );
                    }

                } catch (err) {
                    console.error(
                        "Emergency request failed:",
                        err
                    );

                    setError(
                        err.response?.data?.detail ||
                        "Unable to create emergency request."
                    );
                } finally {
                    setLoading(false);
                }
            },

            (geoError) => {
                console.error(
                    "GPS error:",
                    geoError
                );

                setLoading(false);

                if (geoError.code === 1) {
                    setError(
                        "Location permission is required."
                    );
                } else {
                    setError(
                        "Unable to get your current location."
                    );
                }
            },

            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    };

    return (
        <div className="emergency-button-container">

            <button
                type="button"
                className="emergency-now-button"
                onClick={handleEmergency}
                disabled={loading}
            >
                {loading ? (
                    <>
                        <Loader2
                            size={22}
                            className="emergency-spinner"
                        />

                        <span>
                            Locating...
                        </span>
                    </>
                ) : (
                    <>
                        <AlertTriangle size={22} />

                        <span>
                            Emergency Now
                        </span>
                    </>
                )}
            </button>

            {error && (
                <p className="emergency-error">
                    {error}
                </p>
            )}

        </div>
    );
}

export default EmergencyButton;