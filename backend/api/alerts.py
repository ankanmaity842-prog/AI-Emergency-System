from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from core.dependencies import get_current_user
from database.database import get_db
from services.alert_service import AlertService


router = APIRouter(
    tags=["Alerts"]
)

service = AlertService()


@router.get("/")
def alerts(
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return service.get_user_alerts(
        db,
        user.id
    )


@router.put("/{alert_id}/read")
def mark_read(
    alert_id: int,
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    alert = service.mark_as_read(
        db,
        user.id,
        alert_id
    )

    if not alert:
        raise HTTPException(
            status_code=404,
            detail="Alert not found"
        )

    return alert