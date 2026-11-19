import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import ContactForm from "@/component/ContactForm";

import { Zap, PhoneCall, Mail, MapPin, Clock } from "lucide-react";

const items = [
  {
    icon: PhoneCall,
    label: "Phone",
    content: <p>01375 531355</p>,
  },
  {
    icon: Mail,
    label: "Email",
    content: <p className="break-all">info@voguetech.co.uk</p>,
  },
  {
    icon: MapPin,
    label: "Address",
    content: (
      <p>
        Unit 1D, Hedley
        <br />
        Avenue RM20 4EL, UK
      </p>
    ),
  },
  {
    icon: Clock,
    label: "Working Hours",
    content: (
      <p>
        Mon – Fri: 09:00 – 18:00
        <br />
        Sat: 08:00 – 14:00 |
        <br />
        (Only For Booking)
      </p>
    ),
  },
];

export default function Contact() {
  return (
    <main>
      <NavBar />
      <main className="mt-30 mb-16">
        <section className="bg-white px-4 md:px-20 lg:px-40">
          <div className="container mx-auto">
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
        <section className="bg-white px-4 md:px-20 lg:px-40 mt-12">
          <div className="container mx-auto">
            <div className="relative mb-4 p-6 md:p-8 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-lg flex flex-col gap-6">
              <h2 className="text-2xl lg:text-3xl font-black text-black">
                Contact information
              </h2>

              {/* 1 col (mobile) -> 2 cols / 2 rows (tablet) -> 4 cols (desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8">
                {items.map(({ icon: Icon, label, content }, i) => (
                  <div
                    key={label}
                    className={[
                      "flex flex-col gap-4 px-0 sm:px-6",
                      // divider lines: left border on 2nd column (sm) and on every item except first (lg)
                      i % 2 === 1 ? "sm:border-l" : "",
                      i !== 0 ? "lg:border-l" : "lg:border-l-0",
                      i % 2 === 0 ? "sm:pl-0" : "",
                      i === 2 ? "lg:pl-6" : "",
                      "border-gray-200",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      {label === "Working Hours" ? (
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-green">
                          <Icon size={16} className="text-white" />
                        </span>
                      ) : (
                        <Icon size={26} className="text-brand-green" />
                      )}
                      <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                        {label}
                      </span>
                    </div>

                    <div className="text-sm lg:text-base font-semibold text-black leading-snug">
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
}
