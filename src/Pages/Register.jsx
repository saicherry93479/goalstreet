import React, { useState } from "react";
import Modal from "../Components/Modal";
import { COURSES_DATA } from "../Components/utils";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, saetCollege] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [secondDomain, setSecondDomain] = useState("");
  const [passOut, setPassOut] = useState(2024);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState(
    "Some Error Occured.. Please Try Again.. Later"
  );
  const [error, setError] = useState(false);

  const onSubmitHandler = async () => {
    console.log(
      name,
      "-",
      phoneNumber,
      "-",
      college,
      "-",
      email,
      "-",
      domain,
      "-",
      secondDomain,
      "-",
      passOut
    );
    if (
      !name ||
      !phoneNumber ||
      !college ||
      !email ||
      !domain ||
      !secondDomain ||
      !passOut
    ) {
      setModalText("Please Enter all the fields Required!");
      setShowModal(true);
      setError(true);

      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) === false) {
      setModalText("Please Enter a valid email !");
      setShowModal(true);
      setError(true);
      return;
    }
    const phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    if (phoneRegex.test(phoneNumber) === false) {
      setModalText("Please Enter a valid phone number !");
      setShowModal(true);
      setError(true);
      return;
    }
    if (domain === secondDomain) {
      setModalText("Please select different domains !");
      setShowModal(true);
      setError(true);
      return;
    }
    try {
      const requestBody = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        college: college,
        domain: domain,
        secondDomain: secondDomain,
        passOut: passOut,
      }; // Your request body here

      const response = await fetch("https://goalstreetbackend.vercel.app/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "https://goalstreetbackend.vercel.app/",
        },
        body: JSON.stringify(requestBody),
      });
      console.log("response from server ", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log(await responseData.message);
      if (!responseData.status) {
        setModalText(responseData.message);
        setShowModal(true);
        setError(true);
        return;
      } else {
        setModalText("Succesfull Registered!");
        setShowModal(true);
        setError(false);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setPassOut("");
        setSecondDomain("");
        saetCollege("");
        setDomain("");
        return;
      }
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  return (
    <div className="bg-white font-outfit py-[20px] md:py-[50px]">
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          modalText={modalText}
          error={error}
        ></Modal>
      ) : null}
      <main>
        <div className="max-w-xl px-4 mx-auto mt-6 space-y-4" id="registerForm">
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
              className="px-2 py-2 text-xl text-black transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="name"
              id="name"
              placeholder="Sai Charan"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              className="px-2 py-2 text-black text-xl transition-shadow bg-transparent group-focus-within:ring font-outfit accent-blue-600  astro-QYQQ6LVS"
              name="phoneNumber"
              id="phone"
              placeholder={9878787123}
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              className="px-2 py-2 font-outfit text-black text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS"
              name="email"
              id="email"
              placeholder="20311A05M7@sreenidhi.edu.in"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-red-600  font-outfit astro-QYQQ6LVS" />
          </div>

          <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
            <label
              id="otherCollegeName-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
            >
              Your college Name
            </label>
            <input
              className="px-2 py-2 text-xl text-black transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="college"
              id="college"
              placeholder="NIT Trichy"
              type="text"
              required
              value={college}
              onChange={(e) => saetCollege(e.target.value)}
            />
            <p className="text-red-600 astro-QYQQ6LVS" />
          </div>

          <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
            <label
              id="passOutYear-label"
              className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
            >
              Passing out year
            </label>
            <input
              className="px-2 py-2 text-xl text-black transition-shadow bg-transparent group-focus-within:ring accent-blue-600  astro-QYQQ6LVS font-outfit"
              name="passOut"
              id="passOutYear"
              placeholder={2024}
              type="number"
              required
              value={passOut}
              onChange={(e) => setPassOut(e.target.value)}
            />
            <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
          </div>
          <div class="flex flex-col gap-2 group">
            <label
              class="text-sm transition-colors group-focus-within:text-blue-700"
              for="softSkills"
            >
              Please Select a Domain ?
            </label>
            <select
              value={domain}
              name="domain"
              id="softSkills"
              onChange={(e) => {
                setDomain(e.target.value);
              }}
              class="px-2 py-2 text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600"
            >
              <option>select an option</option>
              {COURSES_DATA.map((d) => (
                <option className="text-black" value={d.courseName}>
                  {d.courseName}
                </option>
              ))}
            </select>
          </div>
          <div class="flex flex-col gap-2 group">
            <label
              class="text-sm transition-colors group-focus-within:text-blue-700"
              for="softSkills"
            >
              Please Select a Another Domain ?
            </label>
            <select
              value={secondDomain}
              onChange={(e) => {
                setSecondDomain(e.target.value);
              }}
              name="secondDomain"
              id="language"
              class="px-2 py-2 text-xl transition-shadow bg-transparent outline-none group-focus-within:ring accent-blue-600"
            >
              <option>select an option</option>
              {COURSES_DATA.map((d) => (
                <option className="text-black" value={d.courseName}>
                  {d.courseName}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={onSubmitHandler}
            className="block cursor-pointer mx-auto text-white btn font-outfit p-3 px-6 rounded-md bg-[#252362]"
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default Register;

