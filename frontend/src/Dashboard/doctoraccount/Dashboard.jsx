import React from "react";
import Loading from "../../components/loader/Loading";
import Error from "../../components/Error/Error";
import useGetprofile from "../../hooks/useFetchdata";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";
import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import Doctorabout from "../../pages/Doctors/Doctorabout"
import Profile from "./Profile";
import Appointments from "./Appointments";

const Dashboard = () => {
  const { data, loading, error } = useGetprofile(
    `${BASE_URL}/doctors/profile/me`
  );
  const [tab, settab] = useState("overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading></Loading>}
        {!loading && error && <Error></Error>}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px]">
            <Tabs tab={tab} settab={settab}></Tabs>
            <div className="lg:col-span-2">
              {data.isApproved == "pending" && (
                <div className="flex p-4 text-yellow-800 bg-yellow-200 rounded-lg">
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm">
                    To get Approval please complete profile
                  </div>
                </div>
              )}

              <div className="mt-8">
                {tab == "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={data?.photo} className="w-full" alt="" />
                      </figure>
                      <div>
                        <span className="bg-teal-100 py-1 px-4 lg:py-2 lg:px-6 text-blue-400 leading-4 lg:leading-6 lg:text-[16px] text-[12px] font-semibold rounded">
                          {data.specialization}
                        </span>{" "}
                        {/* check once */}
                        <h3 className="leading-9 text-[22px] mt-3 font-bold text-headingColor">
                       {data.name}
                        </h3>
                        <div className="flex items-centergap-[7px]">
                          <span className="flex items-center text-headingColor gap-[6px] lg:text-[16px] leading-5 font-semibold">
                            <img src={starIcon} alt="" />
                            {data.averageRating}
                          </span>
                          <span className="flex items-center text-gray-600 gap-[6px] lg:text-[16px] leading-5 font-semibold">
                            ({data.totalRating})
                          </span>
                        </div>
                        <p className="text_para font-[15px] leading-6">
                          {data?.bio}
                        </p>
                      </div>
                    </div>
<Doctorabout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences}></Doctorabout>

                  </div>
                )}
                {tab == "appointments" && <Appointments appointments={data.appointments}></Appointments>}
                {tab == "settings" && <Profile Doctordata={data}></Profile> }
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
