import React from "react";
import EventsImage from "../assets/Events.webp";

const Events = () => {
  return (
    <div className=" px-0 bg-gray-100  flex justify-center sm:py-12  bg-white">
      <section className="">
        <div className=" mx-auto gap-12 flex flex-col lg:flex-row-reverse justify-evenly items-center    center-elment w-[90%] center-elment  lg:w-[85%] xl:w-[70%] 2xl:w-50% py-10  ">
          <img
            className=" w-[100%] lg:w-[60%] mb-4 lg:mb-0 max-w-xl"
            src={EventsImage}
          />
          <div className="flex flex-col gap-2 text-center lg:items-start lg:text-left my-10 ">
            <strong className="text-[20px]">
              <span className="text-amber-500">CAREER</span>
              <span className="text-indigo-500"> TALKZ </span>& MORE
            </strong>
            <h1 className="text-[28px] md:text-[40px] uppercase leading-[42px] text-black font-[700]">
              We help you grow!
            </h1>
            <p className="eventPara">
              it's a collaborative ecosystem that envisions a future where
              students and companies grow together
            </p>
            <a href="/findwork" className="px-8  text-white py-2 mt-4 bg-indigo-600 rounded-lg border-2 border-indigo-600 ring-offset-2 shadow-sm transition-all duration-100 outline-none hover:shadow-md hover:bg-indigo-700 hover:border-indigo-700 focus:ring ring-offset-slate-900">
              Find Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
