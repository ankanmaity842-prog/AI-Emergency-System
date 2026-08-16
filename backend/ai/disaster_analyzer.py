from ai.prompt_templates import DISASTER_PROMPT


class DisasterAnalyzer:


    def create_prompt(
        self,
        situation
    ):

        return (
            DISASTER_PROMPT
            +
            situation
        )


    def format_response(
        self,
        result
    ):

        return {

            "type":
            result.get(
                "type"
            ),

            "risk":
            result.get(
                "risk"
            ),

            "safety":
            result.get(
                "safety"
            )
        }