from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from core.dependencies import get_current_user
from database.database import get_db
from schemas.chatbot import ChatRequest, ChatResponse
from schemas.speech import SpeechResponse
from services.chat_services import ChatbotService
from services.speech_service import SpeechService


router = APIRouter(
    tags=["Chatbot"]
)

chatbot = ChatbotService()
speech = SpeechService()


@router.post(
    "/",
    response_model=ChatResponse
)
async def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    """
    Normal text chatbot endpoint.
    """

    return await chatbot.process(
        db=db,
        user_id=user.id,
        message=request.message,
        language=request.language
    )


@router.post(
    "/voice",
    response_model=SpeechResponse
)
async def voice_chat(
    audio: UploadFile = File(...),
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    """
    Voice chatbot endpoint.

    Accepts browser-recorded audio and sends it to
    SpeechService for transcription + chatbot processing.
    """

    content_type = (
        audio.content_type or ""
    ).lower().split(";")[0].strip()

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
            detail=f"Unsupported audio format: {content_type}"
        )

    try:

        return await speech.process(
            db=db,
            user_id=user.id,
            audio=audio
        )

    except HTTPException:
        raise

    except Exception as exc:

        print(
            "VOICE CHAT ERROR:",
            repr(exc)
        )

        raise HTTPException(
            status_code=500,
            detail="Unable to process the voice recording."
        )