
import asyncio

from services.rag_service import RAGService


async def main():
    rag = RAGService()

    question = "What should someone do during a fire?"

    matches = await rag.retrieve(question)

    if not matches:
        print("No relevant documents retrieved.")
        return

    for item in matches:
        print("\nSource:", item["metadata"].get("source"))
        print("Distance:", item["distance"])
        print("Content:", item["text"])


if __name__ == "__main__":
    asyncio.run(main())
