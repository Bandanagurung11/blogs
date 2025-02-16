import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./css/style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import axios from "axios";
import toast from "react-hot-toast";

export default function BlogCard({ article, fetchArticles }) {
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://blogs-platform-backend.onrender.com/articles/${id}`
      );
      console.log(response);
      toast.success("deleted succesfully");
      fetchArticles();
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("can not delete a post");
    }
  };
  // console.log(article, "this is child section article");

  return (
    <div className="grid lg:grid-cols-2">
      {/* blog card */}
      <div className="py-12 space-y-12">
        {article.map((card, index) => (
          <div key={index}>
            <Link
              href={`/blog/view/${card._id}`}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex items-center gap-6">
                <Image
                  className="h-[200px] w-[800px] rounded-md"
                  src="https://plus.unsplash.com/premium_photo-1670371134786-a35201136a5b?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height={100}
                  width={100}
                  alt="this is image"
                />
                <div className="space-y-6">
                  <div className="space-y-2 mb-8">
                    <p>{card.author} </p>
                    <p className="text-xl font-bold opacity-80">
                      {card.title}{" "}
                    </p>
                    <p className="opacity-60">{card.content} </p>
                  </div>

                  <Button className="text-bold bg-[#7E7AEC] hover:bg-[#7E7AEC] text-white hover:shadow-2xl">
                    Discover More
                  </Button>
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300 w-full" />
            </Link>
            <p
              className="p-2 cursor-pointer bg-red-500 rounded-md text-white"
              onClick={() => handleDelete(card._id)}
            >
              delete
            </p>
          </div>
        ))}
      </div>

      {/* right section */}
      <div className="place-items-end space-y-6">
        <Card className="p-12 space-y-4 w-96">
          <p>About</p>
          <div className="flex gap-2 items-center">
            <div className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                className="h-12 w-12 object-cover"
                src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp"
                alt="profile"
                width={100}
                height={100}
              ></Image>
            </div>
            <div>
              <p className="font-bold">Ethan Caldwell</p>
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
        <Card className="w-96 h-64">
          <>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="lancksdcs"
                  height={100}
                  width={100}
                ></Image>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </>
        </Card>

        {/* third card */}
        <Card className="p-12 py-6 space-y-4 w-96">
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
        <Card className="p-12 space-y-8 w-96">
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
        <Card className=" p-12 space-y-4 w-96">
          <p className="font-bold opacity-60">Creating</p>
          <div className="space-y-2">
            <div className="flex gap-2">
              <p className="text-blue-600 hover:text-black font-bold cursor-pointer">
                Heartfelt Reflections
              </p>
              <ExternalLink className="h-5 w-6 text-blue-500 cursor-pointer" />
            </div>
            <p className="opacity-60 text-sm">
              A deep dive into emotional experiences and personal growth,
              sharing valuable insights on life's most meaningful moments.
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
    </div>
  );
}
