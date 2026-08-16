from ai.accident_analyzer import AccidentAnalyzer


class AccidentService:

    def __init__(self):

        self.analyzer = AccidentAnalyzer()


    async def analyze(
        self,
        data
    ):

        result = await self.analyzer.analyze(
            data or {}
        )

        return {
            "category": "accident",

            "incident_type": result.get(
                "accident_type",
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
                "Move to a safe location and seek help."
            ),

            "first_aid": result.get(
                "first_aid",
                ""
            )
        }