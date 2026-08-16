class SpeechAnalyzer:

    def process(
        self,
        result
    ):

        return {

            "text": result.get(
                "text",
                ""
            ),

            "language": result.get(
                "language",
                "en"
            ),

            "emergency": result.get(
                "emergency",
                False
            )

        }