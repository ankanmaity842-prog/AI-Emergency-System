import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    HeartPulse,
    HandHeart,
    CloudLightning,
    Hospital,
    ShieldCheck,
    Backpack,
    ArrowRight,
    BookOpen,
    Languages
} from "lucide-react";

import "./LearnHub.css";

const LearnHub = () => {
    const [language, setLanguage] = useState("en");

    const content = {
        en: {
            badge: "SAFETY KNOWLEDGE CENTER",
            title1: "Learn today.",
            title2: " Be prepared tomorrow.",
            heroDescription:
                "Explore practical emergency and safety information designed to help you understand risks, prepare beforehand and respond more confidently when emergencies occur.",
            languageDescription:
                "Select your preferred language to explore safety guidance and emergency information.",
            selectLanguage: "Select Language",

            sectionLabel: "EXPLORE SAFETY KNOWLEDGE",
            sectionTitle: "Knowledge that can make a difference",
            sectionDescription:
                "Choose a topic to learn about emergency response, first aid, disaster preparedness and everyday safety.",

            sections: [
                {
                    title: "Medical Emergencies",
                    description:
                        "Understand warning signs and learn how to respond to common medical emergencies.",
                    action: "Know the Warning Signs",
                    path: "/learn/medical"
                },
                {
                    title: "First Aid",
                    description:
                        "Learn essential first-response steps that can help until professional assistance arrives.",
                    action: "Learn What to Do",
                    path: "/learn/first-aid"
                },
                {
                    title: "Disaster Preparedness",
                    description:
                        "Learn how to prepare for, respond to and recover from common disaster situations.",
                    action: "Prepare Before It Happens",
                    path: "/learn/disaster"
                },
                {
                    title: "Healthcare Assistance",
                    description:
                        "Understand when and where to seek appropriate medical and emergency assistance.",
                    action: "Find the Right Help",
                    path: "/learn/healthcare"
                },
                {
                    title: "Safety Awareness",
                    description:
                        "Build awareness about everyday hazards, accident prevention and public safety.",
                    action: "Build Safety Awareness",
                    path: "/learn/safety-awareness"
                },
                {
                    title: "Emergency Preparedness",
                    description:
                        "Prepare yourself and your family with essential plans, supplies and emergency information.",
                    action: "Prepare Your Safety Plan",
                    path: "/learn/emergency-preparedness"
                }
            ]
        },

        hi: {
            badge: "सुरक्षा ज्ञान केंद्र",
            title1: "आज सीखें।",
            title2: " कल के लिए तैयार रहें।",
            heroDescription:
                "आपातकाल और सुरक्षा से जुड़ी उपयोगी जानकारी जानें, जोखिमों को समझें, पहले से तैयारी करें और आपात स्थिति में सही कदम उठाने का आत्मविश्वास बढ़ाएँ।",
            languageDescription:
                "सुरक्षा मार्गदर्शन और आपातकालीन जानकारी को बेहतर ढंग से समझने के लिए अपनी पसंदीदा भाषा चुनें।",
            selectLanguage: "भाषा चुनें",

            sectionLabel: "सुरक्षा ज्ञान का अन्वेषण करें",
            sectionTitle: "सही जानकारी महत्वपूर्ण अंतर ला सकती है",
            sectionDescription:
                "आपातकालीन प्रतिक्रिया, प्राथमिक उपचार, आपदा तैयारी और रोज़मर्रा की सुरक्षा के बारे में जानने के लिए कोई विषय चुनें।",

            sections: [
                {
                    title: "चिकित्सीय आपातकाल",
                    description:
                        "चेतावनी संकेतों को समझें और सामान्य चिकित्सीय आपात स्थितियों में सही कदम उठाना सीखें।",
                    action: "चेतावनी संकेत जानें",
                    path: "/learn/medical"
                },
                {
                    title: "प्राथमिक उपचार",
                    description:
                        "पेशेवर सहायता आने तक किए जा सकने वाले आवश्यक प्राथमिक उपचार के कदम सीखें।",
                    action: "क्या करना है जानें",
                    path: "/learn/first-aid"
                },
                {
                    title: "आपदा तैयारी",
                    description:
                        "सामान्य आपदाओं के लिए तैयारी करना, प्रतिक्रिया देना और स्थिति से उबरना सीखें।",
                    action: "पहले से तैयारी करें",
                    path: "/learn/disaster"
                },
                {
                    title: "स्वास्थ्य सहायता",
                    description:
                        "समझें कि सही चिकित्सा या आपातकालीन सहायता कब और कहाँ लेनी चाहिए।",
                    action: "सही सहायता पाएँ",
                    path: "/learn/healthcare"
                },
                {
                    title: "सुरक्षा जागरूकता",
                    description:
                        "रोज़मर्रा के खतरों, दुर्घटना से बचाव और सार्वजनिक सुरक्षा के बारे में जागरूकता बढ़ाएँ।",
                    action: "सुरक्षा जागरूकता बढ़ाएँ",
                    path: "/learn/safety-awareness"
                },
                {
                    title: "आपातकालीन तैयारी",
                    description:
                        "ज़रूरी योजना, सामान और आपातकालीन जानकारी के साथ खुद और अपने परिवार को तैयार रखें।",
                    action: "सुरक्षा योजना बनाएँ",
                    path: "/learn/emergency-preparedness"
                }
            ]
        },

        bn: {
            badge: "নিরাপত্তা জ্ঞান কেন্দ্র",
            title1: "আজ শিখুন।",
            title2: " আগামীকালের জন্য প্রস্তুত থাকুন।",
            heroDescription:
                "জরুরি অবস্থা ও নিরাপত্তা সম্পর্কে ব্যবহারিক তথ্য জানুন, ঝুঁকি বুঝুন, আগে থেকে প্রস্তুতি নিন এবং জরুরি পরিস্থিতিতে আত্মবিশ্বাসের সঙ্গে সঠিক পদক্ষেপ নিতে শিখুন।",
            languageDescription:
                "নিরাপত্তা নির্দেশিকা ও জরুরি তথ্য আরও ভালোভাবে জানতে আপনার পছন্দের ভাষা নির্বাচন করুন।",
            selectLanguage: "ভাষা নির্বাচন করুন",

            sectionLabel: "নিরাপত্তা সম্পর্কে জানুন",
            sectionTitle: "সঠিক জ্ঞান গুরুত্বপূর্ণ পরিবর্তন আনতে পারে",
            sectionDescription:
                "জরুরি প্রতিক্রিয়া, প্রাথমিক চিকিৎসা, দুর্যোগ প্রস্তুতি এবং দৈনন্দিন নিরাপত্তা সম্পর্কে জানতে একটি বিষয় নির্বাচন করুন।",

            sections: [
                {
                    title: "চিকিৎসা জরুরি অবস্থা",
                    description:
                        "বিপদের লক্ষণ বুঝুন এবং সাধারণ চিকিৎসা জরুরি অবস্থায় কীভাবে সঠিক পদক্ষেপ নিতে হয় তা শিখুন।",
                    action: "বিপদের লক্ষণ জানুন",
                    path: "/learn/medical"
                },
                {
                    title: "প্রাথমিক চিকিৎসা",
                    description:
                        "পেশাদার সাহায্য আসার আগ পর্যন্ত কী কী প্রাথমিক চিকিৎসার পদক্ষেপ নেওয়া যায় তা শিখুন।",
                    action: "কী করতে হবে জানুন",
                    path: "/learn/first-aid"
                },
                {
                    title: "দুর্যোগ প্রস্তুতি",
                    description:
                        "সাধারণ দুর্যোগের জন্য কীভাবে প্রস্তুতি নিতে, পরিস্থিতিতে সাড়া দিতে এবং পরে সামলে উঠতে হয় তা শিখুন।",
                    action: "আগে থেকেই প্রস্তুত হন",
                    path: "/learn/disaster"
                },
                {
                    title: "স্বাস্থ্যসেবা সহায়তা",
                    description:
                        "কখন এবং কোথায় উপযুক্ত চিকিৎসা বা জরুরি সহায়তা নিতে হবে তা বুঝুন।",
                    action: "সঠিক সাহায্য খুঁজুন",
                    path: "/learn/healthcare"
                },
                {
                    title: "নিরাপত্তা সচেতনতা",
                    description:
                        "দৈনন্দিন ঝুঁকি, দুর্ঘটনা প্রতিরোধ এবং জনসাধারণের নিরাপত্তা সম্পর্কে সচেতনতা বাড়ান।",
                    action: "নিরাপত্তা সম্পর্কে জানুন",
                    path: "/learn/safety-awareness"
                },
                {
                    title: "জরুরি প্রস্তুতি",
                    description:
                        "প্রয়োজনীয় পরিকল্পনা, সামগ্রী এবং জরুরি তথ্যের মাধ্যমে নিজেকে ও পরিবারকে প্রস্তুত রাখুন।",
                    action: "নিরাপত্তা পরিকল্পনা তৈরি করুন",
                    path: "/learn/emergency-preparedness"
                }
            ]
        }
    };

    const currentContent = content[language];

    const sectionIcons = [
        HeartPulse,
        HandHeart,
        CloudLightning,
        Hospital,
        ShieldCheck,
        Backpack
    ];

    return (
        <div className="learn-page">

            {/* Hero */}
            <section className="learn-hero">

                <div className="learn-hero-content">

                    <span className="learn-badge">
                        <BookOpen size={16} />
                        {currentContent.badge}
                    </span>

                    <h1>
                        {currentContent.title1}
                        <span>{currentContent.title2}</span>
                    </h1>

                    <p>
                        {currentContent.heroDescription}
                    </p>

                </div>

                {/* Language Selector */}
                <div className="language-section">

                    <p className="language-description">
                        {currentContent.languageDescription}
                    </p>

                    <div className="language-control">

                        <Languages size={18} />

                        <label htmlFor="learn-language">
                            {currentContent.selectLanguage}
                        </label>

                        <select
                            id="learn-language"
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

                </div>

            </section>

            {/* Learning Topics */}
            <section className="learn-content">

                <div className="learn-section-heading">

                    <span>
                        {currentContent.sectionLabel}
                    </span>

                    <h2>
                        {currentContent.sectionTitle}
                    </h2>

                    <p>
                        {currentContent.sectionDescription}
                    </p>

                </div>

                <div className="learn-grid">

                    {currentContent.sections.map((section, index) => {

                        const Icon = sectionIcons[index];

                        return (
                            <article
                                className="learn-card"
                                key={section.path}
                            >

                                <div className="learn-card-icon">
                                    <Icon size={25} />
                                </div>

                                <h3>
                                    {section.title}
                                </h3>

                                <p>
                                    {section.description}
                                </p>

                                <Link
                                    to={section.path}
                                    className="learn-card-link"
                                >
                                    {section.action}
                                    <ArrowRight size={17} />
                                </Link>

                            </article>
                        );

                    })}

                </div>

            </section>

        </div>
    );
};

export default LearnHub;