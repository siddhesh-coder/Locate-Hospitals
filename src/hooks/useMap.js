import React, { useEffect, useState } from "react";

const useMap = (lat, lng) => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    // Fetching nearby hospitals using Overpass API
    const fetchNearbyHospitals = async () => {
      try {
        const response = await fetch(
          `https://overpass-api.de/api/interpreter?data=[out:json];node(around:10000,${lat},${lng})[amenity=hospital];out;`
        );
        const data = await response.json();
        const nearbyHospitals = data.elements.map((element) => ({
          name: element.tags.name || "Hospital",
          location: [element.lat, element.lon],
        }));
        setHospitals(nearbyHospitals);
      } catch (error) {
        console.error("Error fetching nearby hospitals:", error);
      }
    };

    fetchNearbyHospitals();
  }, [lat, lng]);

  return hospitals;
};

export default useMap;
