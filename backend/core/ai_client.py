import asyncio
import json
import os
import tempfile

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
        """
        Generate normal text response.
        """

        response = await asyncio.to_thread(
            self.client.models.generate_content,
            model=settings.GEMINI_MODEL,
            contents=prompt
        )

        return (
            response.text or ""
        ).strip()


    async def generate_image_response(
        self,
        image,
        prompt,
        mime_type="image/jpeg"
    ):
        """
        Analyze an image using Gemini.
        """

        response = await asyncio.to_thread(
            self.client.models.generate_content,
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

        return self.parse_json(
            response.text
        )


    async def transcribe_audio(
        self,
        audio,
        mime_type="audio/webm"
    ):
        """
        Transcribe uploaded audio using
        Gemini 3.5 Transcribe.

        Uses a temporary file because Google's
        transcription documentation recommends
        the Files API for audio files.
        """

        mime_type = (
            mime_type or "audio/webm"
        ).lower().split(";")[0].strip()


        suffix_map = {
            "audio/webm": ".webm",
            "audio/ogg": ".ogg",
            "audio/opus": ".opus",
            "audio/wav": ".wav",
            "audio/x-wav": ".wav",
            "audio/mpeg": ".mp3",
            "audio/mp3": ".mp3",
            "audio/mp4": ".mp4",
            "audio/m4a": ".m4a",
            "audio/aac": ".aac",
            "audio/flac": ".flac",
        }


        suffix = suffix_map.get(
            mime_type,
            ".webm"
        )


        temp_path = None


        try:

            with tempfile.NamedTemporaryFile(
                delete=False,
                suffix=suffix
            ) as temp_file:

                temp_file.write(audio)
                temp_path = temp_file.name


            # Upload audio to Gemini Files API.
            audio_file = await asyncio.to_thread(
                self.client.files.upload,
                file=temp_path,
                config=types.UploadFileConfig(
                    mime_type=mime_type
                )
            )


            # Dedicated transcription model.
            response = await asyncio.to_thread(
                self.client.models.generate_content,
                model="gemini-3.5-transcribe",
                contents=[audio_file]
            )


            text = (
                response.text or ""
            ).strip()


            return text


        finally:

            if temp_path and os.path.exists(
                temp_path
            ):

                try:
                    os.remove(temp_path)

                except OSError:
                    pass


    @staticmethod
    def parse_json(text):

        try:

            return json.loads(text)

        except (
            json.JSONDecodeError,
            TypeError
        ):

            return {
                "response": text
            }