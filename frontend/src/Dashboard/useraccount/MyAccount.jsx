import React from "react";
import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import userImg from "../../assets/images/doctor-img01.png";
import MyBooking from "./MyBooking";
import Profileset from "./Profileset";
import useGetProfile from "../../hooks/useFetchdata";
import { BASE_URL } from "../../config";
import Loading from "../../components/loader/Loading";
import Error from "../../components/Error/Error";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, settab] = useState("bookings");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/user/profile/me`);
  console.log(userData, "user data");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading &&!error && <Loading></Loading>}

        {error &&loading&& <Error err={error}></Error>}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] border-2 border-solid rounded-full">
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                {userData.name}
                </h3>
                <p className="text-gray-700 leading-6 font-medium text-[15px]">
                  Blood Type: <span className="ml-2 leading-8">{userData.bloodtype}</span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
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

            <div className="md:col-span-2 md:px-[30px]">
              <div className="">
                <button
                  onClick={() => settab("bookings")}
                  className={`${
                    tab == "bookings" && "bg-blue-700 text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-gray-700 font-semibold leading-7 border border-solid border-primaryColor`}
                >
                  My Booking
                </button>

                <button
                  onClick={() => settab("settings")}
                  className={`${
                    tab == "settings" && "bg-blue-700 text-white font-normal"
                  } py-2 mr-5 px-5 rounded-md text-gray-700 font-semibold leading-7 border border-solid border-primaryColor`}
                >
                  Profile Setting
                </button>
              </div>

              {tab == "bookings" && <MyBooking></MyBooking>}

              {tab == "settings" && <Profileset user={userData}></Profileset>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
