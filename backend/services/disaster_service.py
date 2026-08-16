from ai.disaster_analyzer import DisasterAnalyzer


class DisasterService:

    def __init__(self):

        self.analyzer = DisasterAnalyzer()


    async def analyze(
        self,
        data
    ):

        result = await self.analyzer.analyze(
            data
        )

        return {
            "category": "disaster",

            "incident_type": result.get(
                "disaster_type",
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
                "safety_guidance",
                "Move to a safe area and follow emergency instructions."
            ),

            "evacuation": result.get(
                "evacuation",
                ""
            )
        }