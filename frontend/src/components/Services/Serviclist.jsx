import React from "react";
import { services } from "../../assets/data/servic";
import Servicecard from "./Servicecard";

const Serviclist = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]">
      {services.map((item, index) => (
        <Servicecard item={item} index={index} key={index}></Servicecard>
      ))}
    </div>
  );
};

export default Serviclist;
