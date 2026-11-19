'use client'

import { useEffect,useState,useRef } from "react";
    import { CircleCheck, ShieldCheck, Zap, Clock } from "lucide-react";

export default function CarouselText(){
    const divRef = useRef<HTMLDivElement>(null)
    const [paused, setPaused] = useState(false)
    const list = [
        { title: "IMI CERTIFIED SPECIALISTS", icon: <CircleCheck size={18} /> },
        { title: "INSURANCE APPROVED CENTRE", icon: <ShieldCheck size={18} /> },
        { title: "BOSCH & SNAP-ON DIAGNOSTIC RIGS", icon: <Zap size={18} /> },
        { title: "SAME-DAY TURNAROUND AVAILABLE", icon: <Clock size={18} /> },
    ];
    const set = [...list, ...list, ...list];
    const items = [...set, ...set];
    useEffect(()=>{
        const handleClick = (event:MouseEvent) => {
            if (!divRef.current?.contains(event.target as Node)) {
                setPaused(false)
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    },[])
    return(
        <section className="bg-brand-yellowBg px-4 md:px-20 lg:px-40">
            <div className="relative container mx-auto py-4 overflow-hidden">
                <div ref={divRef} onClick={()=>setPaused(true)} className={`flex gap-6 w-max animate-carousel hover:[animation-play-state:paused] ${paused ? "[animation-play-state:paused]" : ""}`} style={{ animationDuration: `${set.length * 4}s` }}>
                    {items.map((item,index)=>{
                        return(
                            <div key={index} className="bg-white border border-brand-green/50 p-4 shadow-[6px_4px_10px_rgba(0,0,0,0.15)] rounded-2xl flex items-center justify-center gap-2">
                                <span className="w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center">{item.icon}</span>
                                <p className="text-xs lg:text-sm font-medium text-black inline-flex gap-2">{item.title}</p>
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