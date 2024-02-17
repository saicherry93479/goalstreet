import React from "react";
import Google from "../assets/google.png";
import Amazon from "../assets/amazon.png";
import Cognizent from "../assets/cognizant.png";
import Wipro from "../assets/wipro.png";

const Companies = () => {
  return (
    <div className=" py-[100px] lg:py-[200px] bg-[#FC921B] ">
      
      <h2 className="container mx-auto mb-[60px] max-w-6xl text-center text-xl font-bold md:text-5xl lg:text-7xl text-white">
      Our Aspirants placed in 30+ sector leading companies
        </h2>
      <div className="container flex overflow-hidden gap-4 justify-center ">
        <div className="p-3 border border-gray-300  rounded-[10px] bg-white">
          <img
            src={Google}
            className=" md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] "
          ></img>
        </div>
        <div className="p-3 border border-gray-300  rounded-[10px] bg-white">
          <img
            src={Amazon}
            className=" md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] "
          ></img>
        </div>
        <div className="p-3 border border-gray-300  rounded-[10px] bg-white">
          <img
            src={Cognizent}
            className="md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] "
          ></img>
        </div>

        <div className="p-3 border border-gray-300  rounded-[10px] bg-white">
          <img
            src={Wipro}
            className=" md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Companies;
