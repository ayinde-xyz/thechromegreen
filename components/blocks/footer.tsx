"use client";

import { quicksand } from "@/app/fonts";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, Heart } from "lucide-react";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0b241b] text-white border-t border-emerald-900/30 pt-16 pb-8 overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-base-green/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-base-yellow/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-emerald-900/40">
          {/* Brand/About Column */}
          <div className="space-y-4">
            <h3
              className={`${quicksand.className} text-2xl font-bold tracking-tight text-white`}>
              The Chrome <span className="text-base-green">Green</span>
            </h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed max-w-sm">
              A dynamic, youth-led movement bridging the gap between
              environmental awareness and community-driven action. Join us in
              building a sustainable future.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/chromegreen_club?igsh=bWlrNGZtMWhhcXJl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900/40 text-emerald-100 hover:text-base-yellow hover:bg-emerald-900/60 hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram">
                <FaInstagram className="size-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900/40 text-emerald-100 hover:text-base-yellow hover:bg-emerald-900/60 hover:-translate-y-1 transition-all duration-300"
                aria-label="Facebook">
                <FaFacebook className="size-5" />
              </a>
              <a
                href="https://x.com/chromegreenclub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900/40 text-emerald-100 hover:text-base-yellow hover:bg-emerald-900/60 hover:-translate-y-1 transition-all duration-300"
                aria-label="Twitter">
                <FaTwitter className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-chromegreen-club"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900/40 text-emerald-100 hover:text-base-yellow hover:bg-emerald-900/60 hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn">
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4
              className={`${quicksand.className} text-lg font-bold text-white tracking-wide uppercase`}>
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-block text-emerald-100/70 hover:text-base-yellow hover:translate-x-1 transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="inline-block text-emerald-100/70 hover:text-base-yellow hover:translate-x-1 transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#impact"
                  className="inline-block text-emerald-100/70 hover:text-base-yellow hover:translate-x-1 transition-all duration-200">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="inline-block text-emerald-100/70 hover:text-base-yellow hover:translate-x-1 transition-all duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="inline-block text-emerald-100/70 hover:text-base-yellow hover:translate-x-1 transition-all duration-200">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4
              className={`${quicksand.className} text-lg font-bold text-white tracking-wide uppercase`}>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:thechrmgreen@gmail.com"
                  className="flex items-center gap-3 text-emerald-100/70 hover:text-base-yellow group transition-colors duration-200">
                  <span className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-900/40 group-hover:bg-emerald-900/60 transition-colors">
                    <Mail className="size-4 text-base-yellow" />
                  </span>
                  thechrmgreen@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348087667304"
                  className="flex items-center gap-3 text-emerald-100/70 hover:text-base-yellow group transition-colors duration-200">
                  <span className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-900/40 group-hover:bg-emerald-900/60 transition-colors">
                    <Phone className="size-4 text-base-yellow" />
                  </span>
                  +234 808 766 7304
                </a>
              </li>
            </ul>
          </div>

          {/* Location/Address Column */}
          <div className="space-y-4">
            <h4
              className={`${quicksand.className} text-lg font-bold text-white tracking-wide uppercase`}>
              Our Address
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=ChromeGreen+Club+HQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-emerald-100/70 hover:text-base-yellow group transition-colors duration-200">
                <span className="p-2 mt-0.5 rounded-lg bg-emerald-950/60 border border-emerald-900/40 group-hover:bg-emerald-900/60 transition-colors shrink-0">
                  <MapPin className="size-4 text-base-yellow" />
                </span>
                <span className="leading-relaxed">
                  College of Health Science,
                  <br />
                  University of Ilorin
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <div className="flex items-center gap-1.5 text-xs text-emerald-100/50">
            <span>
              &copy; {currentYear} The Chrome Green Club. All rights reserved.
              Built by{" "}
              <Link href={"https://ayindeabdulrahman.xyz"}>
                <span className="font-bold underline">ayinde_dev</span>
              </Link>
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <Heart className="size-3 text-red-500 fill-red-500 animate-pulse" />{" "}
              for a green future
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-900/60 text-xs font-semibold tracking-wider uppercase hover:bg-emerald-900 hover:border-emerald-800 hover:text-base-yellow transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group">
            Back to Top
            <ArrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
