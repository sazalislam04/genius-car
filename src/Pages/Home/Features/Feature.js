import React from "react";
import icon1 from "../../../assets/icons/check.svg";
import icon2 from "../../../assets/icons/deliveryt.svg";
import icon3 from "../../../assets/icons/Group 38729.svg";
import icon4 from "../../../assets/icons/group.svg";
import icon5 from "../../../assets/icons/person.svg";
import icon6 from "../../../assets/icons/Wrench.svg";

const Feature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 ">
      <div className="bg-orange-50 border rounded flex items-center justify-center flex-col py-4 ">
        <img src={icon1} alt="" />
        <h2 className="mt-2 font-semibold">100% Guranty</h2>
      </div>
      <div className="bg-orange-50 border rounded flex items-center justify-center flex-col p-2 ">
        <img src={icon2} alt="" />
        <h2 className="mt-2 font-semibold">Timely Delivery</h2>
      </div>
      <div className="bg-orange-500 border rounded flex items-center justify-center flex-col p-2 ">
        <img src={icon3} alt="" />
        <h2 className="mt-2 text-white font-semibold">Timely Delivery</h2>
      </div>
      <div className="bg-orange-50 border rounded flex items-center justify-center flex-col p-2 ">
        <img src={icon4} alt="" />
        <h2 className="mt-2 font-semibold">Expert Team</h2>
      </div>
      <div className="bg-orange-50 border rounded flex items-center justify-center flex-col p-2 ">
        <img src={icon5} alt="" />
        <h2 className="mt-2 font-semibold">24/7 Support</h2>
      </div>
      <div className="bg-orange-50 border rounded flex items-center justify-center flex-col p-2 ">
        <img src={icon6} alt="" />
        <h2 className="mt-2 font-semibold">Best Equipment</h2>
      </div>
    </div>
  );
};

export default Feature;
