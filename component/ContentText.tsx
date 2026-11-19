export default function ContentText(){
    return(
        <div className="p-4 w-full bg-white px-4 md:px-20 lg:px-40">
            <div className="container mx-auto py-8">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">UK VEHICLE STANDARDS & COMPLIANCE</p>
                    </div>
                    <div className="">
                        <h1 className="text-black text-3xl lg:text-5xl font-black text-center">Why Certified Automotive Automation Calibration Matters</h1>
                    </div>
                    <div className="">
                        <p className="text-center text-xs lg:text-sm font-medium text-gray-700">
                            Modern luxury vehicles rely on a unified ecosystem of <span className="text-brand-green">millimetre-wave radar sensors</span>, high-definition stereoscopic cameras, and electronic actuators to govern critical automation features—including autonomous emergency braking (AEB), adaptive cruise control, dynamic lane centering, and automated valet parking. Even minimal vehicle alterations, such as suspension adjustments, wheel alignments, windshield replacements, or minor bumper impacts, can induce angular sensor deviations as small as fractions of a degree, causing substantial miscalculations at highway speeds. At <span className="text-black">Vogue Tech</span>, our facility implements certified static and dynamic calibration routines in strict accordance with <span className="text-brand-green">Thatcham Research standards</span>, ensuring your automated driving assistance safety envelope remains uncompromised and fully accredited for UK road safety regulations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}