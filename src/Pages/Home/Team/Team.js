import React from "react";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slide4 from "../../../assets/images/banner/4.jpg";
import slide5 from "../../../assets/images/banner/5.jpg";
import slide6 from "../../../assets/images/banner/6.jpg";
import slide1 from "../../../assets/images/team/1.jpg";
import slide2 from "../../../assets/images/team/2.jpg";
import slide3 from "../../../assets/images/team/3.jpg";

import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import "../../../styles.css";

const Team = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-orange-500">Team</h2>
        <h1 className="text-4xl mb-2 font-medium">Meet Our Team</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border p-2 rounded shadow">
            <img src={slide1} alt="" />
            <h2 className="text-2xl font-semibold mt-2">Car Engine Plug</h2>
            <p className="text-md">Engine Expert</p>
            <span className="flex justify-center gap-2 mt-2 text-3xl items-center">
              <FaFacebookSquare className="text-blue-500" />
              <FaTwitterSquare className="text-cyan-500" />
              <FaLinkedin className="text-sky-600" />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-2 rounded shadow">
            <img src={slide2} alt="" />
            <h2 className="text-2xl font-semibold mt-2">Car Engine Plug</h2>
            <p className="text-md">Engine Expert</p>
            <span className="flex justify-center gap-2 mt-2 text-3xl items-center">
              <FaFacebookSquare className="text-blue-500" />
              <FaTwitterSquare className="text-cyan-500" />
              <FaLinkedin className="text-sky-600" />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-2 rounded shadow">
            <img src={slide3} alt="" />
            <h2 className="text-2xl font-semibold mt-2">Car Engine Plug</h2>
            <p className="text-md">Engine Expert</p>
            <span className="flex justify-center gap-2 mt-2 text-3xl items-center">
              <FaFacebookSquare className="text-blue-500" />
              <FaTwitterSquare className="text-cyan-500" />
              <FaLinkedin className="text-sky-600" />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-2 rounded shadow">
            <img src={slide4} alt="" />
            <h2 className="text-2xl font-semibold mt-2">Car Engine Plug</h2>
            <p className="text-md">Engine Expert</p>
            <span className="flex justify-center gap-2 mt-2 text-3xl items-center">
              <FaFacebookSquare className="text-blue-500" />
              <FaTwitterSquare className="text-cyan-500" />
              <FaLinkedin className="text-sky-600" />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-2 rounded shadow">
            <img src={slide5} alt="" />
            <h2 className="text-2xl font-semibold mt-2">Car Engine Plug</h2>
            <p className="text-md">Engine Expert</p>
            <span className="flex justify-center gap-2 mt-2 text-3xl items-center">
              <FaFacebookSquare className="text-blue-500" />
              <FaTwitterSquare className="text-cyan-500" />
              <FaLinkedin className="text-sky-600" />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-2 rounded shadow">
            <img src={slide6} alt="" />
            <h2 className="text-2xl font-semibold mt-2">Car Engine Plug</h2>
            <p className="text-md">Engine Expert</p>
            <span className="flex justify-center gap-2 mt-2 text-3xl items-center">
              <FaFacebookSquare className="text-blue-500" />
              <FaTwitterSquare className="text-cyan-500" />
              <FaLinkedin className="text-sky-600" />
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
