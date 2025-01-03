import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { AiFillStar } from "react-icons/ai";
import Feedbackform from "./Feedbackform";

const Feedback = ({ reviews, totalRating }) => {
  const [showfeedback, setshowfeedback] = useState(false);
  return (
    <>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold mb-[30px] text-gray-700">
          All Reviews({totalRating})
        </h4>
        {reviews?.map((review, index) => 
          (<div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img className="w-full" src={review?.user?.photo} alt="" />
              </figure>
              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  {review.user?.name}
                </h5>
                <p className="text-[14px] leading-6 text-gray-700">
                 {review?.createdAt}
                </p>
                <p className="text_para mt-3 font-medium text-[15px]">
                  {review.reviewText}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067FF"></AiFillStar>
              ))}
            </div>
          </div>)
        )}
      </div>

      {!showfeedback && (
        <div className="text-center">
          <button className="btn" onClick={() => setshowfeedback(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showfeedback && <Feedbackform></Feedbackform>}
    </>
  );
};

export default Feedback;
