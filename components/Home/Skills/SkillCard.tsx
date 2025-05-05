'use client'
import React from 'react'
import Image from 'next/image';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig()

type props = {
    skill : {
        id: number,
        title: string,
        image: string,
    }
}
const SkillCard = ({skill}:props) => {
    const {title,image} = skill;
  return (
    <div className='p-6 cursor-pointer text-center rounded-lg'>
      <Image src={`${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL}${image}`} alt={title} height={80} width={80} className='object-cover mx-auto'/>
      <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
      {/* <div className='bg-black mt-4 rounded-lg p-2 text-[#ffffff40]'>{percent}</div> */}
    </div>
  )
}

export default SkillCard
