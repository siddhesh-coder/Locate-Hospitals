import React from "react";
import Title from "./Title";
import MapRender from "./MapRender";

const MainContainer = () => {
  return (
    <main className="flex flex-col items-center w-full gap-5 py-6 md:py-12 lg:py-24">
      <Title />
      <MapRender />
    </main>
  );
};

export default MainContainer;
