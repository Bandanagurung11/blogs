"use client"
import BlogReadSection from '@/components/BlogReadSection';
import React from 'react'

export default async function page({params}) {
    const {id} = await params;
    console.log(id);
    // console.log(params, "this is params") this method says promise pending
    
  return (
    <div>
        <BlogReadSection id={id}/>
    </div>
  )
}
