from pydantic import (
    BaseModel,
    ConfigDict,
    EmailStr,
    Field
)


class UserResponse(BaseModel):

    id: int
    name: str
    email: EmailStr
    role: str
    phone: str | None = None
    address: str | None = None

    model_config = ConfigDict(
        from_attributes=True
    )


class UserUpdate(BaseModel):

    name: str | None = Field(
        default=None,
        min_length=2,
        max_length=100
    )

    phone: str | None = Field(
        default=None,
        max_length=20
    )

    address: str | None = Field(
        default=None,
        max_length=500
    )

    password: str | None = Field(
        default=None,
        min_length=8,
        max_length=128
    )