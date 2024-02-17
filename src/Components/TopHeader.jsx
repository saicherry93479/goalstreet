import React from "react";

const TopHeader = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#FCD671] py-2 text-[#000105]">
      <div className="container flex items-center text-center text-xs md:text-sm">
        <p className="grow">
          🚀 Design club pro launching soon&nbsp;{/* */}&nbsp; &nbsp;
          <button
            type="button"
            className="bg-[#F2F0FF] hover:bg-[#F2F0FF70] inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale bg-secondary border-gray-200 text-secondary-foreground hover:bg-secondary/30 text-xs px-3 md:px-4 py-1.5 md:py-2"
          >
            Join waitlist
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              fontSize={16}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1={5} y1={12} x2={19} y2={12} />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </p>
        
      </div>
    </div>
  );
};

export default TopHeader;
