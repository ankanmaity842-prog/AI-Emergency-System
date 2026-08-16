from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.dependencies import get_current_user
from database.database import get_db
from services.report_service import ReportService


router = APIRouter(
    tags=["Reports"]
)

service = ReportService()


@router.get("/")
def reports(
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return service.generate(
        db,
        user.id
    )