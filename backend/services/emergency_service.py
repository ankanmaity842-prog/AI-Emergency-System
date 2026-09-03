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

        # --------------------------------------------------
        # Convert Pydantic model to dictionary
        # --------------------------------------------------

        if hasattr(data, "model_dump"):
            data = data.model_dump()

        elif hasattr(data, "dict"):
            data = data.dict()

        # --------------------------------------------------
        # Basic request information
        # --------------------------------------------------

        message = data.get(
            "message",
            ""
        ).strip()

        language = data.get(
            "language",
            "auto"
        )

        category = data.get(
            "category",
            "auto"
        ).lower()

        # --------------------------------------------------
        # GPS information
        # --------------------------------------------------

        latitude = data.get(
            "latitude"
        )

        longitude = data.get(
            "longitude"
        )

        location = data.get(
            "location"
        )

        # --------------------------------------------------
        # Analyze emergency
        # --------------------------------------------------

        if category == "medical":

            result = await self.medical.analyze(
                message,
                language
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

            # Unknown / auto category
            #
            # For now keep a safe fallback.
            # Later this can use the AI classifier.

            result = {
                "category": "general",
                "incident_type": "unknown",
                "severity": "low",
                "confidence": 0.0,
                "advice": (
                    "Please provide more information "
                    "about the emergency."
                )
            }

        # --------------------------------------------------
        # Calculate risk
        # --------------------------------------------------

        severity = result.get(
            "severity",
            "low"
        )

        confidence = result.get(
            "confidence",
            0.0
        )

        risk_level = self.risk.calculate(
            severity,
            confidence
        )

        # --------------------------------------------------
        # Prepare incident
        # --------------------------------------------------

        incident_data = {

            "user_id": user_id,

            "category": result.get(
                "category",
                category
            ),

            "incident_type": result.get(
                "incident_type",
                "unknown"
            ),

            "severity": severity,

            "risk_level": risk_level,

            "description": result.get(
                "advice",
                ""
            ),

            "confidence": confidence,

            # Phase 1 GPS
            "latitude": latitude,

            "longitude": longitude,

            "location": location,

            # Initial status
            "status": "active"
        }

        # --------------------------------------------------
        # Save incident to PostgreSQL
        # --------------------------------------------------

        incident = self.incident.create(
            db,
            incident_data
        )

        # --------------------------------------------------
        # Return emergency result
        # --------------------------------------------------

        return {
            "id": incident.id,

            "category": incident.category,

            "incident_type": incident.incident_type,

            "severity": incident.severity,

            "risk_level": incident.risk_level,

            "confidence": incident.confidence,

            "description": incident.description,

            "status": incident.status,

            "latitude": getattr(
                incident,
                "latitude",
                None
            ),

            "longitude": getattr(
                incident,
                "longitude",
                None
            ),

            "location": getattr(
                incident,
                "location",
                None
            ),

            "created_at": getattr(
                incident,
                "created_at",
                None
            )
        }