import React from "react";
import { Card } from "@/components/ui/card";
import management from "../images/demo-image-0021-528x297.webp";
import business from "../images/demo-image-0039-528x297.webp";
import news from "../images/demo-image-0028-528x297.webp";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/style.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function RightFixed() {
  return (
    <div className="space-y-6">
      <Card className="p-12 space-y-4 lg:w-96">
        <p>About</p>
        <div className="flex gap-2 items-center">
          <Link href="/author">
            <div className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                className="h-12 w-12 object-cover"
                src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp"
                alt="profile"
                width={100}
                height={100}
              ></Image>
            </div>
          </Link>
          <div>
            <Link href="author/">
              <p className="font-bold">Ethan Caldwell</p>
            </Link>
            <p className="opacity-60">Reflective Blogger</p>
          </div>
        </div>
        <p className="opacity-60">
          Ethan Caldwell shares thoughtful insights and reflections on life,
          culture, and personal growth. His work explores the intersections of
          creativity and experience, offering readers unique perspectives.
        </p>
        <div className="flex gap-2 items-center">
          <MapPin style={{ fill: "blue" }} />
          <p className="opacity-90">Paris, France</p>
        </div>

        <div>
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
          </div>
        </div>
      </Card>

      {/* second card */}
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        loopAdditionalSlides={1} // Helps smooth looping
        centeredSlides={true} // Helps maintain a smooth transition
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-96 h-64 "
      >
        <SwiperSlide className="w-full h-full">
          <div className="relative w-full h-full">
            <Image
              className="h-full w-full rounded-xl object-cover"
              objectFit="cover" // Ensures the image covers the full area
              // quality={100} it is also work but not better than unoptimized
              src={management}
              alt="lancksdcs"
              height={100}
              width={100}
              unoptimized={true}
            />
            <div className="absolute top-0 bg-black/50 text-white pt-2 px-3 rounded-t-lg text-lg space-y-24">
              <button className=" px-2 rounded-md bg-[#B2A6A0]">
                Business
              </button>
              <div className="space-y-2">
                <p className="text-sm font-bold">
                  Ethan Caldwell{" "}
                  <span className="opacity-60">on July 7, 2024</span>
                </p>
                <p className="text-xl font-bold">
                  AI in Business Management Improving Efficiency and Desicion
                  Making
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="h-full w-full rounded-xl"
              objectFit="cover"
              src={business}
              alt="lancksdcs"
              unoptimized={true}
            ></Image>
            <div className="absolute top-0 bg-black/50 text-white pt-2 px-3 rounded-t-lg text-lg space-y-32">
              <button className=" px-2 rounded-md bg-[#B2A6A0]">
                Business
              </button>
              <div className="space-y-2">
                <p className="text-sm font-bold">
                  Ethan Caldwell{" "}
                  <span className="opacity-60">on July 7, 2024</span>
                </p>
                <p className="text-xl font-bold">
                  Digital Travel Tools for The Digital Age
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="h-full w-full rounded-xl"
              objectFit="cover" // Ensures the image covers the full area
              src={news}
              alt="lancksdcs"
              unoptimized={true}
            ></Image>

            <div className="absolute top-0 bg-black/50 text-white pt-2 px-3 rounded-t-lg text-lg space-y-32">
              <button className=" px-2 rounded-md bg-[#B2A6A0]">
                Business
              </button>

              <div className="space-y-2">
                <p className="text-sm font-bold">
                  Ethan Caldwell{" "}
                  <span className="opacity-60">on July 7, 2024</span>
                </p>
                <p className="text-xl font-bold">
                  Business Travel Trends to Expect in 2024: Tech and Efficiency
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* third card */}
      <Card className="p-12 py-6 space-y-4 lg:w-96">
        <p className="opacity-60">Work Experience</p>
        <div>
          <div className="flex justify-between items-center space-y-4">
            <p className="font-bold">Product Designer</p>
            <p className="opacity-80">2022 — Now</p>
          </div>
          <p>Pioneer</p>
        </div>
        <hr />
        <div>
          <div className="flex justify-between items-center space-y-4">
            <p className="font-bold">Product Designer</p>
            <p className="opacity-80">2020 — 2022</p>
          </div>
          <p>2020 — 2022</p>
        </div>
        <hr />

        <div>
          <div className="flex items-center justify-between space-y-4">
            <p className="font-bold">UX/UI Designer</p>
            <p className="opacity-80">2017 — 2020</p>
          </div>
          <p>Digital</p>
        </div>
      </Card>
      {/* fourth card */}
      <Card className="p-12 space-y-8 lg:w-96">
        <p className="opacity-60">Technologies</p>
        <div className="flex gap-8 items-center">
          <Image
            className="rounded-lg h-10 w-16"
            src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/figma.webp"
            alt="sideim"
            width={100}
            height={100}
          ></Image>
          <div>
            <p className="font-bold text-lg">Figma</p>
            <p className="opacity-60">
              Collaborate and design interfaces in real-time.
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <Image
            className="rounded-lg h-10 w-16"
            src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/notion.webp"
            alt="machx"
            height={100}
            width={100}
          ></Image>
          <div>
            <p className="font-bold text-lg">Notion</p>
            <p className="opacity-60">
              Organize, track, and collaborate on projects easily.
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <Image
            className="rounded-lg h-10 w-16"
            src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/ps.webp"
            alt="akchbds"
            height={100}
            width={100}
          ></Image>
          <div>
            <p className="font-bold text-lg">Photoshop</p>
            <p className="opacity-60">
              Professional image and graphic editing tool.
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <Image
            className="rounded-lg h-10 w-16"
            src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/ai.webp"
            alt="kacbhd"
            height={100}
            width={100}
          ></Image>
          <div>
            <p className="font-bold text-lg">Illustrator</p>
            <p className="opacity-60">
              Create precise vector graphics and illustrations.
            </p>
          </div>
        </div>
      </Card>

      {/* fifth card */}
      <Card className=" p-12 space-y-4 lg:w-96">
        <p className="font-bold opacity-60">Creating</p>
        <div className="space-y-2">
          <div className="flex gap-2">
            <p className="text-blue-600 hover:text-black font-bold cursor-pointer">
              Heartfelt Reflections
            </p>
            <ExternalLink className="h-5 w-6 text-blue-500 cursor-pointer" />
          </div>
          <p className="opacity-60 text-sm">
            A deep dive into emotional experiences and personal growth, sharing
            valuable insights on life&apos;s most meaningful moments.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2">
            <p className="text-blue-600 hover:text-black font-bold cursor-pointer">
              Latest Tech Gadgets
            </p>
            <ExternalLink className="h-5 w-6 text-blue-500 cursor-pointer" />
          </div>
          <p className="opacity-60 text-sm">
            Explore the newest and most innovative technology products hitting
            the market, from smart devices to cutting-edge tools.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2">
            <p className="text-blue-600 hover:text-black font-bold cursor-pointer">
              Trends for 2024
            </p>
            <ExternalLink className="h-5 w-6 text-blue-500 cursor-pointer" />
          </div>
          <p className="opacity-60 text-sm">
            A look ahead at the emerging trends that will shape the world in
            2024, from lifestyle shifts to groundbreaking innovations.
          </p>
        </div>
      </Card>
    </div>
  );
}
