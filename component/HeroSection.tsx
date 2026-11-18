import Image from "next/image"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

export default function HeroSection(){
    return(
        <section id="home" >
            <div className="relative p-4 w-full bg-black px-4 md:px-8">
                <Image src="/vogue-tech-automotive-automation-workshop-uk.webp" alt="vogue tech automotive automation workshop uk" fill className="absolute z-1 object-cover" />
                <Image src="/Subtle brand green glow.png" alt="Subtle brand green glow" fill className="absolute z-3 object-top" />
                <div className="absolute inset-0 z-[2] bg-[#020617]/75" />
                <div className="relative p-4 w-full bg-black mt-16 px-4 md:px-8">
                    <div className="relative z-4 container mx-auto">
                        <div className="py-8">
                            <div className="flex flex-col gap-8 items-center justify-center">
                                <div className="rounded-2xl bg-white shadow-lg">
                                    <p className="relative mx-8 p-2 text-xs lg:text-sm font-extrabold text-brand-green text-center
                                        before:content-[''] before:absolute before:left-0 before:top-1/2
                                        before:-translate-y-1/2 before:h-4 before:w-[2px] before:bg-brand-green">
                                        UK AUTOMATION SPECIALISTS
                                    </p>
                                </div>
                                <div className="max-w-150">
                                    <h1 className="text-white text-3xl lg:text-5xl font-black text-center">Next-Generation <span className="text-[#BBF7D0]">Vehicle</span> <span className="text-[#34D399]">Automation</span> & Electronic Architecture</h1>
                                </div>
                                <div className="max-w-150">
                                    <p className="text-center text-xs lg:text-sm font-medium text-brand-grey">
                                        {`The UK's premier automotive workshop dedicated to OEM retrofits, ADAS radar calibration, intelligent telematics, and ECU software engineering for luxury and modern vehicles.`}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <Link href="/contact" className="inline-flex gap-2 items-center justify-center bg-brand-green rounded-lg p-4 text-white text-xs xl:text-sm font-medium transition-colors duration-300 hover:bg-brand-darkGreen">Request a Quote <ArrowRight size={20} /></Link>
                                    <Link href="/contact" className="inline-flex gap-2 items-center justify-center bg-gray-800 rounded-lg p-4 px-6 text-white text-xs xl:text-sm font-medium border-2 border-white/20 transition-colors duration-300 hover:border-white">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <div className="border-t border-white/20 py-8 flex items-center justify-between w-full">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <span className="text-white text-lg lg:text-xl font-bold">100%</span>
                                    <span className="text-brand-grey text-xs lg:text-sm font-medium">OEM COMPLIANT</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <span className="text-white text-lg lg:text-xl font-bold">5,000+</span>
                                    <span className="text-brand-grey text-xs lg:text-sm font-medium">SYSTEMS CALIBRATED</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <span className="text-white text-lg lg:text-xl font-bold">IMI & ATA</span>
                                    <span className="text-brand-grey text-xs lg:text-sm font-medium">CERTIFIED TECHNICIANS</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <span className="text-white text-lg lg:text-xl font-bold">12-Month</span>
                                    <span className="text-brand-grey text-xs lg:text-sm font-medium">STANDARD WARRANTY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}