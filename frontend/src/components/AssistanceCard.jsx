import {
    Phone,
    Navigation,
    MapPin
} from "lucide-react";


function AssistanceCard({
    facility
}) {

    const handleCall = () => {

        if (!facility.phone) {
            return;
        }

        window.location.href =
            `tel:${facility.phone}`;
    };


    const handleNavigate = () => {

        if (
            facility.latitude === undefined ||
            facility.longitude === undefined
        ) {
            return;
        }

        const url =
            `https://www.google.com/maps/dir/?api=1` +
            `&destination=${facility.latitude},${facility.longitude}`;

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );
    };


    const getIcon = () => {

        switch (facility.type) {

            case "police":
                return "👮";

            case "hospital":
                return "🏥";

            case "safety":
                return "🛡️";

            default:
                return "📍";
        }
    };


    return (
        <div className="assistance-card">

            <div className="assistance-card-header">

                <div className="assistance-icon">
                    {getIcon()}
                </div>

                <div className="assistance-info">

                    <h3>
                        {facility.name}
                    </h3>

                    <span>
                        {facility.type
                            ?.replaceAll("_", " ")}
                    </span>

                </div>

            </div>


            {facility.address && (
                <div className="assistance-address">

                    <MapPin size={15} />

                    <span>
                        {facility.address}
                    </span>

                </div>
            )}


            {facility.distance_km !== undefined && (
                <div className="assistance-distance">

                    {facility.distance_km} km away

                </div>
            )}


            <div className="assistance-actions">

                {facility.phone && (
                    <button
                        type="button"
                        className="assistance-call-button"
                        onClick={handleCall}
                    >
                        <Phone size={17} />
                        Call
                    </button>
                )}


                <button
                    type="button"
                    className="assistance-navigate-button"
                    onClick={handleNavigate}
                >
                    <Navigation size={17} />
                    Navigate
                </button>

            </div>

        </div>
    );
}


export default AssistanceCard;