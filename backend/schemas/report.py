from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ReportResponse(BaseModel):

    total_incidents: int
    critical_incidents: int
    high_incidents: int
    medium_incidents: int
    low_incidents: int
    generated_at: datetime


class IncidentReport(BaseModel):

    id: int
    user_id: int
    category: str
    incident_type: str
    severity: str
    risk_level: str
    description: str
    confidence: float
    status: str
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )