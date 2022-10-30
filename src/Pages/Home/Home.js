import React from "react";
import Banner from "../Banner/Banner";
import About from "./About/About";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div className="py-10">
      <Banner />
      <About />
      <Services />
      <Products />
      <Team />
    </div>
  );
};

export default Home;
