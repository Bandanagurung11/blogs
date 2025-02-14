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
  Moon,
  Search,
  Sun,
  Tally1,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [isItemOpen, setIsItemOpen] = useState<{ [key: string]: boolean }>({
    homepages: false,
    features: false,
    postheaders: false,
    layout: false,
  });

  const setter = (name: string) => {
    setIsItemOpen((currentState) => ({
      ...currentState,
      [name]: !currentState[name],
    }));
  };

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
  const { setTheme } = useTheme();
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

  // console.log(menuOpen);
  return (
    <div className="flex justify-between items-center p-6">
      <>
        <button onClick={toggleDrawer}>Show</button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
        >
          <div className="p-4 space-y-6">
            <div className="flex justify-between items-center">
              <Link href="/">
              <Image
                className="h-8 w-32 cursor-pointer"
                src={logo}
                alt="this is logo"
                height={100}
                width={100}
              ></Image>
              </Link>
              <X className="h-5 w-5 cursor-pointer" />
            </div>
            <div className="space-y-2 pb-6 font-bold opacity-70">
              <div className="flex justify-between items-center">
                <p className="cursor-pointer">Homepages</p>

                <div
                  className=" cursor-pointer"
                  onClick={() => setter("homepages")}
                >
                  {isItemOpen["homepages"] ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronUp className="w- h-5" />
                  )}
                </div>
              </div>
              {isItemOpen["homepages"] && (
                <div className="font-bold opacity-70 space-y-2 pl-2">
                  <p className="cursor-pointer">Classic List</p>
                  <p className="cursor-pointer">Classic Grid</p>
                  <p className="cursor-pointer">Classic Overlay</p>
                  <p className="cursor-pointer">Hero Slider</p>
                  <p className="cursor-pointer">Feature Post</p>
                  <p className="cursor-pointer">Full List</p>
                  <p className="cursor-pointer">Full Grid</p>
                  <p className="cursor-pointer">Full Overlay</p>
                </div>
              )}

              <div className="flex justify-between items-center">
                <p className="cursor-pointer">Features</p>
                <div
                  onClick={() => setter("features")}
                  className=" cursor-pointer"
                >
                  {isItemOpen["features"] ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronUp className="h-5 w-5" />
                  )}
                </div>
              </div>
              {isItemOpen["features"] && (
                <div className="font-bold opacity-70 space-y-1 pl-2">
                  <div className="flex justify-between items-center">
                    <p className="cursor-pointer">Post Headers</p>
                    <div
                      onClick={() => setter("postheaders")}
                      className=" cursor-pointer"
                    >
                      {isItemOpen["postheaders"] ? (
                        <ChevronDown className="h-5 w-5" />
                      ) : (
                        <ChevronUp className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                  {isItemOpen["postheaders"] && (
                    <div className="space-y-1 pl-4">
                      <p className="cursor-pointer">Standard</p>
                      <p className="cursor-pointer">Split</p>
                      <p className="cursor-pointer">Overlay</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <p className="cursor-pointer">Layout</p>
                    <div
                      onClick={() => setter("layout")}
                      className=" cursor-pointer"
                    >
                      {isItemOpen["layout"] ? (
                        <ChevronDown className="h-5 w-5" />
                      ) : (
                        <ChevronUp className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                  {isItemOpen["layout"] && (
                    <div className="space-y-1 pl-4">
                      <p className="cursor-pointer">Right Sidebar</p>
                      <p className="cursor-pointer">Left Sidebar</p>
                      <p className="cursor-pointer">No Sidebar</p>
                    </div>
                  )}
                  <p className="cursor-pointer">Auto LoadNextPost</p>
                </div>
              )}
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer">Categories</p>
              <p className="cursor-pointer">Contacts</p>
            </div>

            <Link href="https://themeforest.net/item/revision-optimized-personal-blog-wordpress-theme/54935237?clickid=yVIx6YXLJxyKWyEQAX0DtyLGUkszlcxNqT8JzQ0&iradid=275988&irpid=1327917&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=">
              <Button className="bg-[#7C79EB] hover:bg-[#7C79EB] cursor-pointer hover:shadow-2xl">
                Buy Now
              </Button>
            </Link>

            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Facebook className="h-5 w-5 cursor-pointer" />
                <svg
                className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                  />
                </svg>
                <Instagram className="h-5 w-5 cursor-pointer" />
                <Linkedin className="h-5 w-5 cursor-pointer" />
              </div>
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
          </div>
        </Drawer>
      </>
      <Link href="/">
        <Image
          className="h-8 w-32 cursor-pointer"
          src={logo}
          alt="thisislogo"
        />
      </Link>
      <div className="flex gap-6">
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("homepages")}
          onMouseLeave={handleMouseLeave}
        >
          {/* Menu Trigger */}
          <div className="bg-[#F2F2F6] flex gap-1 items-center cursor-pointer p-2 rounded-md">
            <p>Homepages</p>
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
          <div className="hover:bg-[#F2F2F6] flex gap-1 items-center cursor-pointer p-2 rounded-md">
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
          <Button className="bg-[#7B78EC] shadow-xl font-bold hover:bg-[#6d68ef] hover:shadow-2xl">
            Buy Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
