def test_emergency_validation(authenticated_client):
    response = authenticated_client.post(
        "/api/emergency/",
        json={
            "message": ""
        }
    )

    assert response.status_code == 422


def test_invalid_category(authenticated_client):
    response = authenticated_client.post(
        "/api/emergency/",
        json={
            "message": "I have chest pain",
            "category": "invalid"
        }
    )

    assert response.status_code == 422