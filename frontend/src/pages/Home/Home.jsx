import { useNavigate } from "react-router-dom";
import {
    ShieldCheck,
    Siren,
    MessageCircle,
    BellRing,
    FileText,
    HeartPulse,
    Mic,
    Upload,
    BookOpen,
    ArrowRight,
    CheckCircle,
    Users,
    Hospital,
    LifeBuoy,
} from "lucide-react";

import { useAuthContext } from "../../context/AuthContext";

import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    const {
        isAuthenticated,
        loading,
    } = useAuthContext();

    const handleProtectedNavigation = (path) => {
        if (loading) {
            return;
        }

        if (isAuthenticated) {
            navigate(path);
        } else {
            navigate("/login", {
                state: {
                    from: {
                        pathname: path,
                    },
                },
            });
        }
    };

    const handleGetStarted = () => {
        if (loading) {
            return;
        }

        if (isAuthenticated) {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="home-page">

            <Navbar />

            <main>

                {/* Hero Section */}
                <section className="hero-section">

                    <div className="hero-content">

                        <h1>
                            Stay Prepared.
                            <span>Stay Protected.</span>
                        </h1>

                        <p>
                            Safe Guardian helps you respond to emergencies,
                            understand critical safety situations, access
                            emergency guidance, and connect with intelligent
                            assistance when it matters most.
                        </p>

                        <div className="hero-actions">

                            <button
                                className="primary-button"
                                onClick={handleGetStarted}
                            >
                                {isAuthenticated
                                    ? "Go to Dashboard"
                                    : "Get Started"}

                                <ArrowRight size={18} />
                            </button>

                            <button
                                className="secondary-button"
                                onClick={() => navigate("/learn")}
                            >
                                Explore Safety
                                <BookOpen size={18} />
                            </button>

                        </div>

                        <div className="hero-points">

                            <div>
                                <CheckCircle size={17} />
                                Emergency assistance
                            </div>

                            <div>
                                <CheckCircle size={17} />
                                Multilingual safety awareness
                            </div>

                            <div>
                                <CheckCircle size={17} />
                                AI-powered guidance
                            </div>

                        </div>

                    </div>

                    <div className="hero-visual">

                        <div className="emergency-shield">

                            <div className="shield-content">

                                <div className="shield-icon">
                                    <ShieldCheck
                                        size={34}
                                        strokeWidth={2.2}
                                    />
                                </div>

                                <span className="shield-label">
                                    EMERGENCY READY
                                </span>

                                <h3>
                                    Help when it matters.
                                </h3>

                                <p>
                                    Fast emergency assistance and essential
                                    safety guidance when you need it.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* Features Section */}
                <section
                    className="features-section"
                    id="features"
                >

                    <div className="section-heading">

                        <span className="section-label">
                            CORE FEATURES
                        </span>

                        <h2>
                            Essential tools for emergency situations
                        </h2>

                        <p>
                            Access emergency response, assistance,
                            alerts and incident management from one platform.
                        </p>

                    </div>

                    <div className="features-grid">

                        {/* Emergency Response */}
                        <div className="feature-card">

                            <div className="feature-icon emergency">
                                <Siren size={25} />
                            </div>

                            <h3>
                                Emergency Response
                            </h3>

                            <p>
                                Report an emergency and provide important
                                information to support a faster response.
                            </p>

                            <button
                                onClick={() =>
                                    handleProtectedNavigation(
                                        "/emergency"
                                    )
                                }
                            >
                                Access Emergency
                                <ArrowRight size={16} />
                            </button>

                        </div>

                        {/* Medical Assistance - PUBLIC */}
                        <div className="feature-card">

                            <div className="feature-icon medical">
                                <HeartPulse size={25} />
                            </div>

                            <h3>
                                Medical Assistance
                            </h3>

                            <p>
                                Explore practical information about medical
                                emergencies and appropriate first actions.
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/learn/medical")
                                }
                            >
                                Explore Medical Guidance
                                <ArrowRight size={16} />
                            </button>

                        </div>

                        {/* AI Chat & Voice */}
                        <div className="feature-card">

                            <div className="feature-icon chatbot">
                                <MessageCircle size={25} />
                            </div>

                            <h3>
                                AI Chat & Voice
                            </h3>

                            <p>
                                Communicate with the AI emergency assistant
                                through text or voice for personalized support.
                            </p>

                            <button
                                onClick={() =>
                                    handleProtectedNavigation(
                                        "/chat"
                                    )
                                }
                            >
                                Try AI Assistance
                                <ArrowRight size={16} />
                            </button>

                        </div>

                        {/* Emergency Alerts */}
                        <div className="feature-card">

                            <div className="feature-icon alerts">
                                <BellRing size={25} />
                            </div>

                            <h3>
                                Emergency Alerts
                            </h3>

                            <p>
                                Receive important emergency notifications
                                and keep track of relevant safety updates.
                            </p>

                            <button
                                onClick={() =>
                                    handleProtectedNavigation(
                                        "/notifications"
                                    )
                                }
                            >
                                Explore Alert Features
                                <ArrowRight size={16} />
                            </button>

                        </div>

                        {/* Incident Reports */}
                        <div className="feature-card">

                            <div className="feature-icon reports">
                                <FileText size={25} />
                            </div>

                            <h3>
                                Incident Reports
                            </h3>

                            <p>
                                Review previous emergency activity and
                                maintain records of important incidents.
                            </p>

                            <button
                                onClick={() =>
                                    handleProtectedNavigation(
                                        "/reports"
                                    )
                                }
                            >
                                Explore Reports
                                <ArrowRight size={16} />
                            </button>

                        </div>

                        {/* Voice Assistance */}
                        <div className="feature-card">

                            <div className="feature-icon voice">
                                <Mic size={25} />
                            </div>

                            <h3>
                                Voice Assistance
                            </h3>

                            <p>
                                Use voice interaction when typing is difficult
                                or when rapid communication is required.
                            </p>

                            <button
                                onClick={() =>
                                    handleProtectedNavigation(
                                        "/chat"
                                    )
                                }
                            >
                                Explore Voice Support
                                <ArrowRight size={16} />
                            </button>

                        </div>

                    </div>

                </section>

                {/* Registered User Section */}
                <section className="registered-section">

                    <div className="registered-content">

                        <span className="section-label">
                            PERSONALIZED PROTECTION
                        </span>

                        <h2>
                            {isAuthenticated
                                ? "Your emergency toolkit is ready"
                                : "Unlock your personal emergency toolkit"}
                        </h2>

                        <p>
                            Safety information is available to everyone.
                            {isAuthenticated
                                ? " Access your personalized emergency tools, AI assistance, alerts, reports and additional response features."
                                : " Create an account to access personalized emergency tools, AI assistance, alerts, reports and additional response features."}
                        </p>

                        <button
                            className="primary-button"
                            onClick={() =>
                                isAuthenticated
                                    ? navigate("/dashboard")
                                    : navigate("/register")
                            }
                        >
                            {isAuthenticated
                                ? "Go to Dashboard"
                                : "Create Your Account"}

                            <ArrowRight size={18} />
                        </button>

                    </div>

                    <div className="registered-features">

                        <div>
                            <ShieldCheck size={20} />
                            Personalized emergency access
                        </div>

                        <div>
                            <MessageCircle size={20} />
                            AI chat and voice assistance
                        </div>

                        <div>
                            <BellRing size={20} />
                            Emergency notifications
                        </div>

                        <div>
                            <FileText size={20} />
                            Incident history and reports
                        </div>

                        <div>
                            <Upload size={20} />
                            Image and document assistance
                        </div>

                    </div>

                </section>

                {/* Safety Section */}
                <section
                    className="safety-section"
                    id="safety"
                >

                    <div className="section-heading">

                        <span className="section-label">
                            SAFETY & AWARENESS
                        </span>

                        <h2>
                            Learn what to do before an emergency happens
                        </h2>

                        <p>
                            Explore practical guidance covering medical
                            situations, first aid, disasters, healthcare,
                            emergency preparedness and everyday safety.
                        </p>

                    </div>

                    <div className="safety-preview">

                        <div className="safety-preview-card">

                            <div className="safety-card-icon medical">
                                <HeartPulse size={24} />
                            </div>

                            <h3>
                                Medical Guidance
                            </h3>

                            <p>
                                Learn about common medical emergency
                                situations and appropriate immediate actions.
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/learn/medical")
                                }
                            >
                                Explore Medical Guidance
                                <ArrowRight size={16} />
                            </button>

                        </div>

                        <div className="safety-preview-card">

                            <div className="safety-card-icon first-aid">
                                <LifeBuoy size={24} />
                            </div>

                            <h3>
                                First Aid
                            </h3>

                            <p>
                                Learn basic first-aid principles and what
                                actions may help before professional
                                assistance arrives.
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/learn/first-aid")
                                }
                            >
                                Learn First Aid
                                <ArrowRight size={16} />
                            </button>

                        </div>

                        <div className="safety-preview-card">

                            <div className="safety-card-icon disaster">
                                <Siren size={24} />
                            </div>

                            <h3>
                                Disaster Preparedness
                            </h3>

                            <p>
                                Understand how to prepare for disasters and
                                protect yourself, your family and community.
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/learn/disaster")
                                }
                            >
                                Prepare for Disasters
                                <ArrowRight size={16} />
                            </button>

                        </div>

                        <div className="safety-preview-card">

                            <div className="safety-card-icon healthcare">
                                <Hospital size={24} />
                            </div>

                            <h3>
                                Healthcare Guidance
                            </h3>

                            <p>
                                Explore useful healthcare awareness information
                                and learn how to respond responsibly.
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/learn/healthcare")
                                }
                            >
                                Explore Healthcare
                                <ArrowRight size={16} />
                            </button>

                        </div>

                    </div>

                    <button
                        className="safety-main-button"
                        onClick={() => navigate("/learn")}
                    >
                        Explore All Safety Guidance
                        <ArrowRight size={18} />
                    </button>

                </section>

                {/* Awareness Section */}
                <section className="awareness-section">

                    <div className="awareness-content">

                        <div className="awareness-icon">
                            <Users size={30} />
                        </div>

                        <span className="section-label">
                            EMERGENCY AWARENESS
                        </span>

                        <h2>
                            Knowledge can make a difference before help arrives
                        </h2>

                        <p>
                            Safe Guardian provides accessible educational
                            resources so people can understand emergency
                            situations, prepare in advance and make informed
                            decisions during critical moments.
                        </p>

                        <button
                            className="secondary-button"
                            onClick={() => navigate("/learn")}
                        >
                            Explore Safety Resources
                            <BookOpen size={18} />
                        </button>

                    </div>

                </section>

                {/* Final CTA */}
                <section className="final-cta">

                    <div>

                        <ShieldCheck size={34} />

                        <h2>
                            Be prepared before you need help.
                        </h2>

                        <p>
                            Explore safety guidance for free or create an
                            account to unlock Safe Guardian's personalized
                            emergency features.
                        </p>

                        <div className="final-actions">

                            <button
                                className="primary-button"
                                onClick={() =>
                                    isAuthenticated
                                        ? navigate("/dashboard")
                                        : navigate("/register")
                                }
                            >
                                {isAuthenticated
                                    ? "Go to Dashboard"
                                    : "Create Account"}

                                <ArrowRight size={18} />
                            </button>

                            <button
                                className="secondary-button"
                                onClick={() =>
                                    navigate("/learn")
                                }
                            >
                                Explore Safety
                                <BookOpen size={18} />
                            </button>

                        </div>

                    </div>

                </section>

            </main>

            <footer className="home-footer">

                <div className="footer-logo">
                    <ShieldCheck size={22} />
                    <span>Safe Guardian</span>
                </div>

                <p>
                    Emergency awareness and response made accessible.
                </p>

                <span>
                    © 2026 Safe Guardian
                </span>

            </footer>

        </div>
    );
};

export default Home;