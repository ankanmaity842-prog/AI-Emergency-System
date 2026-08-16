from datetime import datetime

from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Float,
    ForeignKey,
    Integer,
    String,
    Text
)

from sqlalchemy.orm import relationship

from database.database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(100),
        nullable=False
    )

    email = Column(
        String(150),
        unique=True,
        nullable=False,
        index=True
    )

    password = Column(
        String(255),
        nullable=False
    )

    role = Column(
        String(20),
        default="user",
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    incidents = relationship(
        "Incident",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    conversations = relationship(
        "Conversation",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    alerts = relationship(
        "Alert",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    detections = relationship(
        "Detection",
        back_populates="user",
        cascade="all, delete-orphan"
    )


class Conversation(Base):

    __tablename__ = "conversations"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
        index=True
    )

    message = Column(
        Text,
        nullable=False
    )

    response = Column(
        Text,
        nullable=False
    )

    language = Column(
        String(10),
        default="en",
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    user = relationship(
        "User",
        back_populates="conversations"
    )


class Incident(Base):

    __tablename__ = "incidents"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
        index=True
    )

    category = Column(
        String(50),
        nullable=False
    )

    incident_type = Column(
        String(100),
        nullable=False
    )

    severity = Column(
        String(20),
        nullable=False
    )

    risk_level = Column(
        String(20),
        default="Medium",
        nullable=False
    )

    description = Column(
        Text,
        nullable=False
    )

    confidence = Column(
        Float,
        default=0.0,
        nullable=False
    )

    status = Column(
        String(30),
        default="open",
        nullable=False
    )

    location = Column(
        String(255),
        nullable=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    resolved_at = Column(
        DateTime,
        nullable=True
    )

    user = relationship(
        "User",
        back_populates="incidents"
    )


class Alert(Base):

    __tablename__ = "alerts"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
        index=True
    )

    title = Column(
        String(200),
        nullable=False
    )

    message = Column(
        Text,
        nullable=False
    )

    severity = Column(
        String(20),
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    user = relationship(
        "User",
        back_populates="alerts"
    )


class Detection(Base):

    __tablename__ = "detections"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
        index=True
    )

    incident_type = Column(
        String(100),
        nullable=False
    )

    confidence = Column(
        Float,
        default=0.0,
        nullable=False
    )

    severity = Column(
        String(20),
        nullable=False
    )

    risk_level = Column(
        String(20),
        nullable=False
    )

    emergency = Column(
        Boolean,
        default=False,
        nullable=False
    )

    advice = Column(
        Text,
        default="",
        nullable=False
    )

    image_url = Column(
        String(500),
        nullable=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    user = relationship(
        "User",
        back_populates="detections"
    )