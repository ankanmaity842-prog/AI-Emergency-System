import { useCallback, useEffect, useRef, useState } from "react";

const useGeolocation = (watch = true) => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const watchId = useRef(null);

    const handleSuccess = useCallback((position) => {
        const {
            latitude,
            longitude,
            accuracy,
            altitude,
            heading,
            speed,
        } = position.coords;

        setLocation({
            latitude,
            longitude,
            accuracy,
            altitude,
            heading,
            speed,
            timestamp: position.timestamp,
        });

        setError(null);
        setLoading(false);
    }, []);

    const handleError = useCallback((err) => {
        let message = "Unable to retrieve your location.";

        switch (err.code) {
            case 1:
                message =
                    "Location permission was denied. Please allow location access.";
                break;

            case 2:
                message =
                    "Your location is currently unavailable.";
                break;

            case 3:
                message =
                    "Location request timed out. Please try again.";
                break;

            default:
                message =
                    "An unknown location error occurred.";
        }

        setError(message);
        setLoading(false);
    }, []);

    const getLocation = useCallback(() => {
        if (!("geolocation" in navigator)) {
            setError(
                "Geolocation is not supported by your browser."
            );
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        navigator.geolocation.getCurrentPosition(
            handleSuccess,
            handleError,
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    }, [handleSuccess, handleError]);

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setError(
                "Geolocation is not supported by your browser."
            );
            setLoading(false);
            return;
        }

        if (!watch) {
            getLocation();
            return;
        }

        setLoading(true);
        setError(null);

        watchId.current =
            navigator.geolocation.watchPosition(
                handleSuccess,
                handleError,
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 5000,
                }
            );

        return () => {
            if (watchId.current !== null) {
                navigator.geolocation.clearWatch(
                    watchId.current
                );

                watchId.current = null;
            }
        };
    }, [
        watch,
        getLocation,
        handleSuccess,
        handleError,
    ]);

    const stopWatching = useCallback(() => {
        if (watchId.current !== null) {
            navigator.geolocation.clearWatch(
                watchId.current
            );

            watchId.current = null;
        }
    }, []);

    return {
        location,
        loading,
        error,
        getLocation,
        stopWatching,
        hasLocation: Boolean(location),
    };
};

export default useGeolocation;