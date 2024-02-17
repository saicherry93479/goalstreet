import React from "react";

const Metrics = () => {
  return (
    <section className="select-none  bg-gradient-to-b from-transparent via-[#101114] to-transparent text-black  bg-[#f0fbff] py-[100px]">
      <div className="container relative h-full w-full py-18 lg:py-24">
        <h2 className="mx-auto mb-[60px] max-w-6xl text-center text-xl font-bold md:text-5xl lg:text-7xl">
          Achieve your design north-star metrics
        </h2>
        <div className="grid auto-rows-[32px] grid-cols-2 gap-2 md:auto-rows-[75px] md:gap-5 lg:grid-cols-3">
          <div class="group relative flex cursor-pointer flex-col items-center justify-center gap-0.5 overflow-hidden rounded-xl border border-black/15  py-6 px-4 text-center leading-tight md:space-y-0.5 lg:rounded-3xl lg:py-12 lg:px-5 row-span-5">
            <p class="text-lg  md:text-5xl">5 job interviews</p>
            <p class="text-2xs text-gray-500 md:text-lg">
              on average per student
            </p>
          </div>
          <div class="group relative flex cursor-pointer flex-col items-center justify-center gap-0.5 overflow-hidden rounded-xl border border-black/15 py-6 px-4 text-center leading-tight md:space-y-0.5 lg:rounded-3xl lg:py-12 lg:px-5 row-span-2">
            <p class="text-2xs text-gray-500 md:text-lg">
              start earning within
            </p>
            <p class="text-lg  md:text-5xl">~15 days</p>
            <p class="text-2xs text-gray-500 md:text-lg">
              after the cohort starts
            </p>
          </div>
          <div class="group relative flex cursor-pointer flex-col items-center justify-center gap-0.5 overflow-hidden rounded-xl border border-black/15  py-6 px-4 text-center leading-tight md:space-y-0.5 lg:rounded-3xl lg:py-12 lg:px-5 row-span-5">
            <p class="text-lg  md:text-5xl">5 job interviews</p>
            <p class="text-2xs text-gray-500 md:text-lg">
              on average per student
            </p>
          </div>
          <div class="group relative flex cursor-pointer flex-col items-center justify-center gap-0.5 overflow-hidden rounded-xl border border-black/15  py-6 px-4 text-center leading-tight md:space-y-0.5 lg:rounded-3xl lg:py-12 lg:px-5 row-span-2">
            <p class="text-lg  md:text-5xl">24x7</p>
            <p class="text-2xs text-gray-500 md:text-lg">
              support for any doubts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
