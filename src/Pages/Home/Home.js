import React from "react";
import Banner from "../Banner/Banner";
import About from "./About/About";
import Features from "./Features/Features";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="py-10">
      <Banner />
      <About />
      <Services />
      <Products />
      <Team />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
