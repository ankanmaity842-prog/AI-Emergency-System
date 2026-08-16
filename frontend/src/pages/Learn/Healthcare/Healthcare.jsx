import React, { useState } from "react";
import {
    Hospital,
    Languages,
    ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

import healthcareGuidance from "../../../data/guidance/healthcare";

import "./Healthcare.css";

const Healthcare = () => {
    const [language, setLanguage] = useState("en");

    const content = healthcareGuidance[language];

    const languageLabels = {
        en: "Select Language",
        hi: "भाषा चुनें",
        bn: "ভাষা নির্বাচন করুন"
    };

    const backLabels = {
        en: "Safety Knowledge",
        hi: "सुरक्षा ज्ञान",
        bn: "নিরাপত্তা জ্ঞান"
    };

    return (
        <div className="healthcare-page">

            <section className="healthcare-header">

                <Link
                    to="/learn"
                    className="healthcare-back"
                >
                    <ArrowLeft size={17} />
                    {backLabels[language]}
                </Link>

                <div className="healthcare-header-content">

                    <div className="healthcare-icon">
                        <Hospital size={28} />
                    </div>

                    <span>
                        HEALTHCARE ASSISTANCE
                    </span>

                    <h1>
                        {content.title}
                    </h1>

                    <p>
                        {content.description}
                    </p>

                </div>

                <div className="healthcare-language">

                    <Languages size={18} />

                    <label htmlFor="healthcare-language">
                        {languageLabels[language]}
                    </label>

                    <select
                        id="healthcare-language"
                        value={language}
                        onChange={(e) =>
                            setLanguage(e.target.value)
                        }
                    >
                        <option value="en">
                            English
                        </option>

                        <option value="hi">
                            हिंदी
                        </option>

                        <option value="bn">
                            বাংলা
                        </option>
                    </select>

                </div>

            </section>

            <main className="healthcare-content">

                {content.topics.map((topic) => (

                    <article
                        className="healthcare-card"
                        key={topic.id}
                    >

                        <h2>
                            {topic.title}
                        </h2>

                        <p>
                            {topic.description}
                        </p>

                        <h3>
                            {content.remember}
                        </h3>

                        <ul>
                            {topic.points.map(
                                (point, index) => (
                                    <li key={index}>
                                        {point}
                                    </li>
                                )
                            )}
                        </ul>

                    </article>

                ))}

            </main>

        </div>
    );
};

export default Healthcare;