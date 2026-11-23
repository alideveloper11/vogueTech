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
                        <h2 className="text-3xl lg:text-4xl font-black text-black">Engine Rebuilds, Repairs and Replacements Done Properly</h2>
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                            At <span className="text-brand-darkGreen">Vogue Tech</span>, engines are all we do. For more than 20 years our technicians have stripped, measured and rebuilt the units other garages turn away, including the TDV6, SDV6, SDV8, Ingenium diesel and supercharged 5.0 V8.
                        </p>
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                            Not every fault needs a full rebuild. We start with a proper diagnostic, explain what we find in plain English and recommend only the work your engine needs. That might be a targeted repair, a head gasket or timing chain replacement, a full reconditioning, or a quality-checked replacement engine when repair no longer makes financial sense.
                        </p>
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                            Every job is quoted in writing before we start, built with OEM or quality-matched parts, and road-tested before you collect your car.
                        </p>
                        <div className="border-t border-brand-darkGreen w-full flex items-center justify-between pt-8 mt-8">
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">OEM Parts as Standard</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">Dealer-Level Diagnostics</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">Experienced Engine Technicians</p>
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
                                <p className="text-xs font-medium text-brand-darkGreen uppercase">
                                    Strip and inspection
                                </p>
                                <p className="text-xs font-medium text-[#475569]">
                                    Every component measured against manufacturer tolerances.
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
                                <p className="text-xs font-medium text-brand-darkGreen uppercase">
                                    Precision rebuild
                                </p>
                                <p className="text-xs font-medium text-[#475569]">
                                    Reassembled with OEM or quality-matched parts.
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
                                <p className="text-xs font-medium text-brand-darkGreen uppercase">
                                    Final testing
                                </p>
                                <p className="text-xs font-medium text-[#475569]">
                                    Pressure-checked and road-tested before handover.
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
                        <h2 className="text-3xl lg:text-4xl font-black text-black">Engine Rebuilds, Repairs and Replacements Done Properly</h2>
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                            At <span className="text-brand-darkGreen">Vogue Tech</span>, engines are all we do. For more than 20 years our technicians have stripped, measured and rebuilt the units other garages turn away, including the TDV6, SDV6, SDV8, Ingenium diesel and supercharged 5.0 V8.
                        </p>
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                            Not every fault needs a full rebuild. We start with a proper diagnostic, explain what we find in plain English and recommend only the work your engine needs. That might be a targeted repair, a head gasket or timing chain replacement, a full reconditioning, or a quality-checked replacement engine when repair no longer makes financial sense.
                        </p>
                        <p className="text-xs lg:text-sm font-medium text-gray-600">
                            Every job is quoted in writing before we start, built with OEM or quality-matched parts, and road-tested before you collect your car.
                        </p>
                        <div className="border-t border-brand-darkGreen w-full flex items-center justify-between pt-8 mt-4">
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">OEM Parts as Standard</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">Dealer-Level Diagnostics</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CircleCheck size={18} className="text-brand-darkGreen" />
                                <p className="text-xs lg:text-sm font-medium text-black">Experienced Engine Technicians</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <div className="relative">
                            <Image src="/Automotive-Diagnostic-ECU-and-Wiring-Bench-at-Vogue-Tech.webp" alt="Automotive Diagnostic ECU and Wiring Bench at Vogue Tech" width={394} height={220} className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)]" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-60 md:w-90">
                                <p className="text-xs lg:text-sm font-medium text-brand-darkGreen uppercase">
                                    Strip and inspection
                                </p>
                                <p className="text-xs lg:text-sm font-medium text-[#475569]">
                                    Every component measured against manufacturer tolerances.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src="/Automotive-Diagnostic-ECU-and-Wiring-Bench-at-Vogue-Tech.webp" alt="Automotive Diagnostic ECU and Wiring Bench at Vogue Tech" width={394} height={220} className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)]" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-60 md:w-90">
                                <p className="text-xs lg:text-sm font-medium text-brand-darkGreen uppercase">
                                    Precision rebuild
                                </p>
                                <p className="text-xs lg:text-sm font-medium text-[#475569]">
                                    Reassembled with OEM or quality-matched parts.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src="/Automotive-Diagnostic-ECU-and-Wiring-Bench-at-Vogue-Tech.webp" alt="Automotive Diagnostic ECU and Wiring Bench at Vogue Tech" width={394} height={220} className="rounded-lg shadow-[0px_4px_15px_rgba(13,143,81,0.3)]" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 w-60 md:w-90">
                                <p className="text-xs lg:text-sm font-medium text-brand-darkGreen uppercase">
                                    Final testing
                                </p>
                                <p className="text-xs lg:text-sm font-medium text-[#475569]">
                                    Pressure-checked and road-tested before handover.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}