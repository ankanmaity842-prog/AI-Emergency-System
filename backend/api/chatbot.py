import logging

from fastapi import (
    APIRouter,
    Depends,
    File,
    Form,
    HTTPException,
    UploadFile,
)
from sqlalchemy.orm import Session

from core.dependencies import get_current_user
from database.database import get_db
from schemas.chatbot import ChatRequest, ChatResponse
from schemas.speech import SpeechResponse
from services.chat_services import ChatbotService
from services.speech_service import SpeechService

logger = logging.getLogger(__name__)

router = APIRouter(tags=["Chatbot"])

chatbot = ChatbotService()
speech = SpeechService()


@router.post("/", response_model=ChatResponse)
async def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
    user=Depends(get_current_user),
):
    return await chatbot.process(
        db=db,
        user_id=user.id,
        message=request.message,
        language=request.language,
        context=request.context,
    )


@router.post("/voice", response_model=SpeechResponse)
async def voice_chat(
    audio: UploadFile = File(...),
    language: str = Form("auto"),
    context: str | None = Form(None),
    db: Session = Depends(get_db),
    user=Depends(get_current_user),
):
    content_type = (
        (audio.content_type or "")
        .lower()
        .split(";")[0]
        .strip()
    )

    supported_audio_types = {
        "audio/webm",
        "audio/ogg",
        "audio/opus",
        "audio/wav",
        "audio/x-wav",
        "audio/mpeg",
        "audio/mp3",
        "audio/mp4",
        "audio/m4a",
        "audio/aac",
        "audio/flac",
    }

    if content_type not in supported_audio_types:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported audio format: {content_type}",
        )

    try:
        return await speech.process(
            db=db,
            user_id=user.id,
            audio=audio,
            language=language,
            context=context,
        )
    except HTTPException:
        raise
    except Exception:
        logger.exception("Voice chat failed")
        raise HTTPException(
            status_code=500,
            detail="Unable to process the voice recording.",
        )