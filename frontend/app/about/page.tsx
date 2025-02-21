import { Card } from "@/components/ui/card";
import { ChartNoAxesCombined, ChevronRight, Rocket, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  const card = [
    {
      icon: <Rocket style={{ fill: "#F97239" }} className="h-12 w-12" />,
      title: "Empowering Innovation",
      description:
        "We consistently push the boundaries of technology, leading to unique and effective solutions.",
    },
    {
      icon: <Zap style={{ fill: "#1D6CE3" }} className="h-12 w-12" />,
      title: "Community-Centric Approach",
      description:
        "Our commitment to giving back not only enhances their reputation but also strengthens ties within the community.",
    },
    {
      icon: (
        <ChartNoAxesCombined
          style={{ fill: "#1D6CE3" }}
          className="h-12 w-12"
        />
      ),
      title: "Community-Centric Approach",
      description:
        "Our commitment to giving back not only enhances their reputation but also strengthens ties within the community.",
    },
  ];
  return (
    <div className="p-4 space-y-12">
      <div className="flex gap-2 opacity-60 items-center text-sm">
        <Link href="/">
          <p>Home</p>
        </Link>
        <ChevronRight className="h-4 w-4" />
        <p>About</p>
      </div>
      <p className="text-center text-2xl lg:text-5xl font-bold">
        Hey,<span className="text-blue-600 "> Wonderful</span> to Meet You
      </p>

      <div className="grid grid-cols-3  place-items-center">
        <Image
          className=" lg:h-[300] lg:w-[800] rounded-xl"
          src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/about-image-001.webp"
          alt="aboutpageimage"
          height={100}
          width={100}
          unoptimized={true}
        ></Image>
        <Image
          className="lg:h-[300] lg:w-[300] rounded-xl"
          src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/about-image-002.webp"
          alt="aboutpageimage"
          height={100}
          width={100}
          unoptimized={true}
        ></Image>
        <Image
          className="lg:h-[300] lg:w-[800] rounded-xl"
          src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/about-image-003.webp"
          alt="aboutpageimage"
          height={100}
          width={100}
          unoptimized={true}
        ></Image>
      </div>
      <div className="lg:text-xl text-[#29294B] font-bold lg:w-6/12 mx-auto space-y-6">
        <p>
          By 2016, we began to see the fruits of our labor as word spread about
          our work, leading us to our first major client — a regional retail
          chain. This was a pivotal moment for us, as it allowed us to hire our
          first employee. Emma stepped up to lead user experience design, while
          Liam and I focused on coding and project management.
        </p>
        <p>
          As we gathered to reflect on our incredible journey, hosting a
          community event to showcase local tech talent felt like the perfect
          way to give back and inspire the next generation of innovators. It
          reminded us that with passion, collaboration, and a bit of code,
          anything is possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {card.map((eachItems, index) => (
          <Card key={index} className="py-12 px-6 space-y-6 shadow-xl">
            {eachItems.icon}
            <div className="space-y-2">
              <p className="font-bold text-xl">{eachItems.title} </p>
              <p className="opacity-60">{eachItems.description} </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
