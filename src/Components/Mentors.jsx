import React from "react";
import SampleMentorImage from "../assets/SampleMentor.webp";

const Mentors = () => {
  return (
    <section
      id="mentors"
      className="select-none bg-gradient-to-b from-transparent via-[#101114] to-transparent py-18 md:py-24 py-[100px]"
    >
      <div className="relative h-full w-full">
        <h2 className="container mx-auto mb-[60px] max-w-6xl text-center text-xl font-bold md:text-5xl lg:text-7xl text-black">
          Connect with senior design mentors and get actionable insights
        </h2>
        <div className="container flex gap-6 overflow-x-auto  md:grid md:grid-cols-3 lg:gap-0 lg:gap-y-20 xl:grid-cols-4 px-[100px]">
          {[0, 1, 2, 3, 4, 5, 6].map((d) => (
            <div className="min-w-[200px] lg:min-w-[300px] max-w-xs text-center">
              <div className="relative mx-auto mb-5 w-fit">
                <div className="aspect-[8/9] overflow-hidden rounded-3xl object-cover">
                  <img
                    loading="lazy"
                    src={SampleMentorImage}
                    alt=""
                    className="aspect-[8/9] h-44 object-cover lg:h-60 object-top"
                  />
                </div>
              </div>
              <h5 className=" lg:mb-2 lg:text-2xl text-black">Deepen Vora</h5>
              <div className="text-xs font-medium text-gray-600 lg:text-md">
                Senior Designer at PharmEasy, ex-Flipkart, Sony, TOI
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
