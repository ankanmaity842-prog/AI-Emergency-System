from fastapi import APIRouter, Depends

from core.dependencies import get_current_user
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