import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { createClusterCustomIcon } from "../lib/utils";
import { customIcon } from "../lib/utils";
import "leaflet/dist/leaflet.css";
import useMap from "../hooks/useMap";
import { OPENSTREETMAP, OPENSTREETMAP_URL } from "../lib/constants";

function Map({ lat, lng }) {
  const hospitals = useMap(lat, lng);

  return (
    <div className="w-full mt-8 sm:w-5/6 sm:mt-0 h-[600px] rounded-xl overflow-hidden border border-gray-800">
      <MapContainer center={[lat, lng]} zoom={15} className="w-full h-full">
        <TileLayer attribution={OPENSTREETMAP} url={OPENSTREETMAP_URL} />
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
