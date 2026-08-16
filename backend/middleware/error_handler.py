from fastapi import (
    Request,
    status
)

from fastapi.responses import JSONResponse


async def global_exception_handler(
    request: Request,
    exc: Exception
):

    print(
        f"Unhandled error: {exc}"
    )

    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,

        content={
            "detail":
            "An internal server error occurred."
        }
    )