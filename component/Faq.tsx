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
        heading: "Frequently Asked Questions",
        subHeading: "Conveniently situated with dedicated diagnostic bays and client waiting lounge.",
        questions: [
            { question: "What vehicles and marques do you support for automation retrofits?", answer: "We combine your vehicle details with the video, image or text you provide to identify likely faults and explain the next best action."},
            { question: "Will installing automated accessories or ECU software void my manufacturer warranty?", answer: "We combine your vehicle details with the video, image or text you provide to identify likely faults and explain the next best action."},
            { question: "What is the typical turnaround time for ADAS calibration and automation installs?", answer: "We combine your vehicle details with the video, image or text you provide to identify likely faults and explain the next best action."},
            { question: "What warranty and guarantee do you provide on completed work?", answer: "We combine your vehicle details with the video, image or text you provide to identify likely faults and explain the next best action."},
            { question: "How do I book an appointment and obtain a quote?", answer: "We combine your vehicle details with the video, image or text you provide to identify likely faults and explain the next best action."},
        ]
    }

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <section className="bg-brand-yellowBg px-4 md:px-8">
            <div className="container mx-auto py-10">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">LOCATION & BOOKINGS</p>
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