import React, { useState } from "react";
import {
    Backpack,
    Languages,
    ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

import preparednessGuidance from "../../../data/guidance/emergencyPreparedness";

import "./EmergencyPreparedness.css";

const EmergencyPreparedness = () => {
    const [language, setLanguage] = useState("en");

    const content = preparednessGuidance[language];

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
        <div className="preparedness-page">

            <section className="preparedness-header">

                <Link
                    to="/learn"
                    className="preparedness-back"
                >
                    <ArrowLeft size={17} />
                    {backLabels[language]}
                </Link>

                <div className="preparedness-header-content">

                    <div className="preparedness-icon">
                        <Backpack size={28} />
                    </div>

                    <span>
                        EMERGENCY PREPAREDNESS
                    </span>

                    <h1>
                        {content.title}
                    </h1>

                    <p>
                        {content.description}
                    </p>

                </div>

                <div className="preparedness-language">

                    <Languages size={18} />

                    <label htmlFor="preparedness-language">
                        {languageLabels[language]}
                    </label>

                    <select
                        id="preparedness-language"
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

            <main className="preparedness-content">

                {content.topics.map((topic) => (

                    <article
                        className="preparedness-card"
                        key={topic.id}
                    >

                        <h2>
                            {topic.title}
                        </h2>

                        <p>
                            {topic.description}
                        </p>

                        <ul>
                            {topic.items.map(
                                (item, index) => (
                                    <li key={index}>
                                        {item}
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

export default EmergencyPreparedness;