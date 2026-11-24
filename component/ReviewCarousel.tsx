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
        { nameShort: "ZTK", name: "Zarin Tasnim Khan", location: "2 months ago", content: `"Really happy with the service I received here. The whole process was smooth and straightforward, and the staff were friendly, professional and helpful throughout. They took good care of my car and kept me informed about everything that was being done. The service was completed efficiently and I felt like my car was in good hands. I’d definitely recommend this place to anyone looking for a reliable and trustworthy garage. I’ll be coming back in the future!"`, service: "Service: OEM Soft-Close Retrofit" },
        { nameShort: "MD", name: "Meeka Duhaney", location: "1 month ago", content: `"I can’t thank Vic enough for the amazing job he did fixing my car. He was kind, professional and genuinely went above and beyond. It’s refreshing to come across someone who takes pride in their work and treats their customers with such kindness. I really appreciate all his help and the effort he put into getting my car sorted. I would highly recommend Vic to anyone looking for a trustworthy and reliable mechanic. Thank you again, Vic!"`, service: "Service: ADAS Radar Calibration" },
        { nameShort: "SS", name: "SUNPREET SANDHEY", location: "6 months ago", content: `"I had a really good experience with vogue technics they have fixed my Mercedes C180, done engine refurbisment with them car feel like it has got a new life everything working as it should . There team is so helpfull from the start of the job they helped me recover my car when it brokedown on the motorway,explained me everything throughout the job and gave me the best advise . Az and Jack were dealing with me throughout the job and they have done a great job updated me on every step via whatsapp group and made my life really easy ."`, service: "Service: CAN-Bus & ECU Diagnostic" },
        { nameShort: "PM", name: "Paul Munroe", location: "2 months ago", content: `"Most astounding service i have ever had! The car went in for a wet belt change and they kept me in the loop with WhatsApp messages & videos every step of the way. The guys I met were always very helpful and pleasant, all in all a very good experience The price was less than half of what the main dealer quoted me and I didn't have to wait months to book it in. I highly recommend Vogue Technics for their professionalism and courtesy as well as a good job done."`, service: "Service: OEM Soft-Close Retrofit" },
        { nameShort: "C", name: "Chris", location: "2 month ago", content: `"Really excellent service. The team were so kind, friendly, and professional, and I immediately felt I could trust them. They were honest, helpful, and clearly knowledgeable about what they were doing. It’s reassuring to find a garage you can rely on. I would definitely recommend them! Thank you. Bless to Vogue Technics. 🙏🏿"`, service: "Service: ADAS Radar Calibration" },
        { nameShort: "AA", name: "Argon Automotive", location: "1 months ago", content: `"We had a suspected head gasket issue with our SVR and had quotes from multiple gargaes for the work, we then found Vogue technics and spoke to Jack who you could tell after seconds of speaking to him he knew what he was on about, not to mention he gave us a quote instanlty which turned out to be much cheaper than anyone else we spoke too. They have 10 ramps I belive and specialise in LR engines so we felt confident leaving our 40k vehicle there. They even aranged collection. Whole thing took a few weeks. Would recommend to anyone! Thanks Jack and your team."`, service: "Service: CAN-Bus & ECU Diagnostic" },
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
        <section className="bg-white w-full px-4 md:px-20 lg:px-40">
            <div className="container mx-auto">
                <div className="py-8 flex flex-col gap-4">
                    <div className="bg-brand-green/10 flex items-center justify-center gap-4 rounded-lg w-60 h-8">
                        <Star size={16} className="text-brand-darkGreen" />
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">VERIFIED FEEDBACK</p>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-black">Rated 4.9/5 by Drivers Across Essex, Kent and London</h2>
                    </div>
                    <div>
                        <p className="text-xs lg:text-sm font-medium text-brand-grey">Real reviews from our Google Business Profile, from customers who trusted us with their engines.</p>
                    </div>
                </div>
            </div>
            <div className="relative py-4 overflow-hidden">
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
                            <div key={index} className="bg-white p-4 shadow-md rounded-lg w-90 grid grid-rows-[auto_auto_1fr_auto] gap-y-4">
                                <div className="flex gap-2">
                                    <span className="inline-flex rounded-full bg-brand-green text-white w-10 h-10 items-center justify-center">{item.nameShort}</span>
                                    <div>
                                        <p className="text-lg lg:text-xl font-bold text-black">{item.name}</p>
                                        <p className="text-xs lg:text-sm font-medium text-brand-grey">{item.location}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="text-lg lg:text-xl font-bold text-[#FBBF24]">★★★★★</p>
                                </div>
                                <div className="">
                                    <p className="text-xs lg:text-sm font-medium text-black">{item.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* left blur */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 backdrop-blur-sm [mask-image:linear-gradient(to_right,black,transparent)] [-webkit-mask-image:linear-gradient(to_right,black,transparent)]" />

                {/* right blur */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 backdrop-blur-sm [mask-image:linear-gradient(to_left,black,transparent)] [-webkit-mask-image:linear-gradient(to_left,black,transparent)]" />
            </div>
        </section>
    )
}