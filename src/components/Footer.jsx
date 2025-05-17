import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrolltoHash = (element_id) => {
    if (location.pathname === "/" || location.pathname === "/learning") {
      const element = document.getElementById(element_id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { preventScrollReset: false });
    }
  };

  const QuickLinks = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Quick Links</h3>
      <div className="space-y-3">
        {[
          { name: "Home", to: "/", hash: "home" },
          { name: "Contact", to: "/contact" },
          { name: "Why choose us?", to: "#", hash: "whyChooseUs" },
          { name: "Actify Learning", to: "/learning", hash: "learning" },
          { name: "Actify Business", to: "/business", hash: "business" },
          { name: "Careers", to: "/careers" },
        ].map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={() => link.hash && scrolltoHash(link.hash)}
            className="block text-blue-100 hover:text-white transition-colors duration-200 group"
          >
            <span className="relative">
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );

  const SocialLinks = ({ title, links }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-100 hover:text-white transition-colors duration-200 group"
          >
            <span className="mr-3 text-white/70 group-hover:text-white">
              {link.icon}
            </span>
            <span className="relative">
              {link.text}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );

  const ContactInfo = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Contact Us</h3>
      <div className="space-y-3">
        <a
          href="tel:+91-9867476400"
          className="block text-blue-100 hover:text-white transition-colors duration-200 group"
        >
          <span className="relative">
            +91-9867476400
            <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </span>
        </a>
        <a
          href="mailto:info@actifyzone.com"
          className="block text-blue-100 hover:text-white transition-colors duration-200 group"
        >
          <span className="relative">
            info@actifyzone.com
            <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </span>
        </a>
      </div>
    </div>
  );

  const Address = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Address</h3>
      <a
        href="https://maps.app.goo.gl/9yNoumTx9Byfo8YZ8"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-100 hover:text-white transition-colors duration-200"
      >
        3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice Interiors, 
        Naik Wadi, Near Thane Station, Thane (W) 400602.
      </a>
    </div>
  );

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="container px-6 py-12 mx-auto">
        {/* CTA Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-blue-800/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white max-w-2xl">
              Get in touch today to learn more about our courses and software products.
            </h2>
          </div>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
          >
            <span>Contact Now</span>
            <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <hr className="my-8 border-blue-700/50" />

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <QuickLinks />
          
          <div className="space-y-8">
            <SocialLinks
              title="Business"
              links={[
                { 
                  url: "https://www.instagram.com/actify.business/",
                  text: "actify.business",
                  icon: <FaInstagram />
                },
                { 
                  url: "https://www.linkedin.com/company/actify-business/",
                  text: "Actify Business",
                  icon: <FaLinkedin />
                },
                { 
                  url: "https://www.facebook.com/people/Actify-Business/100094744836119/",
                  text: "Actify Business",
                  icon: <FaFacebook />
                }
              ]}
            />
            
            <SocialLinks
              title="Learning"
              links={[
                { 
                  url: "https://www.instagram.com/actify.learning/",
                  text: "actify.learning",
                  icon: <FaInstagram />
                },
                { 
                  url: "https://www.linkedin.com/company/actify-learning/",
                  text: "Actify Learning",
                  icon: <FaLinkedin />
                },
                { 
                  url: "https://www.facebook.com/people/Actify-Learning/100094659700334/",
                  text: "actify.learning",
                  icon: <FaFacebook />
                }
              ]}
            />
          </div>

          <ContactInfo />
          <Address />
        </div>

        <hr className="my-8 border-blue-700/50" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between sm:flex-row gap-6">
          <div className="bg-white p-2 rounded-lg">
            <img
              className="h-12 w-auto"
              src="https://static.wixstatic.com/media/babd9b_ba57d40fd60d4d3bbc5a606f6fea1666~mv2.png/v1/fill/w_209,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ac.png"
              alt="Actify Logo"
            />
          </div>
          <p className="text-blue-200/80 text-sm">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;