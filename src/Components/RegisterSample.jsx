import React from "react";

const RegisterSample = () => {
  return (
    <div className="bg-white font-outfit py-[50px]">
      <main>
        <form
          className="max-w-xl px-4 mx-auto mt-6 space-y-4"
          method="post"
          action="https://placement-cracker.deno.dev/api/student"
          id="registerForm"
        >
          <blockquote>
            <p className="px-6 py-2 border-l-4 border-indigo-800 bg-indigo-400/10 font-outfit">
              willing to start Placement Cracker in your college?
              <a
                className="text-blue-700 cursor-pointer font-outfit"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdBv-f5FjKnTuYOEkO1yHfKZsE7SFFssdtW2ZBhs6tIQs-grQ/viewform?usp=sf_link"
                target="_blank"
              >
                Join Us
              </a>
            </p>
          </blockquote>
          <h1 className="text-2xl font-bold text-gray-800 x-4 font-outfit">
            Register
          </h1>
          <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
            <label
              id="name-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
            >
              Full Name
            </label>
            <input
              className="px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="name"
              id="name"
              placeholder="Sai Charan"
            />
            <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
          </div>
          <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
            <label
              id="phone-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 font-outfit astro-QYQQ6LVS"
            >
              Mobile
            </label>
            <input
              className="px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring font-outfit accent-blue-600  astro-QYQQ6LVS"
              name="phone"
              id="phone"
              placeholder={9878787123}
              type="tel"
            />
            <p className="text-red-600 font-outfit astro-QYQQ6LVS" />
          </div>
          <div className="flex flex-col group font-outfit astro-QYQQ6LVS">
            <label
              id="email-label"
              className="mb-2 font-outfit text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS"
            >
              Your college Email
            </label>
            <input
              className="px-2 py-2 font-outfit text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS"
              name="email"
              id="email"
              placeholder="20311A05M7@sreenidhi.edu.in"
              type="email"
            />
            <p className="text-red-600  font-outfit astro-QYQQ6LVS" />
          </div>
          <div className="flex font-outfit flex-col gap-2 group">
            <label
              className="text-sm font-outfit transition-colors group-focus-within:text-blue-700"
              htmlFor="college"
            >
              Are you a part of COIGN?
            </label>
            <select
              name="partOfCoign"
              className="px-2 py-2 font-outfit text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <p className="text-red-600 font-outfit" />
          </div>
          <div className="flex flex-col gap-2 group font-outfit">
            <label
              className="text-sm transition-colors group-focus-within:text-blue-700 font-outfit"
              htmlFor="college"
            >
              college
            </label>
            <select
              name="college"
              id="college"
              className="px-2 py-2 text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600 font-outfit"
            >
              <option selected="" disabled="" value="">
                Select your college
              </option>
              <option value="AITS Tirupati">AITS Tirupati</option>
              <option value="AITS Kadapa">AITS Kadapa</option>
              <option value="Diet">Diet</option>
              <option value="VMTW">VMTW</option>
              <option value="GNITS">GNITS</option>
              <option value="MIET">MIET</option>
              <option value="KLU">KLU</option>
              <option value="SNIST">SNIST</option>
              <option value="Sitam">Sitam</option>
              <option value="SRKR">SRKR</option>
              <option value="KG Reddy">KG Reddy</option>
              <option value="SVCET">SVCET</option>
              <option value="KLH">KLH</option>
              <option value="VIIT">VIIT</option>
              <option value="MVGR">MVGR</option>
              <option value="RISHI">RISHI</option>
              <option value="VIEW">VIEW</option>
              <option value="Raghu">Raghu</option>
              <option value="CMRTC">CMRTC</option>
              <option value="BRECW">BRECW</option>
              <option value="Other">Other</option>
            </select>
            <p className="text-red-600" />
          </div>
          <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
            <label
              id="otherCollegeName-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
              style={{ display: "none" }}
            >
              Your college Name
            </label>
            <input
              className="px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="otherCollegeName"
              id="otherCollegeName"
              placeholder="NIT Trichy"
              type="text"
              style={{ display: "none" }}
            />
            <p className="text-red-600 astro-QYQQ6LVS" />
          </div>
          <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
            <label
              id="rollNumber-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
            >
              College Roll number
            </label>
            <input
              className="px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="rollNumber"
              id="rollNumber"
              placeholder="20311A05M7"
            />
            <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
          </div>
          <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
            <label
              id="passOutYear-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
            >
              Passing out year
            </label>
            <input
              className="px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="passOutYear"
              id="passOutYear"
              placeholder={2024}
              type="number"
            />
            <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
          </div>
          <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
            <label
              id="dream-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
            >
              Dream companies
            </label>
            <input
              className="px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="dream"
              id="dream"
              placeholder="Google, Meta, Amazon, Microsoft..."
              type="text"
            />
            <p className="text-red-600 astro-QYQQ6LVS" />
          </div>
          <div className="flex flex-col group astro-QYQQ6LVS">
            <label
              id="language-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
            >
              Programming language in which you are comfortable in coding?
            </label>
            <input
              className="px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="language"
              id="language"
              placeholder="C, C++, Java, Python, JavaScript..."
              type="text"
            />
            <p className="text-red-600 astro-QYQQ6LVS" />
          </div>
          <div className="flex flex-col gap-2 group">
            <label
              className="text-sm transition-colors group-focus-within:text-blue-700 font-outfit"
              htmlFor="careerObjective"
            >
              What is your career objective/goal
            </label>
            <select
              name="careerObjective"
              id="careerObjective"
              className="px-2 py-2 text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600 font-outfit"
            >
              <option selected="" disabled="" value="">
                select an option
              </option>
              <option value="Cracking a Good Placement">
                Cracking a Good Placement
              </option>
              <option value="Studying Abroad">Studying Abroad</option>
              <option value="Starting their own startup">
                Starting their own startup
              </option>
            </select>
            <p className="text-red-600" />
          </div>
          <div className="flex flex-col group astro-QYQQ6LVS">
            <label
              id="hackerRankUsername-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
            >
              What is you HackerRank username?
            </label>
            <input
              className="px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="hackerRankUsername"
              id="hackerRankUsername"
              placeholder="lsaicharan01"
              type="text"
            />
            <p className="text-red-600 astro-QYQQ6LVS" />
          </div>
          <div className="group">
            <label
              className="text-sm transition-colors group-focus-within:text-blue-700 mb-3 font-outfit"
              htmlFor="college"
            >
              How do you rate yourself in Programming?
            </label>
            <div className="flex gap-1 items-baseline mt-2 cursor-pointer ">
              <input
                type="radio"
                id="Poor-Limited or no understanding of the basics of programming."
                name="programming"
                defaultValue="Poor"
              />
              <label
                htmlFor="Poor-Limited or no understanding of the basics of programming."
                className="cursor-pointer font-outfit"
              >
                Poor
                <span className="text-gray-400">
                  - Limited or no understanding of the basics of programming.
                </span>
              </label>
            </div>
            <div className="flex gap-1 items-baseline mt-2 cursor-pointer  font-outfit">
              <input
                type="radio"
                id="Average-Theoretical knowledge about coding, but limited practical experience."
                name="programming"
                defaultValue="Average"
              />
              <label
                htmlFor="Average-Theoretical knowledge about coding, but limited practical experience."
                className="cursor-pointer font-outfit"
              >
                Average
                <span className="text-gray-400 font-outfit">
                  - Theoretical knowledge about coding, but limited practical
                  experience.
                </span>
              </label>
            </div>
            <div className="flex gap-1 items-baseline mt-2 cursor-pointer font-outfit ">
              <input
                type="radio"
                id="Good-Solid understanding of coding, up to the level of data structures."
                name="programming"
                defaultValue="Good"
              />
              <label
                htmlFor="Good-Solid understanding of coding, up to the level of data structures."
                className="cursor-pointer font-outfit"
              >
                Good
                <span className="text-gray-400">
                  - Solid understanding of coding, up to the level of data
                  structures.
                </span>
              </label>
            </div>
            <div className="flex gap-1 items-baseline mt-2 cursor-pointer font-outfit ">
              <input
                type="radio"
                id="Very Good-Strong grasp of data structures and algorithms, but in need of more practice."
                name="programming"
                defaultValue="Very Good"
              />
              <label
                htmlFor="Very Good-Strong grasp of data structures and algorithms, but in need of more practice."
                className="cursor-pointer font-outfit"
              >
                Very Good
                <span className="text-gray-400">
                  - Strong grasp of data structures and algorithms, but in need
                  of more practice.
                </span>
              </label>
            </div>
            <div className="flex gap-1 items-baseline mt-2 cursor-pointer font-outfit ">
              <input
                type="radio"
                id="Excellent-Successfully tackled challenges and possess significant expertise in data structures and algorithms."
                name="programming"
                defaultValue="Excellent"
              />
              <label
                htmlFor="Excellent-Successfully tackled challenges and possess significant expertise in data structures and algorithms."
                className="cursor-pointer font-outfit"
              >
                Excellent
                <span className="text-gray-400 font-outfit">
                  - Successfully tackled challenges and possess significant
                  expertise in data structures and algorithms.
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2 group">
            <label
              className="text-sm transition-colors group-focus-within:text-blue-700 font-outfit"
              htmlFor="quntitativeAptitude"
            >
              How do you rate yourself in Quntitative Aptitude?
            </label>
            <select
              name="quntitativeAptitude"
              id="quntitativeAptitude"
              className="px-2 py-2 text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600 font-outfit"
            >
              <option selected="" disabled="" value="">
                select an option
              </option>
              <option value="Poor">Poor</option>
              <option value="Average">Average</option>
              <option value="Good">Good</option>
              <option value="Very Good">Very Good</option>
              <option value="Excellent">Excellent</option>
            </select>
            <p className="text-red-600" />
          </div>
          <div className="flex flex-col gap-2 group">
            <label
              className="text-sm transition-colors group-focus-within:text-blue-700 font-outfit"
              htmlFor="verbal"
            >
              How do you rate yourself in Verbal?
            </label>
            <select
              name="verbal"
              id="verbal"
              className="px-2 py-2 text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600 font-outfit"
            >
              <option selected="" disabled="" value="">
                select an option
              </option>
              <option value="Poor">Poor</option>
              <option value="Average">Average</option>
              <option value="Good">Good</option>
              <option value="Very Good">Very Good</option>
              <option value="Excellent">Excellent</option>
            </select>
            <p className="text-red-600" />
          </div>
          <div className="flex flex-col gap-2 group font-outfit">
            <label
              className="text-sm transition-colors group-focus-within:text-blue-700 font-outfit"
              htmlFor="softSkills"
            >
              How do you rate yourself in Soft Skills?
            </label>
            <select
              name="softSkills"
              id="softSkills"
              className="px-2 py-2 text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600 font-outfit"
            >
              <option selected="" disabled="" value="">
                select an option
              </option>
              <option value="Poor">Poor</option>
              <option value="Average">Average</option>
              <option value="Good">Good</option>
              <option value="Very Good">Very Good</option>
              <option value="Excellent">Excellent</option>
            </select>
            <p className="text-red-600" />
          </div>
          <div className="flex flex-col gap-2 group">
            <label
              className="text-sm transition-colors group-focus-within:text-blue-700 font-outfit"
              htmlFor="reasoning"
            >
              How do you rate yourself in Reasoning?
            </label>
            <select
              name="reasoning"
              id="reasoning"
              className="px-2 py-2 text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600 font-outfit"
            >
              <option selected="" disabled="" value="">
                select an option
              </option>
              <option value="Poor">Poor</option>
              <option value="Average">Average</option>
              <option value="Good">Good</option>
              <option value="Very Good">Very Good</option>
              <option value="Excellent">Excellent</option>
            </select>
            <p className="text-red-600" />
          </div>
          <button className="block mx-auto text-white btn font-outfit p-3 px-6 rounded-md bg-[#252362]">
            {" "}
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default RegisterSample;

const colleges = [
  "AITS Tirupati",
  "AITS Kadapa",
  "Diet",
  "VMTW",
  "GNITS",
  "MIET",
  "KLU",
  "SNIST",
  "Sitam",
  "SRKR",
  "KG Reddy",
  "SVCET",
  "KLH",
  "VIIT",
  "MVGR",
  "RISHI",
  "VIEW",
  "Raghu",
  "CMRTC",
  "BRECW",
  "Other",
];
const RATINGS = [
  "Poor-Limited or no understanding of the basics of programming.",
  "Average-Theoretical knowledge about coding, but limited practical experience.",
  "Good-Solid understanding of coding, up to the level of data structures.",
  "Very Good-Strong grasp of data structures and algorithms, but in need of more practice.",
  "Excellent-Successfully tackled challenges and possess significant expertise in data structures and algorithms.",
];
