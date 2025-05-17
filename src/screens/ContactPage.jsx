import React, { useEffect } from "react";
import ContactPageForm from "../components/ContactPageForm";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return (
    <div className="bg-[#f8f8f8] pt-20 sm:pt-24 w-[100vw] pb-7">
      <ContactPageForm />
    </div>
  );
};

export default ContactPage;
