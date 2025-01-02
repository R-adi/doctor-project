import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import starIcon from "../../assets/images/Star.png";

const Doctorcard = ({ doctor }) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    experiences,
  } = doctor;

  return (
    <div className="p-3 lg:p-5">
      <img src={photo} className="w-full" alt="" />
      <h2 className="text-[18px] leading-[30px] lg:leading-9 text-gray-600 font-[700] mt-3">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-indigo-500 py-1 px-2 text-[12px] leading-4 font-semibold lg:text-[16px] lg:leading-7">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center text-[14px] gap-[6px] text-headingColor leading-6 font-semiboldlg:text-[16px]">
            <img src={starIcon} alt="" />
            {avgRating}
          </span>
          <span className="leading-6 font-[400] text-[14px] lg:text-[16px] text-gray-700">
            ({totalRating})
          </span>
        </div>
      </div>

      {/* <div className="mt-[18px] flex items-center justify-between lg:mt-5"> */}
      <div>
        <p className="text-[14px] leading-6 font-[400] text-gray-600">
          At {experiences && experiences[0]?.hospital}
        </p>
      </div>

      <Link
        to={`/doctors/${doctor._id}`}
        className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
      >
        <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
      </Link>
    </div>
  );
};

export default Doctorcard;
