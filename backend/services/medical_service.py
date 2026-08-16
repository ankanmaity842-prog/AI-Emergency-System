from ai.medical_analyzer import MedicalAnalyzer


class MedicalService:

    def __init__(self):

        self.analyzer = MedicalAnalyzer()


    async def analyze(
        self,
        symptoms,
        language="en"
    ):

        result = await self.analyzer.analyze(
            symptoms or "",
            language
        )

        return {
            "category": "medical",

            "incident_type": result.get(
                "condition",
                "unknown"
            ),

            "severity": result.get(
                "severity",
                "low"
            ),

            "confidence": result.get(
                "confidence",
                0
            ),

            "advice": result.get(
                "immediate_action",
                "Seek immediate medical assistance."
            ),

            "department": result.get(
                "department",
                "General Medicine"
            ),

            "first_aid": result.get(
                "first_aid",
                ""
            )
        }