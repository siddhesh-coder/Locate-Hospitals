import Hero from "./components/Hero";
import { MyContext } from "./lib/MyContext";
import { Auth0Provider } from "@auth0/auth0-react";
import React, { useState } from "react";
import { CLIENT_ID, DOMAIN_ID } from "./lib/constants";

function App() {
  const [location, setLocation] = useState(null);
  return (
    <Auth0Provider
      domain={DOMAIN_ID}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <MyContext.Provider value={{ location, setLocation }}>
        <Hero />
      </MyContext.Provider>
    </Auth0Provider>
  );
}

export default App;
