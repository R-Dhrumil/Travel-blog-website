import React from "react";
import Navbar from "../Components/Navbar";
import Crad from "../Components/Card";

const Home = () => {

  return (
    <div className="flex flex-col gap-2.5 min-w-screen">
      <nav className="px-3 py-7 flex justify-center items-center">
        <Navbar />
      </nav>
      <main className="h-4 m-auto">
        <div className="flex gap-5 m-auto">

        <Crad image={"src/assets/travel1.jpg"} />
        <Crad image={"src/assets/travel1.jpg"} />
        <Crad image={"src/assets/travel1.jpg"} />
        <Crad image={"src/assets/travel1.jpg"} />
        </div>
      </main>
    </div>
  );
};

export default Home;
