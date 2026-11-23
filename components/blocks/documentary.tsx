"use client";

import { quicksand } from "@/app/fonts";
import { FaYoutube } from "react-icons/fa";
import { Film, Sparkles } from "lucide-react";
import Link from "next/link";

const Documentary = () => {
  return (
    <section
      id="documentary"
      className="w-full py-20 md:py-28 px-5 bg-[#0b241b] text-white relative overflow-hidden flex flex-col justify-center border-t border-emerald-900/40">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-base-green/15 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-base-yellow/10 rounded-full filter blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-emerald-950/80 border border-base-green/40 backdrop-blur-md shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-base-green opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-base-green"></span>
            </span>
            <span className="text-emerald-300 font-bold text-xs md:text-sm tracking-widest uppercase flex items-center gap-1.5">
              <Film className="size-3.5" /> Official Documentary
            </span>
          </div>

          <h2
            className={`${quicksand.className} text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight`}>
            The Weight of <span className="text-base-green">Small Choices</span>
          </h2>

          <p className="text-emerald-100/80 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Every choice has a ripple effect. Watch the official trailer for the
            ChromeGreen documentary exploring youth climate action, campus
            cleanups, and how everyday decisions shape our shared environment.
          </p>
        </div>

        {/* Video Embed Player Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1.5 bg-linear-to-r from-base-green/40 via-emerald-400/20 to-base-yellow/30 rounded-3xl blur-xl opacity-75 transition duration-700 pointer-events-none" />

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-emerald-500/30 bg-black/90 shadow-2xl">
            {/* 16:9 Aspect Ratio Video Frame */}
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/w-QMrxQvBMU?rel=0&modestbranding=1"
                title="The Weight of Small Choices — A ChromeGreen Documentary | Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Highlights & Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto pt-6 border-t border-emerald-900/50">
          {/* Documentary Tags / Highlights */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {["Community Action", "Climate Literacy", "Youth Leadership"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/60 border border-emerald-800/40 text-emerald-200">
                  #{tag}
                </span>
              ),
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <Link
              href="https://www.youtube.com/watch?v=AVBg0NjIYyo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-red-600/30 hover:-translate-y-0.5">
              <FaYoutube className="size-4" />
              <span>Watch on YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentary;
