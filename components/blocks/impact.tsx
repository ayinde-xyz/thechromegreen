import { quicksand } from "@/app/fonts";
import { Card, CardContent, CardHeader } from "../ui/card";
import SlotCounter from "react-slot-counter";

import {
  FaTrashAlt,
  FaGraduationCap,
  FaUsers,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { GiSprout } from "react-icons/gi";
const impactPillars = [
  {
    icon: FaGraduationCap,
    title: "Climate Education",
    metric: 1500,
    suffix: "+",
    description:
      "Students educated and empowered through school workshops and climate leadership sessions to foster long-term environmental stewardship.",
    accent:
      "bg-base-green/20 text-base-green dark:bg-emerald-950/30 dark:text-emerald-400",
  },
  {
    icon: FaTrashAlt,
    title: "Urban Cleanups",
    metric: 10,
    suffix: "+",
    description:
      "Successful waste collection campaigns restoring clean green spaces, sorting recyclable plastics, and promoting circular economy practices.",
    accent:
      "bg-base-green/20 text-base-green  dark:bg-teal-950/30 dark:text-teal-400",
  },
  {
    icon: FaUsers,
    title: "Youth Mobilization",
    metric: 100,
    suffix: "+",
    description:
      "Active members and passionate volunteers leading localized green drives and acquiring core sustainability leadership skills.",
    accent:
      "bg-base-green/20 text-base-green dark:bg-cyan-950/30 dark:text-cyan-400",
  },
  {
    icon: GiSprout,
    title: "Eco-Projects",
    metric: 5,
    suffix: "+",
    description:
      "Hands-on projects spanning waste separation setups, community organic gardening, and local biodiversity initiatives.",
    accent:
      "bg-base-green/20 text-base-green dark:bg-lime-950/30 dark:text-lime-400",
  },
];

const OurImpact = () => {
  return (
    <section className="w-full py-20 px-5  bg-base-yellow relative overflow-hidden flex flex-col justify-center border-t border-base-green/10">
      {/* Background decorations for a beautiful premium look */}
      <div className="absolute  top-0 left-0 w-96 h-96 bg-base-green/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-base-green/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-base-green/10 border border-base-green/20 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-base-green opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-base-green"></span>
            </span>
            <span className="text-base-green font-bold text-xs md:text-sm tracking-widest uppercase">
              Our Footprint
            </span>
          </div>
          <h2
            className={`${quicksand.className} text-4xl md:text-5xl text-base-green tracking-tight leading-tight`}>
            Making a Real Difference
          </h2>
          <p className="text-slate-600 md:text-xl text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in tangible actions over words. Through targeted
            education, community cleanups, and youth empowerment, we are driving
            measurable environmental change.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="bg-white border-2 border-base-green/10 hover:border-base-green/60 shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                <CardHeader className="p-0 mb-6 flex flex-row items-center justify-between">
                  <div
                    className={`p-4 rounded-xl ${pillar.accent} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="size-6" />
                  </div>
                  <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Pillar 0{index + 1}
                  </div>
                </CardHeader>

                <CardContent className="p-0 grow flex flex-col justify-between">
                  <div>
                    <h3
                      className={`${quicksand.className} text-2xl text-slate-800 mb-2 group-hover:text-base-green transition-colors duration-300`}>
                      {pillar.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span
                        className={`${quicksand.className} text-4xl md:text-5xl font-extrabold text-base-green`}>
                        <SlotCounter value={pillar.metric} />
                      </span>
                      <span
                        className={`${quicksand.className} text-2xl font-bold text-base-green`}>
                        {pillar.suffix}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Subtle link indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-base-green opacit group-hover:opacity-100 transition-opacity duration-300 gap-1.5 cursor-pointer">
                    View active programs
                    <FaLongArrowAltRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Beautiful Section: Call to Action Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-linear-to-r from-base-green to-base-green/80 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-2xl translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-center md:text-left">
              <h3
                className={`${quicksand.className} text-3xl md:text-4xl font-bold`}>
                Be Part of the Green Transition
              </h3>
              <p className="text-white/80 text-base md:text-lg">
                Every cleanup drive, school seminar, and tree planted brings us
                closer to a sustainable future. Explore our active projects and
                see how you can contribute.
              </p>
            </div>
            <div className="shrink-0">
              <button className="bg-white hover:bg-base-yellow text-base-green font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer">
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
