import React from 'react'

import Button from '../Shared/Button';

const Banner = ({BannerData}) => {
  return (
    <div className=' min-h-[550px] flex justify-center items-center py-12'>
      <div className=' container'>
        <div className=' bg-red-700 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
          {/* first col */}
          <div className='flex justify-center gap-4 flex-col p-6 sm:p-8'>
            <p data-aos="slide-right"  className='text-xl'>{BannerData.discount}</p>
            <h1 data-aos="zoom-out" className='uppercase text-3xl lg:text-6xl font-bold'>{BannerData.title}</h1>
            <h1 data-aos="fade-up" className=' text-lg uppercase'>{BannerData.date}</h1>
          </div>
          {/* Second col */}
          <div data-aos="zoom-in" className='h-full flex items-center'>
            <img src={BannerData.image} alt="" className=' scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover'/>
          </div>
          {/* third col */}
          <div className='flex justify-center gap-4 flex-col p-6 sm:p-8'>
            <p data-aos="zoom-out" className=' font-bold text-4xl'> {BannerData.title2}</p>
            <p data-aos="fade-up" className=' text-4xl font-semibold '>{BannerData.title3}</p>
            <p data-aos="fade-down" className='  text-md'>{BannerData.description}</p>
            <div data-aos="zoom-out">
              <Button
              text="Shope now"
              textColor="text-primary"
              bgColor=" bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner