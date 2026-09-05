import {
    useEffect,
    useState
} from "react";

import {
    Loader2,
    RefreshCw,
    ShieldAlert
} from "lucide-react";

import api from "../services/api";

import AssistanceCard
    from "./AssistanceCard";


function NearbyAssistance({
    latitude,
    longitude,
    radius = 5000,
    onFacilitiesLoaded
}) {

    const [
        facilities,
        setFacilities
    ] = useState([]);

    const [
        loading,
        setLoading
    ] = useState(false);

    const [
        error,
        setError
    ] = useState("");


    const fetchNearbyAssistance = async () => {

        if (
            latitude === undefined ||
            latitude === null ||
            longitude === undefined ||
            longitude === null
        ) {
            return;
        }

        setLoading(true);
        setError("");

        try {

            const response = await api.get(
                "/assistance/nearby",
                {
                    params: {
                        latitude,
                        longitude,
                        radius
                    }
                }
            );


            const data = response.data || {};


            /*
             * Backend returns:
             *
             * {
             *   police: [],
             *   hospitals: [],
             *   safety_centres: []
             * }
             *
             * Convert everything into one array
             * for the React UI.
             */

            const police =
                Array.isArray(data.police)
                    ? data.police
                    : [];

            const hospitals =
                Array.isArray(data.hospitals)
                    ? data.hospitals
                    : [];

            const safetyCentres =
                Array.isArray(data.safety_centres)
                    ? data.safety_centres
                    : [];


            const allFacilities = [
                ...police,
                ...hospitals,
                ...safetyCentres
            ];


            setFacilities(allFacilities);


            if (onFacilitiesLoaded) {
                onFacilitiesLoaded(allFacilities);
            }

        } catch (err) {

            console.error(
                "Nearby assistance error:",
                err
            );

            setFacilities([]);

            if (onFacilitiesLoaded) {
                onFacilitiesLoaded([]);
            }

            setError(
                err.response?.data?.detail ||
                "Unable to find nearby assistance."
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        fetchNearbyAssistance();

    }, [
        latitude,
        longitude,
        radius
    ]);


    if (
        latitude === undefined ||
        latitude === null ||
        longitude === undefined ||
        longitude === null
    ) {

        return (
            <div className="nearby-empty">

                <ShieldAlert size={28} />

                <p>
                    Enable location to find
                    nearby emergency services.
                </p>

            </div>
        );
    }


    return (
        <section className="nearby-assistance">

            <div className="nearby-header">

                <div>

                    <h2>
                        Nearby Emergency Assistance
                    </h2>

                    <p>
                        Find emergency services
                        near your current location.
                    </p>

                </div>


                <button
                    type="button"
                    className="nearby-refresh"
                    onClick={fetchNearbyAssistance}
                    disabled={loading}
                    title="Refresh nearby services"
                >

                    {loading ? (
                        <Loader2
                            size={18}
                            className="nearby-spinner"
                        />
                    ) : (
                        <RefreshCw
                            size={18}
                        />
                    )}

                </button>

            </div>


            {loading && (
                <div className="nearby-loading">

                    <Loader2
                        size={22}
                        className="nearby-spinner"
                    />

                    <span>
                        Finding nearby services...
                    </span>

                </div>
            )}


            {error && !loading && (
                <div className="nearby-error">
                    {error}
                </div>
            )}


            {!loading &&
                !error &&
                facilities.length === 0 && (

                <div className="nearby-empty">

                    <p>
                        No nearby emergency
                        services were found.
                    </p>

                </div>
            )}


            {!loading &&
                !error &&
                facilities.length > 0 && (

                <div className="assistance-list">

                    {facilities.map(
                        (facility, index) => (

                        <AssistanceCard
                            key={
                                `${facility.type}-${facility.id || index}`
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