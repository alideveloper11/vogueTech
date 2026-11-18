'use client'

import Image from "next/image";

import { useEffect, useState, useRef } from "react";

const SLIDE_INTERVAL = 3000;   // time between moves (ms)
const SLIDE_DURATION = 700;    // how long each move takes (ms)

export default function Gallery() {
    const divRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)
    const [animate, setAnimate] = useState(true)
    const [step, setStep] = useState(0)

    const list = [
        { src: "/Automotive-Automation-Bay-at-Vogue-Tech.webp", alt: "Automotive Automation Bay at Vogue Tech" },
        { src: "/Automotive-Diagnostic-ECU-and-Wiring-Bench-at-Vogue-Tech.webp", alt: "Automotive Diagnostic ECU and Wiring Bench at Vogue Tech" },
        { src: "/vogue-tech-automotive-automation-workshop-uk.webp", alt: "vogue tech automotive automation workshop uk" },
    ];

    // 4 copies so the track always has enough cards to fill wide screens
    const items = [...list, ...list, ...list, ...list];

    // Measure one card width + gap so we know how far to slide
    useEffect(() => {
        const measure = () => {
            const track = divRef.current;
            const first = track?.children[0] as HTMLElement | undefined;
            if (!track || !first) return;
            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            setStep(first.offsetWidth + gap);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // Move one card every SLIDE_INTERVAL (stops while paused/hovered)
    useEffect(() => {
        const id = setInterval(() => {
            setAnimate(true);
            setIndex((i) => i + 1);
        }, SLIDE_INTERVAL);
        return () => clearInterval(id);
    }, []);

    // After sliding through one full set, jump back to 0 with no animation
    const handleTransitionEnd = () => {
        if (index >= list.length) {
            setAnimate(false);
            setIndex(0);
        }
    };

    return (
        <section id="gallery" className="bg-white w-full">
            <div className="container mx-auto px-4 md:px-8">
                <div className="py-8 flex flex-col items-center justify-center gap-4">
                    <div className="bg-brand-green/10 flex items-center justify-center gap-4 rounded-lg w-30 h-8">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">Gallery</p>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-black text-center">A Closer Look at Our Work</h2>
                    </div>
                    <div>
                        <p className="text-xs lg:text-sm font-medium text-brand-grey text-center">Explore the Vogue Tech gallery to see our workshop, automotive services, and expertise in action. From detailed engine repairs to specialist vehicle maintenance, discover the quality workmanship, professional approach, and dedication we bring to every job.</p>
                    </div>
                </div>
            </div>
            <div className="py-4 overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 xl:px-0">
                    <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                        <Image
                            src="/vogue-tech-automotive-automation-workshop-uk.webp"
                            alt="Vogue Tech automotive automation workshop UK"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div
                    ref={divRef}
                    onTransitionEnd={handleTransitionEnd}
                    className="mt-4 flex gap-6 w-max"
                    style={{
                        transform: `translateX(-${index * step}px)`,
                        transition: animate ? `transform ${SLIDE_DURATION}ms ease-in-out` : "none",
                    }}
                >
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <Image src={item.src} alt={item.alt} width={300} height={300} className="object-fill" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}