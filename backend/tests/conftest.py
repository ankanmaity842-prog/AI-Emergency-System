import uuid

import pytest
from fastapi.testclient import TestClient

from app import app


@pytest.fixture
def client():
    return TestClient(app)


@pytest.fixture
def authenticated_client(client):

    email = f"test_{uuid.uuid4().hex}@example.com"
    password = "testpassword123"

    # Register
    response = client.post(
        "/api/auth/register",
        json={
            "name": "Test User",
            "email": email,
            "password": password
        }
    )

    assert response.status_code in (200, 201), response.text

    # Login
    response = client.post(
        "/api/auth/login",
        data={
            "username": email,
            "password": password
        }
    )

    assert response.status_code == 200, response.text

    token = response.json()["access_token"]

    client.headers.update({
        "Authorization": f"Bearer {token}"
    })

    return client