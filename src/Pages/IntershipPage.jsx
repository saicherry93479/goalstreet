import React from "react";

const IntershipPage = () => {
  return (
    <div className=" bg-white py-[50px] ">
      <div className="container">
        <h2 className="  mb-[60px] max-w-6xl text-left text-xl font-bold md:text-5xl lg:text-7xl text-black">
          Oppurtunities are here
        </h2>
        <div className="    gap-4  grid grid-cols-1 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {[0, 1, 2, 3].map((d) => (
            <div className="w-screen md:w-auto">
              <div className="relative w-full  mb-5 ">
                <div className="overflow-hidden w-[80vw]  md:w-auto rounded-[3px]">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJufGVufDB8fDB8fHww"
                    alt=""
                    className="w-full  object-cover rounded-[10px] "
                  />
                </div>
              </div>
              <h5 className="text-gray-100 lg:mb-2 lg:text-2xl">Deepen Vora</h5>
              <div className="text-xs font-medium text-gray-400 lg:text-md">
                Senior Designer at PharmEasy, ex-Flipkart, Sony, TOI
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntershipPage;
