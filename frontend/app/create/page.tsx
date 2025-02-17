"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>(" ");
  const [author, setAuthor] = useState<string>(" ");
  const [thumnail, setThumnai] = useState<File | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  console.log(title, content, thumnail);

  const handleCreateArticle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!thumnail) {
      return;
    }
    setloading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
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
      setThumnai(null);
      setTitle(" ");
      toast.success("post created successfluuy");
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("cann't create article");
      setloading(false);
    }
  };
  return (
    <div className="py-24 w-8/12 mx-auto">
      <form
        onSubmit={handleCreateArticle}
        action=""
        className="flex flex-col gap-12 p-24 border"
      >
        <input
          type="text"
          value={title}
          placeholder="title"
          className="border p-4"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={author}
          placeholder="author"
          className="border p-4"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="content"
          value={content}
          className="border p-4"
          onChange={(e :React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        />
        <input
          type="file"
          placeholder="thumnail"
          className="border p-4"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setThumnai(e.target.files?.[0]|| null)}
        />
        <div className="flex justify-center">
          <button type="submit" className="border p-4 rounded-md">
            {loading ? "creating" : "create"}
          </button>
        </div>
      </form>
    </div>
  );
}
