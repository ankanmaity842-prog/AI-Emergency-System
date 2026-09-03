from services.nearby_service import NearbyService


class AssistanceService:

    VALID_TYPES = {
        "police",
        "hospital",
        "safety",
        "all"
    }

    def __init__(self):

        self.nearby = NearbyService()


    async def get_nearby(
        self,
        latitude: float,
        longitude: float,
        assistance_type: str = "all",
        radius: int = 5000
    ):

        assistance_type = (
            assistance_type
            .lower()
            .strip()
        )

        if assistance_type not in self.VALID_TYPES:

            raise ValueError(
                "Invalid assistance type"
            )

        if not -90 <= latitude <= 90:

            raise ValueError(
                "Invalid latitude"
            )

        if not -180 <= longitude <= 180:

            raise ValueError(
                "Invalid longitude"
            )

        radius = max(
            100,
            min(radius, 10000)
        )

        if assistance_type == "all":

            police = await self.nearby.search(
                latitude,
                longitude,
                "police",
                radius
            )

            hospitals = await self.nearby.search(
                latitude,
                longitude,
                "hospital",
                radius
            )

            safety = await self.nearby.search(
                latitude,
                longitude,
                "safety",
                radius
            )

            return {
                "latitude": latitude,

                "longitude": longitude,

                "radius_km": round(
                    radius / 1000,
                    1
                ),

                "police": police,

                "hospitals": hospitals,

                "safety_centres": safety,

                "total": (
                    len(police)
                    + len(hospitals)
                    + len(safety)
                )
            }


        results = await self.nearby.search(
            latitude,
            longitude,
            assistance_type,
            radius
        )

        return {
            "latitude": latitude,

            "longitude": longitude,

            "radius_km": round(
                radius / 1000,
                1
            ),

            "type": assistance_type,

            "results": results,

            "total": len(results)
        }