import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function Services() {
    const list = [
        { title: "Head Gasket Replacement", desc: "Overheating, coolant loss or white exhaust smoke? We pressure test the cooling system, check the cylinder head for damage and fit a gasket kit matched to your engine.", src: "/head-gasket-replacement-repair.webp", alt: "Head Gasket Repair and Replacement", tag: "ENGINE SEALING" },
        { title: "Timing Chain Replacement", desc: "A rattle on cold start is the early warning. We renew the chain, tensioners and guides to factory specification before a stretched chain damages your engine.", src: "/battery-checkup-and-replacement.webp", alt: "Timing Chain Replacement", tag: "ENGINE TIMING" },
        { title: "Turbo Replacement", desc: "Low power, a whistling noise or blue smoke usually means turbo trouble. We find the cause of failure first, then fit a turbo correct for your engine.", src: "/turbo-replacement.webp", alt: "Turbo Replacement", tag: "TURBOCHARGER SYSTEM" },
        { title: "Engine Rebuild", desc: "For engines with serious internal wear, we strip every component, measure, machine and reassemble to manufacturer tolerances, giving your engine a second life.", src: "/engine-rebuild.webp", alt: "Engine Rebuild", tag: "ENGINE RESTORATION" },
        { title: "Engine Repair", desc: "Many engine faults can be fixed without a rebuild. We trace the exact problem and carry out a targeted repair, saving you the cost of unnecessary work.", src: "/engine-diagnostic-and-health-check.webp", alt: "Engine Repair", tag: "ENGINE REPAIR" },
        { title: "Engine Replacement", desc: "If repair no longer makes financial sense, we supply a quality-checked replacement engine, fit it with all ancillaries and fully test it before handover.", src: "/timing-chain-replacement.webp", alt: "Engine Replacement", tag: "ENGINE SUPPLY & FIT" },
        { title: "Engine Swap", desc: "Planning an upgrade or a change of engine type? We advise on compatibility and cost upfront, then handle sourcing, fitting and setup from start to finish.", src: "/engine-swap.png", alt: "Engine Swap", tag: "ENGINE CONVERSION" },
        { title: "Timing Belt Replacement", desc: "A snapped timing belt can wreck an engine in seconds. We replace the belt, tensioners and water pump together, on schedule, so the job is done once.", src: "/timing-belt-replacement.png", alt: "Timing Belt Replacement", tag: "BELT SERVICE" },
        { title: "Engine Health Check", desc: "Buying a used car or worried about an unexplained symptom? Our health check combines specialist diagnostics with a physical inspection for a clear, honest report.", src: "/engine-diagnostics-and-health-check.webp", alt: "Engine Diagnostics and Health Check", tag: "ENGINE DIAGNOSTICS" },
    ];
    return (
        <section id="services" className="bg-white relative px-4 md:px-20 lg:px-40">
            <div className="container mx-auto relative">
                <Image src="/s-vector.png" alt="s shape vector" fill className="absolute z-1 object-contain" />
                <div className="relative z-2">
                    <div className="py-8 flex flex-col items-center justify-center gap-4 mx-auto max-w-200">
                        <div className="bg-brand-green/10 flex items-center justify-center gap-4 rounded-lg w-50 h-8">
                            <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">SPECIALIST SERVICES</p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-black text-black text-center">Engine Repair Services We Offer</h2>
                        </div>
                        <div>
                            <p className="text-xs lg:text-sm font-medium text-brand-grey text-center">From a quick health check to a complete rebuild, every service is carried out in-house by experienced technicians.</p>
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
                                        <div className="flex flex-col p-6">
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
            </div>
        </section>
    )
}