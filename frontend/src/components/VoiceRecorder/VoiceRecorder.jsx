import React, { useRef, useState } from "react";
import { Mic, Square, Loader2 } from "lucide-react";

import { transcribeAudio } from "../../services/speech";

import "./VoiceRecorder.css";

const VoiceRecorder = ({ onTranscription }) => {
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);

  const startRecording = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

      const recorder = new MediaRecorder(stream);

      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(
          audioChunksRef.current,
          {
            type: recorder.mimeType || "audio/webm",
          }
        );

        stream
          .getTracks()
          .forEach((track) => track.stop());

        await processAudio(audioBlob);
      };

      recorder.start();

      setRecording(true);

    } catch (error) {
      console.error(
        "Microphone permission error:",
        error
      );

      alert(
        "Microphone permission is required for voice input."
      );
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }

    setRecording(false);
  };

  const processAudio = async (audioBlob) => {
    setProcessing(true);

    try {
      const response =
        await transcribeAudio(audioBlob);

      const transcription =
        response?.transcription ||
        response?.text ||
        "";

      if (transcription && onTranscription) {
        onTranscription(transcription);
      }

    } catch (error) {
      console.error(
        "Audio transcription failed:",
        error
      );

      alert(
        "Unable to process the voice recording."
      );
    } finally {
      setProcessing(false);
    }
  };

  if (processing) {
    return (
      <button
        className="voice-button processing"
        disabled
      >
        <Loader2
          size={19}
          className="loading-spinner"
        />

        Processing...
      </button>
    );
  }

  if (recording) {
    return (
      <button
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