"use client";
import { IArticle } from "@/app/page";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const { id } = useParams();
  const [article, setArticle] = useState<IArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Helper function to convert HTML to plain text with paragraph spacing
  const htmlToPlainText = (html: string) => {
    if (!html) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const paragraphs = Array.from(tempDiv.getElementsByTagName("p"))
      .map((p) => p.textContent?.trim() ?? "")
      .filter((text) => text.length > 0);
    return paragraphs.join("\n\n");
  };
  useEffect(() => {
    const fetchSingleArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://blogs-platform-backend.onrender.com/articles/${id}`
        );
        console.log(response.data.articles);
        setArticle(response.data.articles);
        console.log(response.data);
      } catch (error) {
        console.log("something went wrong", error);
        toast.error("something went wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchSingleArticles();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://blogs-platform-backend.onrender.com/articles/${id}`
      );
      console.log(response);
      toast.success("deleted succesfully");
      router.push("/"); // Redirect to home page after deletion
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("can not delete a post");
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>; // Loading state
  }

  if (!article) {
    return <div className="text-center py-8">Article not found</div>; // Handle null article
  }

  const plainContent = htmlToPlainText(article.content); // Convert HTML to plain text
  return (
    <div>
      <div className="p-4 space-y-8 lg:space-y-14">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex gap-1 items-center text-sm">
            <Link href="/">
              <p className="text-sm">Home</p>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <p className="text-sm">{article?.categories.trim()} </p>
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
          className="lg:h-[600px]  w-full rounded-xl"
          src={
            article?.thumnail ||
            "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="thumbnail"
          height={100}
          width={100}
          unoptimized={true}
        />

        <div>
          <div>
            {plainContent?.split("\n\n").map(
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

          <div className="mt-12 flex justify-between">
            <Link href={`/update/${id}`}>
              <Button className="bg-[#8C88F6] hover:bg-[#8C88F6]  hover:shadow-2xl font-bold">
                Make Changes to the Article
              </Button>
            </Link>
            <Button
              className="p-2 cursor-pointer bg-red-500 rounded-md text-white"
              onClick={() => handleDelete()}
            >
              Delete this article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
