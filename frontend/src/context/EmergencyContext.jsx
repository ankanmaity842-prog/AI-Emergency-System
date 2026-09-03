import { createContext, useState } from "react";

import {
    createEmergency,
    getMyEmergencies,
    getEmergencyById,
    cancelEmergency,
} from "../services/emergency";

export const EmergencyContext = createContext(null);

export const EmergencyProvider = ({ children }) => {

    const [currentEmergency, setCurrentEmergency] = useState(null);
    const [emergencies, setEmergencies] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const submitEmergency = async (emergencyData) => {

        setLoading(true);
        setError(null);

        try {

            const data = await createEmergency(emergencyData);

            setCurrentEmergency(data);

            setEmergencies((previous) => [
                data,
                ...previous,
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


    const fetchEmergency = async (emergencyId) => {

        setLoading(true);
        setError(null);

        try {

            const data =
                await getEmergencyById(emergencyId);

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


    const cancelCurrentEmergency = async (emergencyId) => {

        setLoading(true);
        setError(null);

        try {

            const data =
                await cancelEmergency(emergencyId);


            // Update current emergency
            setCurrentEmergency((previous) => {

                if (!previous) {
                    return previous;
                }

                return {
                    ...previous,
                    ...data,
                };

            });


            // Update emergency history
            setEmergencies((previous) =>
                previous.map((emergency) =>
                    emergency.id === emergencyId
                        ? {
                            ...emergency,
                            ...data,
                        }
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

    // Clear Current Emergency
    

    const clearCurrentEmergency = () => {

        setCurrentEmergency(null);

    };


    const clearError = () => {

        setError(null);

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

        
        clearCurrentEmergency,
        clearError,
    };


    return (
        <EmergencyContext.Provider value={value}>
            {children}
        </EmergencyContext.Provider>
    );
};


// Default export


export default EmergencyContext;