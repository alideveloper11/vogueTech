import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function Services() {
    const list = [
        { title: "Head gasket replacement & repair", desc: "Professional head gasket replacement and repair to fix engine leaks, prevent overheating, and restore optimal engine performance.", src: "/head-gasket-replacement-repair.webp", alt: "head gasket replacement repair", tag: "ENGINE SEALING" },
        { title: "Battery checkup and replacement", desc: "Complete battery inspection and replacement to ensure reliable starting, optimal power, and smooth vehicle performance.", src: "/battery-checkup-and-replacement.webp", alt: "battery checkup and replacement", tag: "ELECTRICAL SYSTEM" },
        { title: "Turbo Replacement", desc: "Professional turbocharger replacement to restore engine power, improve performance, and ensure efficient operation.", src: "/turbo-replacement.webp", alt: "turbo replacement", tag: "TURBOCHARGER SYSTEM" },
        { title: "Engine Rebuild", desc: "Complete engine rebuilding to restore performance, improve reliability, and bring your engine back to optimal working condition.", src: "/engine-rebuild.webp", alt: "engine rebuild", tag: "ENGINE RESTORATION" },
        { title: "Engine diagnostic and health check", desc: "Comprehensive engine diagnostics and health checks to identify issues, detect faults, and keep your engine running smoothly.", src: "/engine-diagnostic-and-health-check.webp", alt: "engine diagnostic and health check", tag: "ENGINE DIAGNOSTICS" },
        { title: "Timing chain replacement", desc: "Expert timing chain replacement to ensure proper engine timing, prevent damage, and maintain smooth, reliable engine performance.", src: "/timing-chain-replacement.webp", alt: "timing chain replacement", tag: "ENGINE TIMING" },
    ];
    return (
        <section id="services" className="bg-white w-full relative">
            <Image src="/s-vector.png" alt="s shape vector" fill className="absolute z-1 object-contain" />
            <div className="container mx-auto px-4 md:px-8 relative z-2">
                <div className="py-8 flex flex-col items-center justify-center gap-4 mx-auto max-w-200">
                    <div className="bg-brand-green/10 flex items-center justify-center gap-4 rounded-lg w-50 h-8">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">SPECIALIST CAPABILITIES</p>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-black text-center">Precision Vehicle Automation Services</h2>
                    </div>
                    <div>
                        <p className="text-xs lg:text-sm font-medium text-brand-grey text-center">Delivering OEM-grade retrofits, diagnostics, and electronic automation architecture.</p>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 rounded-lg">
                    {list.map((item, index) => {
                        return (
                            <div key={index} className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl" >
                                <div className="flex h-full flex-col">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image src={item.src} alt={item.alt} width={600} height={600} loading="lazy" className="object-contain transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute top-3 left-3 z-1 bg-brand-darkGreen text-white px-3 py-2 rounded-md text-xs lg:text-sm font-medium">
                                            {item.tag}
                                        </div>
                                    </div>
                                    <div className="flex grow flex-col p-6">
                                        <h3 className="mb-3 line-clamp-2 text-lg lg:text-xl font-bold text-black group-hover:text-[#00C950] transition-colors">{item.title}</h3>
                                        <p className="mb-4 line-clamp-3 text-xs lg:text-sm font-medium">{item.desc}</p>
                                        <Link href="/contact" className="mb-3 text-xs xl:text-sm font-medium text-[#00C950] group-hover:text-[#0C814A] transition-colors">Get Quote <ArrowRight size={16} className="inline-block" /></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mt-12 w-full flex items-center justify-center">
                    <Link href="/contact" className="inline-flex gap-2 items-center justify-center bg-brand-green rounded-lg p-4 text-white text-xs xl:text-sm font-medium transition-colors duration-300 hover:bg-brand-darkGreen">Book an Appointment <ArrowRight size={16} /></Link>
                </div>
            </div>
        </section>
    )
}