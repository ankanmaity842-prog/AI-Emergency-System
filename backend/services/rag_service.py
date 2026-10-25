
from services.embedding_service import EmbeddingService
from core.vector_store import VectorStore


class RAGService:

    def __init__(self):
        self.embeddings = EmbeddingService()
        self.store = VectorStore()

    async def retrieve(
        self,
        query: str,
        top_k: int = 4
    ) -> list[dict]:
        if not query or not query.strip():
            return []

        embedding = await self.embeddings.embed_text(
            query.strip()
        )

        matches = self.store.search(
            embedding=embedding,
            top_k=top_k
        )

        return [
            match for match in matches
            if match["distance"] <= 0.65
        ]

    async def get_context(self, query: str) -> str:
        matches = await self.retrieve(query)

        if not matches:
            return ""

        sections = []

        for match in matches:
            source = match["metadata"].get(
                "source", "Unknown source"
            )
            chunk = match["metadata"].get("chunk", "?")

            sections.append(
                f"Source: {source}, chunk: {chunk}\n"
                f"{match['text']}"
            )

        return "\n\n".join(sections)
