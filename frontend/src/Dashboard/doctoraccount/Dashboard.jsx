import React, {useState}from "react";
import Loading from "../../components/loader/Loading";
import Error from "../../components/Error/Error";
import useGetprofile from "../../hooks/useFetchdata";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";
import { useState } from "react";

const Dashboard = () => {
  const { data, loading, error } = useGetprofile(
    `${BASE_URL}/doctor/profile/me`
  );


  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading></Loading>}
        {!loading && error && <Error></Error>}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px]">
           <Tabs></Tabs>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
