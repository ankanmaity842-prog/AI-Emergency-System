def test_alert_requires_authentication(client):

    response = client.get(
        "/api/alerts/"
    )

    assert response.status_code in (
        401,
        403
    )