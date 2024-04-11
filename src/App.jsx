import Hero from "./components/Hero";
import { MyContext } from "./lib/MyContext";
import { jwtDecode } from "jwt-decode";
import { ID } from "./lib/constants";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);

  function handleCallbackResponse(response) {
    const userObject = jwtDecode(response.credential);
    setUser(userObject);
  }

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.google &&
      window.google.accounts
    ) {
      window.google.accounts.id.initialize({
        client_id: ID,
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("signInBtn"),
        {
          theme: "outline",
          size: "medium",
        }
      );
    }
  }, [user]);

  return (
    <MyContext.Provider value={{ user, setUser, location, setLocation }}>
      <Hero />
    </MyContext.Provider>
  );
}

export default App;
