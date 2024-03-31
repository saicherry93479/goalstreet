import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Youtube from "../Components/Youtube";
import Metrics from "../Components/Metrics";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import ProductList from "../Components/ProductList";
import Courses from "../Components/Courses";
import PricePlan from "../Components/PricePlan";
import TopHeader from "../Components/TopHeader";
import ContactUs from "../Components/ContactUs";
import Mentors from "../Components/Mentors";
import Companies from "../Components/Companies";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero></Hero>
      <Companies></Companies>
      <Courses></Courses>
      <Mentors></Mentors>
      <Youtube></Youtube>

      <Metrics></Metrics>

      <FAQ></FAQ>
      <PricePlan></PricePlan>
      <ContactUs></ContactUs>
    </div>
  );
};

export default HomePage;
