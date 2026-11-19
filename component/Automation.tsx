import Image from "next/image"

import { CircleCheck } from "lucide-react"

export default function Automation(){
    return(
        <div className="bg-brand-yellowBg mt-8 px-4 md:px-20 lg:px-40">
            <div className="container mx-auto py-16">
                <div className="hidden lg:grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-90">
                            <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">UK ENGINE REBUILD & ENGINEERING SPECIALISTS</p>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-black">Expert Engine Rebuilds, Repairs & Performance Restoration</h2>
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                            At <span className="text-brand-darkGreen">Vogue Tech</span>, we specialise in professional engine rebuilding, replacement, and mechanical repair services for luxury, commercial, and enthusiast vehicles across the United Kingdom. Our experienced technicians combine precision engineering with industry-leading practices to restore engine performance, reliability, and efficiency. Whether your vehicle requires a complete engine rebuild, a replacement engine, or a critical repair, we deliver dependable solutions tailored to its specific requirements. From identifying internal engine faults to restoring essential components, we focus on quality workmanship and long-lasting results. Our expertise covers <span className="text-brand-darkGreen">complete engine rebuilds, head gasket replacement, engine health assessments, and DPF cleaning,</span> alongside a range of specialist engine maintenance and repair services. Every job is approached with careful inspection, technical precision, and attention to detail. At Vogue Tech, our goal is simple: to keep your engine running at its best through reliable repairs, expert workmanship, and professional service you can trust.
                        </p>
                        <div className="border-t border-brand-darkGreen w-full flex items-center justify-between pt-8 mt-8">
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">OEM Wiring Standards</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">Dealer-Level Software</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">Certified Technicians</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-end justify-center">
                        <div className="relative">
                            <Image
                                src="/engine-repiring-for-land-rover.webp"
                                alt="engine repairing for Land Rover"
                                width={500}
                                height={120}
                                className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)] w-100 h-40 object-cover object-center"
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-90">
                                <p className="text-xs font-medium text-brand-darkGreen">
                                    ADVANCED BENCH RIG
                                </p>
                                <p className="text-xs font-medium text-[#475569]">
                                    High-frequency oscilloscope & CAN-bus packet analyzer in active operation.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/engine-crane-shaft.webp"
                                alt="engine crane shaft"
                                width={500}
                                height={120}
                                className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)] w-100 h-40 object-cover object-center"
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-90">
                                <p className="text-xs font-medium text-brand-darkGreen">
                                    ADVANCED BENCH RIG
                                </p>
                                <p className="text-xs font-medium text-[#475569]">
                                    High-frequency oscilloscope & CAN-bus packet analyzer in active operation.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/engine-parts.webp"
                                alt="engine parts"
                                width={500}
                                height={120}
                                className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)] w-100 h-40 object-cover object-center"
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-90">
                                <p className="text-xs font-medium text-brand-darkGreen">
                                    ADVANCED BENCH RIG
                                </p>
                                <p className="text-xs font-medium text-[#475569]">
                                    High-frequency oscilloscope & CAN-bus packet analyzer in active operation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden grid grid-cols-1 gap-8">
                    <div className="flex flex-col gap-4 items-start justify-start">
                        <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                            <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">UK ENGINE REBUILD & ENGINEERING SPECIALISTS</p>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-black">Expert Engine Rebuilds, Repairs & Performance Restoration</h2>
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                            At <span className="text-brand-darkGreen">Vogue Tech</span>, we specialise in professional engine rebuilding, replacement, and mechanical repair services for luxury, commercial, and enthusiast vehicles across the United Kingdom. Our experienced technicians combine precision engineering with industry-leading practices to restore engine performance, reliability, and efficiency. Whether your vehicle requires a complete engine rebuild, a replacement engine, or a critical repair, we deliver dependable solutions tailored to its specific requirements. From identifying internal engine faults to restoring essential components, we focus on quality workmanship and long-lasting results. Our expertise covers <span className="text-brand-darkGreen">complete engine rebuilds, head gasket replacement, engine health assessments, and DPF cleaning,</span> alongside a range of specialist engine maintenance and repair services. Every job is approached with careful inspection, technical precision, and attention to detail. At Vogue Tech, our goal is simple: to keep your engine running at its best through reliable repairs, expert workmanship, and professional service you can trust.
                        </p>
                        <div className="border-t border-brand-darkGreen w-full flex items-center justify-between pt-8 mt-4">
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">OEM Wiring Standards</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">Dealer-Level Software</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">Certified Technicians</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <div className="relative">
                            <Image src="/Automotive-Diagnostic-ECU-and-Wiring-Bench-at-Vogue-Tech.webp" alt="Automotive Diagnostic ECU and Wiring Bench at Vogue Tech" width={394} height={220} className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)]" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-60 md:w-90">
                                <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">
                                    ADVANCED BENCH RIG
                                </p>
                                <p className="text-xs lg:text-sm font-medium text-[#475569]">
                                    High-frequency oscilloscope & CAN-bus packet analyzer in active operation.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src="/Automotive-Diagnostic-ECU-and-Wiring-Bench-at-Vogue-Tech.webp" alt="Automotive Diagnostic ECU and Wiring Bench at Vogue Tech" width={394} height={220} className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)]" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-60 md:w-90">
                                <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">
                                    ADVANCED BENCH RIG
                                </p>
                                <p className="text-xs lg:text-sm font-medium text-[#475569]">
                                    High-frequency oscilloscope & CAN-bus packet analyzer in active operation.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src="/Automotive-Diagnostic-ECU-and-Wiring-Bench-at-Vogue-Tech.webp" alt="Automotive Diagnostic ECU and Wiring Bench at Vogue Tech" width={394} height={220} className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)]" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-60 md:w-90">
                                <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">
                                    ADVANCED BENCH RIG
                                </p>
                                <p className="text-xs lg:text-sm font-medium text-[#475569]">
                                    High-frequency oscilloscope & CAN-bus packet analyzer in active operation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}