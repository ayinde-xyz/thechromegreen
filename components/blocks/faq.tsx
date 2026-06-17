"use client";

import { quicksand } from "@/app/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "What is The Chrome Green Club?",
    answer:
      "The ChromeGreen Club is a youth-led environmental organization dedicated to promoting sustainability, climate education, urban cleanups, and green initiatives in our local communities.",
  },
  {
    id: "faq-2",
    question: "Who can join the club?",
    answer:
      "Anyone who is passionate about the environment and sustainability can join! We welcome youth, students, and community volunteers of all backgrounds and skill levels.",
  },
  {
    id: "faq-3",
    question: "How can I participate in cleanup drives or projects?",
    answer:
      "We announce upcoming events, cleanup drives, and community projects on our website and social media channels. You can register for individual events or sign up to become a core volunteer.",
  },
  {
    id: "faq-4",
    question: "What kind of climate education programs do you offer?",
    answer:
      "We host interactive workshops, school seminars, and youth training programs focused on climate literacy, plastic waste reduction, biodiversity conservation, and leadership skills.",
  },
  {
    id: "faq-5",
    question: "How can I support or partner with The Chrome Green Club?",
    answer:
      "You can support us by volunteering, spreading the word, or partnering with us for corporate/community projects. Contact us through our social media or email to discuss collaboration opportunities!",
  },
];

const Faq = () => {
  return (
    <section className="w-full py-20 px-5 bg-white relative overflow-hidden flex flex-col justify-center border-t border-base-green/10">
      {/* Background decorations for a beautiful premium look */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-base-green/5 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-base-green/5 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full bg-base-green/10 border border-base-green/20 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-base-green opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-base-green"></span>
            </span>
            <span className="text-base-green font-bold text-xs md:text-sm tracking-widest uppercase">
              Questions & Answers
            </span>
          </div>
          <h2
            className={`${quicksand.className} text-4xl md:text-5xl text-base-green tracking-tight leading-tight`}>
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 md:text-xl text-lg max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Learn more about The Chrome Green
            Club, our mission, and how you can get involved.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-t-3 border-base-green px-6 bg-slate-50/30 hover:bg-slate-50/60 dark:bg-slate-900/10 dark:hover:bg-slate-900/20 transition-all duration-300  border-b-0">
                <AccordionTrigger className="hover:no-underline text-slate-800 dark:text-slate-100 font-bold text-base md:text-lg py-5">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="size-5 text-base-green shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
