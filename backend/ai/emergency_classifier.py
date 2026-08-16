class EmergencyClassifier:


    MEDICAL = [
        "chest pain",
        "heart attack",
        "stroke",
        "breathing problem",
        "seizure",
        "unconscious",
        "bleeding"
    ]


    ACCIDENT = [
        "accident",
        "crash",
        "collision",
        "injury",
        "fall"
    ]


    DISASTER = [
        "fire",
        "smoke",
        "flood",
        "storm",
        "earthquake",
        "collapse"
    ]


    def classify(
        self,
        text:str
    ):

        text = text.lower()


        if any(
            item in text
            for item in self.MEDICAL
        ):
            return "medical"


        if any(
            item in text
            for item in self.ACCIDENT
        ):
            return "accident"


        if any(
            item in text
            for item in self.DISASTER
        ):
            return "disaster"


        return "general"