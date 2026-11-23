import { Car, MonitorActivity, Settings } from "lucide-react"

export default function AboutVogueTech(){
    return(
        <div id="about-us" className="p-4 w-full bg-white px-4 md:px-20 lg:px-40">
            <div className="container mx-auto py-8">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">ABOUT VOGUE TECH</p>
                    </div>
                    <div className="">
                        <h1 className="text-black text-3xl lg:text-5xl font-black text-center">Independent Engine Specialists With Main Dealer Knowledge</h1>
                    </div>
                    <div className="">
                        <p className="text-xs lg:text-sm font-medium text-gray-700">
                            <span className="text-brand-green">Vogue Tech</span> has built its reputation one engine at a time. We chose to specialise in engine work on Range Rover, Land Rover, Jaguar, Audi and BMW rather than be a general garage, and most new customers still reach us through recommendation.
                        </p>
                        <p className="mt-2 text-xs lg:text-sm font-medium text-gray-700">
                            {`As an IGA-accredited workshop, we follow a professional code of practice that protects you. Quotes are fixed and itemised, updates are regular, and nothing extra is added without your approval. Customers travel to us from Thurrock, Dartford, Romford, Basildon and across East London for that reason.`}
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
                                Engine technicians with years of hands-on experience on premium marques.
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
                                Dealer-level equipment that finds the exact fault the first time.
                            </p>
                        </div>
                        <div className="bg-[#F4FBF7] border border-[#D1FAE5] p-4 flex flex-col gap-2 rounded-xl">
                            <div className="bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit mx-auto">
                                <Settings size={50} className="text-brand-green" />
                            </div>
                            <h2 className="text-lg lg:text-xl font-bold text-center">
                                Reliable Results
                            </h2>
                            <p className="text-xs lg:text-sm font-medium text-gray-500">
                                OEM parts, tested work and a written warranty on every job.
                            </p>
                        </div>
                    </div>
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">Our Commitment</p>
                    </div>
                    <div className="">
                        <p className="text-xs lg:text-sm font-medium text-gray-700">
                            Every customer deserves honest advice and every engine deserves careful work. We tell you what your vehicle needs, what it will cost and how long it will take, then we deliver exactly that.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}