import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 bg-zinc-300/70  ">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-24 pt-10">
          {/* company detail */}
          <div data-aos="zoom-out">
            <a
              href="#"
              className="text-primary uppercase font-semibold tracking-wider text-2xl"
            >
              Shop
            </a>
            <p className=" text-gray-600  dark:text-zinc-100 pr-28 pt-3">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              accusamus aperiam neque dicta maiores?
            </p>
            <p className=" text-gray-500 mt-4">Made by Dhruvik Savaliya</p>
            <a
              href="#"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm font-semibold rounded-full"
            >
              Visit my portfolio
            </a>
          </div>
          {/* Footer links */}
          <div data-aos="zoom-out" className="col-span-2 mt-10 md:mt-0  grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div >
              <h1 className=" font-semibold text-lg">Important Links</h1>
              <ul className="mt-2">
                {["Home", "Shop", "About", "Blogs"].map((data, index) => (
                  <li className="text-center w-[110px] mt-2">
                    <a
                      href="#"
                      key={index}
                      className=" font-semibold text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-200"
                    >
                      {data}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className=" font-semibold text-lg">Quick Links</h1>
              <ul className="mt-2">
                {["Home", "Shop", "About", "Blogs"].map((data, index) => (
                  <li className="text-center w-[100px] mt-2">
                    <a
                      href="#"
                      key={index}
                      className=" font-semibold text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-200"
                    >
                      {data}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* COmapny address */}
            <div data-aos="zoom-out" className=" px-4 mt-10 sm:mt-0 md:w-[200px] col-span-2 sm:col-auto">
              <h1 className=" font-semibold ml-10 text-xl mb-4">Address</h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Varacha, Surat, Gujarat</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt/>
                  <p> +91 2347846493</p>
                </div>
                {/* Social Liks */}
                <div className="mt-4 flex gap-7">
                  <a href="#">
                    <FaInstagram className="text-2xl hover:text-primary duration-300"/>
                  </a>
                  <a href="#">
                    <FaFacebook className="text-2xl hover:text-brandBlue duration-300"/>
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-2xl hover:text-brandBlue duration-300"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
