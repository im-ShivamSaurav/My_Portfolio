'use client'
import React, { useState, useEffect } from 'react'
import SectionHeading from "@/components/Helper/SectionHeading"
import BlogCard from './BlogCard'

type Blog = {
  blogId: number
  title: string
  summary: string
  date: string
  image: string
}

type BlogResponse = {
  blogId: number
  title: string
  summary: string
  date: string
  image: string
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [error, setError] = useState<string>('')

  // Fetch blogs data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/Blog')

        // Check if the response status is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data: BlogResponse[] = await response.json()

        // Ensure each blog has the required fields
        const updatedBlogs = data.map((blog) => ({
          blogId: blog.blogId,
          title: blog.title,
          summary: blog.summary || 'No summary available',
          date: blog.date || 'Unknown date',
          image: blog.image || 'default-image.jpg',
        }))

        setBlogs(updatedBlogs)
      } catch (error) {
        // Catch and display errors
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>My Blogs</SectionHeading>
      
      {/* Error handling */}
      {error && <p className="text-red-500">{error}</p>}

      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center'>
        {blogs.map((blog) => (
          <div key={blog.blogId}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
