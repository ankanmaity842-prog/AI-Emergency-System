from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from core.websocket import manager


router = APIRouter(
    prefix="/ws",
    tags=["WebSocket"]
)


@router.websocket("/{user_id}")
async def websocket_endpoint(
    websocket: WebSocket,
    user_id: int
):
    await manager.connect(
        user_id,
        websocket
    )

    try:
        while True:
            await websocket.receive_text()

    except WebSocketDisconnect:
        manager.disconnect(
            user_id,
            websocket
        )