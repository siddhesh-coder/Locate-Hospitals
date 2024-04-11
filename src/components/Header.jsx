import { Button } from "./ui/button";
import { Home, LogOut } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "../lib/MyContext";

const Header = () => {
  const { user, setUser } = useContext(MyContext);

  function handleSignOut() {
    setUser(null);
  }
  return (
    <header className="flex items-center px-4 border-b border-gray-800 h-14">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Home className="w-6 h-6 text-gray-500 " />
          <span className="text-sm font-medium text-white">Healthcare</span>
        </div>
      </div>
      <div className="ml-auto">
        {user === null ? (
          <div id="signInBtn"></div>
        ) : (
          <Button
            className="flex items-center justify-center text-base font-medium"
            size="sm"
            variant="ghost"
            onClick={() => handleSignOut()}
          >
            Logout
            <LogOut className="w-5 ml-1"/>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
