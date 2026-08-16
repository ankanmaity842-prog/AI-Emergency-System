import React, { useState } from "react";
import { AlertTriangle, Languages, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import medicalGuidance from "../../../data/guidance/medical";

import "./Medical.css";

const Medical = () => {
    const [language, setLanguage] = useState("en");

    const content = medicalGuidance[language];

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
        <div className="guidance-page">

            <section className="guidance-header medical-header">

                <Link
                    to="/learn"
                    className="guidance-back"
                >
                    <ArrowLeft size={17} />
                    {backLabels[language]}
                </Link>

                <div className="guidance-header-content">

                    <div className="guidance-icon">
                        <AlertTriangle size={28} />
                    </div>

                    <span>
                        MEDICAL EMERGENCY AWARENESS
                    </span>

                    <h1>
                        {content.title}
                    </h1>

                    <p>
                        {content.description}
                    </p>

                </div>

                <div className="language-control">

                    <Languages size={18} />

                    <label htmlFor="medical-language">
                        {languageLabels[language]}
                    </label>

                    <select
                        id="medical-language"
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

            <main className="guidance-content">

                {content.topics.map((topic) => (

                    <article
                        className="guidance-topic"
                        key={topic.id}
                    >

                        <h2>
                            {topic.title}
                        </h2>

                        <p>
                            {topic.description}
                        </p>

                        {topic.warning && (
                            <div className="guidance-warning">

                                <AlertTriangle size={19} />

                                <span>
                                    {topic.warning}
                                </span>

                            </div>
                        )}

                        <h3>
                            {content.whatToDo}
                        </h3>

                        <ul>
                            {topic.actions.map(
                                (action, index) => (
                                    <li key={index}>
                                        {action}
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

export default Medical;