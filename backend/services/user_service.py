from database.models import User
from core.security import hash_password


class UserService:

    def get_by_id(
        self,
        db,
        user_id
    ):

        return db.query(User).filter(
            User.id == user_id
        ).first()


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


        if "name" in data:
            user.name = data["name"]


        if "email" in data:
            user.email = data["email"]


        if "password" in data:

            user.password = hash_password(
                data["password"]
            )


        db.commit()
        db.refresh(user)

        return user