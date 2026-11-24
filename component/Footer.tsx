'use client'

import Image from "next/image"
import Link from "next/link"

import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export default function Footer(){
    const pathname = usePathname();
    const router = useRouter();
    function handleClick(href: string) {
        if (href.startsWith("#")) {

            if (pathname === "/") {
                const targetId = href.substring(1);

                document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth",
                });
            } else {
                router.push(`/${href}`);
            }

        } else {
            router.push(href);
        }
    }
    return (
        <div className="bg-[#042D19] w-full mt-8 px-4 md:px-20 lg:px-40">
            <div className=" container mx-auto">
                <div className="py-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
                        <div className="flex flex-col gap-4">
                            <button onClick={()=> handleClick("#home")} className="cursor-pointer">
                                <Image src="/VogueTech_logo_No_Bg.png" alt="Vogue Tech Logo" width={190} height={48} className="w-30 h-auto" />
                            </button>
                            <p className="text-xs lg:text-sm font-medium text-Text-grey">{`Vogue Tech is an independent engine specialist in Thurrock, Essex. We rebuild, repair and replace engines for Range Rover, Land Rover, Jaguar, Audi and BMW, with honest advice, fixed quotes and warranty-backed work.`}</p>
                            <p className="text-xs lg:text-sm font-medium text-Text-grey">{`(Vogue Tech is a part of Vogue Technics)`}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs lg:text-sm font-medium text-brand-green">QUICK LINKS</span>
                            <Link href="/terms-and-conditions" className="mt-2 text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center"><ChevronRight size={16} className="text-brand-green" />Term & Conditions</Link>
                            <Link href="/privacy-policy" className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center"><ChevronRight size={16} className="text-brand-green" />Privacy Policies</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs lg:text-sm font-medium text-brand-green">WORKSHOP CONTACT</span>
                            <span className="mt-2 text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><MapPin size={20} className="text-brand-green shrink-0" /><Link href={"https://www.google.com/maps?cid=965081466407451165&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"}>UNIT 1D Hedley Avenue, Grays, RM20 4EL</Link></span>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><Phone size={20} className="text-brand-green shrink-0" />
                                <span className="flex flex-col items-start justify-center gap-2">
                                    <Link href={"tel:01375 531355"}>Tel: 01375 531355</Link>
                                    <Link href={"tel:07578 227223"}>Mob: 07578 227223</Link>
                                </span>
                            </span>
                            <span className="text-xs lg:text-sm font-medium text-Text-grey inline-flex items-center gap-2"><Mail size={20} className="text-brand-green shrink-0" /><Link href={"mailto:sales@voguetechnics.co.uk"}>sales@voguetechnics.co.uk</Link></span>
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
                            <Link href={"https://www.4xcode.com/"} className="text-xs lg:text-sm font-medium text-white border border-brand-green p-1 rounded-lg">4xCode</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}