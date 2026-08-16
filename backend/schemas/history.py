from datetime import datetime

from pydantic import BaseModel


class HistoryIncident(BaseModel):

    id: int
    type: str
    category: str
    severity: str
    status: str
    location: str | None = None
    confidence: float
    created_at: datetime


class HistoryConversation(BaseModel):

    message: str
    response: str
    language: str
    created_at: datetime


class UserActivityResponse(BaseModel):

    incidents: list[HistoryIncident]
    conversations: list[HistoryConversation]