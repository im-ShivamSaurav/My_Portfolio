'use client'
import React, { useState, useEffect } from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import SkillCard from './SkillCard'

type Skill = {
  skillId: number
  title: string
  image: string
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([])
  const [error, setError] = useState<string>('')

  // Fetch skills data from API
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/Skill')

        // Check if the response status is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data: Skill[] = await response.json()

        setSkills(data)
      } catch (error) {
        // Catch and display errors
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      }
    }

    fetchSkills()
  }, [])

  return (
    <div className='pb-16 pt-16 bg-[#050709]'>
      <SectionHeading>My Skills</SectionHeading>
      
      {/* Error handling */}
      {error && <p className="text-red-500">{error}</p>}

      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4 xl:grid-cols-5 gap-4 items-center'>
        {skills.map((skill) => (
          <div key={skill.skillId} className='p-6 hover:bg-blue-900 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
