"use client";
import React, { useState } from "react";
import logo from "../images/logo@2x.png";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Moon,
  Search,
  Sun,
  Tally1,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";


//import styles 👇
import "react-modern-drawer/dist/index.css";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import LeftDrawer from "./onClick/LeftDrawer";
import SearchFunctionality from "./onClick/SearchFunctionality";

export default function Navbar() {

  // homepages menu options
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

  // features menu option
  const featuresmenu = [
    {
      id: 1,
      name: "Post Headers",
    },
    {
      id: 2,
      name: "Layout",
    },
    {
      id: 3,
      name: "Auto LoadNextPost",
    },
    {
      id: 4,
      name: "Categories",
    },
  ];

  // for the light mode and dark mode
  const { setTheme } = useTheme();

  // for the navbar menu to open item or not
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [menuLeaveTimeout, setMenuLeaveTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (menuLeaveTimeout !== null) {
      clearTimeout(menuLeaveTimeout);
    }
    setMenuOpen(menuName);
  };

  const handleMouseLeave = () => {
    if (menuLeaveTimeout !== null) {
      clearTimeout(menuLeaveTimeout);
    }
    setMenuLeaveTimeout(
      setTimeout(() => {
        setMenuOpen(null);
      }, 50) // adjust the delay time as needed
    );
  };

  const handleMenuItemMouseEnter = () => {
    if (menuLeaveTimeout !== null) {
      clearTimeout(menuLeaveTimeout);
    }
  };

  const [searchOpen, setSearchOpen] = useState(false);


  // const [theme, setTheme] = useState("light");

  // console.log(menuOpen);
  return (
    <div className="flex justify-between items-center p-6">

      {/* slider menu in small screen */}
      <LeftDrawer/>

       {/* for large device */}
      <Link href="/">
        <Image
          className="h-8 w-32 cursor-pointer"
          src={logo}
          alt="thisislogo"
        />
      </Link>
      <div className="hidden lg:flex gap-6">
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("homepages")}
          onMouseLeave={handleMouseLeave}
        >
          {/* Menu Trigger */}
          <div className="bg-[#F2F2F6] dark:bg-[#3D3D3D] flex gap-1 items-center cursor-pointer p-2 rounded-md">
            <p className="dark:text-white">Homepages</p>
            {menuOpen === ("homepages" as string) ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
          {/* Menu Items (Dropdown) */}
          {menuOpen === ("homepages" as string) && (
            <Card
              className=" w-64 py-6 px-4 space-y-2 absolute top-full left-0 mt-2 z-10"
              onMouseEnter={handleMenuItemMouseEnter}
            >
              {homepaemenu.map((each) => (
                <p
                  key={each.id}
                  className="px-4 py-1 text-sm font-bold opacity-70 rounded-md  hover:bg-[#F2F2F6] cursor-pointer hover:translate-x-2 transition duration-700 ease-in-out"
                >
                  {each.name}
                </p>
              ))}
            </Card>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("features")}
          onMouseLeave={handleMouseLeave}
        >
          {/* Menu Trigger */}
          <div className="hover:bg-[#F2F2F6] dark:hover:bg-[#3D3D3D]  flex gap-1 items-center cursor-pointer p-2 rounded-md">
            <p>Features</p>
            {menuOpen === ("features" as string) ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
          {/* Menu Items (Dropdown) */}
          {menuOpen === ("features" as string) && (
            <Card
              className=" w-64 py-6 px-4 space-y-2 absolute top-full left-0 mt-2 z-10"
              onMouseEnter={handleMenuItemMouseEnter}
            >
              {featuresmenu.map((each) => (
                <p
                  key={each.id}
                  className="px-4 py-1 text-sm font-bold opacity-70 rounded-md  hover:bg-[#F2F2F6] cursor-pointer hover:translate-x-2 transition duration-700 ease-in-out"
                >
                  {each.name}
                </p>
              ))}
            </Card>
          )}
        </div>
        <Link href="/about">
        <div className="hover:bg-[#F2F2F6] dark:hover:bg-[#3D3D3D] p-2  cursor-pointer rounded-md">
          <p>About</p>
        </div>
        </Link>
        <Link href="/contact">
        <div className="hover:bg-[#F2F2F6] dark:hover:bg-[#3D3D3D]  p-2  cursor-pointer rounded-md">
          <p>Contact</p>
        </div>
        </Link>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex items-center">
          <div className="relative">
          <div className="relative hover:bg-[#F2F2F6] dark:bg-[#3D3D3D]  p-2 rounded-full">
            <Search className="h-5 w-5 cursor-pointer" onClick={()=>setSearchOpen(!searchOpen)} />
          </div>
          {
            searchOpen &&
            <SearchFunctionality setSearchOpen={setSearchOpen} searchOpen={searchOpen}/>
          }
          </div>
          <Tally1 className=" hidden lg:block opacity-40" />
          <div className=" hidden lg:flex gap-2 items-center dark:bg-[#3D3D3D]  bg-[#F2F2F6] rounded-2xl p-2">
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
        <Link
          href="https://themeforest.net/item/revision-optimized-personal-blog-wordpress-theme/54935237?clickid=UqGSM6XMOxyKTh4V17VC8UFfUkszkKWdqT8J2A0&iradid=275988&irpid=1327917&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#7B78EC] hidden lg:block shadow-xl font-bold hover:bg-[#6d68ef] hover:shadow-2xl">
            Buy Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
