import React from "react";
import { useState,useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
 import { BASE_URL,token } from "../../config";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { toast } from "react-toastify";

const Profile = ({Doctordata}) => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password:"",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketprice: 0,
    qualifications: [
      { startingDate: "", endingDate: "", degree: "", university: "" },
    ],
    experiences: [
      { startingDate: "", endingDate: "", position: "", hospital: "" },
    ],
    timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
    about: "",
    photo: null,
  });

  useEffect(() => {
 setFormData({
    name:Doctordata?.name,
    email: Doctordata?.email,
    
    phone: Doctordata?.phone,
    bio: Doctordata?.bio,
    gender: Doctordata?.gender,
    specialization: Doctordata?.specialization,
    ticketprice: Doctordata?.ticketprice,
    qualifications: Doctordata?.qualifications,
    experiences: Doctordata?.experiences,
    timeSlots: Doctordata?.timeSlots,
    about:  Doctordata?.about,
    photo:  Doctordata?.photo,
 })
  
  }, [Doctordata])
  

  const handleInput = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handlefile =async event => {
    const file=event.target.files[0]
    const data =await uploadImageToCloudinary(file)
    console.log(data)
    setFormData({...FormData,photo:data?.url})
  };

  const updateprofile = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch(`${BASE_URL}/doctor/${Doctordata._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(FormData)
        })

const result=await res.json()

if(!res.ok){
    throw Error(result.message)
}
toast.success(result.message)

    } catch (error) {
      toast.error(error.message)  
    }
  };


  //to use reusable component
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i != index),
    }));
  };

  const handleReusableInput = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const addExperience = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const addTimeSlots = (e) => {
    e.preventDefault();

    addItem("timeSlots", { day: "", startingTime: "", endingTime: "" });
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const deleteExperiences = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  const handleQualification = (event, index) => {
    handleReusableInput("qualifications", index, event);
  };

  const handleExperiences = (event, index) => {
    handleReusableInput("experiences", index, event);
  };

  const handleTimeSlots = (event, index) => {
    handleReusableInput("timeSlots", index, event);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile
      </h2>
      <form action="">
        <div className="mb-5">
          <p className="form_lable">Name*</p>
          <input
            type="text"
            name="name"
            value={FormData.name}
            onChange={handleInput}
            placeholder="Full Name"
            className="form_input"
          />
        </div>

        <div className="mb-5">
          <p className="form_lable">Email*</p>
          <input
            type="email"
            name="email"
            value={FormData.email}
            placeholder="Email"
            className="form_input"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form_lable">Phone*</p>
          <input
            type="number"
            name="phone"
            value={FormData.phone}
            onChange={handleInput}
            placeholder="Phone number"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_lable">Bio*</p>
          <input
            type="text"
            name="bio"
            value={FormData.bio}
            onChange={handleInput}
            placeholder=""
            className="form_input"
            maxLength={100}
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div className="">
              <p className="form_lable">Gender</p>
              <select
                name="gender"
                value={FormData.gender}
                onChange={handleInput}
                className="form_input py-3"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="">
              <p className="form_lable">Specilization</p>
              <select
                name="specialization"
                value={FormData.specialization}
                onChange={handleInput}
                className="form_input py-3"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="psychatrist">Psychatrist</option>
                <option value="dentist">Dentist</option>
                <option value="physician">Physician</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <p className="form_lable">Ticket Prices</p>
              <input
                type="number"
                placeholder="100"
                name="ticketprice"
                onChange={handleInput}
                value={FormData.ticketprice}
                className="form_input"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form_lable">Qualification</p>
          {FormData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_lable">Starting date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleQualification(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_lable">Ending date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleQualification(e, index)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_lable">Degree</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form_input"
                      onChange={(e) => handleQualification(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_lable">University</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form_input"
                      onChange={(e) => handleQualification(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-red-600 p-2 text-white cursor-pointer mb-[30px] rounded-full mt-2"
                >
                  <AiOutlineDelete></AiOutlineDelete>
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-black py-2 px-5 rounded-md text-[18px] text-white cursor-pointer h-fit"
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className="form_lable">Experiences</p>
          {FormData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_lable">Starting date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleExperiences(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_lable">Ending date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleExperiences(e, index)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_lable">Position</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form_input"
                      onChange={(e) => handleExperiences(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_lable">Hospital</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form_input"
                      onChange={(e) => handleExperiences(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteExperiences(e, index)}
                  className="bg-red-600 p-2 text-white cursor-pointer mb-[30px] rounded-full mt-2"
                >
                  <AiOutlineDelete></AiOutlineDelete>
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addExperience}
            className="bg-black py-2 px-5 rounded-md text-[18px] text-white cursor-pointer h-fit"
          >
            Add Experience
          </button>
        </div>

        <div className="mb-5">
          <p className="form_lable">Time Slots</p>
          {FormData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form_lable">Day</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form_input py-3"
                      onChange={(e) => handleTimeSlots(e, index)}
                    >
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form_lable">Starting Time</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form_input"
                      onChange={(e) => handleTimeSlots(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form_lable">Ending Time</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form_input"
                      onChange={(e) => handleTimeSlots(e, index)}
                    />
                  </div>

                  <div className="flex items-center">
                    <button  onClick={(e) => deleteTimeSlot(e, index)} className="bg-red-600 p-2 text-white cursor-pointer rounded-full  mt-6">
                      <AiOutlineDelete></AiOutlineDelete>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button onClick={addTimeSlots} className="bg-black py-2 px-5 rounded-md text-[18px] text-white cursor-pointer h-fit">
            Add Timeslots
          </button>
        </div>

        <div className="mb-5">
          <p className="form_lable">About</p>
          <textarea
            name="about"
            id=""
            rows={5}
            value={FormData.about}
            placeholder="write about you"
            onChange={handleInput}
            className="form_input"
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3">
          {FormData.photo && (
            <figure className="w-[60px] h-[60px] flex items-center rounded-full justify-center border-solid border-2 ">
              <img
                src={FormData.photo}
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
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          {" "}
          <button
            onClick={updateprofile}
            className="bg-blue-600 text-[18px] rounded-lg text-white w-full py-3 px-4 "
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
