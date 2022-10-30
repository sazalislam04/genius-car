import React from "react";
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
  const { title, img, price } = product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="w-full lg:w-9/12" alt="Shoes" />
      </figure>
      <div className="card-body">
        <span className="flex text-orange-600 text-lg">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-600 font-semibold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
