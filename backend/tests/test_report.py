def test_reports_requires_authentication(client):

    response = client.get(
        "/api/reports/"
    )

    assert response.status_code in (
        401,
        403
    )