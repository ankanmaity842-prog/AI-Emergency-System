import json

from google import genai
from google.genai import types

from core.config import settings


class AIClient:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

    async def generate_text(
        self,
        prompt,
        language="en"
    ):
        response = self.client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=prompt
        )

        return response.text

    async def generate_image_response(
        self,
        image,
        prompt,
        mime_type="image/jpeg"
    ):
        response = self.client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=[
                types.Part.from_text(
                    text=prompt
                ),
                types.Part.from_bytes(
                    data=image,
                    mime_type=mime_type
                )
            ]
        )

        return self.parse_json(response.text)

    async def transcribe_audio(
        self,
        audio,
        mime_type="audio/wav"
    ):
        response = self.client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=[
                types.Part.from_bytes(
                    data=audio,
                    mime_type=mime_type
                ),
                types.Part.from_text(
                    text="Transcribe this audio accurately. Return only the spoken text."
                )
            ]
        )

        return response.text.strip()

    def parse_json(
        self,
        text
    ):
        try:
            return json.loads(text)

        except (json.JSONDecodeError, TypeError):
            return {
                "response": text
            }