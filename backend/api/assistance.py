from fastapi import APIRouter, Depends, HTTPException

from core.dependencies import get_current_user
from services.assistance_service import AssistanceService

router = APIRouter(tags=["Nearby Assistance"])

service = AssistanceService()


def validate_coordinates(latitude: float, longitude: float):
    if not -90 <= latitude <= 90:
        raise HTTPException(status_code=400, detail="Invalid latitude")

    if not -180 <= longitude <= 180:
        raise HTTPException(status_code=400, detail="Invalid longitude")


def validate_radius(radius: int):
    if radius <= 0:
        raise HTTPException(status_code=400, detail="Radius must be greater than 0")

    if radius > 10000:
        raise HTTPException(
            status_code=400,
            detail="Radius cannot exceed 10000 meters"
        )


@router.get("/nearby")
async def get_nearby_assistance(
    latitude: float,
    longitude: float,
    radius: int = 5000,
    user=Depends(get_current_user),
):
    validate_coordinates(latitude, longitude)
    validate_radius(radius)

    return await service.get_nearby(
        latitude=latitude,
        longitude=longitude,
        assistance_type="all",
        radius=radius,
    )


@router.get("/police")
async def get_nearby_police(
    latitude: float,
    longitude: float,
    radius: int = 5000,
    user=Depends(get_current_user),
):
    validate_coordinates(latitude, longitude)
    validate_radius(radius)

    return await service.get_nearby(
        latitude=latitude,
        longitude=longitude,
        assistance_type="police",
        radius=radius,
    )


@router.get("/hospitals")
async def get_nearby_hospitals(
    latitude: float,
    longitude: float,
    radius: int = 5000,
    user=Depends(get_current_user),
):
    validate_coordinates(latitude, longitude)
    validate_radius(radius)

    return await service.get_nearby(
        latitude=latitude,
        longitude=longitude,
        assistance_type="hospital",
        radius=radius,
    )


@router.get("/safety-centres")
async def get_nearby_safety_centres(
    latitude: float,
    longitude: float,
    radius: int = 5000,
    user=Depends(get_current_user),
):
    validate_coordinates(latitude, longitude)
    validate_radius(radius)

    return await service.get_nearby(
        latitude=latitude,
        longitude=longitude,
        assistance_type="safety",
        radius=radius,
    )