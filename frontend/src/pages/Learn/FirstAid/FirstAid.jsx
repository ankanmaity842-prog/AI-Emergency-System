import React, { useState } from "react";
import {
    HandHeart,
    Languages,
    ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

import firstAidGuidance from "../../../data/guidance/firstAid";

import "./FirstAid.css";

const FirstAid = () => {
    const [language, setLanguage] = useState("en");

    const content = firstAidGuidance[language];

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
        <div className="first-aid-page">

            <section className="first-aid-header">

                <Link
                    to="/learn"
                    className="first-aid-back"
                >
                    <ArrowLeft size={17} />
                    {backLabels[language]}
                </Link>

                <div className="first-aid-header-content">

                    <div className="first-aid-icon">
                        <HandHeart size={28} />
                    </div>

                    <span>
                        FIRST AID AWARENESS
                    </span>

                    <h1>
                        {content.title}
                    </h1>

                    <p>
                        {content.description}
                    </p>

                </div>

                <div className="first-aid-language">

                    <Languages size={18} />

                    <label htmlFor="first-aid-language">
                        {languageLabels[language]}
                    </label>

                    <select
                        id="first-aid-language"
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

            <main className="first-aid-content">

                <div className="first-aid-notice">
                    {content.notice}
                </div>

                {content.topics.map((topic) => (

                    <article
                        className="first-aid-card"
                        key={topic.id}
                    >

                        <h2>
                            {topic.title}
                        </h2>

                        <p>
                            {topic.description}
                        </p>

                        <h3>
                            {content.steps}
                        </h3>

                        <ol>
                            {topic.steps.map(
                                (step, index) => (
                                    <li key={index}>
                                        {step}
                                    </li>
                                )
                            )}
                        </ol>

                    </article>

                ))}

            </main>

        </div>
    );
};

export default FirstAid;