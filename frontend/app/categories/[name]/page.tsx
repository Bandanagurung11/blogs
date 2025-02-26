"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { IArticle } from "@/app/page";
import axios from "axios";

export default function Page() {
  const { name } = useParams(); // Get the dynamic parameter from the URL

  const imageMap: { [key: string]: string } = {
    Technology:
      "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/Technology@2x.webp",
    Travel:
      "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/Travel@2x.webp",
    Sports:
      "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/Sport@2x.webp",
    Business:
      "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/Business@2x.webp",
    Management:
      "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/Management@2x.webp",
    Trends:
      "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/Trends@2x.webp",
    Startups:
      "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/demo-category-small-0007@2x.webp",
    News: "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/demo-category-small-0008@2x.webp",
  };

  const [article, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://blogs-platform-backend.onrender.com/articles"
      );
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

  if (typeof name === "string") {
    const imageUrl =
      imageMap[name] ||
      "https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/default@2x.webp";

    return (
      <div className="pl-5">
        <div className="space-y-4 pb-12">
          <div className="flex gap-2 items-center text-sm">
            <Link href="/">
              <p className="cursor-pointer">Home</p>
            </Link>
            <ChevronRight className="h-4 w-4 opacity-60" />
            <p className="opacity-60">{name}</p>
          </div>

          <Image
            className="rounded-xl"
            height={100}
            width={100}
            src={imageUrl}
            alt="eachcatgory"
            unoptimized={true}
          ></Image>

          <p className="font-bold text-2xl lg:text-4xl">{name}</p>
          <p className="opacity-60 lg:w-4/12">
            Stay ahead of the curve with the newest developments in technology,
            from cutting-edge gadgets to breakthroughs in AI, cybersecurity, and
            beyond.
          </p>
        </div>
        <hr />

        {/* blog section */}
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
                      unoptimized={true}
                    />
                  </Link>
                  <div className="space-y-6">
                    <div className="space-y-2 mb-8">
                      <p>
                        <Link href="/author">
                          <span className="text-blue-600 font-bold text-sm">
                            {card.author}{" "}
                          </span>
                        </Link>
                        <span className="opacity-60">
                          on {new Date(card.updatedAt).toDateString()}
                        </span>{" "}
                      </p>

                      <Link href={`/blog/view/${card._id}`}>
                        <p className="text-xl mt-1 font-bold opacity-80">
                          {card.title}{" "}
                        </p>
                      </Link>
                      <p className="opacity-60">{card.shortDescription} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>loading data....</p>
        )}
      </div>
    );
  }
}
