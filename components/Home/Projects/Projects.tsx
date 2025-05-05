'use client'
import React, { useState, useEffect } from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import Link from 'next/link'
import Image from 'next/image'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

type Project = {
  projectId: number
  title: string
  description: string
  url: string
  image: string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string>('')

  // Fetch project data from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/Project')

        // Check if the response status is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data: Project[] = await response.json()
        setProjects(data)
      } catch (error) {
        // Catch and display errors
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className='pb-16 pt-16 bg-[#050709]'>
      <SectionHeading>My Projects</SectionHeading>
      
      {/* Error handling */}
      {error && <p className="text-red-500">{error}</p>}

      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projects.map((project) => (
          <div key={project.projectId} className='bg-[#39395e33] p-3 rounded-2xl hover:scale-105 transition-all duration-300'>
            <Link href={project.url} target='_blank'>
              <Image 
                src={`${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL}${project.image}`} 
                alt={project.title} 
                height={100} 
                width={200} 
                className='p-2 rounded-2xl w-full' 
              />
              <h1 className='text-white p-2 text-xl'>{project.title}</h1>
              <p className='text-gray-300 p-2'>{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
