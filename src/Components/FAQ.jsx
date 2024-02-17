import React from "react";
import FAQNote from "./FAQNote";

const question='How are you different from the other 95,038 programs teaching design?'
const answer=' We’re not just a series of pre-recorded lectures or a cohort-based course. We’re a hands-on learning experience that helps UI/UX design enthusiasts grow in their careers through project-based learning and continuous feedback. We also offer exclusive paid freelance gigs &amp; internships to our members.'

const FAQ = () => {
  return (
    <section className="bg-gradient-to-b mt-[50px] text-white from-transparent via-[#101114] to-transparent py-20 md:py-24 text-black">
      <div className="container">
        <h2 className="mb-10 text-center text-black text-2xl md:text-6xl lg:mb-20">
          Frequently Asked Questions
        </h2>
        <FAQNote question={question} answer={answer} ></FAQNote>
        <FAQNote question={question} answer={answer} ></FAQNote>
        <FAQNote question={question} answer={answer} ></FAQNote>
        <FAQNote question={question} answer={answer} ></FAQNote>
      </div>
    </section>
  );
};

export default FAQ;
