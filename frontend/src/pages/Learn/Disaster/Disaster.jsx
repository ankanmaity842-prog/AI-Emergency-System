import React, { useState } from "react";
import {
    CloudLightning,
    Languages,
    ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

import disasterGuidance from "../../../data/guidance/disaster";

import "./Disaster.css";

const Disaster = () => {
    const [language, setLanguage] = useState("en");

    const content = disasterGuidance[language];
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
        <div className="disaster-page">
            <section className="disaster-header">
                <Link
                    to="/learn"
                    className="disaster-back"
                >
                    <ArrowLeft size={17} />
                    Safety Knowledge
                </Link>

                <div className="disaster-header-content">
                    <div className="disaster-icon">
                        <CloudLightning size={28} />
                    </div>

                    <span>
                        DISASTER PREPAREDNESS
                    </span>

                    <h1>
                        {content.title}
                    </h1>

                    <p>
                        {content.description}
                    </p>
                </div>

                <div className="disaster-language">
                    <Languages size={18} />

                    <label htmlFor="disaster-language">
                       Select Language
                    </label>

                    <select
                        id="disaster-language"
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

            <main className="disaster-content">
                {content.topics.map((topic) => (
                    <article
                        className="disaster-card"
                        key={topic.id}
                    >
                        <h2>
                            {topic.title}
                        </h2>

                        <p>
                            {topic.description}
                        </p>

                        <div className="disaster-columns">
                            <div>
                                <h3>
                                    {content.before}
                                </h3>

                                <ul>
                                    {topic.before.map(
                                        (item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3>
                                    {content.during}
                                </h3>

                                <ul>
                                    {topic.during.map(
                                        (item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3>
                                    {content.after}
                                </h3>

                                <ul>
                                    {topic.after.map(
                                        (item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    );
};

export default Disaster;