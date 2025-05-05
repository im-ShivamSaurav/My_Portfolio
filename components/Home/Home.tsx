'use client'
import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Blogs from './Blogs/Blogs'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div>
      <div><Hero/></div>
      <div id="About">
        <About/>
        </div>
      <div id='Blogs'>
        <Blogs/>
        </div>
      <div id='Projects'>
        <Projects/>
        </div>
      <div id='Skills'>
        <Skills/>
        </div>
      <div id='Contact'>
        <Contact/>
        </div>
    </div>
  )
}

export default Home
