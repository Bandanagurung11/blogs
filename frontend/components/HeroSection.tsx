import { ChartNoAxesCombined, Flame, Laptop, MonitorPause, Plane, StickyNote, Volleyball, Wallet } from "lucide-react";
import React from "react";

export default function HeroSection() {
    const button=[
        {
            icon:<Laptop />,
            name:"Technology"
        },
        {
            icon:<Plane />,
            name:"Travel"
        },
        {
            icon:<Volleyball />,
            name:"Sports"
        },
        {
            icon:<Wallet />,
            name:"Business"
        },
        {
            icon:<ChartNoAxesCombined />,
            name:"Management"
        },
        {
            icon:<Flame />,
            name:"Trends"
        },
        {
            icon:<MonitorPause />,
            name:"Startups"
        },
        {
            icon:<StickyNote />,
            name:"News"
        },
    ];
  return (
    <div className="py-16 space-y-12">
      <div className="w-9/12 mx-auto text-center space-y-4 pb-16">
        <p className="text-5xl  text-[#29294B] font-bold leading-tight">
          Heartfelt <span className="text-[#7774E7]">Reflections</span>: Stories
          of Love, Loss, and Growth
        </p>
        <p className="text-lg opacity-60">
          Revision Welcomes to ultimate source for fresh perspectives! Explore{" "}
          <br /> curated content to enlighten, entertain and engage global
          readers.
        </p>
      </div>
      <hr />
      <div>
        <p className="text-center">Explore Trending Topics</p>
        <div className="w-9/12 mx-auto grid grid-cols-6 gap-4">
        {
            button.map((eachItems, index)=>(
                <button key={index} className="flex items-center p-4 rounded-xl shadow-xl">
               {eachItems.icon}
                <p>{eachItems.name}</p>
              </button>
            ))
        }
        </div>
      </div>
    </div>
  );
}
