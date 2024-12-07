//import React from "react";
import { doctors } from "../../assets/data/doctors";
import Doctorcard from "../../components/Doctors/Doctorcard";

const Doctors = () => {
  return (<>
    <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>
        <div className="max-w-[570px] mx-auto rounded-md flex items-center justify-between bg-[#0066ff2e]">
          <input
            type="search"
            className="py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer pr-2"
            placeholder="Search Doctor"
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:grid-cols-3 ">
      {doctors.map((doctor) => (
        <Doctorcard key={doctor.id} doctor={doctor}></Doctorcard>
      ))}
    </div>
      </div>
    
    </section></>
  );
};

export default Doctors;
