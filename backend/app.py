from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from core.config import settings
from database.database import Base, engine
from database import models

from api.auth import router as auth_router
from api.users import router as users_router
from api.chatbot import router as chatbot_router
from api.detector import router as detector_router
from api.emergency import router as emergency_router
from api.alerts import router as alerts_router
from api.history import router as history_router
from api.reports import router as reports_router
from api.admin import router as admin_router
from api.websocket import router as websocket_router


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://ai-emergency-system-a7jc-gjngiym3o-ankan14.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


Base.metadata.create_all(
    bind=engine
)


for folder in (
    "uploads",
    "uploads/images",
    "uploads/audio",
    "uploads/documents",
    "uploads/prescriptions",
    "logs"
):
    Path(folder).mkdir(
        parents=True,
        exist_ok=True
    )


app.include_router(
    auth_router,
    prefix="/api/auth"
)

app.include_router(
    users_router,
    prefix="/api/users"
)

app.include_router(
    chatbot_router,
    prefix="/api/chatbot"
)

app.include_router(
    detector_router,
    prefix="/api/detector"
)

app.include_router(
    emergency_router,
    prefix="/api/emergency"
)

app.include_router(
    alerts_router,
    prefix="/api/alerts"
)

app.include_router(
    history_router,
    prefix="/api/history"
)

app.include_router(
    reports_router,
    prefix="/api/reports"
)

app.include_router(
    admin_router,
    prefix="/api/admin"
)

app.include_router(
    websocket_router,
    prefix="/api"
)


@app.get("/")
def home():
    return {
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "running",
        "docs": "/docs"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }