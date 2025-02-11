import BlogCard from '@/components/BlogCard'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <BlogCard/>
    </div>
  )
}
