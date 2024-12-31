import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./MedicalSpecialistSection.css";

import specialist1 from "../../Assets/specialist1.png";
import specialist2 from "../../Assets/specialist2.png";
import specialist3 from "../../Assets/specialist3.png";

const MedicalSpecialistSection = () => {
  return (
    <div className="specialists">
      <h2 className="specialists__title">Our Medical Specialists</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 25 },
          768: { slidesPerView: 2, spaceBetween: 35 },
          1024: { slidesPerView: 3, spaceBetween: 45 },
        }}
      >
        <SwiperSlide>
          <div className="specialist__card">
            <div>
            <div className="specialist__arch"></div>
            <img src={specialist1} alt="Dr. Aakarsh Mall" className="specialist__img" />
            </div>
            <h3>Dr. Ahmed Khan</h3>
            <p className="specialsits__info__paragraph">Neurologist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="specialist__card">
            <div>
            <div className="specialist__arch"></div>
            <img src={specialist2} alt="Dr. Ahmed Khan" className="specialist__img" />
            </div>
            <h3>Dr. Heena Sachdeva</h3>
            <p className="specialsits__info__paragraph">Orthopaedics</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="specialist__card">
            <div>
            <div className="specialist__arch"></div>
            <img src={specialist3} alt="Dr. Heena Sachdeva" className="specialist__img" />
            </div>
            <h3>Dr. Aakarsh Mall</h3>
            <p className="specialsits__info__paragraph">Medicine</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="specialist__card">
            <div>
            <div className="specialist__arch"></div>
            <img src={specialist1} alt="Dr. Aakarsh Mall" className="specialist__img" />
            </div>
            <h3>Dr. Ahmed Khan</h3>
            <p className="specialsits__info__paragraph">Neurologist</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="specialist__card">
            <div>
            <div className="specialist__arch"></div>
            <img src={specialist2} alt="Dr. Ahmed Khan" className="specialist__img" />
            </div>
            <h3>Dr. Heena Sachdeva</h3>
            <p className="specialsits__info__paragraph">Orthopaedics</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MedicalSpecialistSection;
