import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const COLOR_CHANGE_THRESHOLD = 120;

    const handleScroll = () => {
      if (window.scrollY >= COLOR_CHANGE_THRESHOLD && !color) {
        setColor(true);
        if (headerRef.current) {
        }
      } else if (window.scrollY < COLOR_CHANGE_THRESHOLD && color) {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [color]); // Depend on `color` state

  const Divider = () => {
    return <p className={`${color ? "opacity-15" : "opacity-25"}`}>│</p>;
  };

  const toggleDrawer = () => {
    const drawerState = document.getElementById("my-drawer-4");
    if (drawerState) {
      drawerState.checked = false;
    }
  };

  const NavAnchor = ({ title, url, mobile }) => {
    return (
      <NavLink
        onClick={mobile && toggleDrawer}
        to={url}
        className={({ isActive }) =>
          `${
            isActive
              ? " md:border-b lg:bg-transparent bg-slate-700 md:border-blue-500"
              : ""
          } uppercase text-xl ${mobile ? "text-white my-1" : "text-black"}`
        }
      >
        {title}
      </NavLink>
    );
  };

  return (
    <header
      // data-theme="light"
      ref={headerRef}
      className={`w-[100%] p-3 ${
        color
          ? "bg-white shadow fixed top-0 left-0 z-50"
          : "absolute z-50  bg-transparent"
      }`}
      style={{ transition: "background-color 0.8s ease" }}
    >
      <div className="flex justify-between items-center sm:w-[80%] gap-2 mx-auto my-auto">
        <div className="h-full flex items-center justify-center">
          <Link to="/">
            <img
              src="https://static.wixstatic.com/media/babd9b_ba57d40fd60d4d3bbc5a606f6fea1666~mv2.png/v1/fill/w_209,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ac.png"
              alt="Actify Logo"
              className="object-contain md:w-36 w-24"
            />
          </Link>
        </div>
        <nav className=" lg:flex justify-center gap-6 items-center syne-font font-semibold text-lg hidden">
          <NavAnchor title="Home" url="/" />
          <Divider />
          <NavAnchor title="Learning" url="/learning" />
          <Divider />
          <NavAnchor title="Business" url="/business" />
          <Divider />
          <NavAnchor title="Careers" url="/careers" />
          {/* <Divider /> */}
          {/* <NavAnchor title="Blogs" url="/blogs" /> */}
          <Divider />
          <NavAnchor title="Services" url="/services" />
          <Divider />
          <NavAnchor title="Contact" url="/contact" />
        </nav>
        <label
          className="text-black lg:hidden swap swap-rotate drawer-button"
          htmlFor="my-drawer-4"
        >
          {/* this hidden checkbox controls the state */}
          {/* <input type="checkbox" /> */}

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
        <div className="drawer drawer-end absolute">
          <div className="drawer-content hidden">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn hidden btn-primary"
            >
              Open drawer
            </label>
          </div>
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <label
                className="text-white flex items-end justify-end lg:hidden swap swap-rotate drawer-button"
                htmlFor="my-drawer-4"
              >
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* close icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="white"
                  className="size-8 mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </label>
              {/* Sidebar content here */}
              <li>
                <NavAnchor title={"Home"} url={"/"} mobile={true}></NavAnchor>
              </li>
              <li>
                <NavAnchor title="Learning" url="/learning" mobile={true} />
              </li>
              <li>
                <NavAnchor title="Business" url="/business" mobile={true} />
              </li>
              <li>
                <NavAnchor title="Careers" url="/careers" mobile={true} />
              </li>
              <li>
                <NavAnchor title="Services" url="/services" mobile={true} />
              </li>
              <li>
                <NavAnchor title="Contact" url="/contact" mobile={true} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
