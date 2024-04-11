/* eslint-disable no-undef */
import Hero from "./components/Hero";
import { MyContext } from "./lib/MyContext";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);

  function handleCallbackResponse(response) {
    const userObject = jwtDecode(response.credential);
    setUser(userObject);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "55535995460-q25o70v4u16madss7jiqq80mb56ph0mi.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInBtn"), {
      theme: "outline",
      size: "medium",
    });
  }, [user]);

  return (
    <MyContext.Provider value={{ user, setUser, location, setLocation }}>
      <Hero />
    </MyContext.Provider>
  );
}

export default App;
