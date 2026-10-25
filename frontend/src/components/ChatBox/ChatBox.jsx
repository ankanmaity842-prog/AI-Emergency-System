import React, { useEffect, useRef, useState } from "react";
import { Send, Loader2, AlertTriangle, Languages } from "lucide-react";

import Message from "./Message";
import VoiceRecorder from "../VoiceRecorder/VoiceRecorder";
import ImageUploader from "../ImageUploader/ImageUploader";
import { sendChatMessage } from "../../services/chatbot";
import "./ChatBox.css";

const LANGUAGE_CONTENT = {
    en: {
        selectLanguage: "Select Language",
        notice: "For life-threatening emergencies, use the Emergency Request option immediately.",
        placeholder: "Describe your problem...",
        thinking: "Safe Guardian AI is thinking...",
        error: "Unable to connect to the emergency assistance service. Please try again.",
        welcome: "Hello! I am Safe Guardian AI. Tell me what happened and I will help you with the next steps.",
        imageUploaded: "Uploaded an image for analysis.",
        imageAnalysis: "Image analysis completed",
    },
    hi: {
        selectLanguage: "भाषा चुनें",
        notice: "जानलेवा आपात स्थिति में तुरंत आपातकालीन अनुरोध विकल्प का उपयोग करें।",
        placeholder: "अपनी समस्या बताएं...",
        thinking: "Safe Guardian AI सोच रहा है...",
        error: "आपातकालीन सहायता सेवा से कनेक्ट नहीं हो सका। कृपया फिर से प्रयास करें।",
        welcome: "नमस्ते! मैं Safe Guardian AI हूँ। बताएं क्या हुआ है और मैं आपको अगले कदमों में मदद करूंगा।",
        imageUploaded: "विश्लेषण के लिए एक तस्वीर अपलोड की गई।",
        imageAnalysis: "तस्वीर का विश्लेषण पूरा हुआ",
    },
    bn: {
        selectLanguage: "ভাষা নির্বাচন করুন",
        notice: "জীবন-ঝুঁকিপূর্ণ জরুরি অবস্থায় অবিলম্বে জরুরি অনুরোধ বিকল্পটি ব্যবহার করুন।",
        placeholder: "আপনার সমস্যাটি জানান...",
        thinking: "Safe Guardian AI চিন্তা করছে...",
        error: "জরুরি সহায়তা পরিষেবার সঙ্গে সংযোগ করা যাচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।",
        welcome: "নমস্কার! আমি Safe Guardian AI। কী ঘটেছে তা বলুন এবং আমি আপনাকে পরবর্তী পদক্ষেপ নিতে সাহায্য করব।",
        imageUploaded: "বিশ্লেষণের জন্য একটি ছবি আপলোড করা হয়েছে।",
        imageAnalysis: "ছবির বিশ্লেষণ সম্পন্ন হয়েছে",
    },
};

const getReply = (response) =>
    response?.reply ||
    response?.response ||
    response?.message ||
    "I could not process your request.";

const ChatBox = () => {
    const [input, setInput] = useState("");
    const [language, setLanguage] = useState("en");
    const [loading, setLoading] = useState(false);
    const [imageContext, setImageContext] = useState(null);
    const [messages, setMessages] = useState([
        {
            id: "welcome",
            sender: "bot",
            text: LANGUAGE_CONTENT.en.welcome,
        },
    ]);

    const messagesEndRef = useRef(null);
    const previewUrlsRef = useRef(new Set());
    const currentLanguage = LANGUAGE_CONTENT[language];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    useEffect(() => {
        return () => {
            previewUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
            previewUrlsRef.current.clear();
        };
    }, []);

    const addMessage = (message) => {
        setMessages((previous) => [
            ...previous,
            {
                id: `${Date.now()}-${Math.random()}`,
                ...message,
            },
        ]);
    };

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        setMessages([
            {
                id: `${Date.now()}-welcome`,
                sender: "bot",
                text: LANGUAGE_CONTENT[selectedLanguage].welcome,
            },
        ]);
        setInput("");
    };

    const handleSend = async () => {
        const text = input.trim();
        if (!text || loading) return;

        addMessage({ sender: "user", text });
        setInput("");
        setLoading(true);

        try {
            const response = await sendChatMessage(
                text,
                language,
                imageContext
            );

            addMessage({
                sender: "bot",
                text: getReply(response),
            });
        } catch (error) {
            console.error("Chat error:", error);
            addMessage({
                sender: "bot",
                text: currentLanguage.error,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    // SpeechService already returns the transcript and chatbot reply.
    // Do not call sendChatMessage again here.
    const handleVoiceResult = (response) => {
        const transcript =
            typeof response === "string"
                ? response
                : response?.transcription || response?.text || "";

        if (!transcript.trim()) return;

        addMessage({
            sender: "user",
            text: transcript.trim(),
        });

        addMessage({
            sender: "bot",
            text: getReply(response),
        });
    };

    const handleImageResult = (result, metadata = {}) => {
        if (!result) return;

        if (metadata.previewUrl) {
            previewUrlsRef.current.add(metadata.previewUrl);
        }

        setImageContext(result);

        addMessage({
            sender: "user",
            text: metadata.fileName
                ? `Uploaded image: ${metadata.fileName}`
                : currentLanguage.imageUploaded,
            imageUrl: metadata.previewUrl || null,
            imageAlt: metadata.fileName || "Uploaded emergency image",
        });

        const confidence =
            result.confidence == null
                ? "Not provided"
                : `${Math.round(Number(result.confidence) * 100)}%`;

        addMessage({
            sender: "bot",
            text: [
                `**${currentLanguage.imageAnalysis}**`,
                `**Incident type:** ${result.incident_type || "Unknown"}`,
                `**Severity:** ${result.severity || "Unknown"}`,
                `**Confidence:** ${confidence}`,
                "",
                result.advice || result.message || "No specific advice was returned.",
                "",
                "Ask a follow-up question or describe what is happening.",
            ].join("\n"),
        });
    };

    return (
        <div className="chatbox">
            <div className="chatbox-header">
                <div className="chatbox-header-left">
                    <h2>AI Emergency Assistant</h2>
                    <span className="chat-status">
                        <span className="status-dot" />
                        Online
                    </span>
                </div>

                <div className="chat-language-control">
                    <Languages size={18} />
                    <label htmlFor="chat-language">
                        {currentLanguage.selectLanguage}
                    </label>
                    <select
                        id="chat-language"
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="en">English</option>
                        <option value="hi">हिंदी</option>
                        <option value="bn">বাংলা</option>
                    </select>
                </div>
            </div>

            <div className="chat-emergency-notice">
                <AlertTriangle size={18} />
                <span>{currentLanguage.notice}</span>
            </div>

            <div className="chat-messages">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}

                {loading && (
                    <div className="chat-loading">
                        <Loader2 size={18} className="loading-spinner" />
                        {currentLanguage.thinking}
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="chat-tools">
                <VoiceRecorder
                    onTranscription={handleVoiceResult}
                    imageContext={imageContext}
                    language={language}
                />
                <ImageUploader onUpload={handleImageResult} />
            </div>

            <div className="chat-input-area">
                <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={currentLanguage.placeholder}
                    rows={1}
                    disabled={loading}
                />

                <button
                    type="button"
                    className="send-button"
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    aria-label="Send message"
                >
                    {loading ? (
                        <Loader2 size={20} className="loading-spinner" />
                    ) : (
                        <Send size={20} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default ChatBox;