import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-orange-500">
          Popular Products
        </h2>
        <h1 className="text-4xl mb-2 font-medium">Browse Our Products</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="mt-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-outline btn-primary">More Products</button>
      </div>
    </div>
  );
};

export default Products;
