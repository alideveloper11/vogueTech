'use client'

import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

const SLIDE_INTERVAL = 3000;   // time between moves (ms)
const SLIDE_DURATION = 700;    // how long each move takes (ms)

export default function ReviewCarousel() {
    const divRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)
    const [animate, setAnimate] = useState(true)
    const [step, setStep] = useState(0)

    const list = [
        { nameShort: "AW", name: "Alexander Wright", location: "London, UK • 2 weeks ago", content: `"Vogue Tech completed an electric soft-close door and 360° camera retrofit on my Range Rover Autobiography. Flawless OEM finish, identical to factory spec with zero dashboard fault codes. Incredible craftsmanship."`, service: "Service: OEM Soft-Close Retrofit" },
        { nameShort: "SC", name: "Sarah Cartwright", location: "Surrey, UK • 1 month ago", content: `"Had persistent ADAS radar misalignment following a windscreen replacement at another centre. Vogue Tech recalibrated the radar and stereo cameras within 2 hours. Very knowledgeable UK automotive engineers."`, service: "Service: ADAS Radar Calibration" },
        { nameShort: "DB", name: "David Bennett", location: "Berkshire, UK • 3 weeks ago", content: `"Their ECU diagnostics bench is superior to the main dealership. Diagnosed an intermittent CAN-bus electrical fault that two other garages failed to trace. Highly recommend their automation and wiring service."`, service: "Service: CAN-Bus & ECU Diagnostic" },
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
        <section className="bg-white w-full">
            <div className="container mx-auto px-4 md:px-8">
                <div className="py-8 flex flex-col gap-4">
                    <div className="bg-brand-green/10 flex items-center justify-center gap-4 rounded-lg w-60 h-8">
                        <Star size={16} className="text-brand-darkGreen" />
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">VERIFIED FEEDBACK</p>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-black">Rated 4.9/5 by UK Luxury Car Owners</h2>
                    </div>
                    <div>
                        <p className="text-xs lg:text-sm font-medium text-brand-grey">Sample representative customer reviews from Google Business Profile.</p>
                    </div>
                </div>
            </div>
            <div className="py-4 overflow-hidden">
                <div
                    ref={divRef}
                    onTransitionEnd={handleTransitionEnd}
                    className="flex gap-6 w-max"
                    style={{
                        transform: `translateX(-${index * step}px)`,
                        transition: animate ? `transform ${SLIDE_DURATION}ms ease-in-out` : "none",
                    }}
                >
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="bg-white p-4 shadow-md rounded-lg w-90">
                                <div className="flex gap-2 mb-4">
                                    <span className="inline-flex rounded-full bg-brand-green text-white w-10 h-10 items-center justify-center">{item.nameShort}</span>
                                    <div>
                                        <p className="text-lg lg:text-xl font-bold text-black">{item.name}</p>
                                        <p className="text-xs lg:text-sm font-medium text-brand-grey">{item.location}</p>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="text-lg lg:text-xl font-bold text-[#FBBF24]">★★★★★</p>
                                </div>
                                <div className="mt-2 mb-4">
                                    <p className="text-xs lg:text-sm font-medium text-black">{item.content}</p>
                                </div>
                                <div className="mt-2 border-t border-brand-grey pt-4 flex items-center justify-between">
                                    <p className="text-xs lg:text-sm font-medium text-brand-grey">{item.service}</p>
                                    <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">Verified Customer</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}