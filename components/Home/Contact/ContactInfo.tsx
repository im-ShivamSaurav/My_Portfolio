'use client'
import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'

type Contact = {
  phone: string
  email: string
  address: string
}

const ContactInfo = () => {
  const [contactData, setContactData] = useState<Contact | null>(null)
  const [error, setError] = useState<string>('')

  // Fetch contact data from API
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('/api/Contact')

        // Check if the response status is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data: Contact = await response.json()
        setContactData(data)
      } catch (error) {
        // Catch and display errors
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      }
    }

    fetchContactData()
  }, [])

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  if (!contactData) {
    return <p className="text-white">Loading...</p>
  }

  return (
    <div>
      <div className='flex items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white transform-all scale-x-[-1]' />
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Phone</h1>
          <h1 className='text-white text-base sm:text-lg text-opacity-70'>{contactData.phone}</h1>
        </div>
      </div>

      <div className='flex items-center space-x-8 mt-8 mb-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900  flex items-center justify-center flex-col'>
          <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white transform-all scale-x-[-1]' />
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Email Address</h1>
          <h1 className='text-white text-base sm:text-lg text-opacity-70'>{contactData.email}</h1>
        </div>
      </div>

      <div className='flex items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900  flex items-center justify-center flex-col'>
          <FaMap className='w-4 h-4 md:w-7 md:h-7 text-white transform-all scale-x-[-1]' />
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Address</h1>
          <h1 className='text-white text-base sm:text-lg text-opacity-70'>{contactData.address}</h1>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
