'use client'
import { BaseInfo } from '@/Data/data'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const Hero = () => {
  return (
    <div className='w-full p-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
      <div className = 'flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className = 'grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
            {/* Text Content */}
            <div>
                {/* Sub heading */}
                <h1 className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>I am {BaseInfo.name}
                </h1>
                {/* title */ }
                <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
                    {BaseInfo.position}
                </h1>
                {/* Description */}
                <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>{BaseInfo.description}</p>
                {/*Button */}
                <a  href="/resume/ShivamResume(final).pdf" download="Shivam-Resume.pdf"><button className="flex items-center md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-large transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 space-x-2">
                    <span>Download CV</span>
                    <FaDownload/>
                </button></a>
            </div>
            {/* Image Content */}
            <div className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden'>
                <Image className="h-[400px] w-[600px]" src={`${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL}${BaseInfo.profilePic}`} alt={BaseInfo.name} height={500} width={500}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
