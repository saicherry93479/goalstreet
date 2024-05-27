import React, { useState } from "react";
import LOGOGOAL from "../assets/LOG_GOAL.png";
import Place1 from "../assets/place1.png";
import Place2 from "../assets/place2.png";

const branches = [
  ["CSE / IT", "ECE/ EEE ", "Mechanical", "Civil", "Management"],
  ["Job Gurantee Programs", "Pro Degree"],
];
const courses = [
  [
    [
      "Machine Learning",
      "Web Development",
      "Artifical Inteligence",
      "Cyber Security",
      "Data Science",
      "Azure Cloud Computing",
      "Andriod Devlopment",
      "Database Management Systems",
    ],
    ["Internet of Things", "Embedded Systems", "Robotics", "PLC"],
    ["AutoCAD", "Hybrid & Electric Vehicle", "Car Design", "Ic Engine"],
    ["AutoCAD", "Construction Planning & Construction"],
    [
      "Digital Marketing",
      "Finance",
      "Human Resources",
      "Marketing",
      "Stock market & CryptoCurrency",
    ],
  ],
  [
    [
      "Full-Stack Web Devlopment",
      "Marketing & Digital Marketing",
      "Human Resources",
      "Flutter",
    ],
    [
      "Marketing & Digital Marketing",
      "Human Resources",
      "Data Science",
      "Machine Learning",
      "Flutter",
      "Full-Stack Web Devlopment",
    ],
  ],
];

