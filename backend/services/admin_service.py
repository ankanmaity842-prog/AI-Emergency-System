from fastapi import HTTPException

from core.roles import Roles

from database.models import (
    User,
    Incident,
    Alert
)


class AdminService:


    def check_admin(
        self,
        user
    ):

        if user["role"] != Roles.ADMIN:

            raise HTTPException(
                status_code=403,
                detail="Admin access required"
            )


    def dashboard(
        self,
        db
    ):

        return {

            "users":
            db.query(User).count(),

            "incidents":
            db.query(Incident).count(),

            "alerts":
            db.query(Alert).count(),

            "critical_cases":
            db.query(Incident)
            .filter(
                Incident.severity=="critical"
            )
            .count()

        }


    def users(
        self,
        db
    ):

        return db.query(
            User
        ).all()



    def incidents(
        self,
        db
    ):

        return (
            db.query(Incident)
            .order_by(
                Incident.created_at.desc()
            )
            .all()
        )



    def statistics(
        self,
        db
    ):

        incidents = db.query(
            Incident
        ).all()


        result = {

            "medical":0,

            "accident":0,

            "disaster":0

        }


        for incident in incidents:

            if incident.category in result:

                result[
                    incident.category
                ] += 1


        return result