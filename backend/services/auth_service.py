from database.models import User
from core.security import (
    hash_password,
    verify_password,
    create_access_token
)


class AuthService:

    def register(self, db, data):

        email = data.email.strip().lower()

        existing_user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if existing_user:
            raise ValueError(
                "Email already registered"
            )

        user = User(
            name=data.name.strip(),
            email=email,
            password=hash_password(data.password)
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        return user


    def login(self, db, email, password):

        email = email.strip().lower()

        user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if not user or not verify_password(
            password,
            user.password
        ):
            raise ValueError(
                "Invalid email or password"
            )

        return create_access_token({
            "user_id": user.id,
            "email": user.email,
            "role": user.role
        })