const NavBar = () => {
  const [dispaly, setDisplay] = useState(false);
  const [inside, setInside] = useState(false);
  const [showPrograms, setShowPrograms] = useState(true);
  const [showBranches, setShowBranches] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const [currentProgram, selectCurrrentProgram] = useState(0);
  const [currentBranch, selectCurrrentBranch] = useState(0);

  function toggleMenu() {
    console.log("toggleMenu");
    const body = document.body;
    const menu = document.getElementById("fullscreenMenu");

    if (menu.classList.contains("hidden")) {
      console.log("menu is hidden so removing hidden");
      menu.classList.remove("hidden");
      body.classList.add("overflow-hidden");
    } else {
      menu.classList.add("hidden");
      body.classList.remove("overflow-hidden");
      setShowCourses(false);
      setShowBranches(false);
      setShowPrograms(true);
      selectCurrrentBranch(0);
      selectCurrrentProgram(0);
    }
  }

  return (
    <header className="relative top-0 z-20 pt-6 pb-6 text-gray-900 backdrop-blur transition-all  bg-[#f0fbff]">
      {/* menu for sm screens  */}
      <div
        id="fullscreenMenu"
        className="fixed  hidden lg:hidden  bg-white p-8 h-screen w-screen sm:w-[70%] md:w-[50%]  top-0 overflow-hidden fullscreenMenu"
      >
        <div className="flex space-between">
          {showPrograms === false && (
            <div
              className="cursor-pointer"
              onClick={() => {
                if (showCourses === true) {
                  setShowCourses(false);
                  setShowBranches(true);
                }
                if (showBranches === true) {
                  setShowBranches(false);
                  setShowPrograms(true);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={24}
                height={24}
              >
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </div>
          )}
          <div
            className="border-black border-2 w-fit rounded-full ml-auto mb-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width={24}
              height={24}
            >
              {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
        </div>
        <div className="space-y-4">
          {showPrograms && (
            <>
              <div
                onClick={() => {
                  selectCurrrentProgram(0);
                  setShowPrograms(false);
                  setShowBranches(true);
                }}
                className={`flex  gap-2  items-center rounded-[10px] p-4 cursor-pointer 
                "bg-[#F1FAFF]  border-[#FC921B]  border-l-[5px]  shadow-[rgba(0,0,0,0.1)_0px_4px_12px] "
                  
              `}
              >
                <img src={Place1}></img>
                <p className="lg:text-[18px]   font-bold leading-6">
                  INTERNSHIP PROGRAM
                </p>
              </div>
              <div
                onClick={() => {
                  selectCurrrentProgram(1);
                  setShowPrograms(false);
                  setShowBranches(true);
                }}
                className={`flex  gap-2  items-center rounded-[10px] p-4 cursor-pointer 
              "bg-[#F1FAFF]  border-[#FC921B]  border-l-[5px]  shadow-[rgba(0,0,0,0.1)_0px_4px_12px] "
                
            `}
              >
                <img src={Place2}></img>
                <p className="lg:text-[18px]    font-bold leading-6">
                  PLACEMENT PROVISION ROGRAM
                </p>
              </div>
            </>
          )}
          {showBranches && (
            <div className="space-y-4">
              {branches[currentProgram].map((branch, index) => {
                return (
                  <div
                    onClick={() => {
                      setShowBranches(false);
                      setShowCourses(true);
                      selectCurrrentBranch(index);
                    }}
                    className={`flex  justify-between gap-2  items-center rounded-[10px] p-4 cursor-pointer 
                  "bg-[#F1FAFF]  border-[#FC921B]  border-l-[5px]  shadow-[rgba(0,0,0,0.1)_0px_4px_12px] "
                    
                `}
                  >
                    <p className="lg:text-[18px]  font-[700]">{branch}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      height={16}
                      width={16}
                    >
                      {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </div>
                );
              })}
            </div>
          )}
          {showCourses && (
            <div className="space-y-4">
              {courses[currentProgram][currentBranch].map((course, index) => {
                return (
                  <a
                    onClick={toggleMenu}
                    href="/register"
                    className={`flex  justify-between gap-2  items-center rounded-[10px] p-4 cursor-pointer 
                  "bg-[#F1FAFF]  border-[#FC921B]  border-l-[5px]  shadow-[rgba(0,0,0,0.1)_0px_4px_12px] "
                    
                `}
                  >
                    <p className="lg:text-[18px] font-bold ">{course}</p>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* nav bar  */}
      <div className="container flex items-center justify-between gap-3">
        {/* <Logo></Logo> */}

        <a href="/">
          <img className=" w-[150px] md:w-[200px]" src={LOGOGOAL}></img>
        </a>
        <ul
          className="hidden items-center gap-1 rounded-full px-4 lg:flex   backdrop-blur text-white bg-[#FC921B]"
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          <div className="group">
            <p
              className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-[#252362] "
              onMouseEnter={() => {
                if (dispaly === false) {
                  setDisplay(true);
                }
              }}
            >
              Programs
            </p>
          </div>
          <a href="/findwork">
            <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-[#252362]">
              Find Work
            </li>
          </a>
          <a href="/aboutus">
            <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-[#252362]">
              About Us
            </li>
          </a>
          <a href="/companies">
            <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-[#252362]">
              Companies
            </li>
          </a>
          <a href="/contactus">
            <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-[#252362]">
              Contact Us
            </li>
          </a>
        </ul>
        <div className="flex gap-2">
          <div class=" lg:hidden flex gap-4 ">
            <button
              onClick={toggleMenu}
              type="button"
              class="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale  text-white text-primary-foreground hover:bg-opacity-60 text-[12px] md:text-md px-2 md:px-7 py-2 md:py-4 bg-[#252362] !rounded-full"
            >
              Programs
            </button>
          </div>
        

          <div class="flex gap-4">
            <a href="/register">
              <button
                type="button"
                class="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale  text-white text-primary-foreground hover:bg-opacity-60 text-[12px] md:text-md px-2 md:px-7 py-2 md:py-4 bg-[#fc921b] lg:bg-[#252362] !rounded-full"
              >
                Apply Jobs ( Beta )
              </button>
            </a>
          </div>
          <div class="hidden lg:block flex gap-4">
            <a href="/hrForm">
              <button
                type="button"
                class="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale  text-white text-primary-foreground hover:bg-opacity-60 text-sm md:text-md px-2 md:px-7 py-2 md:py-4 bg-[#252362]  !rounded-full"
              >
                Post a Job
              </button>
            </a>
          </div>
        </div>
      </div>
      {dispaly ? (
        <div
          className="hidden lg:block   absolute w-full bg-blue=600 dropdown-content"
          onMouseLeave={() => {
            setDisplay(false),
              console.log(
                "left the dropdown set the dispaly and inside to false"
              );
          }}
        >
          <NavHoverBlock></NavHoverBlock>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default NavBar;

const NavHoverBlock = () => {
  const [currentProgram, selectCurrrentProgram] = useState(0);
  const [currentBranch, selectCurrrentBranch] = useState(0);
  const [currentCourse, selectCurrrentCourse] = useState(0);

  return (
    <div className=" container flex lg:gap-16 xl:gap-24 bg-[#faf8f5] navCss  px-16 py-8 rounded-[30px] mt-[10px] mx-auto lg:!w-[80%] xl:!w-[60%] !max-h-[500px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
      <div className="w-[33%] space-y-8">
        <div className="flex items-center gap-4">
          <p className="lg:text-[18px]  font-[500]">Program</p>
          <ArrowIcon color="#FC921B"></ArrowIcon>
        </div>
        <div
          className={`flex  gap-2  items-center rounded-[10px] p-6 cursor-pointer ${
            currentProgram === 0
              ? "bg-[#F1FAFF]  border-[#FC921B]  border-l-[5px]  shadow-[rgba(0,0,0,0.1)_0px_4px_12px] "
              : ""
          } `}
          onMouseMove={() => {
            selectCurrrentProgram(0),
              selectCurrrentBranch(0),
              selectCurrrentCourse(0);
          }}
        >
          <img src={Place1}></img>
          <p className="lg:text-[18px]   font-bold leading-6">
            INTERNSHIP PROGRAM
          </p>
        </div>
        <div
          className={`flex  gap-2  items-center rounded-[10px] p-6 cursor-pointer ${
            currentProgram === 1
              ? "bg-[#F1FAFF]  border-[#FC921B] border-l-[5px]  shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
              : ""
          } `}
          onMouseMove={() => {
            selectCurrrentProgram(1),
              selectCurrrentBranch(0),
              selectCurrrentCourse(0);
          }}
        >
          <img src={Place2}></img>
          <p className="lg:text-[18px]    font-bold leading-6">
            PLACEMENT PROVISION ROGRAM
          </p>
        </div>
      </div>
      <div className="w-[33%] ">
        <div className="flex items-center p-4 gap-4  pt-0 ">
          <p className="lg:text-[18px]  font-[500]">Branch</p>
          <ArrowIcon size={30} color="#FC921B"></ArrowIcon>
        </div>
        <div className="space-y-4 max-h-[370px] overflow-y-scroll  ">
          {branches[currentProgram].map((branch, index) => {
            return (
              <div
                className={`flex  cursor-pointer justify-between gap-4  items-center rounded-[10px] p-4   ${
                  currentBranch === index
                    ? "bg-[#F1FAFF] border-[#FC921B]  border-l-[5px]  shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
                    : ""
                } `}
                onMouseMove={() => {
                  selectCurrrentBranch(index), selectCurrrentCourse(0);
                }}
              >
                <p className="lg:text-[18px]  font-[700]">{branch}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  height={16}
                  width={16}
                >
                  {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[33%] ">
        <div className="flex items-center p-4  gap-4 pt-0 ">
          <p className="lg:text-[18px] font-[500]">Courses</p>
          <ArrowIcon size={30} color="#FC921B" style="rotate-90"></ArrowIcon>
        </div>

        <div className="overflow-y-scroll max-h-[370px] overflow-y-scroll  ">
          {courses[currentProgram][currentBranch].map((course, index) => {
            return (
              <a
                href="/register"
                className={`flex  gap-4  cursor-pointer items-center rounded-[10px] p-4  ${
                  currentCourse === index
                    ? "bg-[#F1FAFF]  border-[#FC921B]  border-l-[5px] shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
                    : ""
                } `}
                onMouseMove={() => selectCurrrentCourse(index)}
              >
                <p className="lg:text-[18px] font-bold ">{course}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ArrowIcon = ({ size = 40, style = "", color = "#e332ab" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      height={size}
      className={style}
    >
      <path
        d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
        data-name="3-Arrow Right"
        color="white"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};
