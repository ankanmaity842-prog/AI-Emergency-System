from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.dependencies import get_current_user
from database.database import get_db
from database.models import Incident
from schemas.emergency import EmergencyRequest
from services.emergency_service import EmergencyService


router = APIRouter(
    tags=["Emergency"]
)

service = EmergencyService()


@router.post("/")
async def emergency(
    request: EmergencyRequest,
    user=Depends(get_current_user)
):
    return await service.handle(
        user.id,
        request
    )


@router.get("/")
def get_my_emergencies(
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    incidents = (
        db.query(Incident)
        .filter(Incident.user_id == user.id)
        .order_by(Incident.created_at.desc())
        .all()
    )

    return [
        {
            "id": incident.id,
            "category": incident.category,
            "incident_type": incident.incident_type,
            "severity": incident.severity,
            "risk_level": incident.risk_level,
            "description": incident.description,
            "confidence": incident.confidence,
            "status": incident.status,
            "location": incident.location,
            "created_at": incident.created_at,
            "resolved_at": incident.resolved_at
        }
        for incident in incidents
    ]


@router.get("/{emergency_id}")
def get_emergency_by_id(
    emergency_id: int,
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    incident = (
        db.query(Incident)
        .filter(
            Incident.id == emergency_id,
            Incident.user_id == user.id
        )
        .first()
    )

    if not incident:
        from fastapi import HTTPException

        raise HTTPException(
            status_code=404,
            detail="Emergency incident not found"
        )

    return {
        "id": incident.id,
        "category": incident.category,
        "incident_type": incident.incident_type,
        "severity": incident.severity,
        "risk_level": incident.risk_level,
        "description": incident.description,
        "confidence": incident.confidence,
        "status": incident.status,
        "location": incident.location,
        "created_at": incident.created_at,
        "resolved_at": incident.resolved_at
    }


@router.put("/{emergency_id}/cancel")
def cancel_emergency(
    emergency_id: int,
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    incident = (
        db.query(Incident)
        .filter(
            Incident.id == emergency_id,
            Incident.user_id == user.id
        )
        .first()
    )

    if not incident:
        from fastapi import HTTPException

        raise HTTPException(
            status_code=404,
            detail="Emergency incident not found"
        )

    incident.status = "cancelled"

    db.commit()
    db.refresh(incident)

    return {
        "message": "Emergency request cancelled successfully",
        "id": incident.id,
        "status": incident.status
    }