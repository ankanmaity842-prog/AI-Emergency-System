
import { useCallback, useEffect, useRef, useState } from "react";
import {
    AlertTriangle,
    Ambulance,
    CheckCircle2,
    Cross,
    Flame,
    Loader2,
    MapPin,
    Navigation,
    Phone,
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
        description: "Illness, injury or medical emergency",
        icon: Cross,
    },
    {
        value: "accident",
        title: "Accident",
        description: "Road accident or serious injury",
        icon: TriangleAlert,
    },
    {
        value: "disaster",
        title: "Disaster",
        description: "Fire, flood or other major hazard",
        icon: Flame,
    },
];

const initialForm = {
    category: "medical",
    description: "",
    requirements: "",
};

const Emergency = () => {
    const {
        submitEmergency,
        currentEmergency,
        loading,
        error,
        clearCurrentEmergency,
    } = useEmergency();

    const formRef = useRef(null);

    const [formData, setFormData] = useState(initialForm);
    const [location, setLocation] = useState(null);
    const [locationLoading, setLocationLoading] = useState(false);
    const [locationError, setLocationError] = useState("");
    const [submittedEmergency, setSubmittedEmergency] = useState(null);
    const [facilities, setFacilities] = useState([]);

    const emergencyResult = submittedEmergency || currentEmergency;
    const success = Boolean(emergencyResult);

    const getCurrentLocation = useCallback(() => {
        if (!navigator.geolocation) {
            setLocationError(
                "Location is not supported by this browser."
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
            (err) => {
                const messages = {
                    1: "Location permission was denied. Enable location access and try again.",
                    2: "Your location could not be determined.",
                    3: "The location request timed out. Please try again.",
                };

                setLocationError(
                    messages[err.code] ||
                    "Unable to retrieve your location."
                );

                setLocationLoading(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 30000,
            }
        );
    }, []);

    useEffect(() => {
        getCurrentLocation();
    }, [getCurrentLocation]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSelectType = (category) => {
        setFormData((previous) => ({
            ...previous,
            category,
        }));
    };

    const handleFacilitiesLoaded = useCallback((items) => {
        setFacilities(Array.isArray(items) ? items : []);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const description = formData.description.trim();

        if (!description || loading) {
            return;
        }

        setSubmittedEmergency(null);
        setLocationError("");

        const emergencyData = {
            message: description,
            category: formData.category,
            language: "auto",
            latitude: location?.latitude ?? null,
            longitude: location?.longitude ?? null,
            location: location
                ? `${location.latitude}, ${location.longitude}`
                : null,
            requirements: formData.requirements.trim(),
        };

        try {
            const result = await submitEmergency(emergencyData);

            if (result) {
                setSubmittedEmergency(result);
                formRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        } catch (err) {
            // The useEmergency hook supplies the displayed error.
            console.error("Emergency submission failed:", err);
        }
    };

    const handleNewEmergency = () => {
        setSubmittedEmergency(null);
        setFormData(initialForm);
        setFacilities([]);
        clearCurrentEmergency?.();

        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const isAuthError =
        typeof error === "string" &&
        /auth|token|login|unauthorized/i.test(error);

    return (
        <main className="emergency-page">
            <header className="emergency-header">
                <div>
                    <span className="emergency-eyebrow">
                        SAFE GUARDIAN
                    </span>

                    <h1>Emergency Assistance</h1>

                    <p>
                        Report an emergency, share your location,
                        and find nearby help.
                    </p>
                </div>

                <a className="emergency-call" href="tel:112">
                    <Phone size={19} />
                    Call 112
                </a>
            </header>

            {error && (
                <div className="emergency-error" role="alert">
                    <AlertTriangle size={20} />

                    <div>
                        <strong>
                            {isAuthError
                                ? "Authentication required"
                                : "Unable to submit emergency"}
                        </strong>

                        <p>
                            {typeof error === "string"
                                ? error
                                : "Please try again."}
                        </p>

                        {isAuthError && (
                            <a href="/login">Sign in</a>
                        )}
                    </div>
                </div>
            )}

            {success && (
                <section className="emergency-success" aria-live="polite">
                    <CheckCircle2 size={28} />

                    <div className="success-content">
                        <h2>Emergency request submitted</h2>

                        <p>
                            {emergencyResult?.advice ||
                                "Your request was accepted by the emergency service."}
                        </p>

                        <div className="success-meta">
                            <span>
                                ID: {emergencyResult?.id ?? "Not provided"}
                            </span>

                            <span>
                                Status: {emergencyResult?.status || "Submitted"}
                            </span>

                            <span>
                                Risk: {emergencyResult?.risk_level || "Not provided"}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="secondary-button"
                            onClick={handleNewEmergency}
                        >
                            Report another emergency
                        </button>
                    </div>
                </section>
            )}

            <div className="emergency-grid">
                <section className="emergency-card" ref={formRef}>
                    <div className="section-heading">
                        <h2>Report an emergency</h2>
                        <p>
                            Provide the details needed to understand
                            the situation.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <fieldset
                            className="emergency-type-fieldset"
                            disabled={loading || success}
                        >
                            <legend>Emergency type</legend>

                            <div className="emergency-type-grid">
                                {emergencyTypes.map((type) => {
                                    const Icon = type.icon;
                                    const selected =
                                        formData.category === type.value;

                                    return (
                                        <button
                                            type="button"
                                            key={type.value}
                                            className={`emergency-type ${
                                                selected ? "selected" : ""
                                            }`}
                                            aria-pressed={selected}
                                            onClick={() =>
                                                handleSelectType(type.value)
                                            }
                                        >
                                            <Icon size={22} />

                                            <span>
                                                <strong>{type.title}</strong>
                                                <small>{type.description}</small>
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </fieldset>

                        <div className="form-field">
                            <div className="field-heading">
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
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Describe the emergency..."
                                maxLength={1000}
                                rows={5}
                                required
                                disabled={loading || success}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="requirements">
                                What help is needed? (Optional)
                            </label>

                            <input
                                id="requirements"
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                placeholder="For example, ambulance or medical assistance"
                                disabled={loading || success}
                            />
                        </div>

                        <div className="location-panel">
                            <MapPin size={22} />

                            <div className="location-info">
                                <strong>Your location</strong>

                                {location ? (
                                    <>
                                        <span>
                                            {location.latitude.toFixed(6)},{" "}
                                            {location.longitude.toFixed(6)}
                                        </span>

                                        <small>
                                            Approximate accuracy:{" "}
                                            {Math.round(location.accuracy)} m
                                        </small>
                                    </>
                                ) : (
                                    <span>
                                        {locationLoading
                                            ? "Getting your location..."
                                            : "Location unavailable"}
                                    </span>
                                )}
                            </div>

                            <button
                                type="button"
                                className="location-button"
                                onClick={getCurrentLocation}
                                disabled={locationLoading || success}
                            >
                                {locationLoading ? (
                                    <Loader2 size={17} className="spin" />
                                ) : (
                                    <Navigation size={17} />
                                )}

                                Refresh
                            </button>
                        </div>

                        {locationError && (
                            <p className="location-error" role="alert">
                                {locationError}
                            </p>
                        )}

                        <p className="form-note">
                            You can submit a report even if GPS is unavailable.
                        </p>

                        {!success && (
                            <button
                                type="submit"
                                className="submit-button"
                                disabled={
                                    loading ||
                                    !formData.description.trim()
                                }
                            >
                                {loading ? (
                                    <>
                                        <Loader2
                                            size={19}
                                            className="spin"
                                        />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <AlertTriangle size={19} />
                                        Submit emergency
                                    </>
                                )}
                            </button>
                        )}
                    </form>
                </section>

                <aside className="emergency-sidebar">
                    <section className="quick-help-card">
                        <h2>Emergency contacts</h2>
                        <p>
                            For immediate danger, contact emergency
                            services directly.
                        </p>

                        <a href="tel:112" className="contact-link">
                            <Phone size={19} />
                            <span>
                                <strong>112</strong>
                                <small>Emergency helpline</small>
                            </span>
                        </a>

                        <a href="tel:108" className="contact-link">
                            <Ambulance size={19} />
                            <span>
                                <strong>108</strong>
                                <small>Ambulance service</small>
                            </span>
                        </a>
                    </section>

                    <section className="nearby-card">
                        <h2>Nearby assistance</h2>
                        <p>
                            Find nearby hospitals, police stations,
                            and safety centres.
                        </p>

                        {location ? (
                            <NearbyAssistance
                                latitude={location.latitude}
                                longitude={location.longitude}
                                radius={5000}
                                onFacilitiesLoaded={handleFacilitiesLoaded}
                            />
                        ) : (
                            <p className="muted-text">
                                Enable location access to search for nearby help.
                            </p>
                        )}
                    </section>
                </aside>
            </div>

            {location && (
                <section className="emergency-map-section">
                    <div className="section-heading">
                        <h2>Emergency location map</h2>
                        <p>
                            Your position and available nearby facilities.
                        </p>
                    </div>

                    <div className="emergency-map-frame">
                        <EmergencyMap
                            latitude={location.latitude}
                            longitude={location.longitude}
                            radius={5000}
                            facilities={facilities}
                        />
                    </div>
                </section>
            )}
        </main>
    );
};

export default Emergency;
