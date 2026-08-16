from database.models import (
    Incident,
    Conversation
)


class HistoryService:

    def get_incident_history(
        self,
        db,
        user_id
    ):

        incidents = db.query(Incident).filter(
            Incident.user_id == user_id
        ).order_by(
            Incident.created_at.desc()
        ).all()

        return [
            {
                "id": incident.id,
                "type": incident.incident_type,
                "category": incident.category,
                "severity": incident.severity,
                "status": incident.status,
                "location": incident.location,
                "confidence": incident.confidence,
                "created_at": incident.created_at
            }
            for incident in incidents
        ]


    def get_chat_history(
        self,
        db,
        user_id
    ):

        chats = db.query(Conversation).filter(
            Conversation.user_id == user_id
        ).order_by(
            Conversation.created_at.asc()
        ).all()

        return [
            {
                "message": chat.message,
                "response": chat.response,
                "language": chat.language,
                "created_at": chat.created_at
            }
            for chat in chats
        ]


    def get_user_activity(
        self,
        db,
        user_id
    ):

        return {
            "incidents": self.get_incident_history(
                db,
                user_id
            ),
            "conversations": self.get_chat_history(
                db,
                user_id
            )
        }