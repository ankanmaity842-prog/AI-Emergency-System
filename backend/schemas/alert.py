from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field


class AlertCreate(BaseModel):

    user_id: int

    title: str = Field(
        ...,
        min_length=1,
        max_length=200
    )

    message: str = Field(
        ...,
        min_length=1,
        max_length=1000
    )

    severity: Literal[
        "Low",
        "Medium",
        "High",
        "Critical"
    ]


class AlertResponse(BaseModel):

    id: int
    user_id: int
    title: str
    message: str
    severity: str
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )