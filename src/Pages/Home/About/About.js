import React from "react";
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative">
          <img src={person} className="max-w-lg rounded-lg shadow-2xl" alt="" />
          <img
            src={parts}
            className="max-w-sm absolute top-1/2 right-5 rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mb-5 text-2xl text-orange-500 font-bold">About us</h2>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
