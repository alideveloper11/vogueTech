
'use client'

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const SLIDE_DURATION = 500;

const list = [
    { src: "/gallery/1.png", alt: "Gallery 1" },
    { src: "/gallery/2.png", alt: "Gallery 2" },
    { src: "/gallery/3.png", alt: "Gallery 3" },
    { src: "/gallery/4.png", alt: "Gallery 4" },
    { src: "/gallery/5.png", alt: "Gallery 5" },
    { src: "/gallery/6.png", alt: "Gallery 6" },
    { src: "/gallery/7.png", alt: "Gallery 7" },
    { src: "/gallery/8.png", alt: "Gallery 8" },
    { src: "/gallery/9.png", alt: "Gallery 9" },
];

export default function Gallery() {

    const trackRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState(0);
    const [step, setStep] = useState(0);
    const [maxOffset, setMaxOffset] = useState(0);

    // Measure carousel dimensions
    useEffect(() => {

        const measure = () => {

            const track = trackRef.current;
            const viewport = viewportRef.current;
            const first = track?.children[0] as HTMLElement | undefined;

            if (!track || !viewport || !first) return;

            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;

            setStep(first.offsetWidth + gap);

            setMaxOffset(
                Math.max(0, track.scrollWidth - viewport.clientWidth)
            );
        };

        measure();

        window.addEventListener("resize", measure);

        return () => window.removeEventListener("resize", measure);

    }, []);

    // Calculate current carousel position
    const offset = Math.min(index * step, maxOffset);

    // Navigation button visibility
    const canPrev = offset > 0;
    const canNext = offset < maxOffset - 1;

    const maxIndex = step > 0
    ? Math.ceil(maxOffset / step)
    : 0;

    const next = () => {
        setIndex((i) => Math.min(i + 1, maxIndex));
    };

    const prev = () => {
        setIndex((i) => Math.max(i - 1, 0));
    };

    return (

        <section
            id="gallery"
            className="bg-white px-4 md:px-20 lg:px-40"
        >

            <div className="container mx-auto">

                {/* Heading */}
                <div className="py-8 flex flex-col items-center justify-center gap-4">

                    <div className="bg-brand-green/10 flex items-center justify-center gap-4 rounded-lg w-30 h-8">

                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">
                            GALLERY
                        </p>

                    </div>

                    <div>

                        <h2 className="text-3xl lg:text-4xl font-black text-black text-center">
                            A Closer Look at Our Work
                        </h2>

                    </div>

                    <div>

                        <p className="text-xs lg:text-sm font-medium text-brand-grey text-center">
                            See inside our Thurrock workshop, from engine strip-downs and timing chain jobs to finished rebuilds ready for the road.
                        </p>

                    </div>

                </div>

            </div>

            <div className="py-4 overflow-hidden">

                {/* Featured Image */}
                <div className="container mx-auto">

                    <div className="relative w-full h-[300px] rounded-lg overflow-hidden">

                        <Image
                            src="/gallery/main-gallery-image.jpeg"
                            alt="Main Gallery Image"
                            fill
                            priority
                            className="object-cover"
                        />

                    </div>

                </div>

                {/* Carousel */}
                <div
                    ref={viewportRef}
                    className="relative overflow-hidden"
                >

                    {/* Image Track */}
                    <div
                        ref={trackRef}
                        className="mt-4 flex gap-6 w-max"
                        style={{
                            transform: `translateX(-${offset}px)`,
                            transition: `transform ${SLIDE_DURATION}ms ease-in-out`,
                        }}
                    >

                        {list.map((item, i) => (

                            <div
                                key={i}
                                className="bg-white shadow-md rounded-lg overflow-hidden shrink-0 h-[300px] w-[220px] md:w-[260px] lg:w-[300px]"
                            >

                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />

                            </div>

                        ))}

                    </div>

                    {/* Left Blur */}
                    {canPrev && (

                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 backdrop-blur-sm [mask-image:linear-gradient(to_right,black,transparent)] [-webkit-mask-image:linear-gradient(to_right,black,transparent)]"
                        />

                    )}

                    {/* Right Blur */}
                    {canNext && (

                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 backdrop-blur-sm [mask-image:linear-gradient(to_left,black,transparent)] [-webkit-mask-image:linear-gradient(to_left,black,transparent)]"
                        />

                    )}

                    {/* Previous Button */}
                    {canPrev && (

                        <button
                            onClick={prev}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-green shadow-md transition-colors hover:bg-brand-green hover:text-white"
                        >

                            <ChevronLeft size={22} />

                        </button>

                    )}

                    {/* Next Button */}
                    {canNext && (

                        <button
                            onClick={next}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-green shadow-md transition-colors hover:bg-brand-green hover:text-white"
                        >

                            <ChevronRight size={22} />

                        </button>

                    )}

                </div>

            </div>

        </section>

    );

}
