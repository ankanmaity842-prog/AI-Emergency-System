from database.models import Incident


class IncidentService:

    def create(
        self,
        db,
        data
    ):

        incident = Incident(
            user_id=data["user_id"],

            category=data["category"],

            incident_type=data["incident_type"],

            severity=data["severity"],

            risk_level=data["risk_level"],

            description=data["description"],

            confidence=data["confidence"],

            # Phase 1 — GPS location
            latitude=data.get("latitude"),

            longitude=data.get("longitude"),

            location=data.get("location"),

            # Emergency status
            status=data.get(
                "status",
                "active"
            )
        )

        db.add(incident)

        db.commit()

        db.refresh(incident)

        return incident


    def get(
        self,
        db,
        incident_id
    ):

        return (
            db.query(Incident)
            .filter(
                Incident.id == incident_id
            )
            .first()
        )


    def get_user_incidents(
        self,
        db,
        user_id
    ):

        return (
            db.query(Incident)
            .filter(
                Incident.user_id == user_id
            )
            .order_by(
                Incident.created_at.desc()
            )
            .all()
        )


    def get_all(
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


    def update_status(
        self,
        db,
        incident_id,
        status
    ):

        incident = self.get(
            db,
            incident_id
        )

        if incident:

            incident.status = status

            db.commit()

            db.refresh(incident)

        return incident