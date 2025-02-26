import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Drawer from "react-modern-drawer";
import logo from "../../images/logo@2x.png";
import { Button } from '../ui/button';
import { useTheme } from "next-themes";

export default function LeftDrawer() {
  const { setTheme } = useTheme();
   // for a drawer
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggleDrawer = () => {
     setIsOpen((prevState) => !prevState);
   };
 
 //  this is for drawer menu item
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

  return (
    <div className="  block md:hidden lg:hidden ">
    <Menu onClick={toggleDrawer} />
    <Drawer 
      open={isOpen}
      direction="left"
      className=' overflow-y-auto'
      size={300}
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        overflow: "auto",
      }}
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
          <X className="h-5 w-5 cursor-pointer" onClick={toggleDrawer} />
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
          <Link href="/about">
          <p className="cursor-pointer pt-2">About</p>
          </Link>

          <Link href="/contact">
          <p className="cursor-pointer pt-1">Contacts</p>
          </Link>
        </div>

        <Link href="/create">
          <Button className="bg-[#7C79EB] hover:bg-[#7C79EB] cursor-pointer hover:shadow-2xl">
            Create
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
          <div className="flex gap-2 items-center bg-[#F2F2F6] rounded-2xl p-2 dark:bg-[#3D3D3D]">
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
  </div>

  );
}
