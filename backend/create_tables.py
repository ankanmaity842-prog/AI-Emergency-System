from database.database import Base, engine

# Importing app ensures every router/model gets imported, which registers
# all your SQLAlchemy model classes with Base before create_all runs.
# Without this import, Base.metadata may not know about your tables yet.
import app
import os  # noqa: F401

Base.metadata.create_all(bind=engine)
print("Tables created successfully.")