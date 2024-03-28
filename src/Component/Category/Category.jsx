import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8 overflow-hidden">
      <div className="container">
        <div  className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* first col */}
          <div data-aos="fade-up" data-aos-delay="0" className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-2xl relative h-[320px] flex items-end">
            <div>
              <div data-aos="fade-down" data-aos-delay="0" className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">with</p>
                <p className=" text-4xl xl:text-5xl font-bold opacity-20 mb-3"> Earphone</p>
                <Button
                  text="Browse"
                  textColor="text-white"
                  bgColor=" bg-primary"
                />
              </div>
            </div>
            <img src={Image1} alt="" className=" w-[320px] right-0 absolute bottom-0"/>
          </div>
          {/* second col */}
          <div data-aos="fade-up" data-aos-delay="200" className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/95 text-white rounded-2xl relative h-[320px] flex items-end">
            <div>
              <div data-aos="fade-down" data-aos-delay="200" className="mb-4">
                <p className="mb-[2px] text-gray-500">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">with</p>
                <p className=" text-4xl lg:text-[35px] xl:text-[45px] font-bold opacity-50 mb-3"> Smartwatch</p>
                <Button
                  text="Browse"
                  textColor="text-brandYellow"
                  bgColor=" bg-zinc-100"
                />
              </div>
            </div>
            <img src={Image2} alt="" className=" w-[320px] absolute -right-10 sm:top-[40px]"/>
          </div>
          {/* third col */}
          <div data-aos="fade-up" data-aos-delay="400" className=" sm:col-span-2 py-10 pl-5 sm:pl-14 lg:pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl relative h-[320px] flex items-end">
            <div>
              <div data-aos="fade-down" data-aos-delay="400" className="mb-4">
                <p className="lg:mb-[2px] mb-3  text-xl text-gray-400">Enjoy</p>
                <p className=" text-2xl sm:text-4xl font-semibold mb-[2px]">with</p>
                <p className=" text-4xl sm:text-6xl lg:text-[35px] xl:text-[45px] font-bold opacity-40 mb-5 lg:mb-3"> Laptop</p>
                <Button
                  text="Browse"
                  textColor="text-primary"
                  bgColor=" bg-zinc-100"
                />
              </div>
            </div>
            <img src={Image3} alt="" className="w-[250px] absolute right-0 lg:right-0 top-[30px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
