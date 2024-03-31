import React from "react";
import FAQNote from "./FAQNote";

const question =
  "How are you different from the other 95,038 programs teaching design?";
const answer =
  " We’re not just a series of pre-recorded lectures or a cohort-based course. We’re a hands-on learning experience that helps UI/UX design enthusiasts grow in their careers through project-based learning and continuous feedback. We also offer exclusive paid freelance gigs &amp; internships to our members.";

const FAQ = () => {
  return (
    <section className="bg-gradient-to-b  md:mt-[50px] text-white from-transparent via-[#101114] to-transparent py-12 md:py-20 md:py-24 text-black">
      <div className="container">
        <h2 className="mb-10 text-center text-black text-2xl md:text-6xl lg:mb-20">
          Frequently Asked Questions
        </h2>
        <FAQNote
          question={
            "How are you different from the other 98,820 programs teaching Code?"
          }
          answer={
            "We’re not just a series of pre-recorded lectures or a cohort-based course. We’re a hands-on learning experience that helps code enthusiasts grow in their careers through project-based learning and continuous feedback. We also offer exclusive paid freelance gigs & internships to our members."
          }
        ></FAQNote>
        <FAQNote
          question={"Is these cohorts for me?"}
          answer={
            "The club is for you if you’re a beginner level coder or a  coding enthusiast looking to upskill and find work ( internships ). You’re a good fit if you have a basic knowledge of programming languages, but struggle to apply them in real life projects and problem statements."
          }
        ></FAQNote>
        <FAQNote
          question={
            "How much time do I need to spend on learning and doing projects?"
          }
          answer={
            "We’d recommend you spend at least 8 hours a week to make the most out of your learning experience!"
          }
        ></FAQNote>
        <FAQNote
          question={"How long does the cohort last?"}
          answer={
            "The cohort is 6 to 8 weeks long based on which plan you opt for."
          }
        ></FAQNote>
        <FAQNote
          question={"What are the prerequisites to join?"}
          answer={
            "The only prerequisites to join the cohort are that you should have a basic knowledge of respective domain, and willingness to learn :)"
          }
        ></FAQNote>
        <FAQNote
          question={"How long does the cohort last?"}
          answer={
            "The cohort is 6 to 8 weeks long based on which plan you opt for."
          }
        ></FAQNote>
        <FAQNote
          question={"What’s the last date to make the payment?"}
          answer={
            "We have limited seats and cohort acceptance happens through a screening process on a first-come first-serve basis. Payments close a week before the cohort starts, or earlier if we fill all the available seats."
          }
        />
        <FAQNote
          question={"How are you guys helping us get internships and gigs?"}
          answer={
            "Being one of India's largest remote internships platforms, we get 1,000+ paid internships and freelancing opportunities posted on our platform every single month. These opportunities range across tech, design, marketing, product, and more. As a member of cohort, you’ll get exclusive early access to all opportunities, and a badge to help you stand out from the crowd!"
          }
        />
        <FAQNote
          question={"Why should I trust you guys?"}
          answer={`Our cohorts saw 5000+ registrations and a rating of 4.6/5 from cohort members!\n
           We have a community of 20,000+ students, freelancers, and entrepreneurs from across the country growing with us. bluelearn is backed by Lightspeed India, Elevation Capital, Titan Capital, and a host of angel investors!`}
        />
        <FAQNote
          question={"How do I choose between the Foundation and Growth Plan?"}
          answer={`The Growth Plan is perfect for you if:
-You want to upskill in design with hands-on projects
-You already know the basics of the domain choosen
-You want to build your portfolio and find paid work
-You want feedback on your projects from someone experienced
  \n
You’ll be a great fit for the Foundation Plan if:
-You want to learn scratch
-You want to upskill in code with hands-on projects
-You want to build your portfolio and find your first paid work`}
        ></FAQNote>
      </div>
    </section>
  );
};

export default FAQ;
