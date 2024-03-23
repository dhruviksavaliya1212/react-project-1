import React from 'react'
import headphone from '../../assets/hero/headphone.png'
import Button from '../Shared/Button';

const BannerData=
  {
    id:1,
    discount:"30% Off",
    title:"Finale Sale",
    date:"10 jan to 28 jan",
    image:headphone,
    title2:"Air Solo Bass",
    title3:"Winter Sale",
    description:"lorem ipsum ddlor,amet consterence adipting elit.eque done son",
  };


const Banner = () => {
  return (
    <div className=' min-h-[550px] flex justify-center items-center py-12'>
      <div className=' container'>
        <div className=' bg-primary/90 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
          {/* first col */}
          <div className='flex justify-center gap-4 flex-col p-6 sm:p-8'>
            <p className='text-xl'>{BannerData.discount}</p>
            <h1 className='uppercase text-3xl lg:text-6xl font-bold'>{BannerData.title}</h1>
            <h1 className=' text-lg uppercase'>{BannerData.date}</h1>
          </div>
          {/* Second col */}
          <div className='h-full flex items-center'>
            <img src={BannerData.image} alt="" className=' scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover'/>
          </div>
          {/* third col */}
          <div className='flex justify-center gap-4 flex-col p-6 sm:p-8'>
            <p className=' font-bold text-4xl'> {BannerData.title2}</p>
            <p className=' text-4xl font-semibold '>{BannerData.title3}</p>
            <p className='  text-md'>{BannerData.description}</p>
            <div>
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