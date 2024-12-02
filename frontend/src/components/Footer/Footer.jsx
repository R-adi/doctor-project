import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiFillYoutube,AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

const sociallinks=[
  {
    path: "https://github.com/R-adi",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'></AiFillGithub>
  },
  {
    path: "./",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'></AiFillYoutube>
  },
  {
    path: "./",
    icon: <AiFillLinkedin className='group-hover:text-white w-4 h-5'></AiFillLinkedin>
  }
]

const quicklinks01=[
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/",
    display:"About us"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/",
    display:"Blog"
  }
]

const quicklinks02=[
  {
    path:"/find-a-doctor",
    display:"Find Doctor"
  },
  {
    path:"/",
    display:"Request an Appointment"
  },
  {
    path:"/",
    display:"Find a location"
  },
  {
    path:"/",
    display:"Get a Opinion"
  }
]

const quicklinks03=[
  {
    path:"/contact",
    display:"Contact us"
  },
  {
    path:"/",
    display:"About us"
  },
  
]

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer