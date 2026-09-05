import { useEffect, useRef, useState } from "react";

import {
    AlertTriangle,
    Ambulance,
    ArrowRight,
    CheckCircle2,
    Cross,
    Flame,
    LocateFixed,
    MapPin,
    Navigation,
    Phone,
    Radio,
    ShieldAlert,
    ShieldCheck,
    Siren,
    Sparkles,
    TriangleAlert,
} from "lucide-react";

import EmergencyMap from "../../components/EmergencyMap";
import NearbyAssistance from "../../components/NearbyAssistance";
import { useEmergency } from "../../hooks/useEmergency";

import "./Emergency.css";



const emergencyTypes = [
    {
        value: "medical",
        title: "Medical",
        description: "Heart attack, stroke, unconsciousness, injury",
        icon: Cross,
        color: "red",
    },
    {
        value: "accident",
        title: "Accident",
        description: "Road accident, collision or serious injury",
        icon: TriangleAlert,
        color: "orange",
    },
    {
        value: "disaster",
        title: "Disaster",
        description: "Fire, flood, earthquake or major hazard",
        icon: Flame,
        color: "blue",
    },
];


const Emergency = () => {

const {
    submitEmergency,
    currentEmergency,
    loading,
    error,
    clearCurrentEmergency,
} = useEmergency();


    const formRef = useRef(null);


    const [formData, setFormData] = useState({
        category: "medical",
        description: "",
        requirements: "",
    });


    const [location, setLocation] = useState(null);
    const [locationLoading, setLocationLoading] = useState(false);
    const [locationError, setLocationError] = useState("");
    const [success, setSuccess] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);


    /*
    ============================================================
    GET USER LOCATION
    ============================================================
    */

    const getCurrentLocation = () => {

        if (!navigator.geolocation) {
            setLocationError(
                "Geolocation is not supported by this browser."
            );
            return;
        }


        setLocationLoading(true);
        setLocationError("");


        navigator.geolocation.getCurrentPosition(
            (position) => {

                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                });

                setLocationLoading(false);
            },

            (error) => {

                let message =
                    "Unable to retrieve your location.";

                if (error.code === 1) {
                    message =
                        "Location permission was denied. Please enable location access.";
                }

                if (error.code === 2) {
                    message =
                        "Your location could not be determined.";
                }

                if (error.code === 3) {
                    message =
                        "Location request timed out. Please try again.";
                }

                setLocationError(message);
                setLocationLoading(false);
            },

            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 30000,
            }
        );
    };


    /*
    ============================================================
    AUTO REQUEST LOCATION
    ============================================================
    */

    useEffect(() => {

        getCurrentLocation();

    }, []);


    /*
    ============================================================
    FORM HANDLER
    ============================================================
    */

    const handleChange = (event) => {

        const {
            name,
            value,
        } = event.target;


        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };


    /*
    ============================================================
    SELECT EMERGENCY TYPE
    ============================================================
    */

    const selectEmergencyType = (type) => {

        setFormData((previous) => ({
            ...previous,
            category: type,
        }));

    };


    /*
    ============================================================
    SUBMIT EMERGENCY
    ============================================================
    */

    const handleSubmit = async (event) => {

        event.preventDefault();

        setSuccess(false);


        let currentLocation = location;


        if (!currentLocation) {

            await new Promise((resolve) => {

                if (!navigator.geolocation) {
                    resolve();
                    return;
                }


                navigator.geolocation.getCurrentPosition(

                    (position) => {

                        currentLocation = {
                            latitude:
                                position.coords.latitude,

                            longitude:
                                position.coords.longitude,

                            accuracy:
                                position.coords.accuracy,
                        };


                        setLocation(currentLocation);

                        resolve();
                    },

                    () => {
                        resolve();
                    },

                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 30000,
                    }
                );

            });
        }


        try {

            const emergencyData = {

                message:
                    formData.description.trim(),

                category:
                    formData.category,

                language:
                    "auto",

                latitude:
                    currentLocation?.latitude ?? null,

                longitude:
                    currentLocation?.longitude ?? null,

                location:
                    currentLocation
                        ? `${currentLocation.latitude}, ${currentLocation.longitude}`
                        : null,

                requirements:
                    formData.requirements.trim(),
            };


            const result =
                await submitEmergency(emergencyData);


            setSuccess(true);
            setShowConfirmation(true);


            /*
            Automatically scroll to the result.
            */

            setTimeout(() => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });

            }, 100);


            return result;

        } catch (err) {

            console.error(
                "Emergency submission failed:",
                err
            );

        }
    };


    /*
    ============================================================
    RESET
    ============================================================
    */

    const handleNewEmergency = () => {

        setSuccess(false);
        setShowConfirmation(false);

        clearCurrentEmergency();

        setFormData({
            category: "medical",
            description: "",
            requirements: "",
        });

        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };


    /*
    ============================================================
    AUTH ERROR
    ============================================================
    */

    const isAuthError =
        error &&
        (
            error.toLowerCase().includes("auth") ||
            error.toLowerCase().includes("token") ||
            error.toLowerCase().includes("login")
        );


    /*
    ============================================================
    RENDER
    ============================================================
    */

    return (

        <main className="emergency-page">

            {/* ==================================================
                HEADER
            ================================================== */}

            <section className="emergency-hero">

                <div className="hero-content">

                    <div className="hero-kicker">
                        <span className="hero-live-dot" />
                        EMERGENCY RESPONSE
                    </div>


                    <h1>
                        Emergency Assistance
                    </h1>


                    <p>
                        Report an emergency, share your live location
                        and get the help you need as quickly as possible.
                    </p>


                    <div className="hero-status-row">

                        <div className="hero-status">
                            <ShieldCheck size={16} />
                            Secure reporting
                        </div>


                        <div className="hero-status">
                            <LocateFixed size={16} />
                            GPS enabled
                        </div>


                        <div className="hero-status">
                            <Radio size={16} />
                            Real-time response
                        </div>

                    </div>

                </div>


                <button
                    type="button"
                    className="hero-emergency-button"
                    onClick={() => {
                        formRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }}
                >
                    <span className="hero-button-icon">
                        <Siren size={22} />
                    </span>

                    <span>
                        <strong>Emergency Now</strong>
                        <small>Report an incident</small>
                    </span>

                    <ArrowRight size={20} />

                </button>

            </section>


            {/* ==================================================
                ERROR
            ================================================== */}

            {error && (

                <div
                    className={`emergency-alert emergency-alert-error ${
                        isAuthError
                            ? "auth-alert"
                            : ""
                    }`}
                >

                    <div className="alert-icon">
                        <AlertTriangle size={20} />
                    </div>


                    <div className="alert-content">

                        <strong>
                            {isAuthError
                                ? "Authentication required"
                                : "Emergency request failed"}
                        </strong>

                        <span>
                            {error}
                        </span>

                    </div>


                    {isAuthError && (

                        <button
                            type="button"
                            onClick={() => {
                                window.location.href =
                                    "/login";
                            }}
                        >
                            Sign in
                        </button>

                    )}

                </div>

            )}


            {/* ==================================================
                SUCCESS PANEL
            ================================================== */}

            {success && currentEmergency && (

                <section className="success-panel">

                    <div className="success-main">

                        <div className="success-icon">
                            <CheckCircle2 size={28} />
                        </div>


                        <div>

                            <div className="success-label">
                                EMERGENCY REPORTED
                            </div>

                            <h2>
                                Help request received
                            </h2>

                            <p>
                                Your emergency has been recorded
                                and the response process has started.
                            </p>

                        </div>

                    </div>


                    <div className="success-details">

                        <div>
                            <span>Incident ID</span>
                            <strong>
                                #{currentEmergency.id ?? "—"}
                            </strong>
                        </div>


                        <div>
                            <span>Risk level</span>
                            <strong
                                className={`risk-${(
                                    currentEmergency.risk_level ||
                                    "medium"
                                ).toLowerCase()}`}
                            >
                                {currentEmergency.risk_level ||
                                    "Medium"}
                            </strong>
                        </div>


                        <div>
                            <span>Status</span>
                            <strong>
                                {currentEmergency.status ||
                                    "Active"}
                            </strong>
                        </div>

                    </div>


                    <button
                        type="button"
                        className="new-emergency-button"
                        onClick={handleNewEmergency}
                    >
                        Report another emergency
                    </button>

                </section>

            )}


            {/* ==================================================
                MAIN GRID
            ================================================== */}

            <div className="emergency-layout">

                {/* ==================================================
                    LEFT FORM
                ================================================== */}

                <section
                    className="emergency-card"
                    ref={formRef}
                >

                    <div className="card-heading">

                        <div className="card-heading-icon">
                            <Siren size={22} />
                        </div>


                        <div>

                            <span className="section-eyebrow">
                                QUICK REPORT
                            </span>

                            <h2>
                                Report Emergency
                            </h2>

                            <p>
                                Provide the essential details so
                                responders can understand the situation.
                            </p>

                        </div>

                    </div>


                    <form
                        onSubmit={handleSubmit}
                        className="emergency-form"
                    >

                        {/* ==================================================
                            EMERGENCY TYPE
                        ================================================== */}

                        <div className="form-section">

                            <div className="field-title-row">

                                <div>

                                    <label>
                                        Emergency Type
                                    </label>

                                    <span>
                                        Select the closest match
                                    </span>

                                </div>

                            </div>


                            <div className="emergency-type-grid">

                                {emergencyTypes.map((type) => {

                                    const Icon =
                                        type.icon;

                                    const selected =
                                        formData.category ===
                                        type.value;


                                    return (

                                        <button
                                            type="button"
                                            key={type.value}
                                            className={`emergency-type-card ${
                                                selected
                                                    ? "selected"
                                                    : ""
                                            } ${type.color}`}
                                            onClick={() =>
                                                selectEmergencyType(
                                                    type.value
                                                )
                                            }
                                        >

                                            <span className="type-icon">
                                                <Icon size={23} />
                                            </span>


                                            <span className="type-content">

                                                <strong>
                                                    {type.title}
                                                </strong>

                                                <small>
                                                    {type.description}
                                                </small>

                                            </span>


                                            {selected && (

                                                <span className="type-check">
                                                    <CheckCircle2
                                                        size={18}
                                                    />
                                                </span>

                                            )}

                                        </button>

                                    );

                                })}

                            </div>


                            <input
                                type="hidden"
                                name="category"
                                value={formData.category}
                            />

                        </div>


                        {/* ==================================================
                            DESCRIPTION
                        ================================================== */}

                        <div className="form-section">

                            <div className="field-title-row">

                                <div>

                                    <label htmlFor="description">
                                        What happened?
                                    </label>

                                    <span>
                                        Describe the emergency clearly
                                    </span>

                                </div>


                                <span className="character-count">
                                    {formData.description.length}
                                    /1000
                                </span>

                            </div>


                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                maxLength={1000}
                                required
                                placeholder="Example: A person is experiencing severe chest pain and difficulty breathing..."
                            />

                        </div>


                        {/* ==================================================
                            REQUIREMENTS
                        ================================================== */}

                        <div className="form-section">

                            <div className="field-title-row">

                                <div>

                                    <label htmlFor="requirements">
                                        What help is needed?
                                    </label>

                                    <span>
                                        Optional — tell responders what
                                        you need
                                    </span>

                                </div>

                            </div>


                            <input
                                id="requirements"
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                placeholder="Example: Ambulance, medical assistance..."
                            />

                        </div>


                        {/* ==================================================
                            LOCATION
                        ================================================== */}

                        <div className="location-panel">

                            <div className="location-icon">
                                <LocateFixed size={22} />
                            </div>


                            <div className="location-content">

                                <div className="location-header">

                                    <strong>
                                        Live Location
                                    </strong>


                                    {location && (

                                        <span className="location-verified">
                                            <CheckCircle2 size={14} />
                                            Location ready
                                        </span>

                                    )}

                                </div>


                                {location ? (

                                    <>

                                        <span className="location-coordinates">
                                            {location.latitude.toFixed(6)}
                                            {" , "}
                                            {location.longitude.toFixed(6)}
                                        </span>

                                        <small>
                                            Accuracy approximately{" "}
                                            {Math.round(
                                                location.accuracy || 0
                                            )}
                                            {" "}meters
                                        </small>

                                    </>

                                ) : (

                                    <span className="location-message">
                                        {locationLoading
                                            ? "Detecting your location..."
                                            : "Location is not available."}
                                    </span>

                                )}

                            </div>


                            <button
                                type="button"
                                className="location-refresh"
                                onClick={getCurrentLocation}
                                disabled={locationLoading}
                            >
                                <Navigation
                                    size={17}
                                    className={
                                        locationLoading
                                            ? "spin"
                                            : ""
                                    }
                                />

                                {locationLoading
                                    ? "Detecting"
                                    : "Update"}
                            </button>

                        </div>


                        {locationError && (

                            <div className="location-error">
                                <AlertTriangle size={16} />
                                {locationError}
                            </div>

                        )}


                        {/* ==================================================
                            SUBMIT
                        ================================================== */}

                        <button
                            type="submit"
                            className="submit-emergency-button"
                            disabled={
                                loading ||
                                !formData.description.trim()
                            }
                        >

                            {loading ? (

                                <>
                                    <span className="button-spinner" />
                                    Processing emergency...
                                </>

                            ) : (

                                <>
                                    <Siren size={21} />
                                    Emergency Now
                                    <ArrowRight size={19} />
                                </>

                            )}

                        </button>


                        <p className="submit-note">
                            Your emergency information and location
                            are securely transmitted to the emergency
                            response system.
                        </p>

                    </form>

                </section>


                {/* ==================================================
                    RIGHT SIDEBAR
                ================================================== */}

                <aside className="emergency-sidebar">

                    {/* ==================================================
                        LOCATION STATUS
                    ================================================== */}

                    <div className="status-card">

                        <div className="status-card-header">

                            <div className="status-card-title">

                                <span className="status-pulse" />

                                <span>
                                    System Status
                                </span>

                            </div>


                            <span className="status-online">
                                ONLINE
                            </span>

                        </div>


                        <div className="status-item">

                            <span>
                                <LocateFixed size={17} />
                                GPS Location
                            </span>

                            <strong
                                className={
                                    location
                                        ? "online"
                                        : "offline"
                                }
                            >
                                {location
                                    ? "Ready"
                                    : "Unavailable"}
                            </strong>

                        </div>


                        <div className="status-item">

                            <span>
                                <Radio size={17} />
                                Emergency Network
                            </span>

                            <strong className="online">
                                Active
                            </strong>

                        </div>


                        <div className="status-item">

                            <span>
                                <ShieldCheck size={17} />
                                Secure Connection
                            </span>

                            <strong className="online">
                                Protected
                            </strong>

                        </div>

                    </div>


                    {/* ==================================================
                        QUICK CONTACTS
                    ================================================== */}

                    <div className="quick-help-card">

                        <div className="quick-help-heading">

                            <Sparkles size={18} />

                            <span>
                                Need immediate help?
                            </span>

                        </div>


                        <p>
                            If the situation is life-threatening,
                            contact emergency services immediately.
                        </p>


                        <div className="quick-contact-grid">

                            <a
                                href="tel:112"
                                className="quick-contact"
                            >
                                <span>
                                    <Phone size={18} />
                                </span>

                                <div>
                                    <strong>112</strong>
                                    <small>Emergency</small>
                                </div>
                            </a>


                            <a
                                href="tel:108"
                                className="quick-contact"
                            >
                                <span>
                                    <Ambulance size={18} />
                                </span>

                                <div>
                                    <strong>108</strong>
                                    <small>Ambulance</small>
                                </div>
                            </a>

                        </div>

                    </div>


                    {/* ==================================================
                        SAFETY NOTE
                    ================================================== */}

                    <div className="safety-note">

                        <ShieldAlert size={21} />

                        <div>

                            <strong>
                                Stay safe
                            </strong>

                            <p>
                                Move to a safe location if possible.
                                Do not put yourself at additional risk
                                while waiting for assistance.
                            </p>

                        </div>

                    </div>

                </aside>

            </div>


            {/* ==================================================
                MAP
            ================================================== */}

            {location && (

                <section className="map-section">

                    <div className="section-header">

                        <div>

                            <span className="section-eyebrow">
                                LIVE LOCATION
                            </span>

                            <h2>
                                Your Emergency Location
                            </h2>

                            <p>
                                Your current position is shown on
                                the emergency response map.
                            </p>

                        </div>


                        <div className="map-location-badge">
                            <MapPin size={16} />
                            GPS Active
                        </div>

                    </div>


                    <div className="map-container">

                        <EmergencyMap
                            latitude={location.latitude}
                            longitude={location.longitude}
                            facilities={[]}
                        />

                    </div>

                </section>

            )}


            {/* ==================================================
                NEARBY ASSISTANCE
            ================================================== */}

            {location && (

                <section className="nearby-section">

                    <div className="section-header">

                        <div>

                            <span className="section-eyebrow">
                                NEARBY HELP
                            </span>

                            <h2>
                                Emergency Services Near You
                            </h2>

                            <p>
                                Find nearby hospitals, police,
                                fire stations and safety centres.
                            </p>

                        </div>

                    </div>


                    <div className="nearby-wrapper">

                        <NearbyAssistance
                            latitude={location.latitude}
                            longitude={location.longitude}
                        />

                    </div>

                </section>

            )}

        </main>
    );
};


export default Emergency;