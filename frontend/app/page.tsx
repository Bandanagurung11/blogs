import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className='p-4'>
      <Navbar/>
      <HeroSection/>
      <BlogCard/>
      <Footer/>
    </div>
  )
}
