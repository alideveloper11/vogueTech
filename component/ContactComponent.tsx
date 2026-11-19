import ContactForm from "./ContactForm";

import { Zap } from "lucide-react";

export default function ContactComponent() {
    return (
        <section id="contact" className="bg-white px-4 md:px-20 lg:px-40">
            <div className="container mx-auto">
                <div className="py-8 flex flex-col items-center justify-center gap-4 mx-auto max-w-200">
                    <div className="bg-brand-green/10 flex items-center justify-center gap-4 rounded-lg w-30 h-8">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">Contact us</p>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-black text-center">Get in Touch with Vogue Tech</h2>
                    </div>
                    <div>
                        <p className="text-xs lg:text-sm font-medium text-brand-grey text-center">Speak directly with our expert automotive team or submit your service request below for professional vehicle repairs, maintenance, and diagnostics across the UK.</p>
                    </div>
                </div>
                <div className="relative mb-4 p-4 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-lg
                    before:content-[''] before:absolute before:-top-1
                    before:left-0 before:right-0 before:h-1
                    before:bg-[linear-gradient(90deg,#0D8F51_0%,#DCDCDC_100%)]
                    before:rounded-t-lg">
                        <div className="py-8 flex items-center justify-between gap-4">
                            <div className="max-w-200">
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-black text-black">Fill the form - VogueTech</h2>
                                </div>
                                <div>
                                    <p className="text-xs lg:text-sm font-medium text-brand-grey">Quick Service Requests • Professional Support</p>
                                </div>
                            </div>
                            <div className="bg-[#E7EEFB] flex items-center justify-center gap-1 rounded-lg p-2">
                                <Zap size={16} className="text-brand-green" />
                                <p className="text-xs lg:text-sm font-medium text-black">Priority Queue</p>
                            </div>
                        </div>
                        <ContactForm />
                </div>
            </div>
        </section>
    )
}