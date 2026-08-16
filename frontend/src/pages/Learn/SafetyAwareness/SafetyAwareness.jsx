import React, { useState } from "react";
import {
    ShieldCheck,
    Languages,
    ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

import safetyGuidance from "../../../data/guidance/safetyAwareness";

import "./SafetyAwareness.css";

const SafetyAwareness = () => {
    const [language, setLanguage] = useState("en");

    const content = safetyGuidance[language];

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
        <div className="safety-awareness-page">

            <section className="safety-awareness-header">

                <Link
                    to="/learn"
                    className="safety-awareness-back"
                >
                    <ArrowLeft size={17} />
                    {backLabels[language]}
                </Link>

                <div className="safety-awareness-header-content">

                    <div className="safety-awareness-icon">
                        <ShieldCheck size={28} />
                    </div>

                    <span>
                        EVERYDAY SAFETY AWARENESS
                    </span>

                    <h1>
                        {content.title}
                    </h1>

                    <p>
                        {content.description}
                    </p>

                </div>

                <div className="safety-awareness-language">

                    <Languages size={18} />

                    <label htmlFor="safety-language">
                        {languageLabels[language]}
                    </label>

                    <select
                        id="safety-language"
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

            <main className="safety-awareness-content">

                {content.topics.map((topic) => (

                    <article
                        className="safety-awareness-card"
                        key={topic.id}
                    >

                        <h2>
                            {topic.title}
                        </h2>

                        <p>
                            {topic.description}
                        </p>

                        <h3>
                            {content.safetyTips}
                        </h3>

                        <ul>
                            {topic.tips.map(
                                (tip, index) => (
                                    <li key={index}>
                                        {tip}
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

export default SafetyAwareness;