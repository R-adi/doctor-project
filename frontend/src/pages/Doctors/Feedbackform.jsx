import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Feedbackform = () => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);
  const [reviewText, setreviewText] = useState("")
  const [loading, setloading] = useState(false);

  const { id } = useParams();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      if (!rating || !reviewText) {
        setloading(false);
        return toast.error("rating & review fields are required");
      }

      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      setloading(false);
      toast.success(result.message);

    } catch (error) {
      setloading(false);
      toast.error(error.message);
    }
  };

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
          onChange={(e) => setreviewText(e.target.value)}
          rows="5"
        ></textarea>
      </div>
      <button className="btn" type="submit" onClick={handlesubmit}>
        {loading ? (
          <HashLoader size={25} color="white"></HashLoader>
        ) : (
          "Submit feedback"
        )}
      </button>
    </form>
  );
};

export default Feedbackform;
