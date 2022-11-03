import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-orange-500">
          Core Features
        </h2>
        <h1 className="text-4xl mb-2 font-medium">Why Choose Us</h1>
        <p className="w-1/2 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-10 w-full">
        <Feature />
      </div>
    </div>
  );
};

export default Features;
