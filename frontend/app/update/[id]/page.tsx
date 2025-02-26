"use client";
import { IArticle } from "@/app/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill-new"; // Updated import
import "react-quill-new/dist/quill.snow.css"; // Updated CSS import

export default function Page() {
  const { id } = useParams();
 
  const [article, setArticle] = useState<IArticle | null>(null);
  console.log(article);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>(" ");
  const [shortDescription, setShortDescription] = useState<string>(" ");
  const [categories, setCategories] = useState<string>(" ");
  const [author, setAuthor] = useState<string>(" ");
  const [thumnail, setThumnail] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      setThumnail(null);
    }
  };

  useEffect(() => {
    const fetchSingleArticles = async () => {
      try {
        const response = await axios.get(
          `https://blogs-platform-backend.onrender.com/articles/${id}`
        );
        const fetchedArticle = response.data.articles;
        console.log(response.data.articles)
        setArticle(fetchedArticle);
        setTitle(fetchedArticle.title);
        setContent(fetchedArticle.content);
        setShortDescription(fetchedArticle.shortDescription);
        setCategories(fetchedArticle.categories);
        setAuthor(fetchedArticle.author);
      } catch (error) {
        console.log("something went wrong", error);
        toast.error("couldn't find the article");
      }
    };
    fetchSingleArticles();
  }, [id]);

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!thumnail) {
      alert("Please select a thumbnail");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("shortDescription", shortDescription);
      formData.append("categories", categories);
      formData.append("content", content);
      formData.append("thumnail", thumnail);
      // if (thumnail) formData.append("thumnail", thumnail);
      // Only append if a new file is selected
      formData.append("author", author);

      const response = await axios.patch(
        `https://blogs-platform-backend.onrender.com/articles/${id}`,
        formData
      );
      console.log(response);
      setLoading(false);
      setAuthor("");
      setContent(" ");
      resetFileInput();
      setTitle("");
      setShortDescription("");
      setCategories("");
      toast.success("Article updated successfully");
      // router.push(`/blog/view/${id}`);
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Something went wrong while updating the article");
      setLoading(false);
    }
  };

  return (
    <div className="py-12 space-y-8">
      <p className="text-2xl text-center lg:text-4xl">
        Update The Article Here
      </p>
      <Card className="lg:w-10/12 mx-auto rounded-xl">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-8 lg:p-24 p-6"
        >
          <div className="space-y-1">
            <p className="font-bold">Author</p>
            <Input
              type="text"
              value={author}
              placeholder="Your full name"
              className="border p-6 lg:w-96"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAuthor(e.target.value)
              }
            />
          </div>

          <div className="space-y-1">
            <p className="font-bold">Title</p>
            <Input
              type="text"
              value={title}
              placeholder="Your title for the article"
              className="border p-6 lg:w-96"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </div>

          <div className="space-y-1">
            <p className="font-bold">Category</p>
            <Input
              type="text"
              value={categories}
              placeholder="categories"
              className="border p-6 w-96 "
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCategories(e.target.value)
              }
            />
          </div>

          <div className="space-y-1">
            <p className="font-bold">Short Information</p>
            <textarea
              placeholder="Provide short Information of your Article"
              value={shortDescription}
              className="border p-4 w-full rounded-lg"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setShortDescription(e.target.value)
              }
            />
          </div>

          <div>
            <p className="font-bold">Content</p>
            <ReactQuill
              value={content}
              placeholder="write your article here.."
              className="border w-full"
              onChange={setContent}
              // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              //   setContent(e.target.value)
              // }
            />
          </div>

          <div className="space-y-1">
            <p className="font-bold">Thumbnail</p>
            <input
              type="file"
              className="border p-4 rounded-lg"
              ref={fileInputRef}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setThumnail(e.target.files?.[0] || null) // Fixed typo
              }
            />
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="border p-5 font-bold rounded-md">
              {loading ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
