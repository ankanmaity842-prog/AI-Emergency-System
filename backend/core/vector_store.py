
import os
from pathlib import Path

import chromadb


class VectorStore:

    def __init__(self):
        default_path = (
            Path(__file__).resolve().parents[1]
            / "data"
            / "chroma"
        )

        storage_path = Path(
            os.getenv("CHROMA_DB_PATH", str(default_path))
        ).expanduser()

        storage_path.mkdir(parents=True, exist_ok=True)

        self.client = chromadb.PersistentClient(
            path=str(storage_path)
        )

        self.collection = self.client.get_or_create_collection(
            name="safe_guardian_knowledge",
            metadata={"hnsw:space": "cosine"}
        )

    def add_documents(
        self,
        ids: list[str],
        documents: list[str],
        embeddings: list[list[float]],
        metadatas: list[dict]
    ):
        if not documents:
            return

        self.collection.upsert(
            ids=ids,
            documents=documents,
            embeddings=embeddings,
            metadatas=metadatas
        )

    def search(
        self,
        embedding: list[float],
        top_k: int = 4
    ) -> list[dict]:
        if self.collection.count() == 0:
            return []

        result = self.collection.query(
            query_embeddings=[embedding],
            n_results=min(top_k, self.collection.count()),
            include=[
                "documents",
                "metadatas",
                "distances"
            ]
        )

        documents = result.get("documents", [[]])[0]
        metadatas = result.get("metadatas", [[]])[0]
        distances = result.get("distances", [[]])[0]

        matches = []

        for document, metadata, distance in zip(
            documents,
            metadatas,
            distances
        ):
            matches.append({
                "text": document,
                "metadata": metadata or {},
                "distance": float(distance)
            })

        return matches
