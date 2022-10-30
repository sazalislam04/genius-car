import React from "react";

const SliderItem = ({ slider }) => {
  const { image, id, prev, next } = slider;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carosule-img">
        <img src={image} alt="" className="w-full rounded-lg" />
      </div>
      <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
        <h1 className="text-6xl text-white font-medium">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-white mt-3">
          There are many variations of passages of available, but the majority{" "}
          <br />
          have suffered alteration in some form
        </p>
        <div className="mt-5">
          <button className="btn btn-primary mr-4">Discover More</button>
          <button className="btn border-white text-white btn-outline">
            Latest Project
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
        <div className="absolute bottom-5 right-8">
          <a
            href={`#slide${prev}`}
            className="btn btn-circle mr-6 border-none "
          >
            ❮
          </a>
          <a
            href={`#slide${next}`}
            className="btn btn-circle mr-6 border-none "
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
