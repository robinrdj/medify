import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperSection.css";
import swiper1 from "../../Assets/swiperImg1.png";
import swiper2 from "../../Assets/swiperImg2.png";

const SwiperSection = () => {
  return (
    <div className="swiper">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 22 },
          768: { slidesPerView: 2, spaceBetween: 32 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        <SwiperSlide>
        <div className="swiper__card">
            <img src={swiper1} alt="swiper card 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__card">
            <img src={swiper2} alt="swiper card 2"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper__card">
            <img src={swiper1} alt="swiper card 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper__card">
            <img src={swiper2} alt="swiper card 2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;
