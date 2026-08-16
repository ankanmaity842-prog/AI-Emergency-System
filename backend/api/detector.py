from fastapi import APIRouter, Depends, File, UploadFile

from core.dependencies import get_current_user
from services.detector_service import DetectorService


router = APIRouter(
    tags=["Detector"]
)

service = DetectorService()


@router.post("/")
async def detect(
    image: UploadFile = File(...),
    user=Depends(get_current_user)
):
    return await service.detect(
        image
    )