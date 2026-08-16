class RiskService:

    def calculate(
        self,
        severity,
        confidence
    ):

        severity = (
            str(severity or "low")
            .strip()
            .lower()
        )

        if severity in [
            "critical",
            "life-threatening"
        ]:
            return "Critical"

        if severity == "high":
            return "High"

        if confidence >= 0.85:
            return "High"

        if confidence >= 0.60:
            return "Medium"

        return "Low"