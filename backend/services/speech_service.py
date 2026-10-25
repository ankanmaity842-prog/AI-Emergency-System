import json

from services.ai_service import AIService
from services.chat_services import ChatbotService


class SpeechService:
    def __init__(self):
        self.ai = AIService()
        self.chatbot = ChatbotService()

    async def process(
        self,
        db,
        user_id,
        audio,
        language="auto",
        context=None,
    ):
        content = await audio.read()

        if not content:
            return {
                "transcription": "",
                "reply": "I could not understand the audio.",
                "language": language,
                "category": "general",
                "risk_level": "Low",
                "emergency": False,
            }

        mime_type = (
            (audio.content_type or "audio/webm")
            .lower()
            .split(";")[0]
            .strip()
        )

        text = await self.ai.transcribe_audio(
            audio_data=content,
            mime_type=mime_type,
        )
        text = (text or "").strip()

        if not text:
            return {
                "transcription": "",
                "reply": "I could not understand the audio. Please try again.",
                "language": language,
                "category": "general",
                "risk_level": "Low",
                "emergency": False,
            }

        if context:
            try:
                context = json.loads(context)
            except (TypeError, ValueError):
                pass

        result = await self.chatbot.process(
            db=db,
            user_id=user_id,
            message=text,
            language=language,
            context=context,
        )

        return {
            "transcription": text,
            **result,
        }