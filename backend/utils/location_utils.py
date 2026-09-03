def validate_coordinates(
    latitude,
    longitude
):
    """
    Validate GPS coordinates.

    Returns True when coordinates are valid,
    otherwise False.
    """

    if latitude is None or longitude is None:
        return False

    try:
        latitude = float(latitude)
        longitude = float(longitude)
    except (TypeError, ValueError):
        return False

    if not -90 <= latitude <= 90:
        return False

    if not -180 <= longitude <= 180:
        return False

    return True


def normalize_coordinates(
    latitude,
    longitude
):
    """
    Convert coordinates to float and round them
    to a reasonable precision for storage/API usage.
    """

    if not validate_coordinates(
        latitude,
        longitude
    ):
        raise ValueError(
            "Invalid latitude or longitude"
        )

    return (
        round(float(latitude), 6),
        round(float(longitude), 6)
    )


def format_coordinates(
    latitude,
    longitude
):
    """
    Return coordinates in a readable format.
    """

    latitude, longitude = normalize_coordinates(
        latitude,
        longitude
    )

    return f"{latitude}, {longitude}"