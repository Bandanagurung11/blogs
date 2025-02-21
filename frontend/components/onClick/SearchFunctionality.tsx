"use client"
import React, { useState } from "react";
import { Card } from "../ui/card";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchFunctionality({
  setSearchOpen,
  searchOpen,
}: {
  setSearchOpen: (value: boolean) => void;
  searchOpen: boolean;
}) {
  const Categories = [
    {
      name: "TECHNOLOGY",
      href: "categories/Technology",
    },
    {
      name: "TRAVEL",
      href: "categories/Travel",
    },
    {
      name: "SPORT",
      href: "categories/Sport",
    },
    {
      name: "BUSINESS",
      href: "categories/Business",
    },
    {
      name: "MANAGEMENT",
      href: "categories/Management",
    },
    {
      name: "TRENDS",
      href: "categories/Trends",
    },
    {
      name: "STARTUPS",
      href: "categories/Startups",
    },
    {
      name: "NEWS",
      href: "categories/News",
    },
  ];

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(""); // Store input value
  // Function to handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // router.push("/search")
      // router.push(`/search?query=${searchQuery}`); // Redirect to search results page
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`); 
      setSearchOpen(false); // Close search modal
    }
  };

  // Handle "Enter" key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Card className="bg-[#F8F8FF] space-y-4 w-96 p-6 absolute top-16 -left-44 mt-2 z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">What are You Looking For?</p>
          <X
            className="w-5 h-5 cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          />
        </div>
        <div className="relative">
          <Input
            placeholder="Start Typing"
            className="h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown} // Listen for Enter key press
          />
          <Button
            className="bg-[#7B77EB] hover:bg-[#7B77EB] font-bold absolute right-1 top-2"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4 place-items-center">
          {Categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              onClick={() => setSearchOpen(false)}
            >
              <p className="text-sm border p-1 bg-white rounded-md">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
