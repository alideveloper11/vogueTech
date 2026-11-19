import Image from "next/image"
import Link from "next/link"

import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer(){
    return (
        <div className="bg-[#042D19] w-full mt-8 px-4 md:px-20 lg:px-40">
            <div className=" container mx-auto">
                <div className="py-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
                        <div className="flex flex-col gap-4">
                            <Image src="/VogueTech_logo_No_Bg.png" alt="Vogue Tech Logo" width={190} height={48} className="w-30 h-auto" />
                            <p className="text-xs lg:text-sm font-medium text-Text-grey">{`Vogue Tech is the United Kingdom's specialist automotive garage for precision vehicle automation retrofits, ADAS radar calibration, intelligent telematics, and ECU software engineering. Setting the standard for luxury electronic vehicle care.`}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs lg:text-sm font-medium text-brand-green">QUICK LINKS</span>
                            <Link href="/" className="mt-2 text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center"><ChevronRight size={16} className="text-brand-green" />Term & Conditions</Link>
                            <Link href="/" className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center"><ChevronRight size={16} className="text-brand-green" />Privacy Policies</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs lg:text-sm font-medium text-brand-green">WORKSHOP CONTACT</span>
                            <span className="mt-2 text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><MapPin size={16} className="text-brand-green" />Unit 01, Hedley Avenue RM20 4EL</span>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><Phone size={16} className="text-brand-green" />01375 531355</span>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><Mail size={16} className="text-brand-green" />sales@voguetech.co.uk</span>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><Clock size={16} className="text-brand-green" />{`| Mon – Fri: 08:00 – 18:00 | Sat: 08:30 –14:00`}</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-brand-green py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey">Copyright © 2026 Vogue Tech. All Rights Reserved.</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-xs lg:text-sm font-medium text-Text-grey">Powered by</span>
                            <span className="text-xs lg:text-sm font-medium text-white border border-brand-green p-1 rounded-lg">4xCode</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}