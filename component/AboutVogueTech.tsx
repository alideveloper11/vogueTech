import { Car, MonitorActivity, Settings } from "lucide-react"

export default function AboutVogueTech(){
    return(
        <div id="about-us" className="p-4 w-full bg-white px-4 md:px-8">
            <div className="container mx-auto py-8">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">ABOUT VOGUE TECH</p>
                    </div>
                    <div className="">
                        <h1 className="text-black text-3xl lg:text-5xl font-black text-center">Driving Excellence Through Expert Automotive Care</h1>
                    </div>
                    <div className="">
                        <p className="text-xs lg:text-sm font-medium text-gray-700">
                            At <span className="text-brand-green">Vogue Tech</span>, we are dedicated to keeping your vehicle performing at its best. We are a UK-based automotive garage providing professional vehicle maintenance, advanced diagnostics, engine repairs, and specialist automotive solutions.
                        </p>
                        <p className="mt-2 text-xs lg:text-sm font-medium text-gray-700">
                            {`From routine servicing and battery replacements to complex engine rebuilds, turbocharger repairs, timing chain replacements, and electrical diagnostics, we offer a comprehensive range of services to meet your vehicle's needs.`}
                        </p>
                        <p className="mt-2 text-xs lg:text-sm font-medium text-gray-700">
                            {`Our approach combines technical expertise, modern diagnostic technology, and attention to detail to identify problems accurately and deliver dependable repair solutions. Whether your vehicle needs a simple repair or more extensive mechanical work, we aim to provide quality workmanship and a service you can trust`}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        <div className="bg-[#F4FBF7] border border-[#D1FAE5] p-4 flex flex-col gap-2 rounded-xl">
                            <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit mx-auto">
                                <Car size={50} className="text-brand-green" />
                            </div>
                            <h2 className="text-lg lg:text-xl font-bold text-center">
                                Expert Workmanship
                            </h2>
                            <p className="text-xs lg:text-sm font-medium text-gray-500">
                                Professional automotive repair and maintenance.
                            </p>
                        </div>
                        <div className="bg-[#F4FBF7] border border-[#D1FAE5] p-4 flex flex-col gap-2 rounded-xl">
                            <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit mx-auto">
                                <MonitorActivity size={50} className="text-brand-green" />
                            </div>
                            <h2 className="text-lg lg:text-xl font-bold text-center">
                                Advanced Diagnostics
                            </h2>
                            <p className="text-xs lg:text-sm font-medium text-gray-500">
                                Modern technology for accurate fault detection.
                            </p>
                        </div>
                        <div className="bg-[#F4FBF7] border border-[#D1FAE5] p-4 flex flex-col gap-2 rounded-xl">
                            <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit mx-auto">
                                <Settings size={50} className="text-brand-green" />
                            </div>
                            <h2 className="text-lg lg:text-xl font-bold text-center">
                                Reliable Solutions
                            </h2>
                            <p className="text-xs lg:text-sm font-medium text-gray-500">
                                Quality-focused repairs and dependable service.
                            </p>
                        </div>
                    </div>
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">Our Commitment</p>
                    </div>
                    <div className="">
                        <p className="text-xs lg:text-sm font-medium text-gray-700">
                            We believe that every vehicle deserves professional attention and every customer deserves honest, reliable service. At Vogue Tech, our focus is on delivering practical solutions, maintaining vehicle performance, and helping our customers drive with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}