"use client";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card } from "../ui/card";
import cloudinaryLoader from "@/utils/image/loader";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutUsImages = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-5">
      <Card className="py-0 border-2 border-base-green/10 hover:border-base-green/40 shadow-md hover:shadow-xl rounded-2xl overflow-hidden col-span-3 transition-all duration-500 group cursor-pointer">
        <AspectRatio ratio={4 / 2}>
          <Image
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loader={cloudinaryLoader}
            src={"aboutus1_fr4nsb"}
            alt="About us Picture 1"
            fill
            priority
          />
        </AspectRatio>
      </Card>
      <Card className="py-0 border-2 border-base-green/10 hover:border-base-green/40 shadow-md hover:shadow-xl rounded-2xl overflow-hidden col-span-3 md:col-span-2 transition-all duration-500 group cursor-pointer">
        <AspectRatio ratio={4 / 2}>
          <Image
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loader={cloudinaryLoader}
            src={"aboutus2_q373ch"}
            alt="About us Picture 2"
            fill
            priority
          />
        </AspectRatio>
      </Card>
      <Card className="py-0 border-2 border-base-green/10 hover:border-base-green/40 shadow-md hover:shadow-xl rounded-2xl overflow-hidden col-span-3 md:col-span-1 transition-all duration-500 group cursor-pointer">
        <AspectRatio ratio={isMobile ? 4 / 2 : 2 / 4}>
          <Image
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loader={cloudinaryLoader}
            src={"aboutus3_ol0lnu"}
            alt="About us Picture 3"
            fill
            priority
          />
        </AspectRatio>
      </Card>
    </div>
  );
};

export default AboutUsImages;
