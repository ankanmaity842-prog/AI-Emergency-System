def test_users_requires_authentication(client):
    response = client.get(
        "/api/users/me"
    )

    assert response.status_code in (
        401,
        403
    )