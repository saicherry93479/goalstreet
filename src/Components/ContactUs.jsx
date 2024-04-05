import React, { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="container py-12 w-screen text-black " id="contactus">
      <div className="relative">
        <div className="container text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
          <h2 className="mx-auto mb-[60px] max-w-6xl text-center text-xl font-bold md:text-5xl text-black lg:text-7xl">
            Contact Us
          </h2>
          <p className="text-lg lg:text-2xl max-w-prose">
            We're here for you: Connect with us for any questions or concerns.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-3xl border-gray-200 dark:border-blue-200 border rounded-lg p-5 lg:p-10">
          <p>
            For technical questions, please post your questions on our{" "}
            <a href="">forum</a> where you can get help from fellow students.
          </p>
          <p>
            For course suggestions and career advice, check out our{" "}
            <a href="">learning paths</a>.
          </p>
          <form
            className="mt-10 max-w-prose"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
              setMessage("");
              console.log('came')
            }}
          >
            <p>
              <label>Your email: </label>
              <input
                className="input"
                type="email"
                maxLength={100}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required={true}
              />
            </p>
            <p>
              <label>Your message: </label>
              <textarea
                className="input"
                maxLength={500}
                value={message}
                required={true}
                rows={5}
                onChange={(e)=>setMessage(e.target.value)}
                defaultValue={""}
              />
            </p>
            <button
              className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full  transition-all duration-200 ease-out hover:text-white hover:no-underline undefined bg-[#252362] hover:bg-[#25236290]"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
