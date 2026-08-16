def test_websocket(client):

    with client.websocket_connect(
        "/api/ws/1"
    ) as websocket:

        websocket.send_text("ping")