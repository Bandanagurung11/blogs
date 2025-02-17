"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Article {
    _id: number;
    author: string;
    title: string;
    content: string;
    __v: number;
  }

export default function BlogReadSection({id}:{id:number}) {
    console.log(id, "child section id");
    const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchSingleArticles=async()=>{
      try {
          const response = await axios.get(`https://blogs-platform-backend.onrender.com/articles/${id}`);
          console.log(response.data.articles);
          setArticle(response.data.articles);
      } catch (error) {
          console.log("something went wrong", error)
          
      }
    }
    fetchSingleArticles();
   
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
