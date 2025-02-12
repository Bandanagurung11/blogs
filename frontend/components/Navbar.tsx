"use client";
import React, { useState } from "react";
import logo from "../images/logo@2x.png";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Moon,
  Search,
  Sun,
  Tally1,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";

export default function Navbar() {
  const homepaemenu = [
    {
      id: 1,
      name: "Classic List",
    },
    {
      id: 2,
      name: "Classic Grid",
    },
    {
      id: 3,
      name: "Classic Overlay",
    },
    {
      id: 4,
      name: "Classic Heroslider",
    },
    {
      id: 5,
      name: "Features Posts",
    },
    {
      id: 6,
      name: "Full List",
    },
    {
      id: 7,
      name: "Full Grid",
    },
    {
      id: 8,
      name: "Full Overlay",
    },
  ];
  const { setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <div className="flex justify-between items-center p-2">
      <Image className="h-8 w-32 cursor-pointer" src={logo} alt="thisislogo" />
      <div className="flex gap-6">
        <div
          className="relative"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          {/* Menu Trigger */}
          <div className="bg-[#F2F2F6] flex gap-1 items-center cursor-pointer p-2 rounded-md">
            <p>Homepages</p>
            {menuOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
          {/* Menu Items (Dropdown) */}
          {menuOpen && (
            <div
              className={`absolute left-0 mt-2 w-64 bg-[#f8f5f5] shadow-2xl rounded-md p-4 space-y-2
            transition-all duration-700 ease-in-out transform ${
              menuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
            }`}
            >
              {homepaemenu.map((each) => (
                <p
                  key={each.id}
                  className="px-4 py-1 text-base rounded-md  hover:bg-[#F2F2F6] cursor-pointer hover:translate-x-2 transition duration-700 ease-in-out"
                >
                  {each.name}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* <HoverCard>
          <HoverCardTrigger>
            <div className="hover:bg-[#F2F2F6] p-2 cursor-pointer rounded-md">
              <p>Features</p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>Post Headers</p>
            <p>Layout</p>
            <p>Auto Load Next Project</p>
            <p>Categories</p>

          </HoverCardContent>
        </HoverCard> */}

        <div className="hover:bg-[#F2F2F6] p-2  cursor-pointer rounded-md">
          <p>About</p>
        </div>
        <div className="hover:bg-[#F2F2F6] p-2  cursor-pointer rounded-md">
          <p>Contact</p>
        </div>
      </div>
      {/* <div className="flex gap-8 font-bold opacity-70">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              className="bg-[#F2F2F6] flex gap-1 items-center  cursor-pointer p-2 rounded-md border border-none"
              onMouseEnter={()=>setMenuOpen(true)}
              onMouseLeave={()=>setMenuOpen(false)}
            >
              <p>Homepages</p>
              { menuOpen? <p><ChevronUp className="h-5 w-5" /></p>
              :
              <p><ChevronDown className="h-5 w-5" /></p>
              }
              
            </div>
          </DropdownMenuTrigger>
          {menuOpen  && (<DropdownMenuContent
            className="w-64 px-4 space-y-2 py-8"
          >
            {homepaemenu.map((each, index) => (
              <DropdownMenuItem
                key={index}
                className=" px-4 text-base cursor-pointer hover:translate-x-2 transition duration-500 ease-in-out"
              >
                {each.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>)
          }
        </DropdownMenu>
      </div> */}
      <div className="flex gap-6 items-center">
        <div className="flex items-center">
          <div className="hover:bg-[#F2F2F6] p-2 rounded-full">
            <Search className="h-5 w-5 cursor-pointer" />
          </div>
          <Tally1 className="opacity-40" />
          <div className="flex gap-2 items-center bg-[#F2F2F6] rounded-2xl p-2">
            <Sun
              className="h-5 w-5 cursor-pointer"
              onClick={() => setTheme("light")}
            />
            <Moon
              className="h-5 w-5 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          </div>
        </div>
        <Button className="bg-[#7B78EC] font-bold hover:bg-[#6d68ef] hover:shadow-2xl">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
