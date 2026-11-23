"use client";

import Image from "next/image";
import Link from "next/link";
import { quicksand } from "@/app/fonts";
import { Card, CardContent } from "@/components/ui/card";
import cloudinaryLoader from "@/utils/image/loader";
import {
  GraduationCap,
  Microscope,
  Recycle,
  Sparkles,
  Users2,
  HeartHandshake,
  Award,
  Globe2,
  Calendar,
  Building2,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Video,
  Target,
  Compass,
} from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

// Core Pillars from Document
const corePillars = [
  {
    icon: GraduationCap,
    title: "1. Environmental Education & Awareness",
    description:
      "Organising interactive webinars, seminars, school outreaches, and digital educational campaigns to introduce youth and local communities to critical topics including climate change, plastic pollution, circular waste management, biodiversity, and sustainable living.",
    color: "from-emerald-500/10 to-teal-500/10",
    badge: "Education",
  },
  {
    icon: Microscope,
    title: "2. Environmental Research",
    description:
      "Conducting empirical research into environmental attitudes, knowledge, and waste disposal practices within the University of Ilorin community. We incorporate rigorous waste audits and assessment data to design targeted, evidence-informed interventions.",
    color: "from-blue-500/10 to-cyan-500/10",
    badge: "Research",
  },
  {
    icon: Recycle,
    title: "3. Community Action & Campaigns",
    description:
      "Leading physical campus and community cleanups, plastic waste collection drives, restoration activities, and vibrant public rallies that take environmental sustainability beyond lecture halls directly into public squares and streets.",
    color: "from-green-500/10 to-emerald-500/10",
    badge: "Action",
  },
  {
    icon: HelpCircle,
    title: "4. Campus Street Trivia & Engagement",
    description:
      "Engaging students on the go with relatable, fast-paced trivia and everyday questions about environmental issues. This innovative street format makes sustainability conversations exciting, fun, and accessible to everyone.",
    color: "from-amber-500/10 to-yellow-500/10",
    badge: "Engagement",
  },
  {
    icon: Users2,
    title: "5. Youth Development & Leadership",
    description:
      "Cultivating the next generation of environmental changemakers by providing members with practical leadership, teamwork, public advocacy, communication, project execution, and field research skills.",
    color: "from-purple-500/10 to-indigo-500/10",
    badge: "Leadership",
  },
  {
    icon: HeartHandshake,
    title: "6. Multi-Sector Partnerships & Advocacy",
    description:
      "Collaborating closely with student unions, non-governmental organisations, ministries, and community leaders to scale grassroots impact, mobilize volunteers, and advocate for sustainable institutional policies.",
    color: "from-teal-500/10 to-green-500/10",
    badge: "Advocacy",
  },
];

