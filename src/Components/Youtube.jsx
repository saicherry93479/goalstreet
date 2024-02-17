import React from "react";
import Ladder from "../assets/Ladder.jsx";
import LadderOne from "../assets/LadderOne.jsx";

const Youtube = () => {
  return (
    <section className="select-none mt-[50px] md:mt-0 bg-gradient-to-b from-transparent via-[#101114] to-transparent py-18 md:py-36 text-white bg-[#101114]">
      <div className="container relative flex cursor-default flex-col items-center justify-start gap-16 py-4 md:flex-row md:justify-between md:gap-12 md:py-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold lg:mb-7 lg:text-6xl">
            YT videos, courses, and lectures only take you from 0 → 1
          </h2>
          <p className="text-sm text-gray-500 lg:text-2xl">
            What takes you beyond is practice, feedback, and building hands-on
            projects
          </p>
        </div>
        <div className="w-full max-w-sm shrink-0 md:max-w-lg md:basis-2/5">
          {/* <Ladder></Ladder> */}
          <LadderOne></LadderOne>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
