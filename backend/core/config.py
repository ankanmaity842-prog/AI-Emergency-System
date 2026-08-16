import os

from dotenv import load_dotenv

load_dotenv()


class Settings:

    APP_NAME = "AI Emergency Response System"

    APP_VERSION = "1.0.0"

    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "change_this_secret_key"
    )

    ALGORITHM = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES = 60

    DATABASE_URL = os.getenv(
        "DATABASE_URL"
    )

    GEMINI_API_KEY = os.getenv(
        "GEMINI_API_KEY"
    )

    GEMINI_MODEL = os.getenv(
        "GEMINI_MODEL",
        "gemini-3.1-flash-lite"
    )

    UPLOAD_DIR = "uploads"

    IMAGE_DIR = "uploads/images"

    AUDIO_DIR = "uploads/audio"

    DOCUMENT_DIR = "uploads/documents"

    MAX_OUTPUT_TOKENS = 1024

    TEMPERATURE = 0.4

    TOP_P = 0.9


settings = Settings()