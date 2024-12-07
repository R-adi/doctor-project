import React from "react";
import { useState } from "react";
import doctorImg3 from "../../assets/images/doctor-img03.png";
import starIcon from "../../assets/images/Star.png";
import Doctorabout from "./Doctorabout";
import Feedback from "./Feedback";
import Sidepanal from "./Sidepanal";

const DoctorDet1 = () => {
  const [tab, settab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg3} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] lg:leading-7 py-1 px-1 lg:px-6 leading-4 text-[12px] font-semibold">
                  Surgeon
                </span>
                <h3 className="text-gray-700 leading-9 mt-3 font-bold">
                  Muhibir rahman
                </h3>
                <div className="flex items-center gap-[6px] ">
                  <span className="flex items-center gap-[6px] leading-5 lg:text-[16px] font-semibold text-gray-700 lg:leading-7 text-[14px]">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-[50px] border border-solid">
              <button
                className={` ${
                  tab == "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 leading-7 font-semibold text-gray-700`}
                onClick={() => settab("about")}
              >
                About
              </button>
              <button
                className={`${
                  tab == "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 leading-7 font-semibold text-gray-700`}
                onClick={() => settab("feedback")}
              >
                Feedback
              </button>
              <button
                className={`py-2 px-5 mr-5 leading-7 font-semibold text-gray-700`}
              >
                About
              </button>
            </div>

            <div className="mt-[50px]">
              {
                tab=='about' && <Doctorabout></Doctorabout>
              }
               {
                tab=='feedback' && <Feedback></Feedback>
              }
            </div>
          </div>

          <div>
            <Sidepanal></Sidepanal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDet1;
