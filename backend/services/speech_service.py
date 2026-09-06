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
        """
        Process uploaded voice audio.

        Flow:

        Browser audio
            ↓
        Read audio bytes
            ↓
        Gemini transcription
            ↓
        Text
            ↓
        ChatbotService
            ↓
        Emergency/chat response
        """

        content = await audio.read()

        if not content:

            return {
                "transcription": "",
                "reply": "I could not understand the audio.",
                "language": language,
                "category": "general",
                "risk_level": "Low",
                "emergency": False
            }


        mime_type = (
            audio.content_type or "audio/webm"
        ).lower().split(";")[0].strip()


        text = await self.ai.transcribe_audio(
            audio_data=content,
            mime_type=mime_type
        )


        text = (text or "").strip()


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
            db=db,
            user_id=user_id,
            message=text,
            language=language
        )


        return {
            "transcription": text,
            **result
        }