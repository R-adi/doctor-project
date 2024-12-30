import React,{useContext, useState} from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, settab }) => {

const {dispatch}=useContext(authContext)
const navigate=useNavigate()

const handleLogout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')

}

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
      </span>
      <div className="hidden flex-col lg:flex p-[30px] bg-white h-max items-center rounded-md shadow-lg">
        <button onClick={()=>settab('overview')} className={`${tab=='overview' ?'bg-indigo-200':'bg-transparent text-gray-700'} w-full btn mt-0 rounded-md`}>Overview</button>
        <button onClick={()=>settab('appointments')} className={`${tab=='appointments' ?'bg-indigo-200':'bg-transparent text-gray-700'} w-full btn mt-0 rounded-md`}>Appointments</button>
        <button onClick={()=>settab('settings')} className={`${tab=='settings' ?'bg-indigo-200':'bg-transparent text-gray-700'} w-full btn mt-0 rounded-md`}>Settings</button>

        <div className="mt-[50px] w-full">
                <button
                 onClick={handleLogout}
                  className="w-full p-3 leading-7 bg-blue-800 text-white rounded-md"
                >
                  Logout
                </button>
                <button className="w-full p-3 mt-4 leading-7 bg-red-700 text-white rounded-md">
                  Delete Account
                </button>
              </div>
      </div>
    </div>
  );
};

export default Tabs;
