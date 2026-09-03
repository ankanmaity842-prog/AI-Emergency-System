import { useEffect, useState } from "react";

import EmergencyCard from "../../components/EmergencyCard/EmergencyCard";
import EmergencyMap from "../../components/EmergencyMap";
import EmergencyButton from "../../components/EmergencyButton";
import NearbyAssistance from "../../components/NearbyAssistance";
import AssistanceCard from "../../components/AssistanceCard";

import {
    createEmergency
} from "../../services/emergency";

import {
    getNearbyAssistance
} from "../../services/assistance";

import "./Emergency.css";


const Emergency = () => {

    // -----------------------------------------
    // Emergency form
    // -----------------------------------------

    const [formData, setFormData] = useState({
        category: "medical",
        description: "",
        requirements: "",
    });


    // -----------------------------------------
    // GPS location
    // -----------------------------------------

    const [location, setLocation] = useState(null);

    const [locationLoading, setLocationLoading] =
        useState(false);


    // -----------------------------------------
    // Emergency state
    // -----------------------------------------

    const [loading, setLoading] =
        useState(false);

    const [success, setSuccess] =
        useState("");

    const [error, setError] =
        useState("");

    const [emergencyResult, setEmergencyResult] =
        useState(null);


    // -----------------------------------------
    // Nearby assistance
    // -----------------------------------------

    const [facilities, setFacilities] =
        useState([]);

    const [assistanceLoading, setAssistanceLoading] =
        useState(false);

    const [assistanceError, setAssistanceError] =
        useState("");


    // -----------------------------------------
    // Form change
    // -----------------------------------------

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

    };


    // -----------------------------------------
    // Get GPS location
    // -----------------------------------------

    const getCurrentLocation = () => {

        setError("");
        setLocationLoading(true);

        if (!navigator.geolocation) {

            setLocationLoading(false);

            setError(
                "GPS location is not supported by your browser."
            );

            return;
        }


        navigator.geolocation.getCurrentPosition(

            (position) => {

                const latitude =
                    position.coords.latitude;

                const longitude =
                    position.coords.longitude;


                setLocation({
                    latitude,
                    longitude,
                });


                setLocationLoading(false);

            },

            (geoError) => {

                console.error(
                    "GPS error:",
                    geoError
                );

                setLocationLoading(false);


                if (geoError.code === 1) {

                    setError(
                        "Location permission denied. Please allow location access."
                    );

                } else if (geoError.code === 2) {

                    setError(
                        "Your current location could not be determined."
                    );

                } else if (geoError.code === 3) {

                    setError(
                        "Location request timed out. Please try again."
                    );

                } else {

                    setError(
                        "Unable to get your current location."
                    );
                }

            },

            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0,
            }

        );

    };


    // -----------------------------------------
    // Automatically get nearby assistance
    // when GPS location changes
    // -----------------------------------------

    useEffect(() => {

        if (!location) {
            return;
        }


        const loadNearbyAssistance = async () => {

            setAssistanceLoading(true);
            setAssistanceError("");


            try {

                const response =
                    await getNearbyAssistance(
                        location.latitude,
                        location.longitude
                    );


                /*
                 * Supports either:
                 *
                 * response = [...]
                 *
                 * or
                 *
                 * response = {
                 *     facilities: [...]
                 * }
                 */

                const nearby =
                    Array.isArray(response)
                        ? response
                        : response?.facilities || [];


                setFacilities(nearby);

            } catch (err) {

                console.error(
                    "Nearby assistance error:",
                    err
                );

                setFacilities([]);

                setAssistanceError(
                    err?.response?.data?.detail ||
                    "Unable to load nearby emergency services."
                );

            } finally {

                setAssistanceLoading(false);

            }

        };


        loadNearbyAssistance();

    }, [location]);


    // -----------------------------------------
    // Submit emergency
    // -----------------------------------------

    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");
        setEmergencyResult(null);


        try {

            // Get GPS automatically if not already available

            let currentLocation =
                location;


            if (!currentLocation) {

                if (!navigator.geolocation) {

                    throw new Error(
                        "GPS location is not supported."
                    );

                }


                currentLocation =
                    await new Promise(
                        (resolve, reject) => {

                            navigator.geolocation.getCurrentPosition(

                                (position) => {

                                    resolve({
                                        latitude:
                                            position.coords.latitude,

                                        longitude:
                                            position.coords.longitude,
                                    });

                                },

                                () => {

                                    reject(
                                        new Error(
                                            "Unable to obtain your current location."
                                        )
                                    );

                                },

                                {
                                    enableHighAccuracy: true,
                                    timeout: 15000,
                                    maximumAge: 0,
                                }

                            );

                        }
                    );


                setLocation(
                    currentLocation
                );

            }


            // ---------------------------------
            // Backend request
            // ---------------------------------

            const emergencyData = {

                message:
                    formData.description,

                category:
                    formData.category,

                language:
                    "auto",

                latitude:
                    currentLocation.latitude,

                longitude:
                    currentLocation.longitude,

                requirements:
                    formData.requirements,

            };


            console.log(
                "Emergency request:",
                emergencyData
            );


            const response =
                await createEmergency(
                    emergencyData
                );


            console.log(
                "Emergency created:",
                response
            );


            setEmergencyResult(
                response
            );


            setSuccess(
                "Emergency reported successfully. Nearby assistance is being coordinated."
            );


            // Do not immediately clear the category/result.
            // Clear only user-entered information.

            setFormData({
                category: formData.category,
                description: "",
                requirements: "",
            });


        } catch (err) {

            console.error(
                "Emergency submission failed:",
                err
            );


            setError(
                err?.response?.data?.detail ||
                err?.message ||
                "Unable to create emergency."
            );

        } finally {

            setLoading(false);

        }

    };


    // -----------------------------------------
    // Emergency Now
    // -----------------------------------------

    const handleEmergencyNow = async () => {

        setSuccess("");
        setError("");

        getCurrentLocation();

    };


    // -----------------------------------------
    // Navigate to facility
    // -----------------------------------------

    const handleNavigate = (
        facility
    ) => {

        if (!location) {
            return;
        }


        if (
            facility.latitude === undefined ||
            facility.longitude === undefined
        ) {
            return;
        }


        const destination =
            `${facility.latitude},${facility.longitude}`;


        const url =
            `https://www.google.com/maps/dir/?api=1&origin=${location.latitude},${location.longitude}&destination=${destination}`;


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    };


    // -----------------------------------------
    // Call facility
    // -----------------------------------------

    const handleCall = (
        phone
    ) => {

        if (!phone) {
            return;
        }


        window.location.href =
            `tel:${phone}`;

    };


    return (

        <div className="emergency-page">

            {/* ================================= */}
            {/* PAGE HEADER */}
            {/* ================================= */}

            <section className="emergency-header">

                <div className="emergency-header-content">

                    <span className="emergency-label">
                        EMERGENCY RESPONSE
                    </span>

                    <h1>
                        Emergency Assistance
                    </h1>

                    <p>
                        Report an emergency, share your
                        live location and quickly find
                        nearby emergency services.
                    </p>

                </div>


                <button
                    type="button"
                    className="emergency-now-button"
                    onClick={handleEmergencyNow}
                    disabled={locationLoading}
                >

                    <span className="emergency-now-icon">
                        🚨
                    </span>

                    <span>

                        {locationLoading
                            ? "Detecting Location..."
                            : "Emergency Now"}

                    </span>

                </button>

            </section>


            {/* ================================= */}
            {/* MESSAGES */}
            {/* ================================= */}

            {success && (

                <div className="success-message">

                    <span>✓</span>

                    {success}

                </div>

            )}


            {error && (

                <div className="error-message">

                    <span>⚠</span>

                    {error}

                </div>

            )}


            {/* ================================= */}
            {/* EMERGENCY RESULT */}
            {/* ================================= */}

            {emergencyResult && (

                <section className="emergency-result">

                    <div className="result-header">

                        <div>

                            <span className="result-label">
                                EMERGENCY CREATED
                            </span>

                            <h2>
                                Response Assessment
                            </h2>

                        </div>

                        <span
                            className={
                                `risk-badge risk-${(
                                    emergencyResult.risk_level ||
                                    emergencyResult.severity ||
                                    "medium"
                                )
                                    .toString()
                                    .toLowerCase()}`
                            }
                        >
                            {emergencyResult.risk_level ||
                                emergencyResult.severity ||
                                "Medium"}
                        </span>

                    </div>


                    <div className="result-grid">

                        <div className="result-item">

                            <span>
                                Emergency Type
                            </span>

                            <strong>
                                {
                                    emergencyResult.incident_type ||
                                    emergencyResult.category ||
                                    "Emergency"
                                }
                            </strong>

                        </div>


                        <div className="result-item">

                            <span>
                                Severity
                            </span>

                            <strong>
                                {
                                    emergencyResult.severity ||
                                    "Unknown"
                                }
                            </strong>

                        </div>


                        <div className="result-item">

                            <span>
                                Risk Level
                            </span>

                            <strong>
                                {
                                    emergencyResult.risk_level ||
                                    "Unknown"
                                }
                            </strong>

                        </div>


                        <div className="result-item">

                            <span>
                                Confidence
                            </span>

                            <strong>
                                {
                                    emergencyResult.confidence !==
                                    undefined
                                        ? `${Math.round(
                                            emergencyResult.confidence *
                                            100
                                        )}%`
                                        : "N/A"
                                }
                            </strong>

                        </div>

                    </div>


                    {emergencyResult.advice && (

                        <div className="emergency-advice">

                            <strong>
                                Immediate Guidance
                            </strong>

                            <p>
                                {emergencyResult.advice}
                            </p>

                        </div>

                    )}

                </section>

            )}


            {/* ================================= */}
            {/* MAIN EMERGENCY GRID */}
            {/* ================================= */}

            <section className="emergency-main-grid">

                {/* -------------------------------- */}
                {/* Emergency Form */}
                {/* -------------------------------- */}

                <form
                    className="emergency-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-header">

                        <div className="form-icon">
                            🚨
                        </div>

                        <div>

                            <h2>
                                Report Emergency
                            </h2>

                            <p>
                                Provide the essential details
                                for faster response.
                            </p>

                        </div>

                    </div>


                    {/* Emergency type */}

                    <div className="form-group">

                        <label htmlFor="category">
                            Emergency Type
                        </label>

                        <select
                            id="category"
                            name="category"
                            value={
                                formData.category
                            }
                            onChange={
                                handleChange
                            }
                        >

                            <option value="medical">
                                Medical Emergency
                            </option>

                            <option value="accident">
                                Accident
                            </option>

                            <option value="fire">
                                Fire
                            </option>

                            <option value="flood">
                                Flood
                            </option>

                            <option value="disaster">
                                Natural Disaster
                            </option>

                            <option value="other">
                                Other Emergency
                            </option>

                        </select>

                    </div>


                    {/* Description */}

                    <div className="form-group">

                        <div className="label-row">

                            <label htmlFor="description">
                                What happened?
                            </label>

                            <span>
                                {formData.description.length}/1000
                            </span>

                        </div>

                        <textarea
                            id="description"
                            name="description"
                            value={
                                formData.description
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Briefly describe the emergency..."
                            maxLength={1000}
                            required
                        />

                    </div>


                    {/* Requirements */}

                    <div className="form-group">

                        <label htmlFor="requirements">
                            Required Assistance
                        </label>

                        <textarea
                            id="requirements"
                            name="requirements"
                            value={
                                formData.requirements
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Example: Ambulance, police, hospital, shelter..."
                        />

                    </div>


                    {/* Location */}

                    <div className="location-box">

                        <div className="location-icon">
                            📍
                        </div>

                        <div className="location-info">

                            <strong>
                                Current Location
                            </strong>

                            {location ? (

                                <span className="location-detected">

                                    Location detected

                                    <small>
                                        {location.latitude.toFixed(6)}
                                        {" , "}
                                        {location.longitude.toFixed(6)}
                                    </small>

                                </span>

                            ) : (

                                <span>
                                    GPS location will be detected
                                    automatically.
                                </span>

                            )}

                        </div>


                        <button
                            type="button"
                            className="location-button"
                            onClick={
                                getCurrentLocation
                            }
                            disabled={
                                locationLoading
                            }
                        >

                            {locationLoading
                                ? "Detecting..."
                                : "Detect"}

                        </button>

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="emergency-submit"
                        disabled={loading}
                    >

                        <span>
                            {loading
                                ? "Sending Emergency..."
                                : "🚨 Report Emergency"}
                        </span>

                        {!loading && (
                            <span>→</span>
                        )}

                    </button>


                    <p className="form-security-note">
                        Your location is used only to
                        coordinate nearby emergency assistance.
                    </p>

                </form>


                {/* -------------------------------- */}
                {/* Emergency Card */}
                {/* -------------------------------- */}

                <div className="emergency-side-card">

                    <EmergencyCard />

                </div>

            </section>


            {/* ================================= */}
            {/* LOCATION + MAP */}
            {/* ================================= */}

            {location && (

                <section className="emergency-map-section">

                    <div className="section-header">

                        <div>

                            <span className="section-label">
                                LIVE LOCATION
                            </span>

                            <h2>
                                Your Emergency Location
                            </h2>

                            <p>
                                Nearby emergency services
                                are displayed around your current
                                location.
                            </p>

                        </div>


                        <div className="gps-status">

                            <span className="gps-dot"></span>

                            GPS Active

                        </div>

                    </div>


                    <div className="map-wrapper">

                        <EmergencyMap
                            latitude={
                                location.latitude
                            }
                            longitude={
                                location.longitude
                            }
                            facilities={
                                facilities
                            }
                        />

                    </div>

                </section>

            )}


            {/* ================================= */}
            {/* NEARBY ASSISTANCE */}
            {/* ================================= */}

            {location && (

                <section className="nearby-section">

                    <div className="section-header">

                        <div>

                            <span className="section-label">
                                NEARBY HELP
                            </span>

                            <h2>
                                Emergency Services Near You
                            </h2>

                            <p>
                                Find and contact the closest
                                police, hospitals, fire stations
                                and safety centres.
                            </p>

                        </div>

                    </div>


                    {assistanceLoading && (

                        <div className="assistance-loading">

                            <div className="loading-spinner"></div>

                            <span>
                                Finding nearby emergency services...
                            </span>

                        </div>

                    )}


                    {assistanceError && (

                        <div className="assistance-error">

                            ⚠ {assistanceError}

                        </div>

                    )}


                    {!assistanceLoading &&
                        !assistanceError && (

                            <NearbyAssistance
                                latitude={
                                    location.latitude
                                }
                                longitude={
                                    location.longitude
                                }
                                facilities={
                                    facilities
                                }
                                onCall={
                                    handleCall
                                }
                                onNavigate={
                                    handleNavigate
                                }
                            />

                        )}

                </section>

            )}


            {/* ================================= */}
            {/* NO LOCATION STATE */}
            {/* ================================= */}

            {!location && (

                <section className="location-empty-state">

                    <div className="empty-icon">
                        📍
                    </div>

                    <h2>
                        Enable Your Location
                    </h2>

                    <p>
                        Click <strong>Emergency Now</strong> to
                        detect your location and find the nearest
                        emergency services.
                    </p>

                    <button
                        type="button"
                        onClick={
                            getCurrentLocation
                        }
                        disabled={
                            locationLoading
                        }
                    >

                        {locationLoading
                            ? "Detecting Location..."
                            : "📍 Detect My Location"}

                    </button>

                </section>

            )}

        </div>

    );

};


export default Emergency;