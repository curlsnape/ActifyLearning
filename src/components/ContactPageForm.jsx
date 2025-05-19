import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

const formSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone_number: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .regex(/^\d+$/, "Phone number must contain digits only"),
  remark: z.string().min(1, "Remark is required"),
  accountname: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
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
        msg: values.remark,
        enquiry_type: selectedOption,
      },
      source: source,
    };

    try {
      const response = await axios.post(
        BASE_URL + "/Crm/Portal/User/websitecontacts",
        data
      );
      if (response.data.message === "Email Already Exist") {
        toast.error(response.data.message);
      } else {
        reset();
        toast.success("Thank you for sharing the details");
        setTimeout(() => {
          if (selectedOption === "Bussiness Owner") {
            navigate("/business");
          } else if (selectedOption === "student") {
            navigate("/learning");
          } else {
            navigate("/careers");
          }
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Submission failed");
      } else {
        toast.error("Something went wrong");
      }
    }
  }

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto overflow-x-hidden">
      <Toaster />
      <div>
        <p className="text-black text-4xl sm:text-6xl md:text-6xl font-bold text-center mb-3">
          Let's Connect
        </p>
        <p className="text-black text-xl text-center">
          Fill below form, and we'll give you a call.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-base sm:text-xl mt-8 w-full md:w-[50%] text-black grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {/* Name */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
            Your Name
          </label>
          <input
            {...register("first_name")}
            className="bg-white text-black border rounded-md border-gray-200 py-3 pl-3
              text-sm sm:text-base
              w-full
              box-border
              "
            type="text"
            placeholder="Enter name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
            Email Address
          </label>
          <input
            {...register("email")}
            className="bg-white text-black border rounded-md border-gray-200 py-3 pl-3
              text-sm sm:text-base
              w-full
              box-border
              "
            type="email"
            placeholder="Enter email"
          />
        </div>

        
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
            Mobile No.
          </label>
          <input
            {...register("phone_number")}
            className="bg-white text-black border rounded-md border-gray-200 py-3 pl-3
              text-sm sm:text-base 
              w-full
              box-border
              "
            type="tel"
            placeholder="Enter phone number"
          />
        </div>

        
        <div className="flex flex-col col-span-2 sm:col-span-1 relative">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
            I am a
          </label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
            className="bg-white text-black border rounded-md border-gray-200 py-3 px-3
              text-sm sm:text-base
              w-full
              box-border
              cursor-pointer
              appearance-none
              "
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="student">Student</option>
            <option value="Job seeker">Job seeker</option>
            <option value="Bussiness Owner">Bussiness Owner</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Company Name if Business Owner */}
        {selectedOption === "Bussiness Owner" && (
          <div className="flex flex-col col-span-2">
            <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
              Company Name
            </label>
            <input
              {...register("accountname")}
              className="bg-white text-black border rounded-md border-gray-200 py-3 pl-3
                text-sm sm:text-base
                w-full
                box-border
                "
              type="text"
              placeholder="Enter Company name"
            />
          </div>
        )}

        {/* Date */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">Date</label>
          <input
            {...register("date")}
            className="bg-white text-black border rounded-md border-gray-200 py-3 pl-3
              text-sm sm:text-base
              w-full
              box-border
              "
            type="date"
          />
        </div>

        {/* Time */}
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">Time</label>
          <input
            {...register("time")}
            className="bg-white text-black border rounded-md border-gray-200 py-3 pl-3
              text-sm sm:text-base
              w-full
              box-border
              "
            type="time"
          />
        </div>

        {/* Source dropdown */}
        <div className="flex flex-col col-span-2">
          <label>Source</label>
          <select
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="bg-white text-black border rounded-md border-gray-200 py-3 px-3
              text-sm sm:text-base
              w-full
              box-border
              cursor-pointer
              "
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Pillar near station">Pillar near station</option>
            <option value="Pamphlet in Newspaper">Pamphlet in Newspaper</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col col-span-2">
          <label>Your Message</label>
          <textarea
            {...register("remark")}
            className="bg-white text-black border rounded-md border-gray-200 py-3 pl-3 pb-16
              text-sm sm:text-base
              w-full
              box-border
              resize-none
              "
            placeholder="Ask about your requirement"
          />
        </div>

        {/* Submit */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-[#4265FF] text-white font-semibold py-3 px-4 rounded-md flex justify-center items-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting && <CgSpinner className="animate-spin text-2xl" />}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPageForm;