import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function BlogCard() {
    const cards=[
        {
            author:"Ethan Caldwell on October 16, 2024",
            image:"https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title : "How Tech Shapes the Future of work 2024",
            content: "In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to… ",
           
        },
        {
            author:"Ethan Caldwell on October 16, 2024",
            image:"https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title : "How Tech Shapes the Future of work 2024",
            content: "In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to… ",
           
        },
        {
            author:"Ethan Caldwell on October 16, 2024",
            image:"https://images.unsplash.com/photo-1737958108322-43b24ea9bc18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title : "How Tech Shapes the Future of work 2024",
            content: "In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to… ",
           
        },
    ]
  return (
    <div className='py-12 w-8/12 mx-auto space-y-12'>
        {
            cards.map((card, index)=>(
            <div key={index} className='flex items-center gap-6'>
            <Image className='h-[200px] w-[800px] rounded-md' src={card.image} height={100} width={100} alt="this is image"/>
            <div className='space-y-4'>
                <p>{card.author} </p>
                <p className='text-lg font-bold opacity-70'>{card.title} </p>
                <p className='opacity-60'>{card.content} </p>
                <Button>Discover More</Button>
               
            </div>
            <hr/>
            </div>
            ))
        }

    </div>
  )
}
