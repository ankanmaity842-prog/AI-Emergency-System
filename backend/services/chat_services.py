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

        # Get previous conversation first
        history = self.history.get_history(
            db,
            user_id
        )

        # Detect whether the message is a short
        # affirmative or negative response
        answer_type = self.language.detect_yes_no(
            message
        )

        # Detect language automatically or use
        # the language selected by the user
        if language == "auto":

            # For short yes/no answers, avoid changing
            # the conversation language unnecessarily.
            if answer_type in ("yes", "no") and history:

                lang = self._get_history_language(
                    history
                )

                if not lang:
                    lang = self.language.detect(
                        message
                    )

            else:
                lang = self.language.detect(
                    message
                )

        else:
            lang = language

        # Build AI prompt with conversation context
        # and yes/no answer information
        prompt = self.prompt.build(
            message=message,
            history=history,
            language=lang,
            answer_type=answer_type
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
                    result.get(
                        "message",
                        ""
                    )
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
            "emergency": emergency,
            "answer_type": answer_type
        }

    def _get_history_language(self, history):
        """
        Try to get the language used in the previous
        conversation.

        Supports common history formats without
        changing the existing ConversationService.
        """

        if not history:
            return None

        # If history is a list of conversation objects
        if isinstance(history, list):

            for item in reversed(history):

                if isinstance(item, dict):

                    lang = item.get(
                        "language",
                        item.get(
                            "lang"
                        )
                    )

                    if lang in {
                        "en",
                        "hi",
                        "bn"
                    }:
                        return lang

        return None