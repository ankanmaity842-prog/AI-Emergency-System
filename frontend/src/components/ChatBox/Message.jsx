import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Bot, User, Volume2, Square, AlertTriangle } from "lucide-react";

import {
    speakReply,
    stopSpeaking,
} from "../../services/speechOutput";

const Message = ({
    message,
    language = "en",
    isEmergency = false,
}) => {
    const isUser = message.sender === "user";
    const isBot = !isUser;

    const [isReading, setIsReading] = useState(false);
    const [speechError, setSpeechError] = useState("");

    const mountedRef = useRef(true);
    const requestIdRef = useRef(0);

    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
            requestIdRef.current += 1;
        };
    }, []);

    const handleReadAloud = async () => {
        if (!message.text?.trim()) {
            return;
        }

        if (isReading) {
            requestIdRef.current += 1;
            stopSpeaking();
            setIsReading(false);
            setSpeechError("");
            return;
        }

        // A newer request invalidates this message's previous request.
        const requestId = ++requestIdRef.current;

        setIsReading(true);
        setSpeechError("");

        try {
            await speakReply(message.text, language);

        } catch (error) {
            console.error("Read aloud failed:", error);

            if (
                mountedRef.current &&
                requestIdRef.current === requestId
            ) {
                setSpeechError(
                    "Speech playback is unavailable. Please try again."
                );
            }
        } finally {
            if (
                mountedRef.current &&
                requestIdRef.current === requestId
            ) {
                setIsReading(false);
            }
        }
    };

    return (
        <div
            className={[
                "chat-message",
                isUser ? "user-message" : "bot-message",
                isEmergency ? "emergency-message" : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {isBot && (
                <div className="message-icon bot-icon">
                    <Bot size={18} aria-hidden="true" />
                </div>
            )}

            <div className="message-content">
                <div className="message-sender">
                    {isUser ? "You" : "Safe Guardian AI"}
                    {isEmergency && (
                        <span className="message-emergency-label">
                            <AlertTriangle size={13} aria-hidden="true" />
                            Emergency
                        </span>
                    )}
                </div>

                {message.imageUrl && (
                    <div className="message-image-container">
                        <img
                            className="message-image"
                            src={message.imageUrl}
                            alt={message.imageAlt || "Uploaded image"}
                        />
                    </div>
                )}

                {message.text && (
                    <div className="message-text">
                        <ReactMarkdown>
                            {message.text}
                        </ReactMarkdown>
                    </div>
                )}

                {isBot && message.text?.trim() && (
                    <div className="message-actions">
                        <button
                            type="button"
                            className={[
                                "read-aloud-button",
                                isReading ? "is-reading" : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                            onClick={handleReadAloud}
                            aria-label={
                                isReading
                                    ? "Stop speaking"
                                    : "Read response aloud"
                            }
                            title={
                                isReading
                                    ? "Stop speaking"
                                    : "Read response aloud"
                            }
                        >
                            {isReading ? (
                                <>
                                    <Square
                                        size={15}
                                        fill="currentColor"
                                        aria-hidden="true"
                                    />
                                    <span>Stop speaking</span>
                                </>
                            ) : (
                                <>
                                    <Volume2
                                        size={17}
                                        aria-hidden="true"
                                    />
                                    <span>Read aloud</span>
                                </>
                            )}
                        </button>

                        {speechError && (
                            <span
                                className="speech-error"
                                role="status"
                            >
                                {speechError}
                            </span>
                        )}
                    </div>
                )}

                {message.timestamp && (
                    <div className="message-time">
                        {message.timestamp}
                    </div>
                )}
            </div>

            {isUser && (
                <div className="message-icon user-icon">
                    <User size={18} aria-hidden="true" />
                </div>
            )}
        </div>
    );
};

export default Message;
