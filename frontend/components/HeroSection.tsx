"use client"
import {
  ChartNoAxesCombined,
  Flame,
  Laptop,
  Link,
  MonitorPause,
  Plane,
  StickyNote,
  Volleyball,
  Wallet,
} from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation"
import { Button } from "./ui/button";

export default function HeroSection() {
  const button = [
    {
      icon: <Laptop />,
      name: "Technology",
      href: "/technology",
    },
    {
      icon: <Plane />,
      name: "Travel",
      href: "/travel",
    },
    {
      icon: <Volleyball />,
      name: "Sports",
      href: "/sports",
    },
    {
      icon: <Wallet />,
      name: "Business",
      href: "/business",
    },
    {
      icon: <ChartNoAxesCombined />,
      name: "Management",
      href: "/management",
    },
    {
      icon: <Flame />,
      name: "Trends",
      href: "/trends",
    },
    {
      icon: <MonitorPause />,
      name: "Startups",
      href: "/startups",
    },
    {
      icon: <StickyNote />,
      name: "News",
      href: "/news",
    },
  ];

  const router = useRouter()
  return (
    <div className="py-16 space-y-12">
      <div className="w-9/12 mx-auto text-center space-y-4 pb-16">
        <p className="text-5xl  text-[#29294B] font-bold leading-tight">
          Heartfelt <span className="text-[#7774E7]">Reflections</span>: Stories
          of Love, Loss, and Growth
        </p>
        <p className="text-lg opacity-60">
          Revision Welcomes to ultimate source for fresh perspectives! Explore{" "}
          <br /> curated content to enlighten, entertain and engage global
          readers.
        </p>
      </div>
      <hr />
      <div className="space-y-8">
        <p className="text-center font-bold text-sm opacity-60">
          EXPLORE TRENDING TOPICS
        </p>

        <div className="flex flex-wrap justify-center gap-6 w-9/12 mx-auto">
          {button.map((eachItems, index) => (
            <div
              key={index}
              className={`w-1/6 flex justify-center ${
                index >= 6 ? "w-1/3" : ""
              }`}
            >
                {/* <Link href={eachItems.href}> */}
              <button onClick={() => router.push(eachItems.href)} className="h-8 w-44 flex items-center justify-center gap-1 py-6 rounded-2xl shadow-xl">
                <p>{eachItems.icon}</p>
                <p>{eachItems.name}</p>
              </button>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
