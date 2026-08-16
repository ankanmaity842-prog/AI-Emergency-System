from ai.prompt_templates import ACCIDENT_PROMPT


class AccidentAnalyzer:


    def create_prompt(
        self,
        details
    ):

        return (
            ACCIDENT_PROMPT
            +
            details
        )


    def format_response(
        self,
        result
    ):

        return {

            "injury":
            result.get(
                "injury"
            ),

            "severity":
            result.get(
                "severity"
            ),

            "first_aid":
            result.get(
                "first_aid"
            )
        }