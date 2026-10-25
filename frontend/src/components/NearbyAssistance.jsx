
import { useCallback, useEffect, useState } from "react";

import {
    Loader2,
    RefreshCw,
    ShieldAlert
} from "lucide-react";

import api from "../services/api";
import AssistanceCard from "./AssistanceCard";


function NearbyAssistance({
    latitude,
    longitude,
    radius = 5000,
    onFacilitiesLoaded
}) {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const hasLocation =
        latitude !== null &&
        latitude !== undefined &&
        longitude !== null &&
        longitude !== undefined &&
        Number.isFinite(Number(latitude)) &&
        Number.isFinite(Number(longitude)) &&
        Number(latitude) >= -90 &&
        Number(latitude) <= 90 &&
        Number(longitude) >= -180 &&
        Number(longitude) <= 180;

    const fetchNearbyAssistance = useCallback(
        async (signal) => {
            if (!hasLocation) {
                setFacilities([]);
                setError("");
                setLoading(false);
                onFacilitiesLoaded?.([]);
                return;
            }

            setLoading(true);
            setError("");

            try {
                const response = await api.get(
                    "/assistance/nearby",
                    {
                        params: {
                            latitude: Number(latitude),
                            longitude: Number(longitude),
                            radius
                        },
                        signal
                    }
                );

                const data = response.data || {};

                const police = Array.isArray(data.police)
                    ? data.police.map(item => ({
                        ...item,
                        type: item.type || "police"
                    }))
                    : [];

                const hospitals = Array.isArray(data.hospitals)
                    ? data.hospitals.map(item => ({
                        ...item,
                        type: item.type || "hospital"
                    }))
                    : [];

                const safetyCentres =
                    Array.isArray(data.safety_centres)
                        ? data.safety_centres.map(item => ({
                            ...item,
                            type: item.type || "safety_centre"
                        }))
                        : [];

                const allFacilities = [
                    ...police,
                    ...hospitals,
                    ...safetyCentres
                ];

                setFacilities(allFacilities);
                onFacilitiesLoaded?.(allFacilities);
            } catch (err) {
                // Ignore requests cancelled because the location changed.
                if (
                    err.code === "ERR_CANCELED" ||
                    err.name === "CanceledError" ||
                    signal?.aborted
                ) {
                    return;
                }

                console.error("Nearby assistance error:", err);

                setFacilities([]);
                onFacilitiesLoaded?.([]);

                setError(
                    err.response?.data?.detail ||
                    "Unable to find nearby assistance. Please try again."
                );
            } finally {
                if (!signal?.aborted) {
                    setLoading(false);
                }
            }
        },
        [
            hasLocation,
            latitude,
            longitude,
            radius,
            onFacilitiesLoaded
        ]
    );

    useEffect(() => {
        const controller = new AbortController();

        fetchNearbyAssistance(controller.signal);

        return () => {
            controller.abort();
        };
    }, [fetchNearbyAssistance]);

    const handleRefresh = () => {
        fetchNearbyAssistance();
    };

    if (!hasLocation) {
        return (
            <section className="nearby-assistance">
                <div className="nearby-empty">
                    <ShieldAlert size={28} />
                    <p>
                        Enable location access to find nearby
                        emergency services.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="nearby-assistance">
            <div className="nearby-header">
                <div>
                    <h2>Nearby Emergency Assistance</h2>
                    <p>
                        Find emergency services near your current location.
                    </p>
                </div>

                <button
                    type="button"
                    className="nearby-refresh"
                    onClick={handleRefresh}
                    disabled={loading}
                    title="Refresh nearby services"
                    aria-label="Refresh nearby emergency services"
                >
                    {loading ? (
                        <Loader2
                            size={18}
                            className="nearby-spinner"
                        />
                    ) : (
                        <RefreshCw size={18} />
                    )}
                </button>
            </div>

            {loading && (
                <div className="nearby-loading" role="status">
                    <Loader2
                        size={22}
                        className="nearby-spinner"
                    />
                    <span>Finding nearby services...</span>
                </div>
            )}

            {error && !loading && (
                <div className="nearby-error" role="alert">
                    {error}
                </div>
            )}

            {!loading && !error && facilities.length === 0 && (
                <div className="nearby-empty">
                    <p>No nearby emergency services were found.</p>
                </div>
            )}

            {!loading && !error && facilities.length > 0 && (
                <div className="assistance-list">
                    {facilities.map((facility, index) => (
                        <AssistanceCard
                            key={
                                facility.id ??
                                `${facility.type}-${facility.latitude}-${facility.longitude}-${index}`
                            }
                            facility={facility}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default NearbyAssistance;
