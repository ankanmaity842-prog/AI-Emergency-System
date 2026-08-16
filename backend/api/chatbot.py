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
    return await chatbot.process(
        db,
        user.id,
        request.message,
        request.language
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
    if audio.content_type not in {
        "audio/mpeg",
        "audio/wav",
        "audio/x-wav",
        "audio/webm",
        "audio/ogg",
        "audio/mp4"
    }:
        raise HTTPException(
            status_code=400,
            detail="Unsupported audio format"
        )

    return await speech.process(
        db,
        user.id,
        audio
    )