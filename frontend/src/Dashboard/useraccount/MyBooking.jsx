import React from "react";
import useFetchdata from "../../hooks/useFetchdata";
import { BASE_URL } from "../../config";
import Doctorcard from "../../components/Doctors/Doctorcard";
import Loading from "../../components/loader/Loading";
import Error from "../../components/Error/Error";

const MyBooking = () => {
  const {
    data: appointment,
    loading,
    error,
  } = useFetchdata(`${BASE_URL}/user/appointments/my-appointment`);

  return (
    <div>
      {loading && !error && <Loading></Loading>}

      {error && !loading && <Error err={error}></Error>}

      {!loading && !error && (                                                        //if not an error and no loading then give appointments
        <div className="grid grid-cols-1 lg:grid-cols-2 ">{appointment.map((doctor) => (
          <Doctorcard doctor={doctor} key={doctor._id}></Doctorcard>
        ))}</div>
      )}

      {!loading && !error && appointment.length==0&&<h2 className="mt-5 text-center text-gray-700 font-semibold leading-7">You did not booked any doctor</h2>}
      
    </div>
  );
};

export default MyBooking;
