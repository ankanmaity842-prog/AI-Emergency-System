import math

import httpx


class NearbyService:

    OVERPASS_URL = (
        "https://overpass-api.de/api/interpreter"
    )

    DEFAULT_RADIUS = 5000

    async def search(
        self,
        latitude: float,
        longitude: float,
        category: str,
        radius: int = DEFAULT_RADIUS
    ):

        if category == "police":

            query = f"""
            [out:json][timeout:25];

            (
                nwr(
                    around:{radius},
                    {latitude},
                    {longitude}
                )["amenity"="police"];
            );

            out center tags;
            """

        elif category == "hospital":

            query = f"""
            [out:json][timeout:25];

            (
                nwr(
                    around:{radius},
                    {latitude},
                    {longitude}
                )["amenity"="hospital"];

                nwr(
                    around:{radius},
                    {latitude},
                    {longitude}
                )["amenity"="clinic"];
            );

            out center tags;
            """

        elif category == "safety":

            query = f"""
            [out:json][timeout:25];

            (
                nwr(
                    around:{radius},
                    {latitude},
                    {longitude}
                )["amenity"="shelter"];

                nwr(
                    around:{radius},
                    {latitude},
                    {longitude}
                )["amenity"="social_facility"];

                nwr(
                    around:{radius},
                    {latitude},
                    {longitude}
                )["amenity"="fire_station"];
            );

            out center tags;
            """

        else:

            raise ValueError(
                "Unsupported assistance category"
            )

        async with httpx.AsyncClient(
            timeout=30.0
        ) as client:

            response = await client.post(
                self.OVERPASS_URL,
                data={
                    "data": query
                },
                headers={
                    "User-Agent":
                        "SafeGuardian/1.0"
                }
            )

            response.raise_for_status()

            data = response.json()

        return self._process_results(
            data.get("elements", []),
            latitude,
            longitude,
            category
        )


    def _process_results(
        self,
        elements,
        user_latitude,
        user_longitude,
        category
    ):

        results = []

        for element in elements:

            tags = element.get(
                "tags",
                {}
            )

            name = tags.get(
                "name",
                "Unnamed facility"
            )

            coordinates = self._get_coordinates(
                element
            )

            if not coordinates:
                continue

            latitude = coordinates["latitude"]
            longitude = coordinates["longitude"]

            distance = self._distance(
                user_latitude,
                user_longitude,
                latitude,
                longitude
            )

            results.append(
                {
                    "id": element.get("id"),

                    "name": name,

                    "type": category,

                    "latitude": latitude,

                    "longitude": longitude,

                    "distance_km": round(
                        distance,
                        2
                    ),

                    "phone": tags.get(
                        "phone"
                    ),

                    "website": tags.get(
                        "website"
                    ),

                    "address": self._get_address(
                        tags
                    ),

                    "opening_hours": tags.get(
                        "opening_hours"
                    )
                }
            )

        results.sort(
            key=lambda item:
            item["distance_km"]
        )

        return results


    @staticmethod
    def _get_coordinates(
        element
    ):

        # Node
        if (
            "lat" in element
            and "lon" in element
        ):

            return {
                "latitude": element["lat"],
                "longitude": element["lon"]
            }

        # Way / Relation
        center = element.get(
            "center"
        )

        if center:

            return {
                "latitude": center.get(
                    "lat"
                ),

                "longitude": center.get(
                    "lon"
                )
            }

        return None


    @staticmethod
    def _get_address(tags):

        parts = []

        for key in [
            "addr:housenumber",
            "addr:street",
            "addr:city",
            "addr:postcode"
        ]:

            value = tags.get(key)

            if value:
                parts.append(value)

        if not parts:
            return None

        return ", ".join(parts)


    @staticmethod
    def _distance(
        lat1,
        lon1,
        lat2,
        lon2
    ):

        earth_radius = 6371.0

        lat1 = math.radians(lat1)
        lat2 = math.radians(lat2)

        delta_lat = math.radians(
            lat2 - lat1
        )

        delta_lon = math.radians(
            lon2 - lon1
        )

        a = (
            math.sin(delta_lat / 2) ** 2
            +
            math.cos(lat1)
            * math.cos(lat2)
            * math.sin(delta_lon / 2) ** 2
        )

        c = 2 * math.atan2(
            math.sqrt(a),
            math.sqrt(1 - a)
        )

        return earth_radius * c