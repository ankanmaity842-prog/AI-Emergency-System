from fastapi import WebSocket


class ConnectionManager:

    def __init__(self):
        self.connections: dict[int, list[WebSocket]] = {}


    async def connect(
        self,
        user_id: int,
        websocket: WebSocket
    ):

        await websocket.accept()

        self.connections.setdefault(
            user_id,
            []
        ).append(
            websocket
        )


    def disconnect(
        self,
        user_id: int,
        websocket: WebSocket
    ):

        connections = self.connections.get(
            user_id,
            []
        )

        if websocket in connections:

            connections.remove(
                websocket
            )

        if not connections:

            self.connections.pop(
                user_id,
                None
            )


    async def send_user(
        self,
        user_id: int,
        message: dict
    ):

        connections = self.connections.get(
            user_id,
            []
        )

        for websocket in connections.copy():

            try:

                await websocket.send_json(
                    message
                )

            except Exception:

                self.disconnect(
                    user_id,
                    websocket
                )


manager = ConnectionManager()