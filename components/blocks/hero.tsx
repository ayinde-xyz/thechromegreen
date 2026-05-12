"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import hero1 from "@/public/hero/hero1.jpg";
import hero2 from "@/public/hero/hero2.jpg";
import hero3 from "@/public/hero/hero3.jpg";
import hero4 from "@/public/hero/hero4.jpg";
import hero5 from "@/public/hero/hero5.jpg";
import hero6 from "@/public/hero/hero6.jpg";
import { useRef } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "../ui/aspect-ratio";
import cloudinaryLoader from "@/utils/image/loader";

const slides = [
  {
    title: "Raising Climate-Smart Leaders for a Green Future",
    description:
      "We are a youth-led environmental movement on a mission to educate and engage communities.",
    image: "hero1_ztez5p.jpg",
    mobileImage: "hero4_za8gsd.jpg",
  },
  {
    title: "Join the Green Revolution",
    description:
      "Discover how The Chrome Green Club is leading the charge towards a sustainable future.",
    image: "hero2_ztez5p.jpg",
    mobileImage: "hero5_ss3vap.jpg",
  },
  {
    title: "Empowering Change, One Step at a Time",
    description:
      "Together, we can create a world where green choices are the norm.",
    image: "hero3_tzl6t4.jpg",
    mobileImage: "hero6_ox5iun.jpg",
  },
];

const Hero = () => {
  const isMobile = useIsMobile();
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress),
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="   w-full flex  items-center justify-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}>
        {slides.map((slide, index) => (
          <SwiperSlide className="" key={index}>
            <AspectRatio ratio={isMobile ? 9 / 16 : 2.4 / 1.4}>
              <div className="relative h-full w-full overflow-hidden bg-clip-border">
                <Image
                  loader={cloudinaryLoader}
                  src={isMobile ? slide.mobileImage : slide.image}
                  alt={slide.title}
                  fill
                  preload
                  className="object-cover object-left md:object-center"
                  sizes="100vw"
                />
                {/* Modern Dark Gradient Overlay for better readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10"></div>
                <div className="absolute inset-0 bg-background-green/10 mix-blend-overlay"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-24 md:pb-32 max-w-7xl  w-full">
                  <div className="max-w-3xl transform transition-all duration-1000 translate-y-12 opacity-0 in-[.swiper-slide-active]:translate-y-0 in-[.swiper-slide-active]:opacity-100 delay-200">
                    {/* Badge / Tagline */}
                    <div className="inline-block px-4 py-1.5 mb-4 md:mb-6 rounded-full bg-background-green/20 border border-background-green/30 backdrop-blur-md">
                      <span className="text-background-green font-bold text-xs md:text-sm tracking-widest uppercase drop-shadow-sm">
                        The Chrome Green
                      </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 md:mb-6 drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 max-w-2xl drop-shadow-lg font-medium leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-background-green hover:bg-background-green/90 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-background-green/25 hover:-translate-y-1 active:translate-y-0 duration-300">
                        Join the Movement
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold transition-all hover:-translate-y-1 active:translate-y-0 duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Hero;

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </>
//   );
// }
