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
        language="auto"
    ):
        content = await audio.read()

        text = await self.ai.transcribe_audio(
            content,
            audio.content_type
        )

        if not text:
            return {
                "transcription": "",
                "reply": "I could not understand the audio.",
                "language": language,
                "category": "general",
                "risk_level": "Low",
                "emergency": False
            }

        result = await self.chatbot.process(
            db,
            user_id,
            text,
            language
        )

        return {
            "transcription": text,
            **result
        }