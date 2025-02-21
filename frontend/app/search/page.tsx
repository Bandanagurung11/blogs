"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock data for testing (Replace this with API call if needed)
const mockData = [
  { name: "Technology", href: "/categories/Technology" },
  { name: "Travel", href: "/categories/Travel" },
  { name: "Sport", href: "/categories/Sport" },
  { name: "Business", href: "/categories/Business" },
  { name: "Management", href: "/categories/Management" },
  { name: "Trends", href: "/categories/Trends" },
  { name: "Startups", href: "/categories/Startups" },
  { name: "News", href: "/categories/News" },
];

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; // Get the search query from URL
  const [searchResults, setSearchResults] = useState(mockData);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]); // Run when query changes

  const handleSearch = (searchTerm: string) => {
    const filteredResults = mockData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results for: &quot;{query}&quot;</h1>

      {/* Search Input */}
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search again..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-80"
        />
        <Button onClick={() => handleSearch(searchQuery)}>Search</Button>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <Link key={index} href={result.href}>
              <Card className="p-4 text-center cursor-pointer hover:bg-gray-100 transition">
                {result.name}
              </Card>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results found for "{query}"
          </p>
        )}
      </div>
    </div>
  );
}
