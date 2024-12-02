import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import Serviclist from "../components/Services/Serviclist";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatari from "../assets/images/avatar-icon.png";
import Doctorlist from "../components/Doctors/Doctorlist";
import faqImg from '../assets/images/faq-img.png';
import Faqlist from "../components/Faq/Faqlist" ;

const Home = () => {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We Help patients live a healthy and longer life
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo ratione quis similique dolores illum libero.
                  Dignissimos et nostrum illum nisi ipsa maxime, veritatis
                  expedita impedit nulla est tenetur facere minima.
                </p>
                <button className="btn">Request an appointment</button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Exp</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-blue-600 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">clinics</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-pink-600 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patients satisfied</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full " src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              world class care for everyone . Our health System offers
              unmatched,expert health care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center">
                  {" "}
                  world class care for everyone . Our health System offers
                  unmatched,expert health care.our health system offers
                  unmatcheed, expert health care. From the lab to clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center">
                  {" "}
                  world class care for everyone . Our health System offers
                  unmatched,expert health care.our health system offers
                  unmatcheed, expert health care. From the lab to clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-gray-600 font-[400] mt-4 text-center">
                  {" "}
                  world class care for everyone . Our health System offers
                  unmatched,expert health care.our health system offers
                  unmatcheed, expert health care. From the lab to clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <About></About>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical Services</h2>
            <p className="text_para text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care
            </p>
          </div>
          <Serviclist></Serviclist>
        </div>
      </section>

      {/* feature section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Get virtual Treatment</h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly
                </li>
                <li className="text_para">
                  2. Serach for your physician here and contact their office
                </li>
                <li className="text_para">
                  3. View our physician who are accepting new patient and book
                  an appointment
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-gray-600 font-[600]">
                      Tue,24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-gray-600 font-[400]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-400 rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] py-1 px-2 lg:px-[10px] text-[8px] text-indigo-500 mt-2 lg:text-[12px] leading-[8px] font-[500] bg-[#CCF0F3]">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] mt-2 lg:mt-[18px] lg:gap-[10px]">
                  <img src={avatari} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* doctor section */}
      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text_para text-center">
             
            </p>
          </div>
          <Doctorlist></Doctorlist>
        </div>
      </section>

      {/* faq  */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
<h2 className="heading ">Frequently asked questions</h2>
<Faqlist></Faqlist>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
