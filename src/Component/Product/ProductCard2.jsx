import React from "react";
import Button from "../Shared/Button";

const ProductCard2 = ({ productData2 , handleClick , warning }) => {
  return (
    <div className=" mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {productData2.map((data) => (
          <div key={data.id} className="group">
            <div data-aos="fade-up" data-aos-delay={data.aosDelay}  className="relative">
              <img src={data.img} alt="" className=" h-[180px] w-[260px] object-cover rounded-md"/>
              {/* Hover button */}
              <div className=" hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center group-hover:backdrop-blur-sm h-full justify-center items-center duration-200">
              <button className="cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-20 bg-red-500 text-white" onClick={()=>handleClick(data)}>Add to cart</button>
              {warning && (
                    <div className=" w-[200px] rounded-lg py-2 absolute h-[70px] z-50 bg-green-800 text-[17px] text-white">
                      Item is already added to your cart
                    </div>
                )}
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay={data.aosDelay}  className="leading-7">
              <h2 className=" font-semibold">{data.title}</h2>
              <h2 className=" font-bold"> ₹ {data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard2;
