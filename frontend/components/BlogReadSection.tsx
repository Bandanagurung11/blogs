"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Article {
    _id: string;
    author: string;
    title: string;
    content: string;
    __v: number;
  }

export default function BlogReadSection({id}) {
    console.log(id, "child section id");
    const [article, setArticle] = useState<Article | null>(null);
  const fetchSingleArticles=async(id)=>{
    try {
        const response = await axios.get(`https://blogs-platform-backend.onrender.com/articles/${id}`);
        console.log(response.data.articles);
        setArticle(response.data.articles);
    } catch (error) {
        console.log("something went wrong", error)
        
    }
  }
  useEffect(() => {
    if (id) {
        fetchSingleArticles(id); // ✅ Only fetch if `id` is defined
      }
  }, [id])
  
  return (
    <div>
        <div>
        <p>{article?.author}</p>
        <p>{article?.content}</p>
        <p>{article?.title}</p>
        </div>

    </div>
  )
}
