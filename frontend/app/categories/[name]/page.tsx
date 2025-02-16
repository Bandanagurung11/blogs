"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const { name } = useParams(); // Get the dynamic parameter from the URL
  console.log(name, "this is name");
  return (
    <div className="pl-5">
      <div className="space-y-4 pb-12">
        <div className="flex gap-2 items-center text-sm">
          <Link href="/">
            <p className="cursor-pointer">Home</p>
          </Link>
          <ChevronRight className="h-4 w-4 opacity-60" />
          <p className="opacity-60">Technology</p>
        </div>
        <Image
          className="rounded-xl"
          height={100}
          width={100}
          src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/Technology@2x.webp"
          alt="eachcatgory"
        ></Image>
        <p className="font-bold text-2xl lg:text-4xl">Technology</p>
        <p className="opacity-60 lg:w-4/12">
          Stay ahead of the curve with the newest developments in technology,
          from cutting-edge gadgets to breakthroughs in AI, cybersecurity, and
          beyond.
        </p>
      </div>
      <hr />

      {/* blog section */}
      <div>
        
      </div>
    </div>
  );
}
