import React, { useRef } from "react";
// import ContactForm from "../../components/ContactForm";
import BiVideoReel from "/Videos/biservice.mp4";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactModal = ({ SelectedService }) => {
  const ModalRef = useRef();

  //   const toggleModal = () => {
  //     ModalRef.current.showModal();
  //   };

  return (
    <div data-theme="light" className="bg-white">
      <dialog id="my_modal_1" ref={ModalRef} className="modal">
        <div className="modal-box w-11/12 h-fit max-w-5xl m-0 p-0 ">
          <ContactForm />
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ContactModal;

const currentTime = new Date();
const displayTime = currentTime.toLocaleTimeString();

const formSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string(),
  email: z.string().email("Please enter a valid email address"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  remark: z.string().min(2, "Message must be at least 2 characters"),
});

export const BASE_URL = "https://crm2.actifyzone.com/crm-uat";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      remark: "",
    },
  });

  async function onSubmit(values) {
    try {
      const response = await axios.post(
        BASE_URL + "/Crm/Portal/User/websitecontacts",
        values
      );
      if (response.data.message == "Email Already Exist") {
        toast.error(response.data.message);
      } else {
        reset();
        toast.success("Form Submitted Successfully");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) throw error.response?.data;
      else throw "Something went wrong";
    }
  }
  return (
    <section className="w-full h-full bg-white items-start no-scrollbar p-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative w-[90%] mx-auto">
                <video
                  loop={true}
                  muted={true}
                  autoPlay={true}
                  src={BiVideoReel}
                  alt="ContactUs tailwind section"
                  className="w-full h-[80%] rounded-2xl bg-blend-multiply bg-transparent object-contain shadow-2xl touch-none pointer-events-none "
                  controls={false}
                >
                  <source src={BiVideoReel} />
                </video>
              </div>
            </div>
          </div>
          <div className="p-2 lg:p-6 lg:rounded-r-2xl rounded-2xl">
            <p className="text-black font-sans text-center sm:text-xl text-lg font-semibold leading-7 mb-11">
              Power BI transforms your raw data into actionable insights,
              helping you to make informed decisions faster <br />
            </p>
            <p className="font-semibold text-blue-600 pb-6 text-center sm:text-3xl text-xl">
              Let’s drive better business outcomes together!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                htmlFor="name"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-6"
              >
                <input
                  {...register("first_name", { required: true })}
                  type="text"
                  id="name"
                  className="peer w-full border-none input-md bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Your name"
                  required={true}
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Your name
                </span>
              </label>
              <label
                htmlFor="email"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  mb-6"
              >
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  className="peer w-full border-none input-md bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Username"
                  required={true}
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Email
                </span>
              </label>
              <label
                htmlFor="phone"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  mb-6"
              >
                <input
                  {...register("phone_number", { required: true })}
                  type="tel"
                  id="phone"
                  className="peer w-full border-none input-md bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Username"
                  required={true}
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Phone
                </span>
              </label>
              <textarea
                {...register("remark", { required: true })}
                placeholder="Add any additional remarks or questions"
                required={true}
                className="textarea textarea-bordered textarea-lg w-full mb-6"
              ></textarea>
              <button className="w-full h-12 text-white font-semibold rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm  mb-6">
                Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
