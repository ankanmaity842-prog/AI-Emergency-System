
import asyncio

from services.document_ingestion import DocumentIngestionService


async def main():
    service = DocumentIngestionService()

    count = await service.ingest_directory(
        "data/knowledge_base"
    )

    print(f"Indexed {count} document chunks.")


if __name__ == "__main__":
    asyncio.run(main())
