import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { createClusterCustomIcon } from "../lib/utils";
import { customIcon } from "../lib/utils";
import "leaflet/dist/leaflet.css";

function Map({ lat, lng }) {
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

  return (
    <div className="w-full mt-8 sm:w-5/6 sm:mt-0 h-[600px] rounded-xl overflow-hidden border border-gray-800">
      <MapContainer center={[lat, lng]} zoom={15} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {hospitals.map((hospital, index) => (
            <Marker key={index} position={hospital.location} icon={customIcon}>
              <Popup>{hospital.name}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;
