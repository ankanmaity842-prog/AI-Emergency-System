import React, { useRef, useState } from "react";
import { Mic, Square, Loader2 } from "lucide-react";

import { transcribeAudio } from "../../services/speech";
import "./VoiceRecorder.css";

const VoiceRecorder = ({
    onTranscription,
    imageContext = null,
    language = "auto",
}) => {
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const [recording, setRecording] = useState(false);
    const [processing, setProcessing] = useState(false);

    const startRecording = async () => {
        try {
            if (!navigator.mediaDevices?.getUserMedia) {
                alert("Audio recording is not supported by this browser.");
                return;
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });

            const options = {};

            if (MediaRecorder.isTypeSupported("audio/webm;codecs=opus")) {
                options.mimeType = "audio/webm;codecs=opus";
            } else if (MediaRecorder.isTypeSupported("audio/webm")) {
                options.mimeType = "audio/webm";
            }

            const recorder = new MediaRecorder(stream, options);
            mediaRecorderRef.current = recorder;
            audioChunksRef.current = [];

            recorder.ondataavailable = (event) => {
                if (event.data?.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            recorder.onerror = (event) => {
                console.error("MediaRecorder error:", event.error);
                stream.getTracks().forEach((track) => track.stop());
                setRecording(false);
            };

            recorder.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: recorder.mimeType || "audio/webm",
                });

                stream.getTracks().forEach((track) => track.stop());
                setRecording(false);

                await processAudio(audioBlob);
            };

            recorder.start();
            setRecording(true);
        } catch (error) {
            console.error("Microphone permission error:", error);
            alert("Microphone permission is required for voice input.");
        }
    };

    const stopRecording = () => {
        const recorder = mediaRecorderRef.current;

        if (recorder && recorder.state !== "inactive") {
            recorder.stop();
        }
    };

    const processAudio = async (audioBlob) => {
        setProcessing(true);

        try {
            const response = await transcribeAudio(
                audioBlob,
                imageContext,
                language
            );

            const transcription =
                response?.transcription ||
                response?.text ||
                "";

            if (!transcription.trim()) {
                alert("I could not understand the recording. Please try again.");
                return;
            }

            // The backend response includes both the transcript and AI reply.
            onTranscription?.(response);
        } catch (error) {
            console.error("Voice processing failed:", error);
            alert(
                error?.response?.data?.detail ||
                "Unable to process the voice recording."
            );
        } finally {
            setProcessing(false);
        }
    };

    if (processing) {
        return (
            <button
                type="button"
                className="voice-button processing"
                disabled
            >
                <Loader2 size={19} className="loading-spinner" />
                Processing...
            </button>
        );
    }

    if (recording) {
        return (
            <button
                type="button"
                className="voice-button recording"
                onClick={stopRecording}
            >
                <Square size={17} />
                Stop
            </button>
        );
    }

    return (
        <button
            type="button"
            className="voice-button"
            onClick={startRecording}
            title="Voice input"
        >
            <Mic size={19} />
            Voice
        </button>
    );
};

export default VoiceRecorder;