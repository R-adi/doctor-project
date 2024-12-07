import React from "react";

const Sidepanal = () => {
  return (
    <div className="shadow-lg shadow-indigo-200 p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          500 BDT
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available time slots :
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="leading-6 text-gray-700 font-semibold">Sunday</p>
            <p className="leading-6 text-gray-700 font-semibold">4:00 PM - 9:30 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="leading-6 text-gray-700 font-semibold">Tuesday</p>
            <p className="leading-6 text-gray-700 font-semibold">4:00 PM - 9:30 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="leading-6 text-gray-700 font-semibold">Wednesday</p>
            <p className="leading-6 text-gray-700 font-semibold">4:00 PM - 9:30 PM</p>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn w-full px-2">Book Appointment</button>
      </div>
    </div>
  );
};

export default Sidepanal;
