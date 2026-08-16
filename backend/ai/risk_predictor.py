class RiskPredictor:


    CRITICAL = [

        "heart attack",
        "stroke",
        "fire",
        "collapse"

    ]


    HIGH = [

        "accident",
        "storm",
        "flood"

    ]


    def predict(
        self,
        incident
    ):

        incident = incident.lower()


        if incident in self.CRITICAL:

            return "critical"


        if incident in self.HIGH:

            return "high"


        return "medium"