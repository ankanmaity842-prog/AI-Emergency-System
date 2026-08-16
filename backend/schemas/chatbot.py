from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field


class ChatRequest(BaseModel):

    message: str = Field(
        ...,
        min_length=1,
        max_length=1000,
        description="User message"
    )

    language: str = Field(
        default="auto",
        description="Language code"
    )


class ChatResponse(BaseModel):

    reply: str
    language: str
    category: str

    risk_level: Literal[
        "Low",
        "Medium",
        "High",
        "Critical"
    ]

    emergency: bool


class ChatHistoryItem(BaseModel):

    role: Literal[
        "user",
        "assistant"
    ]

    message: str
    language: str
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )


class ChatHistoryResponse(BaseModel):

    messages: list[ChatHistoryItem]


class ClearHistoryResponse(BaseModel):

    message: str