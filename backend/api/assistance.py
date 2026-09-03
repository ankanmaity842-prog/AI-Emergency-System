from fastapi import APIRouter, Depends, HTTPException

from core.dependencies import get_current_user
from services.nearby_service import NearbyService


router = APIRouter(
    prefix="/assistance",
    tags=["Nearby Assistance"]
)

service = NearbyService()


# ============================================================
# GET ALL NEARBY ASSISTANCE
# ============================================================

@router.get("/nearby")
async def get_nearby_assistance(
    latitude: float,
    longitude: float,
    radius: int = 5000,
    user=Depends(get_current_user)
):
    """
    Get nearby police stations, hospitals
    and safety centres.
    """

    if not (-90 <= latitude <= 90):
        raise HTTPException(
            status_code=400,
            detail="Invalid latitude"
        )

    if not (-180 <= longitude <= 180):
        raise HTTPException(
            status_code=400,
            detail="Invalid longitude"
        )

    if radius <= 0:
        raise HTTPException(
            status_code=400,
            detail="Radius must be greater than 0"
        )

    return await service.get_nearby(
        latitude=latitude,
        longitude=longitude,
        radius=radius
    )


# ============================================================
# NEARBY POLICE
# ============================================================

@router.get("/police")
async def get_nearby_police(
    latitude: float,
    longitude: float,
    radius: int = 5000,
    user=Depends(get_current_user)
):
    """
    Find nearby police stations.
    """

    return await service.get_police(
        latitude=latitude,
        longitude=longitude,
        radius=radius
    )


# ============================================================
# NEARBY HOSPITALS
# ============================================================

@router.get("/hospitals")
async def get_nearby_hospitals(
    latitude: float,
    longitude: float,
    radius: int = 5000,
    user=Depends(get_current_user)
):
    """
    Find nearby hospitals.
    """

    return await service.get_hospitals(
        latitude=latitude,
        longitude=longitude,
        radius=radius
    )


# ============================================================
# NEARBY SAFETY CENTRES
# ============================================================

@router.get("/safety-centres")
async def get_nearby_safety_centres(
    latitude: float,
    longitude: float,
    radius: int = 5000,
    user=Depends(get_current_user)
):
    """
    Find nearby emergency shelters / safety centres.
    """

    return await service.get_safety_centres(
        latitude=latitude,
        longitude=longitude,
        radius=radius
    )


# ============================================================
# CALL ASSISTANCE
# ============================================================

@router.get("/call/{service_type}")
async def get_call_information(
    service_type: str,
    user=Depends(get_current_user)
):
    """
    Return the appropriate emergency contact
    for the selected service.
    """

    allowed_services = {
        "police",
        "hospital",
        "ambulance",
        "safety"
    }

    service_type = service_type.lower()

    if service_type not in allowed_services:
        raise HTTPException(
            status_code=400,
            detail="Invalid assistance service"
        )

    return await service.get_call_information(
        service_type
    )


# ============================================================
# NAVIGATION
# ============================================================

@router.get("/navigate")
async def navigate_to_assistance(
    latitude: float,
    longitude: float,
    destination_latitude: float,
    destination_longitude: float,
    user=Depends(get_current_user)
):
    """
    Generate navigation information
    from the user's current location
    to the selected assistance location.
    """

    return await service.get_navigation(
        latitude=latitude,
        longitude=longitude,
        destination_latitude=destination_latitude,
        destination_longitude=destination_longitude
    )