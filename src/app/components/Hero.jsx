import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-end gap-5 container mx-auto px-4'>
        <Image width={1000} height={1000} alt="bglight" src={"/HeroDp.png"} className="h-[95vh] w-auto" />
        <div className='w-1/2 py-16 2xl:py-24 pr-28 2xl:pr-12  h-[80vh] flex flex-col justify-start items-end gap-6'>
        <p className='text-6xl 2xl:text-7xl font-black'>Mohamed Rafiq</p>
        <p className='text-blue text-2xl 2xl:text-3xl tracking-wider'>UI UX Designer    |    Frontend Developer</p>
        
        </div>
      
    </div>
  )
}

export default Hero
