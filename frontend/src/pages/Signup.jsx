import React, { useState} from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link ,useNavigate} from "react-router-dom";
import uploadCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const Signup = () => {
  const [selectfile, setselectfile] = useState(null);
  const [previousurl, setpreviousurl] = useState("");
  const [loading, setLoading] = useState(false)

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectfile,
    gender: "",
    role: "",
  });

const navigate=useNavigate()

  const handleinput = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlefile = async (event) => {
    const file = event.target.files[0];

    const data=await uploadCloudinary(file)
    console.log(data);
    setpreviousurl(data.url)
    setselectfile(data.url)
    setformdata({...formdata,photo:data.url})
    
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formdata)
    console.log(formdata.role)
    if (!formdata.role) {
      toast.error("Please select a role");
      return;
    }
    setLoading(true)

    try {
      const res =await fetch(`${BASE_URL}/register`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formdata)
      })

      const {message}=await res.json()
      
      if(!res.ok){
        console.log("isuee is here")
        throw new Error(message)
        
      }
setLoading(false)
toast.success(message)

if (formdata.role == "doctor") {            
  navigate("/login");
} else if (formdata.role == "patient") {
  navigate("/login");
} 

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
      console.log("i am causing issue")
    }
   
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx:auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* imagebox */}
          <div className="hidden lg:block bg-primaryColor">
            <figure className="rounded-1-lg">
              <img src={signupImg} alt="" className="w-full" />
            </figure>
          </div>

          {/* signup */}

          <div className="py-10 lg:pl-16">
            <h3 className="text-headingColor leading-9 font-bold mb-10 text-[22px]">
              Create an <span className="text-indigo-500">Account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={formdata.name}
                  onChange={handleinput}
                  className="w-full px-4 py-3 border-b border-solid leading-7 text-headingColor cursor-pointer focus:outline-none"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formdata.email}
                  onChange={handleinput}
                  className="w-full px-4 py-3 border-b border-solid leading-7 text-headingColor cursor-pointer focus:outline-none"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={formdata.password}
                  onChange={handleinput}
                  className="w-full px-4 py-3 border-b border-solid leading-7 text-headingColor cursor-pointer focus:outline-none"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    value={formdata.role}
                    onChange={handleinput}
                    required
                    className="text-gray-700 font-semibold text-[15px] px-4 py-3 focus:outline-none"
                  ><option value="">Select a role</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label
                  htmlFor=""
                  className="text-headingColor font-bold leading-7"
                >
                  Gender :
                  <select
                    name="gender"
                    value={formdata.gender}
                    onChange={handleinput}
                    className="text-gray-700 font-semibold text-[15px] px-4 py-3 focus:outline-none"
                  > <option value="">Select a Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
            {  selectfile &&  <figure className="w-[60px] h-[60px] flex items-center rounded-full justify-center border-solid border-2 ">
                  <img src={previousurl} alt="" className="w-full rounded-full" />
                </figure>}

                <div className="relative h-[50px] w-[130px]">
                  <input
                    type="file"
                    name="photo"
                    id="customerfile"
                    onChange={handlefile}
                    accept=".jpg, .png"
                    className="absolute opacity-0 left-0 top-0 cursor-pointer w-full h-full"
                  />
                  <label
                    htmlFor="customerfile"
                    className="absolute w-full h-full top-0 left-0 flex items-center rounded-lg px-[0.75rem] py-[0.375rem] text-[15px] overflow-hidden leading-6 bg-[#0066ff46] text-headingColor font-semibold cursor-pointer"
                  >
                    Upload Photo 
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button disabled={loading&&true} type="submit" className="btn w-full px-4 py-3">
                 {loading?<HashLoader size={35} color="white"></HashLoader>:'Sign Up'}
                </button>

                <p className="mt-5 text-gray-600 text-center">
                  Already have an account ?
                  <Link
                    to="/login"
                    className="text-primaryColor ml-1 font-medium"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
