"use client";

import Image from "next/image";
import { Card } from "../ui/card";
import cloudinaryLoader from "@/utils/image/loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const aboutImages = [
  {
    src: "aboutus1_fr4nsb",
    alt: "The Chrome Green Club - World Earth Day Mini Rally",
  },
  {
    src: "aboutus2_q373ch",
    alt: "The Chrome Green Club - Community Members and Volunteers",
  },
  {
    src: "aboutus3_ol0lnu",
    alt: "The Chrome Green Club - Youth Leaders",
  },
];

const AboutUsImages = () => {
  return (
    <div className="relative w-full">
      {/* Decorative ambient background glow */}
      <div className="absolute -inset-1.5 bg-linear-to-r from-base-green/25 via-emerald-400/15 to-base-green/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

      <Card className="relative h-80 sm:h-96 md:h-[480px] lg:h-[520px] w-full p-0 border-2 border-base-green/10 hover:border-base-green/40 shadow-xl rounded-2xl md:rounded-3xl overflow-hidden group">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full">
          {aboutImages.map((img, index) => (
            <SwiperSlide
              key={index}
              className="relative h-full w-full overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  loader={cloudinaryLoader}
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle dark gradient overlay for depth */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </div>
  );
};

export default AboutUsImages;
