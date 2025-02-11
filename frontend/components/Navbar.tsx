"use client"
import React from "react";
import logo from "../images/logo@2x.png";
import Image from "next/image";
import { Moon, Search, Sun, Tally1 } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes"

export default function Navbar() {
    const { setTheme } = useTheme()
  return (
    <div className="flex justify-between items-center p-6">
      <Image className="h-8 w-32 cursor-pointer" src={logo} alt="thisislogo" />
      <div className="flex gap-8 font-bold opacity-70">
        <div className="bg-[#F2F2F6]  cursor-pointer p-2 rounded-md">
        <p>Homepages</p>
        </div>
        <div className="hover:bg-[#F2F2F6] p-2 cursor-pointer rounded-md">
        <p>features</p>
        </div>
        <div className="hover:bg-[#F2F2F6] p-2  cursor-pointer rounded-md">
        <p>About</p>
        </div>
        <div className="hover:bg-[#F2F2F6] p-2  cursor-pointer rounded-md">
        <p>Contact</p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex items-center">
        <div className="hover:bg-[#F2F2F6] p-2 rounded-full">
        <Search className="h-5 w-5 cursor-pointer" />
        </div>
        <Tally1 className="opacity-40" />
        <div className="flex gap-2 items-center bg-[#F2F2F6] rounded-2xl p-2">
          <Sun className="h-5 w-5 cursor-pointer" onClick={() => setTheme("light")} />
          <Moon className="h-5 w-5 cursor-pointer" onClick={() => setTheme("dark")} />
        </div>
        </div>
        <Button className="bg-[#7B78EC] font-bold hover:bg-[#6d68ef] hover:shadow-2xl">Buy Now</Button>
      </div>
    </div>
  );
}
