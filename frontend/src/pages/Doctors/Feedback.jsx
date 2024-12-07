import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { AiFillStar } from "react-icons/ai";
import Feedbackform from "./Feedbackform";

const Feedback = () => {
  const [showfeedback, setshowfeedback] = useState(false);
  return (
    <>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold mb-[30px] text-gray-700">
          All Reviews
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="text-16px leading-6 text-primaryColor font-bold">
                {" "}
                Ali ahmad
              </h5>
              <p className="text-[14px] leading-6 text-gray-700">14 Feb 2023</p>
              <p className="text_para mt-3 font-medium text-[15px]">
                {" "}
                Good service Highly Recommended
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF"></AiFillStar>
            ))}
          </div>
        </div>
      </div>

      {!showfeedback && 
        <div className="text-center">
          <button className="btn" onClick={() => setshowfeedback(true)}>
            Give Feedback
          </button>
        </div>
      }

      { showfeedback && <Feedbackform></Feedbackform>}
    </>
  );
};

export default Feedback;
