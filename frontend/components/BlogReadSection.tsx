"use client";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RightFixed from "./RightFixed";

interface Article {
  _id: number;
  thumnail: string;
  author: string;
  title: string;
  content: string;
  __v: number;
}

export default function BlogReadSection({ id }: { id: number }) {
  console.log(id, "child section id");
  const [article, setArticle] = useState<Article | null>(null);
  console.log(article);

  useEffect(() => {
    const fetchSingleArticles = async () => {
      try {
        const response = await axios.get(
          `https://blogs-platform-backend.onrender.com/articles/${id}`
        );
        console.log(response.data.articles);
        setArticle(response.data.articles);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    fetchSingleArticles();
  }, [id]);

  return (
    <div className="py-4  space-y-16">
      <div className="flex flex-col justify-center items-center space-y-2">

        <div className="flex gap-1 items-center text-sm opacity-60">
          <Link href="/">
            <p>Home</p>
          </Link>
          <ChevronRight className="h-4 w-4" />
          <p>category</p>
          <ChevronRight className="h-4 w-4" />
          <p>title</p>
        </div>

        <p>
          <span className="text-blue-600">Ethan Caldwell</span> on September 10,
          2024
        </p>

        <p className="w-10/12 mx-auto text-center text-[#29294B] font-bold text-2xl lg:text-5xl leading-normal">
          Travel Trends in 2024: Virtual Tours and Immersive Experiences
        </p>

        <p className="opacity-60 font-bold text-[#29294B] px-4 lg:px-0 lg:w-4/12 mx-auto">
          Explore the rise of virtual tours and immersive experiences shaping
          the future of travel in 2024.
        </p>
      </div>

      <Image
      className="h-full w-full rounded-xl"
        src={
          article?.thumnail ||
          "https://images.unsplash.com/photo-1739382122868-841cb1e669df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        }
        alt="thumnai"
        height={100}
        width={100}
      ></Image>

      <div className="grid grid-cols-2">
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nemo vero temporibus tenetur placeat voluptatem, error ipsa qui repellat libero!</p>
        </div>
      <RightFixed/>
      </div>
    </div>
  );
}
