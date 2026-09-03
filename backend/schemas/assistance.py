from typing import Literal

from pydantic import BaseModel, Field

# Nearby Assistance Request

class AssistanceRequest(BaseModel):

    latitude: float = Field(
        ...,
        ge=-90,
        le=90
    )

    longitude: float = Field(
        ...,
        ge=-180,
        le=180
    )

    radius: int = Field(
        default=5000,
        ge=500,
        le=50000
    )

    assistance_type: Literal[
        "police",
        "hospital",
        "safety_centre",
        "all"
    ] = "all"

# Nearby Place

class NearbyPlace(BaseModel):

    id: str | None = None

    name: str

    type: Literal[
        "police",
        "hospital",
        "safety_centre"
    ]

    address: str | None = None

    latitude: float

    longitude: float

    distance: float | None = None

    phone: str | None = None

    rating: float | None = None

    open_now: bool | None = None

    place_id: str | None = None

    maps_url: str | None = None

# Nearby Assistance Response

class AssistanceResponse(BaseModel):

    success: bool = True

    user_latitude: float

    user_longitude: float

    radius: int

    police: list[NearbyPlace] = []

    hospitals: list[NearbyPlace] = []

    safety_centres: list[NearbyPlace] = []

# Call Assistance

class CallRequest(BaseModel):

    place_id: str

    place_type: Literal[
        "police",
        "hospital",
        "safety_centre"
    ]

    phone: str


class CallResponse(BaseModel):

    success: bool

    message: str

    phone: str

# Navigation Request

class NavigationRequest(BaseModel):

    destination_latitude: float = Field(
        ...,
        ge=-90,
        le=90
    )

    destination_longitude: float = Field(
        ...,
        ge=-180,
        le=180
    )

    destination_name: str | None = None


class NavigationResponse(BaseModel):

    success: bool = True

    destination_name: str | None = None

    latitude: float

    longitude: float

    maps_url: str