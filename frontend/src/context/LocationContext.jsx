import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext(null);

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [permissionDenied, setPermissionDenied] = useState(false);

    const getLocation = () => {
        setLoading(true);
        setError(null);
        setPermissionDenied(false);

        if (!navigator.geolocation) {
            const message =
                "Geolocation is not supported by this browser.";

            setError(message);
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude, accuracy } =
                    position.coords;

                setLocation({
                    latitude,
                    longitude,
                    accuracy,
                });

                setLoading(false);
            },
            (err) => {
                let message =
                    "Unable to retrieve your location.";

                if (err.code === 1) {
                    message =
                        "Location permission was denied. Please allow location access.";
                    setPermissionDenied(true);
                } else if (err.code === 2) {
                    message =
                        "Your location is currently unavailable.";
                } else if (err.code === 3) {
                    message =
                        "Location request timed out. Please try again.";
                }

                setError(message);
                setLoading(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    };

    useEffect(() => {
        getLocation();
    }, []);

    const clearLocation = () => {
        setLocation(null);
        setError(null);
        setPermissionDenied(false);
    };

    const value = {
        location,
        loading,
        error,
        permissionDenied,
        getLocation,
        clearLocation,
        hasLocation: Boolean(location),
    };

    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocationContext = () => {
    const context = useContext(LocationContext);

    if (!context) {
        throw new Error(
            "useLocationContext must be used inside LocationProvider"
        );
    }

    return context;
};

export default LocationContext;