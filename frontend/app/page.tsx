"use client"
import BlogCard from '@/components/BlogCard'

import HeroSection from '@/components/HeroSection'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [articles, setArticles] = useState([]);
  console.log(articles, "this is aticles")

  const fetchArticles=async()=>{
    try {
      const response = await axios.get("https://blogs-platform-backend.onrender.com/articles");
      console.log(response.data, "this is response")
      setArticles(response.data.articles);
    } catch (error) {
      console.log("something went wrong", error)
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);
  
  return (
    <div className='p-4'>
      
      <HeroSection/>
      <BlogCard article={articles}/>
      
    </div>
  )
}
