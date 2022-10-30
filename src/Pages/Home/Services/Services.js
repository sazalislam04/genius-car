import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-orange-500">Services</h2>
        <h1 className="text-4xl mb-2 font-medium">Our Service Area</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-outline btn-primary">More Services</button>
      </div>
    </div>
  );
};

export default Services;
