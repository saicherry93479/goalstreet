import React from "react";
import { COURSES_DATA } from "../Components/utils";

const IntershipPage = () => {
  return (
    <div className=" bg-white py-[50px] ">
      <div className="container">
        <h2 className="  mb-[60px] max-w-6xl text-left text-xl font-bold md:text-5xl lg:text-7xl text-black">
          Oppurtunities are here
        </h2>
        <div className="   gap-4  grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          {COURSES_DATA.map((d) => (
            <div className=" md:w-auto ">
              <div className="relative w-full  mb-5 ">
                <div className="overflow-hidden w-full h-[250px] md:h-[250px]   md:w-auto rounded-[3px]">
                  <img
                    loading="lazy"
                    src={d.image}
                    alt=""
                    className="w-full h-full object-cover rounded-[10px] border border-gray-400 "
                  />
                </div>
              </div>
              <h5 className="text-gray-100 lg:mb-2 lg:text-2xl !text-black">{d.courseName}</h5>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntershipPage;
