from database.models import Alert
from services.notification_service import NotificationService


class AlertService:

    def __init__(self):
        self.notification = NotificationService()

    async def create(
        self,
        db,
        data
    ):
        alert = Alert(
            user_id=data.user_id,
            title=data.title,
            message=data.message,
            severity=data.severity
        )

        db.add(alert)
        db.commit()
        db.refresh(alert)

        await self.notification.send(alert)

        return alert

    def get_user_alerts(
        self,
        db,
        user_id
    ):
        return (
            db.query(Alert)
            .filter(Alert.user_id == user_id)
            .order_by(Alert.created_at.desc())
            .all()
        )

    def mark_as_read(
        self,
        db,
        user_id,
        alert_id
    ):
        alert = (
            db.query(Alert)
            .filter(
                Alert.id == alert_id,
                Alert.user_id == user_id
            )
            .first()
        )

        if not alert:
            return None

        alert.is_read = True

        db.commit()
        db.refresh(alert)

        return alert