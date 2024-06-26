import React, { useContext } from "react";
import { MyContext } from "../lib/MyContext";
import Map from "./Map";
import worldMap from "../assets/worldMap/worldMap_.webp";
import { useAuth0 } from "@auth0/auth0-react";

const MapRender = () => {
  const { isAuthenticated } = useAuth0();
  const { location } = useContext(MyContext);

  return (
    <>
      <div className="border-t border-gray-100 dark:border-gray-800" />
      {isAuthenticated 
        ? location && <Map lat={location?.latitude} lng={location?.longitude} />
        : ""}
      {location === null ? (
        <div className="w-full mt-8 sm:w-5/6 sm:mt-0 h-[600px] rounded-xl overflow-hidden">
          <img
            src={worldMap}
            alt={worldMap}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MapRender;
