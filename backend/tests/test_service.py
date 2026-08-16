from services.risk_service import RiskService


def test_critical_risk():

    service = RiskService()

    assert service.calculate(
        "critical",
        0.5
    ) == "Critical"


def test_high_risk():

    service = RiskService()

    assert service.calculate(
        "high",
        0.5
    ) == "High"


def test_confidence_high():

    service = RiskService()

    assert service.calculate(
        "low",
        0.90
    ) == "High"


def test_confidence_medium():

    service = RiskService()

    assert service.calculate(
        "low",
        0.70
    ) == "Medium"


def test_confidence_low():

    service = RiskService()

    assert service.calculate(
        "low",
        0.30
    ) == "Low"