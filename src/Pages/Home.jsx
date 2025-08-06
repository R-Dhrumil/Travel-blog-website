import React  from "react";
import Navbar from "../Components/Navbar";
import Crad from "../Components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const Home = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 320;
  };

   const slideRight = () => {
     sliderRef.current.scrollLeft += 320;
   };
  return (
    <div className="flex flex-col gap-2.5 min-w-screen bg-[url(src/assets/Background.png)] bg-cover w-screen h-screen">
      <nav className="px-3 py-7 flex justify-center items-center">
        <Navbar />
      </nav>
      <main className="gap-5 m-auto flex justify-center items-center h-full ">
        <div
          onClick={slideLeft}
          className="p-2 rounded-full text-black bg-white"
        >
          <ChevronLeft siz={15} />
        </div>
        <div
          id="slider"
          ref={sliderRef}
          className="flex flex-row gap-5 m-auto w-250 h-120 overflow-x-scroll scroll scroll-smooth scrollbar-hide p-5"
        >
          <Crad
            image={"src/assets/travel1.jpg"}
            title={"Prem mandir"}
            disc={
              "The name Prem Mandir means Temple of Divine Love, symbolizing the pure and eternal bond between Radha and Krishna."
            }
          />
          <Crad
            image={"src/assets/travel2.jpg"}
            title={"Rajsthan"}
            disc={
              "Rajasthan, the Land of Kings and vibrant culture From the golden dunes of Jaisalmer to the lakes of Udaipur"
            }
          />
          <Crad
            image={"src/assets/travel3.jpg"}
            title={"Rajsthan"}
            disc={
              "Rajasthan, the Land of Kings and vibrant culture From the golden dunes of Jaisalmer to the lakes of Udaipur"
            }
          />
          <Crad
            image={"src/assets/travel4.jpg"}
            title={"Rajsthan"}
            disc={
              "Rajasthan, the Land of Kings and vibrant culture From the golden dunes of Jaisalmer to the lakes of Udaipur"
            }
          />
          <Crad
            image={"src/assets/travel5.jpg"}
            title={"Rajsthan"}
            disc={
              "Rajasthan, the Land of Kings and vibrant culture From the golden dunes of Jaisalmer to the lakes of Udaipur"
            }
          />
          <Crad
            image={"src/assets/travel6.jpg"}
            title={"Rajsthan"}
            disc={
              "Rajasthan, the Land of Kings and vibrant culture From the golden dunes of Jaisalmer to the lakes of Udaipur"
            }
          />
        </div>
        <div
          onClick={slideRight}
          className="p-2 rounded-full text-black bg-white"
        >
          <ChevronRight className="cursor-pointer" />
        </div>
      </main>
    </div>
  );
};

export default Home;
