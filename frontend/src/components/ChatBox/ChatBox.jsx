import React, { useEffect, useRef, useState } from "react";
import {
    Send,
    Loader2,
    AlertTriangle,
    Languages,
} from "lucide-react";

import Message from "./Message";
import VoiceRecorder from "../VoiceRecorder/VoiceRecorder";
import ImageUploader from "../ImageUploader/ImageUploader";

import { sendChatMessage } from "../../services/chatbot";

import "./ChatBox.css";

const ChatBox = () => {
    const [input, setInput] = useState("");
    const [language, setLanguage] = useState("en");

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text:
                "Hello! I am Safe Guardian AI. Tell me what happened and I will help you with the next steps.",
        },
    ]);

    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef(null);

    const languageContent = {
        en: {
            selectLanguage: "Select Language",
            notice:
                "For life-threatening emergencies, use the Emergency Request option immediately.",
            placeholder:
                "Describe your problem...",
            thinking:
                "Safe Guardian AI is thinking...",
            error:
                "Unable to connect to the emergency assistance service. Please try again.",
            welcome:
                "Hello! I am Safe Guardian AI. Tell me what happened and I will help you with the next steps.",
        },

        hi: {
            selectLanguage: "भाषा चुनें",
            notice:
                "जानलेवा आपात स्थिति में तुरंत आपातकालीन अनुरोध विकल्प का उपयोग करें।",
            placeholder:
                "अपनी समस्या बताएं...",
            thinking:
                "Safe Guardian AI सोच रहा है...",
            error:
                "आपातकालीन सहायता सेवा से कनेक्ट नहीं हो सका। कृपया फिर से प्रयास करें।",
            welcome:
                "नमस्ते! मैं Safe Guardian AI हूँ। बताएं क्या हुआ है और मैं आपको अगले कदमों में मदद करूंगा।",
        },

        bn: {
            selectLanguage: "ভাষা নির্বাচন করুন",
            notice:
                "জীবন-ঝুঁকিপূর্ণ জরুরি অবস্থায় অবিলম্বে জরুরি অনুরোধ বিকল্পটি ব্যবহার করুন।",
            placeholder:
                "আপনার সমস্যাটি জানান...",
            thinking:
                "Safe Guardian AI চিন্তা করছে...",
            error:
                "জরুরি সহায়তা পরিষেবার সঙ্গে সংযোগ করা যাচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।",
            welcome:
                "নমস্কার! আমি Safe Guardian AI। কী ঘটেছে তা বলুন এবং আমি আপনাকে পরবর্তী পদক্ষেপ নিতে সাহায্য করব।",
        },
    };

    const currentLanguage = languageContent[language];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;

        setLanguage(selectedLanguage);

        setMessages([
            {
                id: Date.now(),
                sender: "bot",
                text:
                    languageContent[selectedLanguage].welcome,
            },
        ]);

        setInput("");
    };

    const handleSend = async () => {
        const text = input.trim();

        if (!text || loading) {
            return;
        }

        const userMessage = {
            id: Date.now(),
            sender: "user",
            text,
        };

        setMessages((previous) => [
            ...previous,
            userMessage,
        ]);

        setInput("");
        setLoading(true);

        try {
            const response = await sendChatMessage(
                text,
                language
            );

            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text:
                        response?.reply ||
                        response?.response ||
                        response?.message ||
                        "I could not process your request.",
                },
            ]);
        } catch (error) {
            console.error(
                "Chat error:",
                error
            );

            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: currentLanguage.error,
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event) => {
        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {
            event.preventDefault();
            handleSend();
        }
    };

    const handleVoiceResult = (text) => {
        if (text) {
            setInput(text);
        }
    };

    const handleImageResult = (result) => {
        if (result) {
            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now(),
                    sender: "bot",
                    text:
                        result.message ||
                        "Your uploaded image has been received and analyzed.",
                },
            ]);
        }
    };

    return (
        <div className="chatbox">

            {/* Header */}

            <div className="chatbox-header">

                <div className="chatbox-header-left">

                    <h2>
                        AI Emergency Assistant
                    </h2>

                    <span className="chat-status">
                        <span className="status-dot"></span>
                        Online
                    </span>

                </div>

                {/* Language Selector */}

                <div className="chat-language-control">

                    <Languages size={18} />

                    <label htmlFor="chat-language">
                        {currentLanguage.selectLanguage}
                    </label>

                    <select
                        id="chat-language"
                        value={language}
                        onChange={
                            handleLanguageChange
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

            {/* Emergency Notice */}

            <div className="chat-emergency-notice">

                <AlertTriangle size={18} />

                <span>
                    {currentLanguage.notice}
                </span>

            </div>

            {/* Messages */}

            <div className="chat-messages">

                {messages.map((message) => (
                    <Message
                        key={message.id}
                        message={message}
                    />
                ))}

                {loading && (
                    <div className="chat-loading">

                        <Loader2
                            size={18}
                            className="loading-spinner"
                        />

                        {currentLanguage.thinking}

                    </div>
                )}

                <div ref={messagesEndRef} />

            </div>

            {/* Tools */}

            <div className="chat-tools">

                <VoiceRecorder
                    onTranscription={
                        handleVoiceResult
                    }
                />

                <ImageUploader
                    onUpload={
                        handleImageResult
                    }
                />

            </div>

            {/* Input */}

            <div className="chat-input-area">

                <textarea
                    value={input}
                    onChange={(event) =>
                        setInput(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    placeholder={
                        currentLanguage.placeholder
                    }
                    rows={1}
                    disabled={loading}
                />

                <button
                    className="send-button"
                    onClick={handleSend}
                    disabled={
                        !input.trim() ||
                        loading
                    }
                >
                    {loading ? (
                        <Loader2
                            size={20}
                            className="loading-spinner"
                        />
                    ) : (
                        <Send size={20} />
                    )}
                </button>

            </div>

        </div>
    );
};

export default ChatBox;