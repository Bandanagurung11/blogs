import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../images/logo@2x.png";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

export default function Footer() {
  const homepage = [
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
      name: "Hero Slider",
    },
    {
      id: 5,
      name: "Featured Posts",
    },
  ];

  const Categories = [
    {
      id: 1,
      name: "Technology",
    },
    {
      id: 2,
      name: "Travel",
    },
    {
      id: 3,
      name: "Sport",
    },
    {
      id: 4,
      name: "Business",
    },
  ];

  const Pages = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Categories",
    },
    {
      id: 3,
      name: "Contacts",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center space-y-4 py-16">
        <p className="text-4xl font-bold">Subscribe to our Newsletter</p>
        <p className="opacity-60 text-lg text-center">
          Subscribe to our email newsletter to get the latest posts <br />
          delivered right to your email.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your email"
            className="pl-4 h-12 w-96 shadow-lg"
          />{" "}
          <Button className="absolute right-1 top-1 text-base text-white bg-[#8C88F6] hover:bg-[#8C88F6]">
            Subscribe
          </Button>
        </div>
        <p className="text-sm font-bold">Pure inspiration, zero spam ✨</p>
      </div>
      <hr />
      <div className="grid grid-cols-7 py-12 px-4">
        <div className="col-span-4 space-y-24">
          <div className="space-y-4">
            <Image
              src={logo}
              className="h-8 w-32"
              alt="logoimg"
              height={100}
              width={100}
            ></Image>
            <p className=" opacity-60">
              Welcome to ultimate source for fresh perspectives! Explore <br />{" "}
              curated content to enlighten, entertain and engage global <br />{" "}
              readers.
            </p>
            <div className="flex items-center gap-2">
              <Facebook className="h-5 w-5" />
              <svg
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
              <Instagram className="h-5 w-5" />
              <Linkedin className="h-5 w-5" />
            </div>
          </div>
          <p className="text-sm opacity-60">
            © 2024 — Revision. All Rights Reserved.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-bold text-xs opacity-40">HOMEPAGES</p>
          {homepage.map((each, index) => (
            <p
              key={index}
              className="cursor-pointer font-bold opacity-70  hover:text-gray-500 transition duration-1000 ease-in-out"
            >
              {each.name}{" "}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <p className="font-bold text-xs opacity-40">CATEGORIES</p>
          {Categories.map((each, index) => (
            <p
              key={index}
              className="cursor-pointer font-bold opacity-70  hover:text-gray-500 transition duration-1000 ease-in-out"
            >
              {each.name}{" "}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <p className="font-bold text-sm opacity-40">PAGES</p>
          {Pages.map((each, index) => (
            <p
              key={index}
              className="cursor-pointer font-bold opacity-70  hover:text-gray-500 transition duration-1000 ease-in-out"
            >
              {each.name}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
