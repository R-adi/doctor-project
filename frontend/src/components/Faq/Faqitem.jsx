import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faqitem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);        //for faq plus minus

  const toggleAccordian = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border cursor-pointer border-[#D9DCE2] mb-5 border-solid">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordian}
      >
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-gray-800 ">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white border-none"
          } w-7 h-7 lg:w-8 lg:h-8 border rounded border-solid flex items-center justify-center border-[#141F21]`}
        >
          {isOpen ? (
            <AiOutlineMinus></AiOutlineMinus>
          ) : (
            <AiOutlinePlus></AiOutlinePlus>
          )}
        </div>
      </div>
      {isOpen && (
        <div className=" mt-4">
          <p className="leading-6 font-[400] text-[14px] text-gray-700 lg:leading-7">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Faqitem;
