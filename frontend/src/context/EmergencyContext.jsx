import { createContext, useContext, useState } from "react";
import {
    createEmergency,
    getMyEmergencies,
    getEmergencyById,
    cancelEmergency
} from "../services/emergency";

const EmergencyContext = createContext(null);

export const EmergencyProvider = ({ children }) => {
    const [currentEmergency, setCurrentEmergency] = useState(null);
    const [emergencies, setEmergencies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Create emergency
    const submitEmergency = async (emergencyData) => {
        setLoading(true);
        setError(null);

        try {
            const data = await createEmergency(emergencyData);

            setCurrentEmergency(data);

            // Add latest emergency to history
            setEmergencies((previous) => [
                data,
                ...previous
            ]);

            return data;
        } catch (err) {
            const message =
                err.response?.data?.detail ||
                "Failed to create emergency";

            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Fetch user's emergencies
    const fetchEmergencies = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await getMyEmergencies();

            setEmergencies(data);

            return data;
        } catch (err) {
            const message =
                err.response?.data?.detail ||
                "Failed to load emergencies";

            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Get one emergency
    const fetchEmergency = async (emergencyId) => {
        setLoading(true);
        setError(null);

        try {
            const data = await getEmergencyById(emergencyId);

            setCurrentEmergency(data);

            return data;
        } catch (err) {
            const message =
                err.response?.data?.detail ||
                "Emergency not found";

            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Cancel emergency
    const cancelCurrentEmergency = async (emergencyId) => {
        setLoading(true);
        setError(null);

        try {
            const data = await cancelEmergency(emergencyId);

            setCurrentEmergency((previous) => ({
                ...previous,
                ...data
            }));

            setEmergencies((previous) =>
                previous.map((emergency) =>
                    emergency.id === emergencyId
                        ? { ...emergency, ...data }
                        : emergency
                )
            );

            return data;
        } catch (err) {
            const message =
                err.response?.data?.detail ||
                "Failed to cancel emergency";

            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Clear selected emergency
    const clearCurrentEmergency = () => {
        setCurrentEmergency(null);
    };

    const value = {
        currentEmergency,
        emergencies,
        loading,
        error,

        submitEmergency,
        fetchEmergencies,
        fetchEmergency,
        cancelCurrentEmergency,
        clearCurrentEmergency
    };

    return (
        <EmergencyContext.Provider value={value}>
            {children}
        </EmergencyContext.Provider>
    );
};

export const useEmergencyContext = () => {
    const context = useContext(EmergencyContext);

    if (!context) {
        throw new Error(
            "useEmergencyContext must be used inside EmergencyProvider"
        );
    }

    return context;
};

export default EmergencyContext;