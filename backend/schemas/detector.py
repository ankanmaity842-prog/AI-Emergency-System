from datetime import datetime
from typing import Literal

from pydantic import BaseModel


class DetectionResponse(BaseModel):

    incident_type: str
    confidence: float

    severity: Literal[
        "low",
        "medium",
        "high",
        "critical"
    ]

    risk_level: Literal[
        "Low",
        "Medium",
        "High",
        "Critical"
    ]

    emergency: bool
    advice: str
    image_url: str | None = None


class DetectionItem(BaseModel):

    incident_type: str
    confidence: float
    severity: str
    risk_level: str
    emergency: bool
    image_url: str | None = None
    created_at: datetime


class DetectionHistoryResponse(BaseModel):

    history: list[DetectionItem]