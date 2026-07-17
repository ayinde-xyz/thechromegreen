"use client";
import Image from "next/image";
import { Card } from "../ui/card";
import cloudinaryLoader from "@/utils/image/loader";

const AboutUsImages = () => {
  return (
    <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-5">
      {/* Top Banner Image (Full Width) */}
      <Card className="relative h-48 md:h-60 py-0 border-2 border-base-green/10 hover:border-base-green/40 shadow-md hover:shadow-xl rounded-2xl overflow-hidden col-span-3 transition-all duration-500 group cursor-pointer">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loader={cloudinaryLoader}
          src={"aboutus1_fr4nsb"}
          alt="About us Picture 1"
          fill
          priority
        />
      </Card>

      {/* Bottom Left Image (2/3 Width) */}
      <Card className="relative h-44 md:h-56 py-0 border-2 border-base-green/10 hover:border-base-green/40 shadow-md hover:shadow-xl rounded-2xl overflow-hidden col-span-3 md:col-span-2 transition-all duration-500 group cursor-pointer">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loader={cloudinaryLoader}
          src={"aboutus2_q373ch"}
          alt="About us Picture 2"
          fill
          priority
        />
      </Card>

      {/* Bottom Right Image (1/3 Width) */}
      <Card className="relative h-44 md:h-56 py-0 border-2 border-base-green/10 hover:border-base-green/40 shadow-md hover:shadow-xl rounded-2xl overflow-hidden col-span-3 md:col-span-1 transition-all duration-500 group cursor-pointer">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loader={cloudinaryLoader}
          src={"aboutus3_ol0lnu"}
          alt="About us Picture 3"
          fill
          priority
        />
      </Card>
    </div>
  );
};

export default AboutUsImages;
