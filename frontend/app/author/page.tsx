"use client"
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IArticle } from "../page";
import axios from "axios";
import Link from "next/link";



export default function Page() {
    const [article, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // console.log(articles, "this is aticles");

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
    <div>
      <div className="px-6 pb-16 space-y-4">
        <div className="space-y-8">
        <div className="flex gap-2 items-center">
            <Link href="/">
          <p className="text-sm opacity-60">Home</p>
          </Link>
          <ChevronRight className="h-4 w-4" />
          <p className="text-sm opacity-60"> Archives for Ethan Caldwell</p>
        </div>
        <div className="flex gap-8 items-center">
          <div className="h-32 w-32 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              className="h-32 w-32 object-cover"
              src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp"
              alt="profile"
              width={100}
              height={100}
            ></Image>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-2xl">Ethan Caldwell</p>
            <p className="opacity-60 text-xs">REFLECTIVE BLOGGER</p>
            <div className="flex items-center gap-4 py-2">
              <Facebook className="h-6 w-6" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                />
              </svg>
              <Instagram className="h-6 w-6" />
              <Linkedin className="h-6 w-6" />
            </div>
          </div>
        </div>
        <p className="opacity-60 lg:w-5/12">
          Ethan Caldwell shares thoughtful insights and reflections on life,
          culture, and personal growth. His work explores the intersections of
          creativity and experience, offering readers unique perspectives.
        </p>
        </div>

        <div className="flex gap-2 items-center">
          <MapPin style={{ fill: "blue" }} />
          <p className="opacity-80">Paris, France</p>
        </div>
      </div>
      <hr />

      {!loading ? (
        <div className="grid lg:grid-cols-3 gap-8 py-16">
          {article?.map((card: IArticle, index: number) => (
            <div key={index}>
              <div className="space-y-4">
                <Link href={`/blog/view/${card._id}`}>
                  <Image
                    className="h-[200px] w-[800px] rounded-xl"
                    src={card.thumnail}
                    height={100}
                    width={100}
                    alt="this is image"
                  />
                </Link>
                <div className="space-y-6">
                  <div className="space-y-2 mb-8">
                    <p>{card.author} </p>
                    <Link href={`/blog/view/${card._id}`}>
                    <p className="text-xl font-bold opacity-80">
                      {card.title}{" "}
                    </p>
                    </Link>
                    <p className="opacity-60">{card.content} </p>
                  </div>
                </div>
              </div>

              {/* <p
                className="p-2 cursor-pointer bg-red-500 rounded-md text-white"
                onClick={() => handleDelete(card._id)}
              >
                delete
              </p> */}
            </div>
          ))}
        </div>
      ) : (
        <p>loading data....</p>
      )}
    </div>
  );
}
