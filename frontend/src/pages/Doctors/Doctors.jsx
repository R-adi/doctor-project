import React, { useState, useEffect } from "react";
import { doctors } from "../../assets/data/doctors";
import Doctorcard from "../../components/Doctors/Doctorcard";
import { BASE_URL } from "../../config";
import useFetchdata from "../../hooks/useFetchdata";
import Loading from "../../components/loader/Loading";
import Error from "../../components/Error/Error";

const Doctors = () => {
  const [query, setquery] = useState("");
  const [deBounceQuery, setdeBounceQuery] = useState("");

  const handleSearch = () => {
    setquery(query.trim());
    console.log("handle search");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setdeBounceQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useFetchdata(`${BASE_URL}/doctors?.query=${query}`);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mx-auto rounded-md flex items-center justify-between bg-[#0066ff2e]">
            <input
              type="search"
              className="py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer pr-2"
              placeholder="Search Doctor"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {loading && <Loading></Loading>}
          {error && <Error></Error>}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:grid-cols-3 ">
              {doctors.map((doctor) => (
                <Doctorcard key={doctor.id} doctor={doctor}></Doctorcard>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;
