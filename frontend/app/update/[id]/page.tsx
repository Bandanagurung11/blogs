"use client"
import { IArticle } from '@/app/page';
import { Card } from '@/components/ui/card';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {
    const {id}= useParams();
    // console.log(id)
    const [article, setArticle] = useState<IArticle | null>(null);
  useEffect(() => {
    const fetchSingleArticles = async () => {
      try {
        const response = await axios.get(
          `https://blogs-platform-backend.onrender.com/articles/${id}`
        );
        console.log(response.data.articles);
        setArticle(response.data.articles);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    fetchSingleArticles();
  }, [id]);

  const handleUpdate=()=>{

  }
  return (
    <div className='py-12 text-center'>
        <p className='text-4xl'>Update the article here</p>
        <Card>
            <form
                    onSubmit={handleUpdate}
                    action=""
                    className="flex flex-col gap-12 p-24 border"
                  >
                    <input
                      type="text"
                      value={article?.title}
                      placeholder="title"
                      className="border p-4"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                      }
                    />
                    <input
                      type="text"
                      value={article?.author}
                      placeholder="author name"
                      className="border p-4"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setAuthor(e.target.value)
                      }
                    />
            
            <input
                      type="text"
                      value={article?.categories}
                      placeholder="categoriesaccds"
                      className="border p-4"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCategories(e.target.value)
                      }
                    />
                    <textarea
                      placeholder="contentacd"
                      value={article?.content}
                      className="border p-4"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setContent(e.target.value)
                      }
                    />
            
                    <textarea
                      placeholder="shortdescrition"
                      value={article?.shortDescription}
                      className="border p-4"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setShortDescription(e.target.value)
                      }
                    />
            
                    <input
                      type="file"
                      placeholder="thumnail"
                      className="border p-4"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setThumnai(e.target.files?.[0] || null)
                      }
                    />
                    <div className="flex justify-center">
                      <button type="submit" className="border p-4 rounded-md">
                        {/* {loading ? "creating" : "create"} */}
                      </button>
                    </div>
                  </form>
            
        </Card>
    </div>
  )
}
