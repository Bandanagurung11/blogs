"use client";
import BlogCard from "@/components/BlogCard";

import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(articles, "this is aticles");

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://blogs-platform-backend.onrender.com/articles"
      );
      console.log(response.data, "this is response");
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
        <Card className="bg-gray-400 w-64 h-32">

        </Card>
      ) : (
        <BlogCard article={articles} fetchArticles={fetchArticles} />
      )}
    </div>
  );
}
