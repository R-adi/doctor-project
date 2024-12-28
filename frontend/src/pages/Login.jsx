import React, { useState, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import {toast} from 'react-toastify'

const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleinput = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formdata);
    console.log(formdata.role);
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, "login data");

      setLoading(false);
      toast.success(result.message);
      navigate("/home")

    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full mx-auto shadow-md max-w-[570px] rounded-lg md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello<span className="text-indigo-500"> Welcome back !</span>
        </h3>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
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
          <button type="submit" className="btn w-full px-4 py-3" disabled={loading}>
  {loading ? "Logging in..." : "Login"}
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
