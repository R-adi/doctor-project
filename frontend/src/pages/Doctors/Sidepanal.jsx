import React from "react";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

const Sidepanal = ({ doctorId, ticketPrice, timeSlots }) => {
  const bookingHandle = async () => {
    try {
      // Fetch Razorpay order details from the backend
      const res = await fetch(`${BASE_URL}/bookings/checkout/${doctorId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log("Razorpay Order Response:", data);

      if (!res.ok || !data.order) {
        throw new Error(data.message || "Booking details are missing. Please try again.");
      }

      const { notes, amount, id: orderId } = data.order;
      if (!notes || !notes.doctorName || !notes.userName || !notes.email) {
        throw new Error("Required booking details are missing.");
      }

      // Ensure Razorpay script is loaded
      if (!window.Razorpay) {
        throw new Error("Razorpay script is not loaded. Please refresh the page.");
      }

      // Razorpay options
      const options = {
        key: "rzp_test_qwZilLlS7bVMJF", // Your Razorpay Key ID
        amount: amount,
        currency: "INR",
        name: "Doctor Booking",
        description: `Booking for Dr. ${notes.doctorName}`,
        order_id: orderId,
        handler: function (response) {
          toast.success("Payment successful!");
          console.log("Payment details: ", response);
          toast.success("Booking confirmed!");
        },
        prefill: {
          name: notes.userName,
          email: notes.email,
          contact: notes.contact || "",
        },
        theme: {
          color: "#6C63FF",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
      console.log("Razorpay modal opened");
      
    } catch (error) {
      console.log("Error during booking handle:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="shadow-lg shadow-indigo-200 p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} Rs.
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available time slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="leading-6 text-gray-700 font-semibold">{item.day}</p>
              <p className="leading-6 text-gray-700 font-semibold">
                {item.startingTime}-{item.endingTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={bookingHandle} className="btn w-full px-2">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Sidepanal;
