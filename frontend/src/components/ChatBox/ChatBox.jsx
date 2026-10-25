import React, { useEffect, useRef, useState } from "react";
import {
    Send,
    Loader2,
    AlertTriangle,
    Languages,
    ShieldCheck,
} from "lucide-react";

import Message from "./Message.jsx";
import VoiceRecorder from "../VoiceRecorder/VoiceRecorder.jsx";
import ImageUploader from "../ImageUploader/ImageUploader.jsx";


import { sendChatMessage } from "../../services/chatService";
import { stopSpeaking } from "../../services/speechOutput";

import "./ChatBox.css";

const LANGUAGE_CONTENT = {
    en: {
        title: "Safe Guardian AI",
        status: "Your safety assistant",
        notice:
            "If you are in immediate danger, contact your local emergency services.",
        welcome:
            "Hello! I'm Safe Guardian AI. Tell me what happened or how I can help you.",
        placeholder: "Type your message...",
        send: "Send message",
        thinking: "Safe Guardian AI is thinking...",
        error: "Sorry, I couldn't process your message. Please try again.",
        empty: "Please enter a message first.",
        you: "You",
        ai: "Safe Guardian AI",
        language: "Language",
    },
    hi: {
        title: "सेफ गार्जियन AI",
        status: "आपका सुरक्षा सहायक",
        notice:
            "यदि आप तत्काल खतरे में हैं, तो स्थानीय आपातकालीन सेवाओं से संपर्क करें।",
        welcome:
            "नमस्ते! मैं Safe Guardian AI हूँ। बताइए क्या हुआ है और मैं आपकी कैसे मदद कर सकता हूँ।",
        placeholder: "अपना संदेश लिखें...",
        send: "संदेश भेजें",
        thinking: "Safe Guardian AI जवाब तैयार कर रहा है...",
        error: "क्षमा करें, आपका संदेश प्रोसेस नहीं हो सका। कृपया दोबारा प्रयास करें।",
        empty: "कृपया पहले कोई संदेश लिखें।",
        you: "आप",
        ai: "Safe Guardian AI",
        language: "भाषा",
    },
    bn: {
        title: "সেফ গার্ডিয়ান AI",
        status: "আপনার নিরাপত্তা সহায়ক",
        notice:
            "আপনি তাৎক্ষণিক বিপদে থাকলে স্থানীয় জরুরি পরিষেবার সঙ্গে যোগাযোগ করুন।",
        welcome:
            "নমস্কার! আমি Safe Guardian AI। কী ঘটেছে বলুন, আমি আপনাকে সাহায্য করার চেষ্টা করব।",
        placeholder: "আপনার বার্তা লিখুন...",
        send: "বার্তা পাঠান",
        thinking: "Safe Guardian AI উত্তর তৈরি করছে...",
        error: "দুঃখিত, আপনার বার্তাটি প্রক্রিয়া করা যায়নি। আবার চেষ্টা করুন।",
        empty: "অনুগ্রহ করে প্রথমে একটি বার্তা লিখুন।",
        you: "আপনি",
        ai: "Safe Guardian AI",
        language: "ভাষা",
    },
};

const createMessage = (sender, text, extra = {}) => ({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    sender,
    text: String(text ?? ""),
    timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    }),
    ...extra,
});

const getReply = (response) => {
    if (typeof response === "string") {
        return response;
    }

    return (
        response?.reply ||
        response?.response ||
        response?.message ||
        response?.answer ||
        ""
    );
};

