from core.ai_client import AIClient


class AIService:

    def __init__(self):
        self.client = AIClient()

    async def generate(
        self,
        prompt,
        language="en"
    ):
        return await self.client.generate_text(
            prompt,
            language
        )

    async def analyze_image(
        self,
        image_data,
        mime_type="image/jpeg"
    ):

        prompt = """
Analyze the emergency image carefully.

Determine whether the image shows an emergency situation.

Return ONLY valid JSON in this exact format:

{
    "incident_type": "accident",
    "severity": "high",
    "confidence": 0.95,
    "advice": "Call emergency services immediately and move to a safe location."
}

Possible incident_type values:
- accident
- fire
- medical_emergency
- violence
- other
- unknown

Possible severity values:
- low
- medium
- high
- critical
- unknown

The confidence must be a number between 0 and 1.

Do not include markdown.
Do not include ```json.
Return only JSON.
"""

        return await self.client.generate_image_response(
            image=image_data,
            prompt=prompt,
            mime_type=mime_type
        )