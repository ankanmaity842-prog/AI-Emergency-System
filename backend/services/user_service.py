from database.models import User
from core.security import hash_password


class UserService:

    def get_by_id(
        self,
        db,
        user_id
    ):
        return (
            db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    def update(
        self,
        db,
        user_id,
        data
    ):
        user = self.get_by_id(
            db,
            user_id
        )

        if not user:
            return None

        if data.get("name") is not None:
            user.name = data["name"]

        if data.get("phone") is not None:
            user.phone = data["phone"]

        if data.get("address") is not None:
            user.address = data["address"]

        if data.get("password"):
            user.password = hash_password(
                data["password"]
            )

        db.commit()
        db.refresh(user)

        return user