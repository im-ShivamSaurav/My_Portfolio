import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Reach Me Out!</h1>
      <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas exercitationem non beatae, facere numquam, autem ea libero ducimus alias aliquam harum! Quos eveniet ea incidunt, autem possimus quas iusto!</p>
      {/* Input Field */}
      <form className='mt-8 block w-full overflow-hidden'>
        <div className='flex  flex-col md:flex-row items-center justify-between gap-4'>
            <input type='text' placeholder='Your Name' className='bg-black flex-1 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
            {/* <input type='text' placeholder='Last Name' className='bg-black flex-1 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' /> */}
        </div>

        <div className='flex mt-5  flex-col md:flex-row items-center justify-between gap-4'>
            <input type='email' placeholder='Email Address' className='bg-black flex-1 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
            <input type='text' placeholder='Phone Number' className='bg-black flex-1 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
        </div>

        <div>
            <select defaultValue="" required className='invalid:text-gray-600 w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 appearance-none py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'>
                <option value="" disabled hidden className='placeholder:text-gray-600'>Choose the reason of Approach</option>
                <option value={`Query`}>Query/Issue</option>
                <option value={`Message`}>Message</option>
            </select>
        </div>
        <textarea className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none' rows={7} placeholder='Write your thoughts...'></textarea>
        <div className='mt-4'> 
            <button className='px-8 py-3.5 bg-[#7947d4] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
