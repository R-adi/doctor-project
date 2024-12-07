import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full mx-auto shadow-md max-w-[570px] rounded-lg md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello<span className="text-indigo-500"> Welcome back !</span>
        </h3>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="enter email"
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
              placeholder="Password"
              name="password"
              value={formdata.password}
              onChange={handleinput}
              className="w-full px-4 py-3 border-b border-solid leading-7 text-headingColor cursor-pointer focus:outline-none"
              required
            />
          </div>

          <div className="mt-7">
            <button type="submit" className="btn w-full px-4 py-3">
              Login
            </button>
          </div>

          <p className="mt-5 text-gray-600 text-center">
            Don't have an account ?
            <Link to="/register" className="text-primaryColor ml-1 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
