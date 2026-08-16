from services.ai_service import AIService


class TranslationService:

    def __init__(self):

        self.ai = AIService()


    async def translate(
        self,
        text,
        language
    ):

        prompt = f"""
Translate the following text into {language}.

Text:
{text}

Return only the translated text.
"""

        return await self.ai.generate(
            prompt,
            language
        )