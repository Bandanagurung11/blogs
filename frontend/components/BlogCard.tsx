import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function BlogCard({article}) {
  console.log(article,"this is child section article");
  // const cards = [
  //   {
  //     author: "Ethan Caldwell on October 16, 2024",
  //     image:
  //       "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "How Tech Shapes the Future of work 2024",
  //     content:
  //       "In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to… ",
  //   },
  //   {
  //     author: "Ethan Caldwell on October 16, 2024",
  //     image:
  //       "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "How Tech Shapes the Future of work 2024",
  //     content:
  //       "In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to… ",
  //   },
  //   {
  //     author: "Ethan Caldwell on October 16, 2024",
  //     image:
  //       "https://images.unsplash.com/photo-1737958108322-43b24ea9bc18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "How Tech Shapes the Future of work 2024",
  //     content:
  //       "In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to… ",
  //   },
  // ];
  return (
    <div className="py-12 w-8/12 mx-auto space-y-12">
      {article.map((card, index) => (
        <Link href={`/blog/view/${card._id}`} key={index} className="flex flex-col items-center gap-6">
          <div  className="flex items-center gap-6">
            <Image
              className="h-[200px] w-[800px] rounded-md"
              src="https://plus.unsplash.com/premium_photo-1670371134786-a35201136a5b?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height={100}
              width={100}
              alt="this is image"
            />
            <div className="space-y-6">
              <div className="space-y-2 mb-8">
                <p>{card.author} </p>
                <p className="text-xl font-bold opacity-80">{card.title} </p>
                <p className="opacity-60">{card.content} </p>
              </div>
              
                <Button className="text-bold bg-[#7E7AEC] hover:bg-[#7E7AEC] text-white hover:shadow-2xl">
                  Discover More
                </Button>
            </div>

            {/* {index !== cards.length - 1 && <hr className="border-t border-gray-300" />}
             */}
          </div>
          <hr className="my-6 border-t border-gray-300 w-full" />
        </Link>
      ))}
    </div>
  );
}
