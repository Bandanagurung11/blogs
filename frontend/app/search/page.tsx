"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import axios from "axios";
import Image from "next/image";
import { IArticle } from "@/app/page";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchResults, setSearchResults] = useState<IArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(query);

  // console.log(searchResults, "this is search results")

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (searchTerm: string) => {
    try {
      // const response = await axios.get(`http://localhost:5000/api/search?query=${searchQuery}&page=${newPage}`); you can also use this but using params is more effective
      const response = await axios.get(
        "https://blogs-platform-backend.onrender.com/search",
        {
          params: { query: searchTerm }, //includes query parameters to the request,
          //  params is the object which has key and value, it automatically appends the query parameters to the URL
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      // trim() function remove unneccessary space from the query
      handleSearch(searchQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //when enter key is pressed it trigger handlesearchclick function
      handleSearchClick();
    }
  };

  return (
    <div className="p-6 space-y-14">
      <div className="space-y-12">
        <div className="flex gap-1 items-center opacity-60 text-sm ">
          <Link href="/">
            <p>Home</p>
          </Link>
          <ChevronRight className="h-4 w-4" />
          <p>You searched for &quot;{query}&quot;</p>
        </div>
        <p className="text-2xl lg:text-5xl font-bold mb-4">
          Search Results for &quot;{query}&quot;
        </p>
        <div className="relative">
          <Input
            placeholder="Search again..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            onKeyDown={handleKeyDown}
            className="h-14 lg:w-[600px] rounded-xl"
          />
          <Button
            className="bg-[#7571ED] hover:bg-[#7571ED] hover:shadow-2xl absolute left-64 lg:left-[515px] top-3"
            onClick={handleSearchClick}
          >
            Search
          </Button>
        </div>
      </div>

      {/* Search Results */}
      <div className="grid lg:grid-cols-3 gap-6">
        {searchResults.length > 0 ? (
          searchResults.map((result: IArticle, index: number) => (
            <Link key={index} href={`/articles/${result._id}`}>
              <div className="cursor-pointer space-y-4">
                <Link href={`/blog/view/${result._id}`}>
                  <Image
                    className="h-[200px] w-[800px] rounded-xl"
                    src={result.thumnail}
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
                        <span className="text-blue-600">{result.author}</span>{" "}
                      </Link>
                      <span className="opacity-60">
                        on {new Date(result.updatedAt).toDateString()}
                      </span>{" "}
                    </p>
                    <Link href={`/blog/view/${result._id}`}>
                      <p className="text-xl font-bold mt-2 opacity-80">
                        {result.title}{" "}
                      </p>
                    </Link>
                    <p className="opacity-60">{result.shortDescription} </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-sm text-gray-500">
            It seems we cannot find what you are looking for. Please check the
            spelling or rephrase.
          </p>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
    <SearchResults/>
    </Suspense>
  )
}
