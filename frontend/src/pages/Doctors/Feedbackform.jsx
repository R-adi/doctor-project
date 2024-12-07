import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Feedbackform = () => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);
  const [review, setreview] = useState("");

  const handlesubmit = async e =>{
    e.preventDefault();
  }

  return (
    <form action="">
      <div>
        <h3 className="text-[16px] leading-6 font-semibold mb-4 text-gray-700">
          How would you rate overall Experience ?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index = index + 1;
            return (
              <button
                key={index}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellow-400"
                    : "text-gray-500"
                } bg-transparent border-none outline-none cursor-pointer`}
                type="button"
                onClick={() => setrating(index)}
                onMouseEnter={() => sethover(index)}
                onMouseLeave={() => sethover(rating)}
                onDoubleClick={() => {
                  sethover(0);
                  setrating(0);
                }}
              >
                <span>
                  <AiFillStar></AiFillStar>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-[16px] leading-6 font-semibold mb-4 text-gray-700 mt-0">
          Share your Feedback or suggetions
        </h3>
        <textarea
          className="border border-solid focus:outline py-3 w-full px-4 outline-gray-500"
          placeholder="write here"
          onChange={(e)=>setreview(e.target.value)}
          rows="5"
        ></textarea>
      </div>
      <button className="btn" type="submit" onClick={handlesubmit}>Submit feedback</button>
    </form>
  );
};

export default Feedbackform;
