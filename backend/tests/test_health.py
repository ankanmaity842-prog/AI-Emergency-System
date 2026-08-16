def test_root(client):

    response = client.get("/")

    assert response.status_code == 200

    data = response.json()

    assert "application" in data
    assert "version" in data
    assert data["status"] == "running"


def test_health(client):

    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "healthy"