from services.ai_service import AIService
from services.language_service import LanguageService
from services.conversation_service import ConversationService
from services.prompt_service import PromptService


class ChatbotService:

    def __init__(self):
        self.ai = AIService()
        self.language = LanguageService()
        self.history = ConversationService()
        self.prompt = PromptService()

    async def process(
        self,
        db,
        user_id,
        message,
        language="auto"
    ):

        # Detect language automatically or use selected language
        if language == "auto":
            lang = self.language.detect(message)
        else:
            lang = language

        # Get previous conversation
        history = self.history.get_history(
            db,
            user_id
        )

        # Build AI prompt
        prompt = self.prompt.build(
            message,
            history,
            lang
        )

        # Generate AI response
        result = await self.ai.generate(
            prompt,
            lang
        )

        # Process structured AI response
        if isinstance(result, dict):

            reply = result.get(
                "reply",
                result.get(
                    "response",
                    ""
                )
            )

            category = result.get(
                "category",
                "general"
            )

            risk_level = result.get(
                "risk_level",
                "Low"
            )

            emergency = result.get(
                "emergency",
                False
            )

        else:

            reply = result
            category = "general"
            risk_level = "Low"
            emergency = False

        # Save conversation
        self.history.save(
            db,
            user_id,
            message,
            reply,
            lang
        )

        # Return response
        return {
            "reply": reply,
            "language": lang,
            "category": category,
            "risk_level": risk_level,
            "emergency": emergency
        }