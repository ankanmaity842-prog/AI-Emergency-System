from core.websocket import manager


class NotificationService:

    async def send(
        self,
        alert
    ):

        await manager.send_user(
            alert.user_id,
            {
                "title": alert.title,
                "message": alert.message,
                "severity": alert.severity
            }
        )