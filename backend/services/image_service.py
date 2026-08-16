from io import BytesIO

from PIL import Image


class ImageService:

    MAX_SIZE = (1024, 1024)

    async def read_image(
        self,
        file
    ):

        try:
            image = Image.open(
                BytesIO(await file.read())
            ).convert("RGB")

        except Exception:
            raise ValueError("Invalid image file")

        image.thumbnail(self.MAX_SIZE)

        buffer = BytesIO()

        image.save(
            buffer,
            format="JPEG",
            quality=85
        )

        return buffer.getvalue()