import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="p-4 space-y-8">
      <div className="flex gap-2 opacity-60 items-center text-sm">
        <Link href="/">
          <p>Home</p>
        </Link>
        <ChevronRight className="h-4 w-4" />
        <p>Contacts</p>
      </div>
      <div className="lg:w-6/12 mx-auto space-y-4 ">
        <p className="text-3xl font-bold text-center ">
          Feel Free to Contact us
        </p>
        <p className="opacity-60 text-center">
          Lorem ipsum dolor sit amet consectetur. Facilisis eu sit commodo sit.
          Phasellus elit sit sit dolor risus faucibus vel aliquam. Fames mattis.
        </p>
        <Card className="p-8 space-y-4">
          <p className="font-bold text-lg">Ready to Get Started?</p>
          <div className="flex  gap-4 lg:gap-20">
            <div>
              <p className="opacity-60">Name*</p>
              <Input />
            </div>
            <div>
              <p className="opacity-60">Email*</p>
              <Input />
            </div>
          </div>

          <div>
            <p className="opacity-60">Your message*</p>
            <Textarea />
          </div>
          <Button className="font-bold bg-[#8E8BF8] hover:bg-[#8E8BF8] cursor-pointer">
            Submit Request
          </Button>
        </Card>
      </div>
    </div>
  );
}
