def allowed_file(
    filename: str,
    extensions: set[str]
):

    if "." not in filename:
        return False

    extension = filename.rsplit(
        ".",
        1
    )[1].lower()

    return extension in extensions