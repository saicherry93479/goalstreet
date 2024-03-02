import React from "react";
import Logo from "../assets/Logo.jsx";
import LOGOGOAL from "../assets/LOG_GOAL.png";

const NavBar = () => {
  return (
    <header className=" top-0 z-20 pt-6 pb-6 text-gray-900 backdrop-blur transition-all  bg-[#f0fbff]">
      <div className="container flex items-center justify-between gap-3">
        {/* <Logo></Logo> */}

        <a href="/">
          <img className="lg:scale-400" src={LOGOGOAL}></img>
        </a>
        <ul
          className="hidden items-center gap-1 rounded-full px-4 lg:flex  hover:bg-opacity-80 backdrop-blur text-white bg-[#FC921B]"
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          <a href="/findwork">
            <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-[#252362]">
              Find Work
            </li>
          </a>
          <a href="/work">
            <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-[#252362]">
              About Us
            </li>
          </a>
          <a href="/contactus">
            <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-[#252362]">
              Contact Us
            </li>
          </a>
        </ul>

        <div class="flex gap-4">
          <a href="/register">
            <button
              type="button"
              class="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale  text-white text-primary-foreground hover:bg-opacity-60 text-sm md:text-md px-6 md:px-7 py-3 md:py-4 bg-[#252362]"
            >
              Join Now
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
