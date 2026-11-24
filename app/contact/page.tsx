import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import ContactForm from "@/component/ContactForm";

import { Zap, PhoneCall, Mail, MapPin, Clock } from "lucide-react";

const items = [
  {
    icon: PhoneCall,
    label: "Phone",
    content: <p className="flex flex-col gap-2"><span>Tel: 01375 531355</span><span>Mob: 07578 227223</span></p>,
  },
  {
    icon: Mail,
    label: "Email",
    content: <p className="break-all">sales@voguetechnics.co.uk</p>,
  },
  {
    icon: MapPin,
    label: "Address",
    content: (
      <p>
        UNIT 1D Hedley Avenue, Grays, RM20 4EL
      </p>
    ),
  },
  {
    icon: Clock,
    label: "Working Hours",
    content: (
      <p>
        Monday - Friday: 9:00 AM - 6:00 PM
        <br />
        Saturday: 8:00 AM - 2:00 PM
        <br />
        Sunday: Closed
      </p>
    ),
  },
];

export default function Contact() {
  return (
    <main>
      <NavBar />
      <main className="mt-30 mb-16 bg-white px-4 md:px-20 lg:px-40">
        <section className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="w-full lg:w-2/3 relative mb-4 p-4 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-lg
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
          <div className="w-full lg:w-1/3 relative mb-4 p-6 md:p-8 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-lg flex flex-col gap-6">
            <h2 className="text-2xl lg:text-3xl font-black text-black">
              Contact information
            </h2>

            {/* 1 col (mobile) -> 2 cols / 2 rows (tablet) -> 4 cols (desktop) */}
            <div className="flex flex-col gap-8">
              {items.map(({ icon: Icon, label, content }, i) => (
                <div key={label} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit shrink-0">
                      <Icon size={30} className="text-brand-green" />
                    </div>
                    <span className="text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {label} {label === "Address" ? <span className="text-[10px]">{`(Vogue Tech is a part of Vogue Technics)`}</span> : ""}
                    </span>
                  </div>
                  <span className="text-sm lg:text-base font-bold text-black">
                    {content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
}
