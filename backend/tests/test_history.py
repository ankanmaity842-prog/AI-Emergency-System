def test_history_requires_authentication(client):

    response = client.get(
        "/api/history/"
    )

    assert response.status_code in (
        401,
        403
    )