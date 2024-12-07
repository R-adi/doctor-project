// import React from 'react'
import { services } from "../assets/data/servic";
import Servicecard from "../components/Services/Servicecard";
const Services = () => {
  return (
    <section>
      <div className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] ">
      {services.map((item, index) => (
        <Servicecard item={item} index={index} key={index}></Servicecard>
      ))}
    </div>
      </div>
    </section>
  )
}

export default Services