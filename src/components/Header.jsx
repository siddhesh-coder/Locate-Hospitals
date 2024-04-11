import { Button } from "./ui/button";
import { Home, LogOut } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "../lib/MyContext";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { setLocation } = useContext(MyContext);

  function handleDestroyLocation() {
    setLocation(null);
  }
  return (
    <header className="flex items-center px-4 border-b border-gray-800 h-14">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Home className="w-6 h-6 text-gray-500 " />
          <span className="text-sm font-medium text-white">
            Locate Hospitals
          </span>
        </div>
      </div>
      <div className="ml-auto">
        {isAuthenticated ? (
          <Button
            className="flex items-center justify-center text-base font-medium"
            size="sm"
            variant="ghost"
            onClick={() => {
              logout({ logoutParams: { returnTo: window.location.origin } });
              handleDestroyLocation();
            }}
          >
            Logout
            <LogOut className="w-5 ml-1" />
          </Button>
        ) : (
          <Button size="sm" variant="ghost" onClick={() => loginWithRedirect()}>
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
