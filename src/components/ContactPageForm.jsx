import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

const formSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string(),
  email: z.string().email("Please enter a valid email address"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  remark: z.string(),
  accountname: z.string(),
  date: z.string(),
  time: z.string(),
});

export const BASE_URL = "https://crm2.actifyzone.com/crm-uat";

const ContactPageForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [source, setSource] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      accountname: "",
      remark: "",
      date: "",
      time: "",
    },
  });
  async function onSubmit(values) {
    const formattedDate = new Date(values.date).toLocaleDateString("en-GB");

    const data = {
      ...values,
      accountname: values.accountname || "Actify Learning",
      accname:
        selectedOption === "Bussiness Owner"
          ? "Actify Business"
          : "Actify Learning",
      remark: {
        ...(typeof values.remark === "string"
          ? { msg: values.remark }
          : { msg: values.remark?.join("") || "" }),

        enquiry_type: selectedOption,
      },
      source: source,
    };
    try {
      const response = await axios.post(
        BASE_URL + "/Crm/Portal/User/websitecontacts",
        data
      );
      if (response.data.message == "Email Already Exist") {
        toast.error(response.data.message);
      } else {
        reset();
        toast.success("Thank you for sharing the details");
        setTimeout(() => {
          // Fixed the navigation condition - it had the same issue as before
          if (selectedOption === "Bussiness Owner") {
            navigate("/business"); // This should be /business based on your condition
          } else if (selectedOption === "student") {
            navigate("/learning");
          } else {
            navigate("/careers");
          }
        }, 2000); // 2 second delay
      }
    } catch (error) {
      if (axios.isAxiosError(error)) throw error.response?.data;
      else throw "Something went wrong";
    }
  }

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto">
      <Toaster />
      <div>
        <p className="text-black text-4xl sm:text-6xl md:text-6xl font-bold text-center mb-3">
          Let's Connect
        </p>
        <p className="text-black text-xl text-center">
          Fill below form, and we’ll give you a call.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-xl mt-8 w-full md:w-[50%] text-black grid grid-cols-2 gap-4"
      >
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
            htmlFor=""
          >
            Your Name
          </label>
          <input
            {...register("first_name", { required: true })}
            className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2 "
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
            htmlFor=""
          >
            Email Address
          </label>
          <input
            {...register("email", { required: true })}
            className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
            htmlFor=""
          >
            Mobile Number
          </label>
          <input
            email
            {...register("phone_number", { required: true })}
            className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2"
            type="number"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
            htmlFor=""
          >
            Iam a
          </label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
            className="bg-white text-black border  rounded-md border-gray-200 py-2 pl-2"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="student">Student</option>
            <option value="Job seeker">Job seeker</option>
            <option value="Bussiness Owner">Bussiness Owner</option>
          </select>
        </div>
        {selectedOption === "Bussiness Owner" ? (
          <div className="flex flex-col col-span-2 sm:col-span-2">
            <label
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
              htmlFor=""
            >
              Company Name
            </label>
            <input
              {...register("accountname")}
              className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2 calendar-visible"
              type="text"
              placeholder="Enter Company name"
            />
          </div>
        ) : null}

        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="" htmlFor="">
            Date
          </label>
          <input
            {...register("date", {
              required: true,
            })}
            className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2"
            type="date"
            placeholder="Enter date"
            // The following helps with formatting display
          />
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="" htmlFor="">
            Time
          </label>
          <input
            {...register("time", { required: true })}
            className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2"
            type="time"
            placeholder="Enter email"
          />
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-2">
          <label className="" htmlFor="">
            Source
          </label>
          <select
            id="dropdown"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="bg-white text-black border  rounded-md border-gray-200 py-2 pl-2"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Pillar near station">Pillar near station</option>
            <option value="Pamphlet in Newspaper">Pamphlet in Newspaper</option>
          </select>
        </div>
        <div className="flex flex-col col-span-2">
          <label className="" htmlFor="">
            Your Message
          </label>
          <textarea
            {...register("remark", { required: true })}
            className="bg-white text-black border  rounded-md border-gray-200 py-2 pl-2 pb-16"
            type="text"
            placeholder="Ask about your requirement"
          />
        </div>
        <button className="w-full md:w-auto mt-4 py-2 px-8 bg-black rounded-md text-white text-center transition-colors hover:bg-gray-800">
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              Submitting <CgSpinner className="animate-spin" />
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactPageForm;
