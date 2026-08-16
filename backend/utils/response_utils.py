def success_response(
    message: str,
    data=None
):

    response = {
        "success": True,
        "message": message
    }

    if data is not None:
        response["data"] = data

    return response


def error_response(
    message: str
):

    return {
        "success": False,
        "message": message
    }