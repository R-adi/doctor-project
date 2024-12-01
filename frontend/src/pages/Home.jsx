import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight} from "react-icons/bs";
import About from "../components/About/About";

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



    </>
  );
};

export default Home;