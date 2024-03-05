import React from "react";
import { COURSES_DATA } from "./utils";

const Courses = () => {
  return (
    <section className="select-none bg-gradient-to-b py-[50px] from-transparent via-[#101114] to-transparent py-18 md:py-24 bg-white text-black">
      <div className="relative h-full w-full">
        <h2 className="container mx-auto mb-[60px] max-w-6xl text-center text-xl font-bold md:text-5xl lg:text-7xl">
          A place for individuals aspiring to become a skilled engineer
        </h2>

        <div className=" container  flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:gap-10 lg:px-[150px] xl:px-[200px]  xl:grid-cols-3">
          {COURSES_DATA.slice(0,6).map((d) => (
            <div className="w-screen  md:w-auto">
              <div className="relative  mb-5 ">
                <div className="overflow-hidden w-[70vw] h-[200px]  md:w-auto rounded-[3px]  !rounded-[10px]">
                  <img
                    loading="lazy"
                    src={d.image}
                    alt=""
                    className=" h-full w-[100%] md:w-full object-cover rounded-[10px] border border-gray-300"
                  />
                </div>
              </div>
              <h5 className=" lg:mb-2 lg:text-2xl">{d.courseName}</h5>

            </div>
          ))}
        </div>
        <a href="/internships">
          <div class="mx-auto cursor-pointer w-fit my-14 items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale bg-[#252362] text-white text-primary-foreground hover:bg-opacity-60 text-sm md:text-md px-8 md:px-12 py-3 md:py-4 ">
            <p>View All Courses</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Courses;
