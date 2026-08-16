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

    model_config = ConfigDict(
        from_attributes=True
    )


class UserUpdate(BaseModel):

    name: str | None = Field(
        default=None,
        min_length=2,
        max_length=100
    )

    email: EmailStr | None = None

    password: str | None = Field(
        default=None,
        min_length=8,
        max_length=128
    )