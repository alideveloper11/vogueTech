'use client'

import { useEffect, useState } from "react";
import { MonitorActivity, Radar, Zap, Settings } from "lucide-react"

const initialList = [
    { index: 0, active: true,  icon: MonitorActivity, title: "Engine Diagnostics", desc: "Fault detection & engine health analysis" },
    { index: 1, active: false, icon: Radar, title: "Engine Rebuild", desc: "Complete engine restoration" },
    { index: 2, active: false, icon: Zap, title: "Turbo Systems", desc: "Turbocharger repair & replacement" },
    { index: 3, active: false, icon: Settings, title: "Engine Components", desc: "Timing chain & gasket solutions" },
];

export default function RepairPerformance(){
    const [list, setList] = useState(initialList);

    useEffect(() => {
        const id = setInterval(() => {
            setList((prev) => {
                const current = prev.findIndex((item) => item.active);
                const next = (current + 1) % prev.length; // 0 → 1 → 2 → 3 → 0 ...
                return prev.map((item, i) => ({ ...item, active: i === next }));
            });
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return(
        <div className="p-4 w-full bg-white px-4 md:px-8">
            <div className="container mx-auto py-8">
                <div className="flex flex-col gap-12 items-center justify-center">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                            <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">ENGINEERING & PERFORMANCE</p>
                        </div>
                        <div className="">
                            <h1 className="text-black text-3xl lg:text-5xl font-black text-center">Advanced Engine Repair & Performance</h1>
                        </div>
                        <div className="">
                            <p className="text-xs lg:text-sm font-medium text-gray-700 text-center">
                                Precision engineering and expert solutions to keep your engine performing at its best.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                            {list.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.index} className={`bg-[#F4FBF7] border p-4 flex flex-col gap-2 rounded-xl transition-colors duration-300 ${item.active ? "border-brand-darkGreen" : "border-[#D1FAE5]"}`}>
                                        <div className={`bg-white border border-[#D1FAE5] rounded-lg p-2 w-fit mx-auto transition-colors duration-300 ${item.active ? "shadow-[0px_0px_15px_rgba(13,143,81,1)]" : ""}`}>
                                            <Icon size={50} className="text-brand-green" />
                                        </div>
                                        <h2 className="text-lg lg:text-xl font-bold text-center">
                                            {item.title}
                                        </h2>
                                        <p className="text-xs lg:text-sm font-medium text-gray-500 text-center">
                                            {item.desc}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="bg-brand-yellowBg border border-[#D1FAE5] p-6 flex flex-col gap-2 rounded-xl w-full">
                            <h2 className="text-lg lg:text-xl font-bold">
                                The Importance of Professional Engine Maintenance
                            </h2>
                            <p className="text-xs lg:text-sm font-medium text-gray-500">
                                Modern engines require precise engineering, accurate diagnostics, and specialized repair techniques to maintain reliability and performance. At Vogue Tech, we focus on identifying underlying engine issues, restoring critical components, and delivering dependable repair solutions. From timing chain replacement and head gasket repairs to complete engine rebuilds, our approach prioritizes performance, durability, and long-term engine health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}