const ChatBox = () => {
    const [language, setLanguage] = useState("en");
    const [messages, setMessages] = useState(() => [
        createMessage("bot", LANGUAGE_CONTENT.en.welcome),
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const requestInProgressRef = useRef(false);

    const content = LANGUAGE_CONTENT[language] || LANGUAGE_CONTENT.en;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [messages, isLoading]);

    useEffect(() => {
        // Update the initial welcome message when the language changes.
        setMessages((previousMessages) => {
            if (
                previousMessages.length === 1 &&
                previousMessages[0].sender === "bot"
            ) {
                return [
                    {
                        ...previousMessages[0],
                        text: content.welcome,
                    },
                ];
            }

            return previousMessages;
        });
    }, [content.welcome]);

    useEffect(() => {
        return () => {
            stopSpeaking();
        };
    }, []);

    const appendMessage = (message) => {
        setMessages((previousMessages) => [
            ...previousMessages,
            message,
        ]);
    };

    const handleSend = async (event) => {
        event?.preventDefault();

        const text = input.trim();

        if (!text) {
            setErrorMessage(content.empty);
            inputRef.current?.focus();
            return;
        }

        if (requestInProgressRef.current) {
            return;
        }

        requestInProgressRef.current = true;
        setIsLoading(true);
        setErrorMessage("");
        setInput("");

        appendMessage(createMessage("user", text));

        try {
            const response = await sendChatMessage(text, language);
            const reply = getReply(response);

            if (!reply.trim()) {
                throw new Error("The chatbot returned an empty response.");
            }

            appendMessage(
                createMessage("bot", reply, {
                    language: response?.language || language,
                    riskLevel: response?.risk_level || null,
                    emergency: Boolean(response?.emergency),
                    category: response?.category || null,
                })
            );
        } catch (error) {
            console.error("Chat request failed:", error);

            const serverMessage =
                error?.response?.data?.detail ||
                error?.response?.data?.message;

            setErrorMessage(
                typeof serverMessage === "string"
                    ? serverMessage
                    : content.error
            );
        } finally {
            requestInProgressRef.current = false;
            setIsLoading(false);
            inputRef.current?.focus();
        }
    };

    const handleVoiceResult = async (result) => {
        const transcript =
            typeof result === "string"
                ? result
                : result?.transcription ||
                  result?.transcript ||
                  result?.text ||
                  "";

        const text = transcript.trim();

        if (!text) {
            return;
        }

        // Populate the input and use the same sending flow as typed messages.
        setInput(text);
        setErrorMessage("");

        if (requestInProgressRef.current) {
            return;
        }

        requestInProgressRef.current = true;
        setIsLoading(true);
        setErrorMessage("");
        setInput("");

        appendMessage(createMessage("user", text));

        try {
            const response = await sendChatMessage(text, language);
            const reply = getReply(response);

            if (!reply.trim()) {
                throw new Error("The chatbot returned an empty response.");
            }

            appendMessage(
                createMessage("bot", reply, {
                    language: response?.language || language,
                    riskLevel: response?.risk_level || null,
                    emergency: Boolean(response?.emergency),
                    category: response?.category || null,
                })
            );
        } catch (error) {
            console.error("Voice chat request failed:", error);
            setErrorMessage(content.error);
        } finally {
            requestInProgressRef.current = false;
            setIsLoading(false);
        }
    };

    const handleImageResult = (result) => {
        if (!result) {
            return;
        }

        const resultText =
            typeof result === "string"
                ? result
                : result?.message ||
                  result?.reply ||
                  result?.response ||
                  result?.analysis ||
                  "";

        if (resultText) {
            appendMessage(
                createMessage("bot", resultText, {
                    language,
                    emergency: Boolean(result?.emergency),
                    category: result?.category || null,
                    imageUrl: result?.imageUrl || result?.image_url || null,
                })
            );
        }
    };

    const handleLanguageChange = (event) => {
        const nextLanguage = event.target.value;

        stopSpeaking();
        setLanguage(nextLanguage);
        setErrorMessage("");
    };

    return (
        <section className="chatbox" aria-label="Safe Guardian chatbot">
            <header className="chatbox-header">
                <div className="chatbox-brand">
                    <div className="chatbox-brand-icon">
                        <ShieldCheck size={24} aria-hidden="true" />
                    </div>

                    <div className="chatbox-heading">
                        <h2>{content.title}</h2>
                        <div className="chatbox-status">
                            <span className="chatbox-status-dot" />
                            <span>{content.status}</span>
                        </div>
                    </div>
                </div>

                <label className="chat-language-control">
                    <Languages size={17} aria-hidden="true" />
                    <span>{content.language}</span>

                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        aria-label={content.language}
                    >
                        <option value="en">English</option>
                        <option value="hi">हिन्दी</option>
                        <option value="bn">বাংলা</option>
                    </select>
                </label>
            </header>

            <div className="chat-emergency-notice" role="note">
                <AlertTriangle size={19} aria-hidden="true" />
                <p>{content.notice}</p>
            </div>

            <div
                className="chatbox-messages"
                role="log"
                aria-live="polite"
                aria-relevant="additions"
                aria-label="Conversation"
            >
                {messages.map((message) => (
                    <Message
                        key={message.id}
                        message={message}
                        language={message.language || language}
                        isEmergency={message.emergency}
                    />
                ))}

                {isLoading && (
                    <div className="chat-loading" role="status">
                        <Loader2
                            size={19}
                            className="loading-spinner"
                            aria-hidden="true"
                        />
                        <span>{content.thinking}</span>
                    </div>
                )}

                {errorMessage && (
                    <div className="chat-error" role="alert">
                        <AlertTriangle size={17} aria-hidden="true" />
                        <span>{errorMessage}</span>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="chatbox-tools">
                <VoiceRecorder onTranscription={handleVoiceResult} />
                <ImageUploader onUpload={handleImageResult} />
            </div>

            <form className="chatbox-input-area" onSubmit={handleSend}>
                <textarea
                    ref={inputRef}
                    className="chatbox-input"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                        if (
                            event.key === "Enter" &&
                            !event.shiftKey &&
                            !event.nativeEvent.isComposing
                        ) {
                            event.preventDefault();
                            handleSend(event);
                        }
                    }}
                    placeholder={content.placeholder}
                    aria-label={content.placeholder}
                    rows={1}
                    disabled={isLoading}
                />

                <button
                    type="submit"
                    className="chatbox-send-button"
                    disabled={isLoading || !input.trim()}
                    aria-label={content.send}
                    title={content.send}
                >
                    {isLoading ? (
                        <Loader2
                            size={20}
                            className="loading-spinner"
                            aria-hidden="true"
                        />
                    ) : (
                        <Send size={20} aria-hidden="true" />
                    )}
                </button>
            </form>

            <p className="chatbox-footer">
                Safe Guardian AI can make mistakes. For emergencies, contact
                your local emergency services.
            </p>
        </section>
    );
};

export default ChatBox;
