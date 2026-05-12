"use client";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card } from "../ui/card";
import cloudinaryLoader from "@/utils/image/loader";

const AboutUsImages = () => {
  console.log(
    cloudinaryLoader({ src: "myimage.jpg", width: 800, quality: 75 }),
  );
  return (
    <div>
      <Card className="m-0 py-0 border-background-green">
        <AspectRatio ratio={4 / 2}>
          <Image
            className="h-full rounded-lg  object-cover"
            loader={cloudinaryLoader}
            src={"aboutus1_fr4nsb.jpg"}
            alt="About us Picture 1"
            fill
          />
        </AspectRatio>
      </Card>
      <Card>
        <AspectRatio ratio={5 / 2}></AspectRatio>
      </Card>
      <Card>
        <AspectRatio ratio={5 / 2}></AspectRatio>
      </Card>
    </div>
  );
};

export default AboutUsImages;
