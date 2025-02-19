import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export interface IBlogCardProps {
  article: IArticle[];
  fetchArticles: () => Promise<void>;
}

// import required modules

import axios from "axios";
import toast from "react-hot-toast";
import { IArticle } from "@/app/page";
import RightFixed from "./RightFixed";

// export default function BlogCard({ article, fetchArticles }:{article:IArticle[]; fetchArticles:()=>Promise<void>}) {

export default function BlogCard({ article, fetchArticles }: IBlogCardProps) {
  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://blogs-platform-backend.onrender.com/articles/${id}`
      );
      console.log(response);
      toast.success("deleted succesfully");
      fetchArticles();
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("can not delete a post");
    }
  };
  // console.log(article, "this is child section article");

  return (
    <div  className="lg:flex gap-8">
      {/* className="grid lg:grid-cols-2" */}
      {/* blog card */}
      <div className="py-12 space-y-12 lg:w-8/12">
        {article?.map((card: IArticle, index: number) => (
          <div key={index}>
            <Link href={`/blog/view/${card._id}`}>
              <div
                className=" space-y-4 lg:flex items-center gap-6"
                // lg:flex items-center gap-6
              >
                <Image
                  className=" h-[200] w-[350] rounded-xl"
                  // lg:h-[240px] lg:w-[800px]
                  src={
                    card.thumnail ||
                    "https://plus.unsplash.com/premium_photo-1670371134786-a35201136a5b?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  height={100}
                  width={100}
                  alt="this is image"
                />
                <div className="space-y-4">
                  <div className="space-y-1 ">
                    <p className="text-sm">
                      <span className="text-blue-500 font-bold">
                        {card.author}
                      </span>{" "}
                      <span className="opacity-60">
                        on {new Date(card.createdAt).toDateString()}
                      </span>{" "}
                    </p>
                    <p className="text-xl font-bold opacity-80">
                      {card.title}{" "}
                    </p>
                    <p className="opacity-60">{card.shortDescription}.... </p>
                  </div>

                  <Button className="text-bold bg-[#7E7AEC] hover:bg-[#7E7AEC] text-white hover:shadow-2xl">
                    Discover More
                  </Button>
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300 w-full" />
            </Link>
            {/* <p
              className="p-2 cursor-pointer bg-red-500 rounded-md text-white"
              onClick={() => handleDelete(card._id)}
            >
              delete
            </p> */}
          </div>
        ))}
      </div>

      <div className="relative lg:w-3/12 h-full">
        <div className="sticky top-20">
          <RightFixed article={article} fetchArticles={fetchArticles} />
        </div>
      </div>
    </div>
  );
}
