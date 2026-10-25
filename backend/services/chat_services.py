import logging

from services.ai_service import AIService
from services.language_service import LanguageService
from services.conversation_service import ConversationService
from services.prompt_service import PromptService
from services.rag_service import RAGService

logger = logging.getLogger(__name__)


class ChatbotService:
    def __init__(self):
        self.ai = AIService()
        self.language = LanguageService()
        self.history = ConversationService()
        self.prompt = PromptService()
        self.rag = RAGService()

    async def process(
        self,
        db,
        user_id,
        message,
        language="auto",
        context=None,
    ):
        history = self.history.get_history(db, user_id)

        answer_type = self.language.detect_yes_no(message)

        if language == "auto":
            if answer_type in ("yes", "no") and history:
                lang = self._get_history_language(history)
                if not lang:
                    lang = self.language.detect(message)
            else:
                lang = self.language.detect(message)
        else:
            lang = language

        retrieved_context = ""

        try:
            retrieved_context = await self.rag.get_context(message)
        except Exception:
            logger.exception("RAG retrieval failed")

        if context:
            retrieved_context = "\n\n".join(
                part
                for part in (retrieved_context, self._format_context(context))
                if part
            )

        prompt = self.prompt.build(
            message=message,
            history=history,
            language=lang,
            answer_type=answer_type,
            retrieved_context=retrieved_context,
        )

        result = await self.ai.generate(prompt, lang)

        if isinstance(result, dict):
            reply = result.get(
                "reply",
                result.get("response", result.get("message", "")),
            )
            category = result.get("category", "general")
            risk_level = result.get("risk_level", "Low")
            emergency = result.get("emergency", False)
        else:
            reply = result
            category = "general"
            risk_level = "Low"
            emergency = False

        self.history.save(db, user_id, message, reply, lang)

        return {
            "reply": reply,
            "language": lang,
            "category": category,
            "risk_level": risk_level,
            "emergency": emergency,
            "answer_type": answer_type,
        }

    @staticmethod
    def _format_context(context):
        if isinstance(context, dict):
            return (
                "Image analysis context (AI-generated assessment; "
                "not independently verified):\n"
                f"Incident type: {context.get('incident_type', 'unknown')}\n"
                f"Severity: {context.get('severity', 'unknown')}\n"
                f"Confidence: {context.get('confidence', 'unknown')}\n"
                f"Advice: {context.get('advice', 'Not provided')}"
            )

        return (
            "Additional context supplied with the message "
            "(treat as unverified):\n"
            f"{str(context)[:4000]}"
        )

    def _get_history_language(self, history):
        if not history or not isinstance(history, list):
            return None

        for item in reversed(history):
            if isinstance(item, dict):
                lang = item.get("language", item.get("lang"))
                if lang in {"en", "hi", "bn"}:
                    return lang

        return None
