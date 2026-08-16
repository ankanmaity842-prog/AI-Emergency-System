from database.models import Conversation


class ConversationService:

    def save(
        self,
        db,
        user_id,
        message,
        response,
        language
    ):

        conversation = Conversation(
            user_id=user_id,
            message=message,
            response=response,
            language=language
        )

        db.add(conversation)
        db.commit()
        db.refresh(conversation)

        return conversation


    def get_history(
        self,
        db,
        user_id
    ):

        return (
            db.query(Conversation)
            .filter(
                Conversation.user_id == user_id
            )
            .order_by(
                Conversation.created_at.asc()
            )
            .all()
        )


    def clear_history(
        self,
        db,
        user_id
    ):

        db.query(Conversation).filter(
            Conversation.user_id == user_id
        ).delete(
            synchronize_session=False
        )

        db.commit()