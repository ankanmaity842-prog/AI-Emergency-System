
import { useEffect, useRef, useState } from "react";
import { Loader2, Mic, Square } from "lucide-react";
import { transcribeAudio } from "../../services/speech";

const VoiceRecorder = ({
    onTranscription,
    imageContext = null,
    language = "auto",
}) => {
    const recorderRef = useRef(null);
    const streamRef = useRef(null);
    const chunksRef = useRef([]);
    const activeRef = useRef(false);

    const [recording, setRecording] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        return () => {
            activeRef.current = false;

            if (recorderRef.current?.state === "recording") {
                recorderRef.current.stop();
            }

            streamRef.current?.getTracks().forEach((track) => {
                track.stop();
            });
        };
    }, []);

    const startRecording = async () => {
        setError("");

        if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
            setError(
                "Audio recording is not supported in this browser. Please type your report instead."
            );
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                },
            });

            streamRef.current = stream;
            chunksRef.current = [];

            const preferredType = [
                "audio/webm;codecs=opus",
                "audio/webm",
                "audio/mp4",
            ].find((type) => MediaRecorder.isTypeSupported(type));

            const recorder = preferredType
                ? new MediaRecorder(stream, { mimeType: preferredType })
                : new MediaRecorder(stream);

            recorderRef.current = recorder;
            activeRef.current = true;

            recorder.ondataavailable = (event) => {
                if (event.data?.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };

            recorder.onerror = () => {
                setError("Recording failed. Please try again.");
                setRecording(false);
                activeRef.current = false;
                stream.getTracks().forEach((track) => track.stop());
            };

            recorder.onstop = async () => {
                const wasActive = activeRef.current;
                activeRef.current = false;

                stream.getTracks().forEach((track) => track.stop());
                streamRef.current = null;
                setRecording(false);

                if (!wasActive) return;

                const audioBlob = new Blob(chunksRef.current, {
                    type: recorder.mimeType || "audio/webm",
                });

                if (!audioBlob.size) {
                    setError("No audio was captured. Please try again.");
                    return;
                }

                setProcessing(true);

                try {
                    const result = await transcribeAudio(
                        audioBlob,
                        imageContext,
                        language || "auto"
                    );

                    const transcript = (
                        result.transcription ||
                        result.transcript ||
                        result.text ||
                        ""
                    ).trim();

                    if (!transcript) {
                        throw new Error(
                            "The audio could not be transcribed. Please speak clearly and try again."
                        );
                    }

                    onTranscription?.({
                        ...result,
                        transcription: transcript,
                        language: result.language || "auto",
                    });
                } catch (err) {
                    setError(
                        err?.response?.data?.detail ||
                        err?.message ||
                        "Unable to process the recording. Please try again."
                    );
                } finally {
                    setProcessing(false);
                }
            };

            recorder.start();
            setRecording(true);
        } catch (err) {
            setError(
                err?.name === "NotAllowedError"
                    ? "Microphone access was denied. Allow microphone access or type your report."
                    : "Could not access the microphone. Please try again."
            );
        }
    };

    const stopRecording = () => {
        const recorder = recorderRef.current;

        if (recorder?.state === "recording") {
            recorder.stop();
        }
    };

    return (
        <div className="voice-recorder">
            <div className="voice-recorder-controls">
                {!recording ? (
                    <button
                        type="button"
                        onClick={startRecording}
                        disabled={processing}
                        aria-label="Start voice recording"
                    >
                        {processing ? (
                            <Loader2 size={18} className="spin" />
                        ) : (
                            <Mic size={18} />
                        )}
                        {processing ? "Processing voice..." : "Report by voice"}
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={stopRecording}
                        aria-label="Stop voice recording"
                    >
                        <Square size={18} />
                        Stop recording
                    </button>
                )}
            </div>

            {recording && (
                <p role="status">
                    Recording. Speak clearly, then press Stop recording.
                </p>
            )}

            {processing && (
                <p role="status">
                    Transcribing your report and preparing a response...
                </p>
            )}

            {error && (
                <p className="voice-recorder-error" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
};

export default VoiceRecorder;
