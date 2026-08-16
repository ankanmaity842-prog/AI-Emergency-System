from database.database import SessionLocal
from database.models import User
from core.security import hash_password


def create_admin():
    db = SessionLocal()

    try:
        email = "maityankan1501@gmail.com"

        user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if user:
            user.role = "admin"
            db.commit()

            print("Existing user is now an admin.")
            print("Email:", user.email)
            print("Role:", user.role)

            return

        admin = User(
            name="Safe Guardian Admin",
            email=email,
            password=hash_password("Admin@12345"),
            role="admin"
        )

        db.add(admin)
        db.commit()
        db.refresh(admin)

        print("Admin created successfully.")
        print("Email:", admin.email)
        print("Password: Admin@12345")
        print("Role:", admin.role)

    except Exception as e:
        db.rollback()
        print("Failed to create admin:", e)

    finally:
        db.close()


if __name__ == "__main__":
    create_admin()