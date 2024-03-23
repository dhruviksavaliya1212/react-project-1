import React from 'react'
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category2 = () => {
  return (
    <div className="py-8 overflow-hidden">
      <div className="container">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* first col */}
          <div className="sm:col-span-2 py-10 pl-5 sm:pl-14 lg:pl-5 bg-gradient-to-r from-zinc-200 to-gray-200 text-white rounded-2xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="lg:mb-[2px] mb-3  text-xl text-gray-500">Enjoy</p>
                <p className=" text-2xl sm:text-4xl text-zinc-500 font-semibold mb-[2px]">with</p>
                <p className=" text-4xl sm:text-6xl text-zinc-500 lg:text-[35px] xl:text-[45px] font-bold opacity-50 mb-5 lg:mb-3"> Console</p>
                <Button
                  text="Browse"
                  textColor="text-white"
                  bgColor=" bg-zinc-600"
                />
              </div>
            </div>
            <img src={Image1} alt="" className=" w-[200px]  right-2 top-[30px] absolute bottom-0"/>
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/95 text-white rounded-2xl relative h-[320px] flex items-end">
            <div>
              <div className="sm:mb-20 mb-4">
                <p className="mb-[2px] text-gray-200">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">with</p>
                <p className=" text-4xl lg:text-[35px] xl:text-[45px] font-bold opacity-50 mb-2"> Vision</p>
                <Button
                  text="Browse"
                  textColor="text-brandGreen"
                  bgColor=" bg-zinc-100"
                />
              </div>
            </div>
            <img src={Image2} alt="" className=" w-[180px] absolute -right-0 top-[160px]"/>
          </div>
          {/* third col */}
          <div className=" py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-2xl relative h-[320px] flex items-end">
          <div>
              <div className="sm:mb-2 mb-4">
                <p className="mb-[2px] text-gray-200">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">with</p>
                <p className=" text-4xl lg:text-[35px] xl:text-[45px] font-bold opacity-50 mb-3"> Speaker</p>
                <Button
                  text="Browse"
                  textColor="text-brandBlue"
                  bgColor=" bg-zinc-100"
                />
              </div>
            </div>
            <img src={Image3} alt="" className="sm:w-[170px] w-[200px] absolute right-0 top-[30px]"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category2