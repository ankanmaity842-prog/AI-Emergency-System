import React from "react";
import ReactMarkdown from "react-markdown";
import { Bot, User } from "lucide-react";

const Message = ({ message }) => {
    const isUser = message.sender === "user";

    return (
        <div
            className={`chat-message ${
                isUser ? "user-message" : "bot-message"
            }`}
        >
            {!isUser && (
                <div className="message-icon bot-icon">
                    <Bot size={18} />
                </div>
            )}

            <div className="message-content">
                <div className="message-sender">
                    {isUser ? "You" : "Safe Guardian AI"}
                </div>

                <div className="message-text">
                    <ReactMarkdown>
                        {message.text}
                    </ReactMarkdown>
                </div>

                {message.timestamp && (
                    <div className="message-time">
                        {message.timestamp}
                    </div>
                )}
            </div>

            {isUser && (
                <div className="message-icon user-icon">
                    <User size={18} />
                </div>
            )}
        </div>
    );
};

export default Message;