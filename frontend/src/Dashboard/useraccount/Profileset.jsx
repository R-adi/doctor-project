import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import uploadCloudinary from "../../utils/uploadCloudinary.js";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Profileset = ({ user }) => {
  const [selectfile, setselectfile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formdata, setformdata] = useState({
    name: "",
    phone:"",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodtype: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setformdata({
      name: user.name,
      phone:user.phone,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodtype: user.bloodtype
    });
  }, [user]);

  const handleinput = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlefile = async (event) => {
    const file = event.target.files[0];

    const data = await uploadCloudinary(file);
    console.log(data);
    
    setselectfile(data.url);
    setformdata({ ...formdata, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formdata);
    //console.log(formdata.role);         //check once
    
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/user/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json",
            Authorization:`Bearer ${token}`,
         },
       
        //headers: { Authorization: `Bearer ${token}` }
        body: JSON.stringify(formdata),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);

    navigate("/user/profile/me")
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
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
            readOnly
            aria-readonly
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Phone number"
            name="phone"
            value={formdata.phone}
            onChange={handleinput}
            className="w-full px-4 py-3 border-b border-solid leading-7 text-headingColor cursor-pointer focus:outline-none"
            
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
            
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodtype"
            value={formdata.bloodtype}
            onChange={handleinput}
            className="w-full px-4 py-3 border-b border-solid leading-7 text-headingColor cursor-pointer focus:outline-none"
            required
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <label htmlFor="" className="text-headingColor font-bold leading-7">
            Gender :
            <select
              name="gender"
              value={formdata.gender}
              onChange={handleinput}
              className="text-gray-700 font-semibold text-[15px] px-4 py-3 focus:outline-none"
            >
             
              <option value="">Select a Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formdata.photo && (
            <figure className="w-[60px] h-[60px] flex items-center rounded-full justify-center border-solid border-2 ">
              <img
                src={formdata.photo}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}

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
             {selectfile?selectfile.name:"Upload photo"}
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="btn w-full px-4 py-3"
          >
            {loading ? (
              <HashLoader size={25} color="white"></HashLoader>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profileset;
