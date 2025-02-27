"use client";
import {
  ChartNoAxesCombined,
  Flame,
  Laptop,
  MonitorPause,
  Plane,
  StickyNote,
  Volleyball,
  Wallet,
} from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const button = [
    {
      icon: <Laptop  style={{ fill: "blue"}} />,
      name: "Technology",
      href: "/Technology",
    },
    {
      icon: <Plane style={{ fill: "#DF701A"}} />,
      name: "Travel",
      href: "/Travel",
    },
    {
      icon: <Volleyball style={{ fill: "#00A657"}} />,
      name: "Sports",
      href: "/Sports",
    },
    {
      icon: <Wallet style={{ fill: "#583FBC"}} />,
      name: "Business",
      href: "/Business",
    },
    {
      icon: <ChartNoAxesCombined style={{ fill: "#BA1D60"}} />,
      name: "Management",
      href: "/Management",
    },
    {
      icon: <Flame style={{ fill: "#E2411F"}} />,
      name: "Trends",
      href: "/Trends",
    },
    {
      icon: <MonitorPause style={{ fill: "#4F4F4F"}} />,
      name: "Startups",
      href: "/Startups",
    },
    {
      icon: <StickyNote style={{ fill: "#089DDD"}} />,
      name: "News",
      href: "/News",
    },
  ];

  const router = useRouter();
  return (
    <div className=" py-6 lg:py-24 space-y-12">
      <div className="lg:w-9/12 mx-auto text-center space-y-4 pb-10">
        <p className=" text-3xl lg:text-5xl  text-[#29294B] font-bold leading-relaxed dark:text-white">
          Heartfelt <span className="text-[#7774E7]">Reflections</span>: Stories
          of Love, Loss, and Growth
        </p>
        <p className="lg:text-lg opacity-60 lg:w-8/12 mx-auto">
          Revision Welcomes to ultimate source for fresh perspectives! Explore{" "}
           curated content to enlighten, entertain and engage global
          readers.
        </p>
      </div>
      <hr />

      <div className="space-y-8">
        <p className="text-center lg:font-bold text-sm opacity-60">
          EXPLORE TRENDING TOPICS
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:w-9/12 mx-auto">
          {button.map((eachItems, index:number) => (
            <div
              key={index}
              className={`flex items-center justify-center
                // ${
                  index < 6 ? "" : ""
                } it will not affect the situation but if you need specific properties less than index 6 item than you can use
                ${index === 6 ? " lg:col-start-3" : ""} 
                ${index === 7 ? " lg:col-start-4" : ""}`}
            >
              
              <button
                // onClick={() => router.push(eachItems.href)} for a static route
                onClick={() => router.push(`/categories/${eachItems.href}`)} // for dynamic route
                className="h-8 w-44 flex items-center justify-center gap-1 py-6 rounded-2xl shadow-xl dark:bg-[#3D3D3D]"
              >
                <p> {eachItems.icon}</p>
                <p>{eachItems.name}</p>
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
