'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick,}: { question: string; answer: string; isOpen: boolean; onClick: () => void;}) => {
  return (
    <div className="border border-brand-darkGreen rounded-xl overflow-hidden bg-white px-4 md:px-8">
      <button onClick={onClick} className="w-full text-left py-6 md:py-8 flex items-center justify-between group">
        <div className="flex items-center">
          <span className="text-lg lg:text-xl font-bold text-black pr-4">
            {question}
          </span>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-sub-heading transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-primary" : "rotate-0"}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-8 text-sub-heading text-xs lg:text-sm font-medium">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Faq(){
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faq =  {
        badge: "QUESTIONS & ANSWERS",
        heading: "Frequently Asked Questions",
        subHeading: "Clear answers to what customers ask us most.",
        questions: [
            { question: "How much does an engine rebuild cost?", answer: "It depends on the engine, the damage and the parts needed. A top-end repair costs far less than a full bottom-end rebuild. After our diagnostic assessment you receive a fully itemised quote, so you know the price before any work begins."},
            { question: "How long does an engine rebuild take?", answer: "A full rebuild usually takes five to ten working days, depending on the job and parts availability. We give you a realistic timescale with your quote and keep you updated throughout."},
            { question: "Do you offer a warranty on engine work?", answer: "Yes. Reconditioned engines carry a six-month warranty and used engine swaps carry one month. Extended cover of 12 to 24 months is available at extra cost. Your terms are confirmed in writing."},
            { question: "Will using an independent specialist affect my manufacturer warranty?", answer: "No, not automatically. Your warranty stays valid when work is done to the correct standard with appropriate parts, which is how we work. Once your car is out of warranty, an independent specialist can save you a significant amount."},
            { question: "How do I book and get a quote?", answer: "Call 01375 531355 or send a quote request online with your registration and symptoms. A combined charge of £95 may apply for initial diagnostics, sundries and consumables, and we always explain costs before work starts."},
        ]
    }

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <section className="bg-brand-yellowBg px-4 md:px-20 lg:px-40">
            <div className="container mx-auto py-10">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">{faq.badge}</p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-black uppercase">{faq.heading}</h2>
                    <p className="text-xs lg:text-sm font-medium text-gray-600">{faq.subHeading}</p>
                    <div className="flex flex-col w-full gap-4">
                        {faq.questions.map((item, index) => (
                            <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}