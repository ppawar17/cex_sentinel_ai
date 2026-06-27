from fastapi import APIRouter

router = APIRouter()

@router.get("/metrics")
def metrics():
    return {
        "active_incidents": 3,
        "p1_incidents": 1,
        "mttr": "12 mins",
        "revenue_impact": "₹21.6L/hr"
    }


@router.get("/incidents")
def incidents():
    return [
        {
            "id": "INC001",
            "service": "checkout-api",
            "severity": "P1",
            "status": "Active"
        },
        {
            "id": "INC002",
            "service": "payment-service",
            "severity": "P2",
            "status": "Investigating"
        },
        {
            "id": "INC003",
            "service": "inventory-api",
            "severity": "P3",
            "status": "Monitoring"
        }
    ]


@router.get("/recommendation")
def recommendation():
    return {
        "root_cause": "Payment service latency increased after deployment v2.1",
        "recommendation": "Rollback payment-service-v2.1",
        "confidence": "92%"
    }