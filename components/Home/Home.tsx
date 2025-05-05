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
      <Hero/>
      <About />
      <Blogs/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
