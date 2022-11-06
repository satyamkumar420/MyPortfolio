import React from "react";
import "./testimonials.css";
import Avatar from "../assets/logo.svg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const data = [
  {
    Avatar: Avatar,
    name: "MD ALI AZAM",
    review:
      "A really good job, all aspects of the project were followed step by step and with good results",
  },
  {
    Avatar: Avatar,

    name: "Mausam Kumar",
    review:
      "A really good job, all aspects of the project were followed step by step and with good results",
  },
  {
    Avatar: Avatar,
    name: "Arjun Kumar",
    review:
      "A really good job, all aspects of the project were followed step by step and with good results",
  },
  {
    Avatar: Avatar,
    name: "Baldau dhanoriya",
    review:
      "A really good job, all aspects of the project were followed step by step and with good results",
  },
  {
    Avatar: Avatar,
    name: "Satya developer",
    review:
      "A really good job, all aspects of the project were followed step by step and with good results",
  },
  {
    Avatar: Avatar,
    name: "Komal Kumari",
    review:
      "A really good job, all aspects of the project were followed step by step and with good results",
  },
];

const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonials_container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          {data.map(({ Avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={Avatar} alt={name} />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
