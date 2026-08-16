from database.models import Incident


class ReportService:

    def user_report(
        self,
        db,
        user_id
    ):

        incidents = db.query(Incident).filter(
            Incident.user_id == user_id
        ).all()

        return {
            "total_incidents": len(incidents),
            "incidents": incidents
        }


    def admin_report(
        self,
        db
    ):

        incidents = db.query(Incident).all()

        return {
            "total_incidents": len(incidents),
            "critical": len([
                i for i in incidents
                if i.severity == "critical"
            ]),
            "high": len([
                i for i in incidents
                if i.severity == "high"
            ]),
            "incidents": incidents
        }