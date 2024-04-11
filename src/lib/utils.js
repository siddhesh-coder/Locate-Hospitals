import { Icon, divIcon } from "leaflet";
import marker from '../assets/marker/placeholder.webp';

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: [33, 33, true],
  });
};

const customIcon = new Icon({
  iconUrl: marker,
  iconSize: [38, 38],
});

const getLocation = (setLocation) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );
};

export { createClusterCustomIcon, customIcon, getLocation };

