import React, { useState } from "react";
import Modal from "../Components/Modal";
import { COURSES_DATA } from "../Components/utils";

const HRRegister = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [accepted,setAccepted]=useState(false);
  const [companyName, setCompayName] = useState("");

  const [companySize, setCompanySize] = useState(1);
  const [industry, setIndustry] = useState("");
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
      companyName,
      "-",
      email,
      "-",
      companySize,
      "-",
      industry
    );
    if (
      !name ||
      !phoneNumber ||
      !companyName ||
      !email ||
      !industry ||
      !companySize
    ) {
      setModalText("Please Enter all the fields Required!");
      setShowModal(true);
      setError(true);

      return;
    }
    if(accepted===false){
      setModalText("Please accept Terms and Conditions!");
      setShowModal(true);
      setError(true);
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

    try {
      const requestBody = {
        hrName: name,
        hrEmail: email,
        hrNumber: phoneNumber,
        company: companyName,
        industry: industry,
        companySize: companySize,
      }; // Your request body here

      const response = await fetch(
        "https://goalstreetbackend.vercel.app/submitHrForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          body: JSON.stringify(requestBody),
        }
      );
      console.log("response from server ", response);
      if (!response.ok) {
        console.log("response is ", response);
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
        setCompanySize("");
        setCompayName("");
        setName("");
        setEmail("");
        setIndustry("");
        setPhoneNumber("");
        return;
      }
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  return (
    <div className="bg-white font-outfit  ">
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          modalText={modalText}
          error={error}
        ></Modal>
      ) : null}
      <main>
        <div className="min-h-[80vh] px-0 bg-gray-100  flex justify-center sm:py-12 ">
          <div className="relative py-3 w-screen sm:w-[100%]  md:w-[600px]  lg:w-[50%] xl:w-[40%] 2xl:w-[35%]">
            <div className="relative bg-blue-500   px-4 md:px-8 py-10 bg-white mx-4 md:mx-8 md:mx-0  shadow rounded-3xl sm:p-10">
              <div className="text-base leading-6 space-y-4  text-gray-700 md:text-lg sm:leading-7">
                <div className="flex items-center space-x-5 ">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    i
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">HR Register</h2>
                    <div className="flex gap-2 ">
                      <a
                        href="/collegeForm"
                        className="text-[14px] underline cursor-pointer text-blue-500"
                      >
                        Join as college
                      </a>
                      <p>/</p>
                      <a
                        href="/register"
                        className="text-[14px] underline cursor-pointer  text-blue-500"
                      >
                        Join as student
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="name-label"
                    className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    Full Name
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="name"
                    id="name"
                    placeholder="Sai Charan"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={25}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
                </div>
                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="name-label"
                    className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    Company Name
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="companyName"
                    id="companyName"
                    placeholder="Google"
                    required
                    value={companyName}
                    onChange={(e) => setCompayName(e.target.value)}
                    maxLength={25}
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
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="phoneNumber"
                    id="phone"
                    maxLength={10}
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
                    Your Company Email
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
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
                    Industry
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="industry"
                    id="industry"
                    placeholder="Health"
                    type="text"
                    required
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS" />
                </div>

                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="passOutYear-label"
                    className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    CompanySize
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="comapnySize"
                    id="comapnySize"
                    placeholder={100}
                    type="number"
                    required
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
                </div>
                <div class="flex items-start mb-5">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value={accepted}
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                      onChange={(e)=>{
                        setAccepted(!accepted)
                        console.log('accepted is ',accepted)
                      
                      }}
                    />
                  </div>
                  <label
                    for="remember"
                    class="ms-2 text-sm font-medium text-black "
                  >
                    Agree to <a href="/terms" className="text-blue-600 underline">terms and conditions</a>
                  </label>
                </div>

                <button
                  onClick={onSubmitHandler}
                  className="block cursor-pointer mx-auto text-white btn font-outfit w-[100%]  p-3 px-6 rounded-md bg-[#252362]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HRRegister;
