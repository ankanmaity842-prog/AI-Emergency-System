from typing import Literal

from pydantic import BaseModel


class SpeechResponse(BaseModel):

    transcription: str
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