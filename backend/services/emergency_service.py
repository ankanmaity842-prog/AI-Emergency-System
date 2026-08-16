from services.medical_service import MedicalService
from services.accident_service import AccidentService
from services.disaster_service import DisasterService
from services.incident_service import IncidentService
from services.risk_service import RiskService


class EmergencyService:

    def __init__(self):

        self.medical = MedicalService()
        self.accident = AccidentService()
        self.disaster = DisasterService()
        self.incident = IncidentService()
        self.risk = RiskService()


    async def handle(
        self,
        db,
        user_id,
        data
    ):

        category = data.get(
            "category",
            "medical"
        ).lower()

        if category == "medical":

            result = await self.medical.analyze(
                data.get("message", ""),
                data.get("language", "en")
            )

        elif category == "accident":

            result = await self.accident.analyze(
                data
            )

        elif category == "disaster":

            result = await self.disaster.analyze(
                data
            )

        else:

            result = {
                "category": "general",
                "incident_type": "unknown",
                "severity": "low",
                "confidence": 0,
                "advice": "Please provide more details."
            }

        result["risk_level"] = self.risk.calculate(
            result.get("severity"),
            result.get("confidence", 0)
        )

        incident_data = {
            "user_id": user_id,
            "category": result.get("category"),
            "incident_type": result.get("incident_type"),
            "severity": result.get("severity"),
            "risk_level": result.get("risk_level"),
            "description": result.get("advice", ""),
            "confidence": result.get("confidence", 0)
        }

        return self.incident.create(
            db,
            incident_data
        )