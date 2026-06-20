import { quicksand } from "@/app/fonts";
import { Card } from "../ui/card";
import SlotCounter from "react-slot-counter";
import { Earth, PersonStanding, User } from "lucide-react";
import AboutUsImages from "../img-components/aboutus-images";

const AboutUs = () => {
  return (
    <section className="w-full py-20 px-5 bg-white relative overflow-hidden flex flex-col justify-center border-t border-base-green/10">
      {/* Background decorations for a beautiful premium look */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-base-green/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-base-green/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center justify-between">
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-base-green/10 border border-base-green/20 backdrop-blur-md self-start mb-6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-base-green opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-base-green"></span>
            </span>
            <span className="text-base-green font-bold text-xs md:text-sm tracking-widest uppercase">
              About The Club
            </span>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className={`${quicksand.className} text-4xl md:text-5xl text-base-green tracking-tight leading-tight`}>
              What is The Chrome Green Club?
            </h2>
            <p className="text-slate-600 md:text-xl text-lg leading-relaxed">
              The ChromeGreen Club is a dynamic, youth-led organization that
              bridges the gap between environmental awareness and community-driven
              change. We aren't just fighting the symptoms of pollution; we are
              addressing the root causes through targeted education, hands-on
              mini-projects, and strategic research.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <Card className="bg-white border-2 border-base-green/10 hover:border-base-green/40 shadow-xs hover:shadow-md rounded-2xl p-5 transition-all duration-300 flex flex-row sm:flex-col lg:flex-row items-center justify-between gap-3 group cursor-default">
              <div className="space-y-1">
                <div className="flex items-baseline gap-0.5">
                  <span className={`${quicksand.className} text-3xl font-extrabold text-base-green`}>
                    <SlotCounter value={1500} />
                  </span>
                  <span className={`${quicksand.className} text-xl font-bold text-base-green`}>+</span>
                </div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Educated</p>
              </div>
              <div className="p-3 rounded-xl bg-base-green/10 text-base-green group-hover:scale-110 transition-transform duration-300 shrink-0">
                <PersonStanding className="size-6" />
              </div>
            </Card>

            <Card className="bg-white border-2 border-base-green/10 hover:border-base-green/40 shadow-xs hover:shadow-md rounded-2xl p-5 transition-all duration-300 flex flex-row sm:flex-col lg:flex-row items-center justify-between gap-3 group cursor-default">
              <div className="space-y-1">
                <div className="flex items-baseline gap-0.5">
                  <span className={`${quicksand.className} text-3xl font-extrabold text-base-green`}>
                    <SlotCounter value={10} />
                  </span>
                  <span className={`${quicksand.className} text-xl font-bold text-base-green`}>+</span>
                </div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Cleanups</p>
              </div>
              <div className="p-3 rounded-xl bg-base-green/10 text-base-green group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Earth className="size-6" />
              </div>
            </Card>

            <Card className="bg-white border-2 border-base-green/10 hover:border-base-green/40 shadow-xs hover:shadow-md rounded-2xl p-5 transition-all duration-300 flex flex-row sm:flex-col lg:flex-row items-center justify-between gap-3 group cursor-default">
              <div className="space-y-1">
                <div className="flex items-baseline gap-0.5">
                  <span className={`${quicksand.className} text-3xl font-extrabold text-base-green`}>
                    <SlotCounter value={100} />
                  </span>
                  <span className={`${quicksand.className} text-xl font-bold text-base-green`}>+</span>
                </div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Volunteers</p>
              </div>
              <div className="p-3 rounded-xl bg-base-green/10 text-base-green group-hover:scale-110 transition-transform duration-300 shrink-0">
                <User className="size-6" />
              </div>
            </Card>
          </div>
        </div>
        <AboutUsImages />
      </div>
    </section>
  );
};

export default AboutUs;
