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
                            <Link href={"/"}>
                                <Image src="/VogueTech_logo_No_Bg.png" alt="Vogue Tech Logo" width={190} height={48} className="w-30 h-auto" />
                            </Link>
                            <p className="text-xs lg:text-sm font-medium text-Text-grey">{`Vogue Tech is an independent engine specialist in Thurrock, Essex. We rebuild, repair and replace engines for Range Rover, Land Rover, Jaguar, Audi and BMW, with honest advice, fixed quotes and warranty-backed work.`}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs lg:text-sm font-medium text-brand-green">QUICK LINKS</span>
                            <Link href="/terms-and-conditions" className="mt-2 text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center"><ChevronRight size={16} className="text-brand-green" />Term & Conditions</Link>
                            <Link href="/privacy-policy" className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center"><ChevronRight size={16} className="text-brand-green" />Privacy Policies</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs lg:text-sm font-medium text-brand-green">WORKSHOP CONTACT</span>
                            <span className="mt-2 text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><MapPin size={20} className="text-brand-green shrink-0" />Unit 1D Hedley Ave RM20 4EL United Kingdom</span>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><Phone size={20} className="text-brand-green shrink-0" />01375 531355</span>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><Mail size={20} className="text-brand-green shrink-0" />sales@voguetech.co.uk</span>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><Clock size={20} className="text-brand-green shrink-0" />{`| Monday - Friday: 9:00 AM - 6:00 PM | Saturday: 8:00 AM - 2:00 PM | Sunday: Closed`}</span>
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