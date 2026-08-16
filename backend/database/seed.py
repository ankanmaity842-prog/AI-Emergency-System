from database.database import SessionLocal
from database.models import User

from core.security import hash_password



def create_admin():

    db = SessionLocal()


    admin = User(

        name="Admin",

        email="admin@example.com",

        password=hash_password(
            "admin123"
        ),

        role="admin"

    )


    db.add(admin)

    db.commit()

    db.close()



if __name__ == "__main__":

    create_admin()