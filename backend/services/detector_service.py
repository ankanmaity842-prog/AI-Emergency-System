from services.image_service import ImageService
from services.ai_service import AIService


class DetectorService:

    def __init__(self):
        self.image = ImageService()
        self.ai = AIService()

    async def detect(
        self,
        image
    ):

        image_data = await self.image.read_image(image)

        mime_type = image.content_type or "image/jpeg"

        result = await self.ai.analyze_image(
            image_data,
            mime_type
        )

        return {
            "incident_type": result.get(
                "incident_type",
                "unknown"
            ),
            "severity": result.get(
                "severity",
                "unknown"
            ),
            "confidence": result.get(
                "confidence",
                0
            ),
            "advice": result.get(
                "advice",
                "Stay safe and seek emergency assistance."
            )
        }