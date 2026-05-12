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
      <Card className="py-0 border-background-green border-2 col-span-3 ">
        <AspectRatio ratio={4 / 2}>
          <Image
            className="rounded-lg  object-cover"
            loader={cloudinaryLoader}
            src={"aboutus1_fr4nsb"}
            alt="About us Picture 1"
            fill
            preload
          />
        </AspectRatio>
      </Card>
      <Card className="py-0 border-background-green border-2 col-span-3 md:col-span-2">
        <AspectRatio ratio={4 / 2}>
          <Image
            className="rounded-lg  object-cover"
            loader={cloudinaryLoader}
            src={"aboutus2_q373ch"}
            alt="About us Picture 1"
            fill
            preload
          />
        </AspectRatio>
      </Card>
      <Card className="py-0 border-background-green border-2 col-span-3 md:col-span-1">
        <AspectRatio ratio={isMobile ? 4 / 2 : 2 / 4}>
          <Image
            className="rounded-lg  object-cover"
            loader={cloudinaryLoader}
            src={"aboutus3_ol0lnu"}
            alt="About us Picture 1"
            fill
            preload
          />
        </AspectRatio>
      </Card>
    </div>
  );
};

export default AboutUsImages;
