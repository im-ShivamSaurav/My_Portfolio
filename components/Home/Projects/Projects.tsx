'use client'
import SectionHeading from '@/components/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const Projects = () => {
  return (
    <div className='pb-16 pt-16 bg-[#050709] '>
      <SectionHeading>My Projects</SectionHeading>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectData.map((project)=>{
            return <div key={project.projectId} className='bg-[#39395e33] p-3 rounded-2xl hover:scale-105 transition-all duration-300'>
                <Link href={project.url} target='_blank'>
                    <Image src = {`${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL}${project.image}`} alt='image' height={100} width={200} className='p-2 rounded-2xl w-full' />
                    <h1 className='text-white p-2 text-xl'>{project.title}</h1>
                    <p className='text-gray-300 p-2'>{project.description}</p>
                </Link>
            </div>
        })}
      </div>
    </div>
  )
}

export default Projects
