import React from "react";

const Courses = () => {
  return (
    <section className="select-none bg-gradient-to-b py-[50px] from-transparent via-[#101114] to-transparent py-18 md:py-24 bg-white text-black">
      <div className="relative h-full w-full">
        
       
        <h2 className="mx-auto mb-[60px] max-w-6xl text-center text-xl font-bold md:text-5xl lg:text-7xl">
        Oppurtunities are here
        </h2>

        <div className=" container  flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {[0, 1, 2, 3].map((d) => (
            <div className="w-screen md:w-auto">
              <div className="relative  mb-5 ">
                <div className="overflow-hidden w-[70vw]  md:w-auto rounded-[3px]">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJufGVufDB8fDB8fHww"
                    alt=""
                    className="  object-cover rounded-[10px] "
                  />
                </div>
              </div>
              <h5 className=" lg:mb-2 lg:text-2xl">Deepen Vora</h5>
              <div className="text-xs font-medium text-gray-400 lg:text-md">
                Senior Designer at PharmEasy, ex-Flipkart, Sony, TOI
              </div>
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
