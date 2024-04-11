import React, { useContext} from "react";
import { MyContext } from "../lib/MyContext";
import { getLocation } from "../lib/utils";
import { useAuth0 } from "@auth0/auth0-react";

const Title = () => {
  const { user, isAuthenticated } = useAuth0();
  const { setLocation } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl/relaxed lg:text-6xl/relaxed">
          Find the best hospitals near you.
        </h1>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We make it easy to locate hospitals and healthcare facilities around
          the world. Just login and get the nearest hospitals.
        </p>
        <div>
          {isAuthenticated ? (
            <>
              <h1 className="font-bold">{`Welcome ${user.name}!`}</h1>
              <button
                class="select-none m-5 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-base font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => getLocation(setLocation)}
              >
                Locate nearby hospitals
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Title;
