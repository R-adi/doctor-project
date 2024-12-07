import React from "react";

const Doctorabout = () => {
  return (
    <>
      <div>
        <h3 className="text-[20px] leading-[30px] flex items-center gap-2 font-semibold">
          About of
          <span className="text-indigo-500 font-bold leading-9 text-[24px]">
            Muhibir Rahman
          </span>
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          voluptatibus enim facere, similique quasi, recusandae reiciendis,
          omnis nam quis aperiam rem? Ex eveniet dolorum architecto quo
          reprehenderit, repellat rerum reiciendis?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] flex items-center gap-2 font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-indigo-600 leading-6 font-semibold text-[15px]">
                23 June,2008
              </span>
              <p className="text-[16px]  font-medium leading-6 text-gray-800">
                PhD in Surgeon
              </p>
            </div>
            <p className="text-[14px]  font-medium leading-5 text-gray-800">
              new Apollo Hospital
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:gap-5">
            <div>
              <span className="text-indigo-600 leading-6 font-semibold text-[15px]">
                23 June 2008-7 April 2010
              </span>
              <p className="text-[16px]  font-medium leading-6 text-gray-800">
                PhD in Surgeon
              </p>
            </div>
            <p className="text-[14px]  font-medium leading-5 text-gray-800">
              New Apollo Hospital
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] flex items-center gap-2 font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellow-600 leading-6 font-semibold">
              17 march 2016
            </span>
            <p className="text-[16px]  font-medium leading-6 text-gray-800">
              Sr. Surgeon
            </p>
            <p className="text-[12px]  font-medium leading-6 text-gray-800">
              Apollo Hospital, Mumbai
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellow-600 leading-6 font-semibold">
              17 march 2016
            </span>
            <p className="text-[16px]  font-medium leading-6 text-gray-800">
              Sr. Surgeon
            </p>
            <p className="text-[12px]  font-medium leading-6 text-gray-800">
              Apollo Hospital, Mumbai
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Doctorabout;
