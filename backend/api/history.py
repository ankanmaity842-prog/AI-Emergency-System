from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.dependencies import get_current_user
from database.database import get_db
from schemas.history import UserActivityResponse
from services.history_service import HistoryService


router = APIRouter(
    tags=["History"]
)

service = HistoryService()


@router.get(
    "/",
    response_model=UserActivityResponse
)
def history(
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return service.get_user_activity(
        db,
        user.id
    )