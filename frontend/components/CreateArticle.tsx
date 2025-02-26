
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function CreateArticle() {
    const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>(" ");
  const [shortDescription, setShortDescription] = useState<string>(" ");
  const [categories, setCategories] = useState<string>(" ");
  const [author, setAuthor] = useState<string>(" ");
  const [thumnail, setThumnail] = useState<File | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  console.log(title, content, thumnail);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      setThumnail(null); // Fixed typo
    }
  };

  const handleCreateArticle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!thumnail) {
      return;
    }
    setloading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("shortDescription", shortDescription);
      formData.append("categories", categories);
      formData.append("content", content);
      formData.append("thumnail", thumnail);
      formData.append("author", author);

      const response = await axios.post(
        "https://blogs-platform-backend.onrender.com/articles",
        formData
      );
      console.log(response);
      setloading(false);
      setAuthor("");
      setContent(" ");
      // setThumnail(null);
      resetFileInput();
      setTitle(" ");
      setShortDescription("");
      setCategories("");
      toast.success("post created successfluuy");
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("can't create article");
      setloading(false);
    }
  };
  return (
    <div className="py-16 lg:w-8/12 mx-auto space-y-12">
    <p className=" text-2xl lg:text-4xl text-center">Create your Article</p>
    <form
      onSubmit={handleCreateArticle}
      action=""
      className="flex flex-col gap-12 p-12 border"
    >
      <div>
        <p className="font-bold">Author</p>
        <Input
          type="text"
          placeholder="your name"
          value={author}
          className="border p-6 rounded-lg lg:w-96"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
        />
      </div>

      <div>
        <p className="font-bold">Title</p>
        <Input
          type="text"
          value={title}
          placeholder="title"
          className="border p-6 lg:w-96"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </div>

      <div>
        <p className="font-bold">Category</p>
        <Input
          type="text"
          value={categories}
          placeholder="write article category like sports, business, technology..."
          className="border p-6 lg:w-96"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCategories(e.target.value)
          }
        />
      </div>
      <div>
        <p className="font-bold">Short Description</p>
        <textarea
          placeholder="shortdescrition"
          value={shortDescription}
          className="border p-6 w-full rounded-xl"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setShortDescription(e.target.value)
          }
        />
      </div>

     <div>
      <p className="font-bold">Content</p>
     <ReactQuill
        placeholder="write your content here..."
        value={content}
        onChange={setContent}
        // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        //   setContent(e.target.value)
        // }
      />
     </div>

      <div>
        <p className="font-bold">Thumnail</p>
      <input
        type="file"
        placeholder="thumnail"
        ref={fileInputRef}
        className="border p-2 rounded-md"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setThumnail(e.target.files?.[0] || null)
        }
      />
      </div>
      <div className="flex justify-center">
        <Button type="submit" className="border p-4 rounded-md font-bold">
          {loading ? "creating" : "create"}
        </Button>
      </div>
    </form>
  </div>
  )
}
