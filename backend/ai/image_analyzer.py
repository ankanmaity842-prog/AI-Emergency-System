from ai.prompt_templates import IMAGE_PROMPT


class ImageAnalyzer:


    def get_prompt(self):

        return IMAGE_PROMPT



    def process(
        self,
        result
    ):

        return {

            "incident":
            result.get(
                "incident"
            ),

            "severity":
            result.get(
                "severity"
            ),

            "advice":
            result.get(
                "advice"
            )

        }