import React from "react";

const Doctorabout = ({name,about,qualifications,experiences}) => {
  return (
    <>
      <div>
        <h3 className="text-[20px] leading-[30px] flex items-center gap-2 font-semibold">
          About of
          <span className="text-indigo-500 font-bold leading-9 text-[24px]">
       {name}
          </span>
        </h3>
        <p>
        {about}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] flex items-center gap-2 font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">

          {qualifications?.map((item,index)=><li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-indigo-600 leading-6 font-semibold text-[15px]">
                {item.startingDate}-{item.endingDate}
              </span>
              <p className="text-[16px]  font-medium leading-6 text-gray-800">
              {item.degree}
              </p>
            </div>
            <p className="text-[14px]  font-medium leading-5 text-gray-800">
              {item.university}
            </p>
          </li>)}
       
         
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] flex items-center gap-2 font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">

          {experiences?.map((item,index)=>   <li key={index} className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellow-600 leading-6 font-semibold">
              {item.startingDate}-{item.endingDate}
            </span>
            <p className="text-[16px]  font-medium leading-6 text-gray-800">
             {item.position}
            </p>
            <p className="text-[12px]  font-medium leading-6 text-gray-800">
            {item.hospital}
            </p>
          </li>)}
      
        </ul>
      </div>
    </>
  );
};

export default Doctorabout;
