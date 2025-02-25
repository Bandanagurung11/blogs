"use client";
import BlogCard from "@/components/BlogCard";

import HeroSection from "@/components/HeroSection";

import axios from "axios";
import React, { useEffect, useState } from "react";

export interface IArticle {
  _id: string;
  title: string;
  content: string;
  shortDescription: string;
  categories: string;
  author: string;
  thumnail: string;
  createdAt: string; // Date stored as string in JSON
  updatedAt: string;
}

export default function Page() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(articles, "this is aticles");

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://blogs-platform-backend.onrender.com/articles"
      );
      // console.log(response.data, "this is response");
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="p-4">
      <HeroSection />

      {loading ? (
        <p>Loading data....</p>
      ) : (
        <BlogCard article={articles} fetchArticles={fetchArticles} />
      )}
    </div>
  );
}
