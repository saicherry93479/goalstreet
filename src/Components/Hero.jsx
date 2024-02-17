import React from "react";
import GetAcess from "../assets/AccessIcon.jsx";
import HeroPic from "../assets/HeroPicTwo.avif";

const Hero = () => {
  return (
    <section className="select-none bg-gradient-to-b  from-transparent via-[#101114] to-transparent text-black bg-[#f0fbff]">
      <div className="container relative h-full w-full py-20 md:py-28">
        <div className="z-10 min-h-[40vh] cursor-default text-center lg:min-h-[72vh]">
          <h1 className="mix-blend-plus bg-gradient-to-b from-white to-gray-600 bg-clip-text text-center text-4xl font-bold text-transparent opacity-10 md:text-7xl md:opacity-[0.15] lg:text-[5vw] text-white">
            Sketch your ideas
          </h1>
          <h2 className="mx-auto max-w-6xl text-center text-2xl font-bold md:text-5xl lg:text-7xl mt-[20px]">
            More than just a design bootcamp, course, or cohort
          </h2>
          <p className="mt-3 text-center text-sm text-gray-500 md:text-xl lg:text-lg">
            A premium club for individuals aspiring to become a skilled
            developer
          </p>
          <a href="/internships">
            <button className="inline-flex hidden lg:inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale border hover:border-0 border-[#25365e] bg-[#252362] hover:bg-opacity-60 dark:text-white text-sm md:text-md px-6 md:px-7 py-3 md:py-4 mt-4 mb-10 lg:mb-18 lg:mt-16 text-white">
              Access Now
              <GetAcess></GetAcess>
            </button>
          </a>
          <ul className="flex w-fit my-[20px] mx-auto items-center gap-1 rounded-full px-4 lg:flex bg-[#FC921B]  hover:bg-opacity-80 backdrop-blur text-white  lg:hidden xl:hidden 2xl:hidden text-sm md:text-md px-6 md:px-7  mt-4 mb-10 lg:mb-18 lg:mt-16">
            <a href="/findwork">
              <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 ">
                Find Work
              </li>
            </a>
            <a href="/aboutus">
              <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300">
                About Us
              </li>
            </a>
            <a href="#contactus">
              <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 ">
                Contact Us
              </li>
            </a>
          </ul>
          <img
            className="object-cover mx-auto lg:w-[60%] xl:w-[40%] rounded-[30px]"
            src={HeroPic}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
