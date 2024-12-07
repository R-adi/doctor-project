import React from "react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import Pagination from "../../../node_modules/swiper/modules/pagination"; // Import Pagination module
import "swiper/css"; // Swiper core CSS
import "swiper/css/pagination"; // Swiper Pagination CSS
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPereView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPereView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPereView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div className="">
                <h4 className="text-[18px] font-semibold leading-[30px]">
                  Muhibar Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400] text-gray-700">
              Ihave taken medical services from them. They treat so well and
              they are providing the best medical services
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div className="">
                <h4 className="text-[18px] font-semibold leading-[30px]">
                  Muhibar Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400] text-gray-700">
              Ihave taken medical services from them. They treat so well and
              they are providing the best medical services
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div className="">
                <h4 className="text-[18px] font-semibold leading-[30px]">
                  Muhibar Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400] text-gray-700">
              Ihave taken medical services from them. They treat so well and
              they are providing the best medical services
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div className="">
                <h4 className="text-[18px] font-semibold leading-[30px]">
                  Muhibar Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                  <HiStar className="text-yellow-500 h-5 w-[18px]"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400] text-gray-700">
              Ihave taken medical services from them. They treat so well and
              they are providing the best medical services
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
