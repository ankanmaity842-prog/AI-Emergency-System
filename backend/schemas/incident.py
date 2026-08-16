from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict


class IncidentResponse(BaseModel):

    id: int
    user_id: int
    category: str
    incident_type: str
    severity: str

    risk_level: Literal[
        "Low",
        "Medium",
        "High",
        "Critical"
    ]

    description: str
    confidence: float
    status: str
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )


class IncidentStatusUpdate(BaseModel):

    status: Literal[
        "open",
        "active",
        "resolved",
        "closed"
    ]