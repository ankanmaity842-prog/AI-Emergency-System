
import asyncio

from google import genai
from core.config import settings


class EmbeddingService:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )
        self.model = getattr(
            settings,
            "GEMINI_EMBEDDING_MODEL",
            "gemini-embedding-2"
        )

    async def embed_text(self, text: str) -> list[float]:
        result = await asyncio.to_thread(
            self.client.models.embed_content,
            model=self.model,
            contents=text
        )

        if not result.embeddings:
            raise RuntimeError("Gemini returned no embedding.")

        return list(result.embeddings[0].values)

    async def embed_texts(
        self,
        texts: list[str]
    ) -> list[list[float]]:
        return [
            await self.embed_text(text)
            for text in texts
        ]
