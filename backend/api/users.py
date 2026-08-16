from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.dependencies import get_current_user
from database.database import get_db
from schemas.user import UserResponse
from services.user_service import UserService


router = APIRouter(
    tags=["Users"]
)

service = UserService()


@router.get(
    "/me",
    response_model=UserResponse
)
def profile(
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return service.get_by_id(
        db,
        user.id
    )