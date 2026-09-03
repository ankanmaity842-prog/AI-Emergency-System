import { useCallback, useEffect, useState } from "react";

import api from "../services/api";

const useNearbyAssistance = ({
    latitude,
    longitude,
    radius = 5000,
    enabled = true,
} = {}) => {

    const [assistance, setAssistance] = useState({
        police: [],
        hospitals: [],
        safety_centres: [],
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchNearbyAssistance = useCallback(async () => {

        if (
            latitude === null ||
            latitude === undefined ||
            longitude === null ||
            longitude === undefined
        ) {
            return;
        }

        setLoading(true);
        setError(null);

        try {

            const response = await api.get(
                "/assistance/nearby",
                {
                    params: {
                        latitude,
                        longitude,
                        radius,
                    },
                }
            );

            const data = response.data;

            setAssistance({
                police: data.police || [],
                hospitals: data.hospitals || [],
                safety_centres:
                    data.safety_centres || [],
            });

            return data;

        } catch (err) {

            const message =
                err.response?.data?.detail ||
                "Unable to load nearby assistance.";

            setError(message);

            throw err;

        } finally {

            setLoading(false);

        }

    }, [
        latitude,
        longitude,
        radius,
    ]);


    useEffect(() => {

        if (!enabled) {
            return;
        }

        if (
            latitude === null ||
            latitude === undefined ||
            longitude === null ||
            longitude === undefined
        ) {
            return;
        }

        fetchNearbyAssistance();

    }, [
        enabled,
        latitude,
        longitude,
        fetchNearbyAssistance,
    ]);


    const refresh = async () => {
        return await fetchNearbyAssistance();
    };


    const clearAssistance = () => {

        setAssistance({
            police: [],
            hospitals: [],
            safety_centres: [],
        });

        setError(null);
    };


    return {
        assistance,

        police: assistance.police,

        hospitals: assistance.hospitals,

        safetyCentres:
            assistance.safety_centres,

        loading,

        error,

        refresh,

        clearAssistance,

        hasAssistance:
            assistance.police.length > 0 ||
            assistance.hospitals.length > 0 ||
            assistance.safety_centres.length > 0,
    };
};

export default useNearbyAssistance;