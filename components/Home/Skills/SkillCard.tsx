'use client'
import React from 'react'
import Image from 'next/image'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

type Props = {
  skill: {
    skillId: number
    title: string
    image: string
  }
}

const SkillCard = ({ skill }: Props) => {
  const { title, image } = skill

  return (
    <div className='p-6 cursor-pointer text-center rounded-lg'>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL}${image}`}
        alt={title}
        height={80}
        width={80}
        className='object-cover mx-auto'
      />
      <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
    </div>
  )
}

export default SkillCard
