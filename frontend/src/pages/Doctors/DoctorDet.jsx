import React from "react";
import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import Doctorabout from "./Doctorabout";
import Feedback from "./Feedback";
import Sidepanal from "./Sidepanal";
import { BASE_URL } from "../../config";
import useFetchdata from "../../hooks/useFetchdata";
import Loading from "../../components/loader/Loading";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";

const DoctorDet = () => {
  const [tab, settab] = useState("about");

  const {id}=useParams()
  const {data:doctor ,loading ,error}=useFetchdata(`${BASE_URL}/doctors/${id}`)

  const {
    name,
    bio,
    gender,
    specialization,
    qualifications,
    experiences,
    totalRating,
    avgRating,
    ticketPrice,
    timeSlots,
    reviews,
    about,
    photo,
  }=doctor


  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">

      {loading && <Loading></Loading>}
{error && <Error></Error>}


       {!loading && !error&& <div className="grid md:grid-cols-3 gap-[50px]">       
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={photo} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-indigo-500 py-1 px-2 text-[12px] leading-4 font-semibold lg:text-[16px] lg:leading-7">
                 {specialization}
                </span>
                <h3 className="text-gray-700 leading-9 mt-3 font-bold">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px] ">
                  <span className="flex items-center gap-[6px] leading-5 lg:text-[16px] font-semibold text-gray-700 lg:leading-7 text-[14px]">
                    <img src={starIcon} alt="" /> {avgRating}
                  </span>
                  <span className="text-[14px] font-400 lg:leading-7 leading-5 lg:text-[16px]">({totalRating})</span>
                </div>
<p className="text_para text-[14px] leading-5 lg:max-w-[390px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid soluta placeat quasi unde sed voluptates! Eius maxime voluptatem, ullam accusantium ad corporis fugit perferendis nulla quas, libero ducimus praesentium.</p>

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
            
            </div>

            <div className="mt-[50px]">
              {
                tab=='about' && <Doctorabout name={name} about={about} qualifications={qualifications} experiences={experiences}></Doctorabout>
              }
               {
                tab=='feedback' && <Feedback reviews={reviews} totalRating={totalRating}></Feedback>
              }
            </div>
          </div>
          <div>
            <Sidepanal doctorId={doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots}></Sidepanal>
          </div>
        </div>}
      </div>
    </section>
  );
};

export default DoctorDet;
