import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

const sociallinks = [
  {
    path: "https://github.com/R-adi",
    icon: (
      <AiFillGithub className="group-hover:text-white w-4 h-5"></AiFillGithub>
    ),
  },
  {
    path: "./",
    icon: (
      <AiFillYoutube className="group-hover:text-white w-4 h-5"></AiFillYoutube>
    ),
  },
  {
    path: "./",
    icon: (
      <AiFillLinkedin className="group-hover:text-white w-4 h-5"></AiFillLinkedin>
    ),
  },
];

const quicklinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quicklinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quicklinks03 = [
  {
    path: "/contact",
    display: "Contact us",
  },
  {
    path: "/",
    display: "About us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (                                         
    <footer className="pb-6 pt-10 bg-slate-100">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">           
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-gray-700">
              copyright {year} Develped by Aditya Deshmukh
            </p>
            <div className="flex items-center gap-3 mt-4">
              {sociallinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 items-center justify-center flex rounded border border-solid border-[#181A1e] group hover:bg-primaryColor"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="leading-[30px] text-[20px] font-[700] mb-6 text-gray-700">I want to:</h2>
            <ul>
              {quicklinks01.map((item,index)=><li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 fomt-[400] text-gray-600">{item.display}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="leading-[30px] text-[20px] font-[700] mb-6 text-gray-700">Support</h2>
            <ul>
              {quicklinks02.map((item,index)=><li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 fomt-[400] text-gray-600">{item.display}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="leading-[30px] text-[20px] font-[700] mb-6 text-gray-700">Quick Links</h2>
            <ul>
              {quicklinks03.map((item,index)=><li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 fomt-[400] text-gray-600">{item.display}</Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
