import Image from "next/image"
import Link from "next/link"

import { ArrowRight, Phone } from "lucide-react"

export default function CTA(){
    return(
        <div className="relative p-4 w-full bg-black px-4 md:px-8">
            <Image src="/Automotive-Automation-Bay-at-Vogue-Tech.webp" alt="Automotive Automation Bay at Vogue Tech" fill className="absolute z-1 object-cover" />
            <Image src="/Automotive-Automation-Bay-at-Vogue-Tech-Gradient.png" alt="Automotive Automation Bay at Vogue Tech Gradient" fill className="absolute z-3 object-top" />
            <div className="absolute inset-0 z-[2] bg-[#020617]/75" />
            <div className="relative z-3 container mx-auto py-8">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <div className="rounded-2xl bg-[#10B98133] border border-[#10B9814D] shadow-lg">
                        <p className="relative mx-8 p-2 text-xs lg:text-sm font-extrabold text-[#34D399] text-center">
                            DIRECT GARAGE AVAILABILITY
                        </p>
                    </div>
                    <div className="max-w-200">
                        <h1 className="text-white text-3xl lg:text-5xl font-black text-center">Ready to Upgrade or Calibrate Your Vehicle’s Automation Systems?</h1>
                    </div>
                    <div className="max-w-150">
                        <p className="text-center text-xs lg:text-sm font-medium text-white">
                            {`Speak directly with our senior automotive electronics specialists today for a personalized technical consultation or bespoke quotation.`}
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Link href="/contact" className="inline-flex gap-2 items-center justify-center bg-brand-green rounded-lg p-4 text-white text-xs xl:text-sm font-medium transition-colors duration-300 hover:bg-brand-darkGreen">Request an Automation Consultation <ArrowRight size={20} /></Link>
                        <Link href="tel:01375 531355" className="inline-flex gap-2 items-center justify-center bg-gray-800 rounded-lg p-4 px-6 text-white text-xs xl:text-sm font-medium border-2 border-white/20 transition-colors duration-300 hover:border-white"><Phone size={20} className="text-brand-green" /> Call Our Workshop</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}