import React from "react";
import { doctors } from "./../../assets/data/doctors";
import Doctorcard from "./Doctorcard";
import { BASE_URL } from "../../config";
import useFetchdata from "../../hooks/useFetchdata";
import Loading from "../loader/Loading";
import Error from "../Error/Error";

const Doctorlist = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]">
      {doctors.map((doctor) => (
        <Doctorcard key={doctor.id} doctor={doctor}></Doctorcard>
      ))}
    </div>
  );
};

export default Doctorlist;