// Major Initiatives from Document
const majorInitiatives = [
  {
    title: "Project Eco Revive",
    partner: "In partnership with Kwara State Ministry of Environment",
    stats: "150+ Students Engaged",
    description:
      "A flagship collaborative initiative featuring comprehensive environmental cleanups, scientific waste audits, habitat restoration, permanent environmental signage, and digital advocacy.",
    image: "aboutus1_fr4nsb",
    tag: "Cleanups & Restoration",
  },
  {
    title: "Green Minds Initiative",
    partner: "School Outreach Programme",
    stats: "60+ Students across 2 Schools",
    description:
      "A school-based environmental curriculum designed to establish and mentor student-led eco-clubs in secondary schools, cultivating lifelong sustainability habits from an early age.",
    image: "aboutus2_q373ch",
    tag: "Youth & Schools",
  },
  {
    title: "Trash to Treasure Tourney",
    partner: "Campus Inter-Hostel Competition",
    stats: "Hostel Waste Collection",
    description:
      "A gamified campus initiative that encourages plastic waste sorting, collection, and responsible recycling through high-spirited friendly competition between university hostels.",
    image: "aboutus3_ol0lnu",
    tag: "Recycling & Competition",
  },
  {
    title: "Environmental Storytelling & Documentary",
    partner: "Top 10 in Africa • 2026 ACF Climate Stories",
    stats: "Official Mini-Documentary",
    description:
      "Our documentary 'The Weight of Small Choices' highlights pressing environmental challenges and everyday human decisions, earning continental recognition among Africa's Top 10 climate stories.",
    image: "hero3_tzl6t4.jpg",
    tag: "Storytelling & Media",
    link: "/#documentary",
  },
  {
    title: "Campus Street Trivia",
    partner: "Street Outreach Series",
    stats: "Campus-Wide Participation",
    description:
      "An interactive street-level campaign that puts everyday environmental knowledge to the test, rewarding curiosity and turning casual conversations into moments of climate empowerment.",
    image: "hero2_ztez5p.jpg",
    tag: "Interactive Education",
  },
  {
    title: "Community Environmental Research",
    partner: "University of Ilorin Campus Audits",
    stats: "Evidence-Based Studies",
    description:
      "Academic and on-ground field studies examining waste management behaviors and attitudes, providing hard empirical data to guide institutional policies and future projects.",
    image: "hero1_ztez5p.jpg",
    tag: "Scientific Research",
  },
];

// Executive Leadership Team Structure
const executiveRoles = [
  { role: "President", focus: "Overall strategic vision, organizational guidance, and external relations" },
  { role: "General Secretary", focus: "Internal communications, administrative operations, and documentation" },
  { role: "Project Manager", focus: "Execution, logistics, and planning of on-ground events and cleanups" },
  { role: "Research Manager", focus: "Field surveys, waste audits, academic inquiry, and impact assessments" },
  { role: "Fundraising Manager", focus: "Resource mobilization, grants, sponsorships, and financial stewardship" },
  { role: "Public Relations Officer (PRO)", focus: "Media strategy, digital campaigns, brand storytelling, and press" },
  { role: "Community Manager", focus: "Member engagement, volunteer recruitment, culture, and club welfare" },
];

