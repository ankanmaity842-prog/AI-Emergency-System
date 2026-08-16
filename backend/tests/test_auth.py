def test_register_validation(client):

    response = client.post(
        "/api/auth/register",
        json={
            "name": "A",
            "email": "invalid",
            "password": "123"
        }
    )

    assert response.status_code == 422


def test_login_validation(client):

    response = client.post(
        "/api/auth/login",
        json={
            "email": "invalid",
            "password": ""
        }
    )

    assert response.status_code == 422