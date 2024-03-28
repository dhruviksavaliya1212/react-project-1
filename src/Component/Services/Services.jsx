import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free shipping on all order",
    aosDelay:0
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days money back",
    aosDelay:100
  },
  {
    id: 3,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online support 24/7",
    description: "Technical support 24/7",
    aosDelay:200
  },
  {
    id: 4,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All payment Secure",
    aosDelay:300
  },
];

const Services = () => {
  return (
    <div>
      <div className="container mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="flex flex-col items-center sm:items-start sm:flex-row gap-4">
              {data.icon}
              <div>
                <h1 className="text-xl text-gray-600 dark:text-gray-400">{data.title}</h1>
                <h1>{data.description}</h1>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
