from pathlib import Path
import uuid


def save_file(
    content: bytes,
    directory: str,
    extension: str
):
    Path(directory).mkdir(
        parents=True,
        exist_ok=True
    )

    filename = f"{uuid.uuid4()}.{extension}"

    path = Path(directory) / filename

    path.write_bytes(content)

    return str(path)


def delete_file(path: str):

    file = Path(path)

    if file.exists():
        file.unlink()


def file_exists(path: str):

    return Path(path).exists()