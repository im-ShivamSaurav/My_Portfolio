import SectionHeading from '@/components/Helper/SectionHeading'
import { blogs } from '@/Data/data'
import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>My Blogs</SectionHeading>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center'>
        {blogs.map((blog)=>{
            return <div key={blog.blogId}>
                    <BlogCard blog={blog}/>
                </div>
        })}
      </div>
    </div>
  )
}

export default Blogs
