import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { IArticle } from "@/app/page";
import RightFixed from "./RightFixed";

// export default function BlogCard({ article, fetchArticles }:{article:IArticle[]; fetchArticles:()=>Promise<void>}) {

export default function BlogCard({ article}: {article : IArticle[]}) {
  return (
    <div className="lg:flex  gap-8">
      <div className="py-12 space-y-12 lg:w-8/12">
        {article?.map((card: IArticle, index: number) => (
          <div key={index}>
            <div className=" space-y-4 lg:flex items-center gap-6">
              <Link href={`/blog/view/${card._id}`}>
                <Image
                  className=" h-[200] w-[350] lg:w-[800px] rounded-xl"
                  //
                  src={
                    card.thumnail ||
                    "https://plus.unsplash.com/premium_photo-1670371134786-a35201136a5b?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  height={100}
                  width={100}
                  unoptimized={true}
                  alt="this is image"
                />
              </Link>

              <div className="space-y-4">
                <div className="space-y-1  mb-4">
                  <p className="text-sm">
                    <Link href="/author">
                      <span className="text-blue-500 font-bold">
                        {card.author}
                      </span>{" "}
                    </Link>
                    <span className="opacity-60">
                      on {new Date(card.createdAt).toDateString()}
                    </span>{" "}
                  </p>
                  <Link href={`/blog/view/${card._id}`}>
                    <p className="text-xl font-bold mt-2 opacity-80">
                      {card.title}{" "}
                    </p>
                  </Link>
                  <p className="opacity-60">{card.shortDescription}... </p>
                </div>
                <Link href={`/blog/view/${card._id}`}>
                  <Button className="text-bold bg-[#7E7AEC] hover:bg-[#7E7AEC] text-white hover:shadow-2xl">
                    Discover More
                  </Button>
                </Link>
              </div>
            </div>
            <hr className="my-6 border-t border-gray-300 w-full" />
          </div>
        ))}
      </div>

      <div className="relative lg:w-3/12 h-full">
        <div className="sticky top-20">
          <RightFixed />
        </div>
      </div>
    </div>
  );
}
