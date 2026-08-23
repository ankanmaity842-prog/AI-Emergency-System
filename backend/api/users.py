from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.dependencies import get_current_user
from database.database import get_db
from schemas.user import UserResponse, UserUpdate
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


@router.put(
    "/me",
    response_model=UserResponse
)
def update_profile(
    data: UserUpdate,
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    updated_user = service.update(
        db,
        user.id,
        data.model_dump(exclude_unset=True)
    )

    return updated_user