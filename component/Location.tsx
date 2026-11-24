import Link from "next/link"

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

export default function Location(){
    return(
        <section className="bg-white px-4 md:px-20 lg:px-40">
            <div className="container mx-auto py-5">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">LOCATION & BOOKINGS</p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-black">Visit Our Engine Workshop in Thurrock, Essex</h2>
                    <p className="text-xs lg:text-sm font-medium text-gray-500">Minutes from the M25 and Dartford Crossing, with easy access from Essex, Kent and East London.</p>
                </div>
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-brand-yellowBg p-8 border border-[#D1FAE5] rounded-xl">
                        <div className="flex flex-col justify-center gap-4">
                            <h2 className="border-l-6 border-brand-darkGreen px-4 text-3xl lg:text-4xl font-black text-black uppercase">Workshop Information</h2>
                            <div className="my-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit shrink-0">
                                        <MapPin size={30} className="text-brand-green" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-xs lg:text-sm font-medium text-gray-500 uppercase">
                                            Workshop address <span className="text-[10px]">{`(Vogue Tech is a part of Vogue Technics)`}</span>
                                        </h2>
                                        <p className="text-xs lg:text-sm font-extrabold text-black">
                                            UNIT 1D Hedley Avenue, Grays, RM20 4EL
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-start gap-4">
                                    <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit shrink-0">
                                        <Phone size={30} className="text-brand-green" />
                                    </div>
                                    <div className="flex gap-4 lg:gap-8">
                                        <div>
                                            <div className="">
                                                <h2 className="text-xs lg:text-sm font-medium text-gray-500 uppercase">
                                                    Tel:
                                                </h2>
                                                <p className="text-xs lg:text-sm font-extrabold text-black">
                                                    01375 531355
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="">
                                                <h2 className="text-xs lg:text-sm font-medium text-gray-500 uppercase">
                                                    Mob:
                                                </h2>
                                                <p className="text-xs lg:text-sm font-extrabold text-black">
                                                    07578 227223
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-start gap-4">
                                    <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit shrink-0">
                                        <Mail size={30} className="text-brand-green" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-xs lg:text-sm font-medium text-gray-500 uppercase">
                                            Enquiries
                                        </h2>
                                        <p className="text-xs lg:text-sm font-extrabold text-black">
                                            sales@voguetechnics.co.uk
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-start gap-4">
                                    <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit shrink-0">
                                        <Clock size={30} className="text-brand-green" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-xs lg:text-sm font-medium text-gray-500 uppercase">
                                            Opening hours
                                        </h2>
                                        <p className="text-xs lg:text-sm font-extrabold text-black">
                                            Monday - Friday: 9:00 AM - 6:00 PM
                                        </p>
                                        <p className="text-xs lg:text-sm font-extrabold text-black">
                                            Saturday: 8:00 AM - 2:00 PM
                                        </p>
                                        <p className="text-xs lg:text-sm font-extrabold text-black">
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/contact" className="w-fit inline-flex gap-2 items-center justify-center bg-brand-green rounded-lg p-4 text-white text-xs xl:text-sm font-medium transition-colors duration-300 hover:bg-brand-darkGreen">Request a Quote <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.1089902988715!2d0.2957306!3d51.474513699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b7a2859bba33%3A0xd64a87b00877a1d!2sVogue%20Technics!5e0!3m2!1sen!2s!4v1794930837383!5m2!1sen!2s"
                            className="h-full w-full border-0 rounded-lg"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}