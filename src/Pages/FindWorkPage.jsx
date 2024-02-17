import React from "react";

const FindWorkPage = () => {
  return (
    <div className="bg-white px-6  py-[50px]">
      <div className="container">
        <div className="px-6">
          <div className="sticky top-10 z-10">
            <div className="bg-white py-6">
              <h2 className="mb-4 text-md font-medium">Explore gigs</h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 transition duration-300 rounded-lg border border-gray-100 bg-transparent px-3 dark:border-gray-600">
                  <div className="p-2 text-lg text-gray-500">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={11} cy={11} r={8} />
                      <line x1={21} y1={21} x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <input
                    className="flex h-10 w-full bg-transparent py-3 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search role, skills, company name, etc."
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="cursor-pointer select-none text-gray-800 whitespace-nowrap inline-flex gap-2 items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent px-2 md:px-3 py-1 md:py-2 text-xs bg-gray-100">
                  Internship
                </div>
                <div className="cursor-pointer select-none text-gray-800 whitespace-nowrap inline-flex gap-2 items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent px-2 md:px-3 py-1 md:py-2 text-xs bg-gray-100">
                  Freelance
                </div>
                <div className="cursor-pointer select-none text-gray-800 whitespace-nowrap inline-flex gap-2 items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent px-2 md:px-3 py-1 md:py-2 text-xs bg-gray-100">
                  Full-time
                </div>
                <div className="cursor-pointer select-none text-gray-800 whitespace-nowrap inline-flex gap-2 items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent px-2 md:px-3 py-1 md:py-2 text-xs bg-gray-100">
                  Remote
                </div>
                <div className="cursor-pointer select-none text-gray-800 whitespace-nowrap inline-flex gap-2 items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent px-2 md:px-3 py-1 md:py-2 text-xs bg-gray-100">
                  Paid
                </div>
                <div className="cursor-pointer select-none text-gray-800 whitespace-nowrap inline-flex gap-2 items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent px-2 md:px-3 py-1 md:py-2 text-xs bg-gray-100">
                  Equity
                </div>
                <div className="grow" />
              </div>
            </div>
            <div className="h-4 bg-gradient-to-b from-white to-transparent" />
          </div>
          <div className="flex min-w-0 items-start gap-6">
            <div className="grid w-full shrink-0 gap-4 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {[0, 1, 2, 3, 4].map((d) => (
                <div
                  className="flex min-h-[192px] w-full cursor-pointer flex-col rounded-lg border p-6 border-gray-100"
                  id="work_12982"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-5 w-5">
                      <img
                        className="aspect-square h-full w-full object-cover"
                        src="https://lh3.googleusercontent.com/a/AEdFTp6LT7PWfod5RhsuRebijJ0G7xxcO5gVd4kkLCSn=s96-c"
                      />
                    </span>
                    <p className="grow text-xs text-gray-500">Gajender Verma</p>
                    <p className="text-xs text-gray-500">6 hours ago</p>
                  </div>
                  <div className="flex grow gap-2">
                    <div className="grow space-y-1">
                      <p className="font-semibold line-clamp-2">
                        React developer for saas company
                      </p>
                      <p className="text-xs text-gray-500">Gajender Verma</p>
                    </div>
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                      <img
                        className="w-full object-cover"
                        src="https://files.bluelearn.in/COMPANIES/Kaliper/2023-10-27T05%3A20%3A22%2B00%3A00-Kaliper.ico"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800">
                      <svg
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                          fill="#42BE42"
                        />
                      </svg>
                      ₹600000 - ₹700000/year
                    </div>
                    <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-white text-gray-800">
                      Full-time
                    </div>
                    <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-white text-gray-800">
                      Remote
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default FindWorkPage;
