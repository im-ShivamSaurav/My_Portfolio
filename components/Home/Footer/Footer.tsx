import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <div>
        <Image src="/images/logo1.png" alt="logo" width={180} height={180} className='mx-auto'/>
      </div>
      <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold'>
        <div>Home.</div>
        <div>About.</div>
        <div>Blog.</div>
        <div>Projects.</div>
        <div>Contacts.</div>
        <div></div>
      </div>
      <p className='text-[#ffffff60] mt-6 text-center '>© 2025 All Rights Reserved by Shivam Saurav.</p>
    </div>
  )
}

export default Footer
