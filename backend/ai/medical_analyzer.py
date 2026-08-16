from ai.prompt_templates import MEDICAL_PROMPT


class MedicalAnalyzer:


    def create_prompt(
        self,
        symptoms
    ):

        return (
            MEDICAL_PROMPT
            +
            symptoms
        )


    def format_response(
        self,
        result
    ):

        return {

            "condition":
            result.get(
                "condition"
            ),

            "severity":
            result.get(
                "severity"
            ),

            "first_aid":
            result.get(
                "first_aid"
            ),

            "action":
            result.get(
                "action"
            )
        }