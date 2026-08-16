from typing import Literal

from pydantic import BaseModel, Field


class EmergencyRequest(BaseModel):

    message: str = Field(
        ...,
        min_length=1,
        max_length=1000
    )

    language: str = "auto"

    category: Literal[
        "auto",
        "medical",
        "accident",
        "disaster"
    ] = "auto"


class EmergencyResponse(BaseModel):

    category: str
    incident_type: str

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

    confidence: float
    advice: str
    emergency: bool

    first_aid: str = ""
    evacuation: str = ""