// Key Collaborators & Partners
const collaborators = [
  "Kwara State Ministry of Environment",
  "Nigerian Red Cross Society (Unilorin Detachment)",
  "AIESEC in Ilorin",
  "Hope Alliance Initiative",
  "ILUMSA (Ilorin University Medical Students' Association)",
  "University of Ilorin Community",
];

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0b241b] text-white overflow-hidden border-b border-emerald-900/40">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-base-green/20 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-base-yellow/10 rounded-full filter blur-3xl pointer-events-none translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-base-green/40 backdrop-blur-md">
                <Calendar className="size-3.5 text-base-green" />
                <span className="text-emerald-300 font-bold text-xs uppercase tracking-wider">
                  Established 7 July 2023
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/40">
                <Building2 className="size-3.5 text-base-yellow" />
                <span className="text-emerald-200 font-semibold text-xs uppercase tracking-wider">
                  University of Ilorin, Nigeria
                </span>
              </div>
            </div>

            <h1
              className={`${quicksand.className} text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]`}>
              Empowering Youth to Lead the Way to a{" "}
              <span className="text-base-green">Sustainable Future</span>
            </h1>

            <p className="text-emerald-100/80 text-lg md:text-xl font-light leading-relaxed">
              ChromeGreen Club is a vibrant, student-led environmental sustainability
              movement founded at the University of Ilorin. We combine hands-on
              community action, empirical research, school education, and digital storytelling
              to drive lasting ecological change.
            </p>

            {/* Core Values Tagline */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs md:text-sm font-bold tracking-widest text-emerald-300 uppercase">
              <span className="bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/40">Education</span>
              <span className="text-base-green">•</span>
              <span className="bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/40">Action</span>
              <span className="text-base-green">•</span>
              <span className="bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/40">Sustainability</span>
              <span className="text-base-green">•</span>
              <span className="bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/40">Community</span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-emerald-900/50">
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/30">
              <div className={`${quicksand.className} text-3xl md:text-4xl font-extrabold text-base-green`}>
                100+
              </div>
              <p className="text-emerald-200/70 text-xs md:text-sm font-medium mt-1">
                Active Student Members
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/30">
              <div className={`${quicksand.className} text-3xl md:text-4xl font-extrabold text-base-yellow`}>
                1,000+
              </div>
              <p className="text-emerald-200/70 text-xs md:text-sm font-medium mt-1">
                Community Members Reached
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/30">
              <div className={`${quicksand.className} text-3xl md:text-4xl font-extrabold text-emerald-400`}>
                1,500+ kg
              </div>
              <p className="text-emerald-200/70 text-xs md:text-sm font-medium mt-1">
                Plastic Waste Collected
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/30">
              <div className={`${quicksand.className} text-3xl md:text-4xl font-extrabold text-white flex items-center gap-1`}>
                Top 10 <Award className="size-5 text-base-yellow" />
              </div>
              <p className="text-emerald-200/70 text-xs md:text-sm font-medium mt-1">
                2026 ACF Africa Climate Stories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY & PHILOSOPHY */}
      <section className="w-full py-20 px-5 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-base-green/10 border border-base-green/20">
              <Sparkles className="size-3.5 text-base-green" />
              <span className="text-base-green font-bold text-xs uppercase tracking-wider">
                Our Story & Philosophy
              </span>
            </div>

            <h2 className={`${quicksand.className} text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight`}>
              More than Awareness Alone:{" "}
              <span className="text-base-green">Multi-Angle Sustainability</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Established on <strong>7 July 2023</strong> at the <strong>University of Ilorin</strong>,
              ChromeGreen Club was created to spark active environmental consciousness and ownership
              among young Nigerians.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We approach environmental sustainability through a holistic lens. Addressing climate
              vulnerabilities and plastic pollution cannot rely on rhetoric alone—it requires a seamless
              blend of <strong>formal education</strong>, <strong>empirical research</strong>,
              <strong> grassroots community mobilization</strong>, <strong>behavioural shift</strong>,
              and <strong>direct physical interventions</strong>.
            </p>

            {/* Philosophy checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Targeted School & Youth Education",
                "Rigorous Campus Waste Audits",
                "Hands-on Cleanups & Restoration",
                "Action-Oriented Environmental Rallies",
                "Accessible Street Engagement & Trivia",
                "Continental-Calibre Storytelling",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-slate-700 font-medium text-sm">
                  <CheckCircle2 className="size-4 text-base-green shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-base-green/15 shadow-2xl group">
              <div className="relative h-[360px] sm:h-[420px] w-full">
                <Image
                  loader={cloudinaryLoader}
                  src="aboutus1_fr4nsb"
                  alt="ChromeGreen Club Earth Day Rally"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-base-green text-white uppercase tracking-wider inline-block">
                    Field Action
                  </span>
                  <h3 className={`${quicksand.className} text-xl font-bold`}>
                    World Earth Day Mini Rally
                  </h3>
                  <p className="text-xs text-slate-200">
                    Mobilizing university youth to protect our local spaces and foster collective accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (6 CORE PILLARS) */}
      <section className="w-full py-20 px-5 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-base-green/10 border border-base-green/20">
              <Compass className="size-3.5 text-base-green" />
              <span className="text-base-green font-bold text-xs uppercase tracking-wider">
                What We Do
              </span>
            </div>
            <h2 className={`${quicksand.className} text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>
              Our Six Core Pillars of Impact
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Each pillar operates synergistically to translate environmental awareness into
              measurable, lasting community outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border-2 border-slate-200/70 hover:border-base-green/50 shadow-sm hover:shadow-xl rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-xl bg-base-green/10 text-base-green group-hover:bg-base-green group-hover:text-white transition-colors duration-300">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className={`${quicksand.className} text-xl font-bold text-slate-900 group-hover:text-base-green transition-colors duration-300`}>
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MAJOR INITIATIVES SHOWCASE */}
      <section className="w-full py-20 px-5 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-base-green/10 border border-base-green/20">
              <Target className="size-3.5 text-base-green" />
              <span className="text-base-green font-bold text-xs uppercase tracking-wider">
                Flagship Projects
              </span>
            </div>
            <h2 className={`${quicksand.className} text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>
              Some of Our Major Initiatives
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Explore the key programmes, campaigns, and partnerships that define our legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorInitiatives.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-slate-200/80 hover:border-base-green/40 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col group">
                {/* Visual Placeholder / Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    loader={cloudinaryLoader}
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                    {item.tag}
                  </div>
                  {item.stats && (
                    <div className="absolute bottom-3 right-3 bg-base-green text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                      {item.stats}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col justify-between grow space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-base-green tracking-wide uppercase">
                      {item.partner}
                    </p>
                    <h3 className={`${quicksand.className} text-xl font-bold text-slate-900`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.link ? (
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-base-green hover:underline pt-2">
                      Watch Documentary Trailer <ArrowRight className="size-4" />
                    </Link>
                  ) : (
                    <div className="pt-2 text-xs text-slate-400 font-medium">
                      Ongoing & Recurring Initiative
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORGANISATIONAL STRUCTURE & LEADERSHIP */}
      <section className="w-full py-20 px-5 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-base-green/10 border border-base-green/20">
              <Users2 className="size-3.5 text-base-green" />
              <span className="text-base-green font-bold text-xs uppercase tracking-wider">
                Leadership Model
              </span>
            </div>
            <h2 className={`${quicksand.className} text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>
              Organisational Structure
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              ChromeGreen operates through a collaborative executive leadership team.
              Each executive directs a key portfolio, supported by dedicated sub-committees
              and an active general membership across the campus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {executiveRoles.map((exec, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-base-green/40 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="size-10 rounded-xl bg-base-green/10 text-base-green flex items-center justify-center font-bold text-sm mb-3">
                  0{i + 1}
                </div>
                <h3 className={`${quicksand.className} text-lg font-bold text-slate-900`}>
                  {exec.role}
                </h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  {exec.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COLLABORATORS & STRATEGIC REACH */}
      <section className="w-full py-16 px-5 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs uppercase font-bold tracking-widest text-base-green">
              Strategic Reach & Alliances
            </p>
            <h2 className={`${quicksand.className} text-2xl md:text-3xl font-bold text-slate-900`}>
              Our Partners & Collaborators
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {collaborators.map((name, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold hover:border-base-green/40 hover:text-base-green hover:bg-emerald-50/50 transition-all duration-200 cursor-default">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BROADER DIRECTION & CALL TO ACTION */}
      <section className="w-full py-20 px-5 bg-[#0b241b] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-base-green/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-base-yellow/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-base-green/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            <Globe2 className="size-3.5 text-base-green" /> Our Broader Horizon
          </div>

          <h2 className={`${quicksand.className} text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight`}>
            Building an Environmentally Conscious & Active Youth Community
          </h2>

          <p className="text-emerald-100/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Beyond the University of Ilorin, ChromeGreen is expanding eco-clubs into secondary
            schools, deepening empirical climate research, developing localized circular waste systems,
            and fostering cross-sector collaborations across Africa.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://chat.whatsapp.com/CuSjkwPv3Xh30TiAaGKRh0?s=sw&p=a&iam=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-base-green hover:bg-base-green/90 text-white font-bold transition-all shadow-lg hover:shadow-base-green/25 hover:-translate-y-1 active:translate-y-0 text-sm md:text-base">
              <FaWhatsapp className="size-5" /> Join ChromeGreen Club
            </Link>

            <Link
              href="/#documentary"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all hover:-translate-y-1 active:translate-y-0 text-sm md:text-base">
              <Video className="size-4" /> Watch Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
