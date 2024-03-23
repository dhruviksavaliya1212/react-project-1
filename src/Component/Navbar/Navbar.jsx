import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = ({size,setShow}) => {
  const [click, setClick] = useState("false");

  function clicked() {
    setClick(click == "false" ? "true" : "false");
  }
  return (
    <div className="relative z-40">
      <div>
        <div className="container realtive flex justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-primary uppercase font-semibold tracking-wider text-2xl"
            >
              Shop
            </a>
            {/* Navbar Links */}
            <div
              className={`lg:block absolute transition-all z-[999] sm:z-0 duration-200 bg-zinc-200 dark:bg-gray-950/90 rounded-xl top-12 right-[10vw] lg:right-0 lg:w-0 w-[250px] h-screen lg:h-6 lg: lg:top-0 lg:opacity-100 lg:relative ${
                click == "false" ? "opacity-0" : "opacity-100"
              }`} onClick={()=> setShow(true)}
            >
              <ul
                className={`flex lg:flex-row flex-col gap-10 items-center justify-center top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:top-0 lg:-translate-x-0 lg:-translate-y-0 lg:gap-4  absolute`}
              >
                {["Home", "Shop", "About", "Blogs"].map((data, index) => (
                  <li>
                    <a
                      href="#"
                      key={index}
                      className="px-2 font-semibold text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-200"
                    >
                      {data}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Navbar Right Section */}
          <div className="relative flex justify-between items-center sm:gap-2 gap-4 md:gap-4">
            {/* search bar */}
            <div className=" searchmain h-5 mb-3">
              <div className=" search bg-white dark:bg-gray-900 sm:h-9 w-screen sm:w-auto sm:relative group sm:block">
                <input
                  type="text"
                  className=" searchinput w-[0px] sm:group-hover:w-[300px] group-hover:w-[290px] transition-all duration-200 rounded-full border group-hover: border-1 border-gray-200 group-hover:bg-gray-300 group-hover:border-gray-800 sm:px-3 py-1 focus:outline-none 
                  dark:border-gray-900 group-hover:dark:border-gray-500 dark:bg-gray-900 group-hover:dark:bg-gray-800"
                  placeholder="Search"
                  id="searchbar"
                />{" "}
                <IoMdSearch className="searchicon text-xl group-hover:text-primary text-gray-600 dark:text-gray-400 absolute sm:top-1/2 -translate-y-1/2 right-1 duration-200 " />
              </div>
            </div>
            {/* order button */}
            <button className="relative p-3" onClick={()=>{setShow(false)}}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-1 right-1 flex items-center justify-center text-xs">
                {size}
              </div>
            </button>
            {/* Dark Mode Button */}
            <div>
              <DarkMode />
            </div>

            {/* Navbar for mobile */}
            <div className="relative">
              <FaBars
                onClick={clicked}
                className={` cursor-pointer transition-all duration-200 lg:hidden absolute text-xl text-gray-600 dark:text-gray-400 ${
                  click == "true" ? "opacity-0" : "opacity-100"
                }`}
              />
              <IoMdClose
                onClick={clicked}
                className={` cursor-pointer transition-all duration-200 lg:hidden text-2xl text-gray-600 dark:text-gray-400 ${
                  click == "false" ? "opacity-0" : "opacity-100"
                } `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
