"use client";
import { IArticle } from "@/app/page";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const { id } = useParams();
  const [article, setArticle] = useState<IArticle | null>(null);

  const fetchSingleArticles = async () => {
    try {
      const response = await axios.get(
        `https://blogs-platform-backend.onrender.com/articles/${id}`
      );
      console.log(response.data.articles);
      setArticle(response.data.articles);
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("something went wrong while fetching data");
    }
  };

  useEffect(() => {
    fetchSingleArticles();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://blogs-platform-backend.onrender.com/articles/${id}`
      );
      console.log(response);
      toast.success("deleted succesfully");
      fetchSingleArticles();
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("can not delete a post");
    }
  };

  return (
    <div>
      <div className="py-4  space-y-16">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex gap-1 items-center text-sm">
            <Link href="/">
              <p className="text-sm">Home</p>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <p className="text-sm">{article?.categories} </p>
            <ChevronRight className="h-4 w-4" />
            <p className="opacity-60 text-sm">{article?.title} </p>
          </div>

          <p className="text-sm">
            <span className="text-blue-600 font-bold">{article?.author} </span>
            <span className="opacity-60">
              {" "}
              on {new Date(article?.updatedAt ?? "").toDateString()}
            </span>
          </p>

          <p className="w-10/12 mx-auto text-center text-[#29294B] font-bold text-2xl lg:text-5xl leading-normal">
            {article?.title}
          </p>

          <p className="opacity-60 text-center text-[#29294B] px-4 lg:px-0 lg:w-4/12 mx-auto">
            {article?.shortDescription}
          </p>
        </div>
        <Image
          className="h-full w-full rounded-xl"
          src={article?.thumnail || ""}
          alt="thumbnail"
          height={100}
          width={100}
          unoptimized={true}
        />

        <div className=" p-4">
          <div>
            {article?.content.split("\n\n").map(
              (
                paragraph,
                index //split turns string into array with spliting paragraph
              ) => (
                <p className="mb-4" key={index}>
                  {paragraph.trim()}
                </p>
              )
            )}
          </div>

          <div className="flex justify-between items-center">
            <Link href={`/update/${id}`}>
              <Button className="bg-[#8C88F6] hover:bg-[#8C88F6] mt-12 hover:shadow-2xl font-bold">
                Make Changes to the Article
              </Button>
            </Link>
            <p
              className="p-2 cursor-pointer bg-red-500 rounded-md text-white"
              onClick={() => handleDelete()}
            >
              Delete this article
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
