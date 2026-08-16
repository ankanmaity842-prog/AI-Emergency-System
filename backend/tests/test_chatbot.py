def test_chatbot_validation(authenticated_client):
    response = authenticated_client.post(
        "/api/chatbot/",
        json={
            "message": ""
        }
    )

    assert response.status_code == 422