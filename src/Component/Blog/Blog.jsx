import React from "react";
import Header from "../Shared/Header";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to choose perfect smartwatch",
    subtitle:
      "lorem dsjlls  asjk sd sadjads d ajsjs jd vcn fur dncz cxlc rud cncxn zkzis ccd eiem fhfk nccb",
    published: "Dec 20, 2024",
    image: Img1,
    aosDelay:"0"
  },
  {
    id: 2,
    title: "How to choose perfect gadget",
    subtitle:
      "lorem dsjlls  asjk sd sadjads d ajsjs jd vcn fur dncz cxlc rud cncxn zkzis ccd eiem fhfk nccb",
    published: "Jan 10, 2024",
    image: Img2,
    aosDelay:"200"
  },
  {
    id: 3,
    title: "How to choose perfect VR headset",
    subtitle:
      "lorem dsjlls  asjk sd sadjads d ajsjs jd vcn fur dncz cxlc rud cncxn zkzis ccd eiem fhfk nccb",
    published: "Feb 25, 2024",
    image: Img3,
    aosDelay:"400"
  },
];

const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Header title="Recent News" subtitle={"Explore our Blogs"} />

        {/* body section */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blogs */}
          {BlogData.map((data) => (
            <div key={data.id} className="">
              {/* img section */}
              <div data-aos="fade-up" data-aos-delay={data.aosDelay}  className=" overflow-hidden rounded-2xl  mb-2">
                <img src={data.image} alt="" className=" w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"/>
              </div>
              {/* content section */}
              <div data-aos="fade-down" data-aos-delay={data.aosDelay}  className=" space-y-2 ">
                <p className=" text-sm text-gray-600 dark:text-gray-400">{data.published}</p>
                <p className=" font-bold text-lg line-clamp-1">{data.title}</p>
                <p className=" line-clamp-2 text-md text-gray-500">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
