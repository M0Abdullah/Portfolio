"use client"
import Image from "next/image";
import React from "react";
import direction from "@/Assest/direction.svg";
import { useFormik } from "formik";
function Form() {
const initialInputs = {
  name: "",
  email: "",
  phone: "",
  company:"",
  message: "",
}
const {values, handleChange, handleSubmit} = useFormik({
  initialValues: initialInputs,
  onSubmit:(value) => {
    const url =
      "https://wa.me/923437105313?text=" +
      "Name: " + encodeURIComponent(value.name) + "%0a" +
      "Phone: " + encodeURIComponent(value.phone) + "%0a" +
      "Email: " + encodeURIComponent(value.email) + "%0a" +
      "Company: " + encodeURIComponent(value.company) + "%0a" +
      "Message: " + encodeURIComponent(value.message);

    console.log("values -------->", value);

    // Open WhatsApp chat
    window.open(url, "_blank");
  }
  
})
  return (
    <div className="flex justify-center flex-col ">
      <h2 className="bg-gradient-to-br mb-3 from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Contact Us
      </h2>
      <div className="flex  items-center flex-col  md:flex-row justify-center px-4 dark">
        <Image src={direction} className=" h-[200px] w-[200px] md:w-[300px] md:h-[300px]" width={300} height={300} alt="direction" />
        <div className="w-full max-w-md  rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1  md:flex md:flex-wrap gap-2 justify-center">
            <input
              type="text"
              className="bg-gray-700 text-gray-200  border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
              placeholder="Full Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <input
              type="email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] "
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <input
              type="number"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
              placeholder="Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] "
              placeholder="Company Name"
              name="company"
              value={values.company}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto  md:w-full md:h-auto  md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r  from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
