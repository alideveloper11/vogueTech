export default function ContentText(){
    return(
        <div className="p-4 w-full bg-white px-4 md:px-20 lg:px-40">
            <div className="container mx-auto py-8">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <div className="bg-brand-green/10 flex items-center justify-center rounded-lg p-2 w-60 md:w-90">
                        <p className="text-xs lg:text-sm font-medium text-brand-darkGreen">ENGINE CARE & RELIABILITY</p>
                    </div>
                    <div className="">
                        <h1 className="text-black text-3xl lg:text-5xl font-black text-center">Why Specialist Engine Diagnostics Matter</h1>
                    </div>
                    <div className="">
                        <p className="text-center text-xs lg:text-sm font-medium text-gray-700">
                            Modern engines are complex, and their faults often look alike. <span className="text-brand-green">A timing chain rattle, a failing turbo and low oil pressure can produce similar symptoms</span>, yet each needs a very different repair. Guesswork leads to replaced parts that were never faulty and bills that keep growing. At Vogue Tech, we combine dealer-level diagnostic equipment with physical inspection to find the root cause first. You pay once, for the right repair, and small problems are caught before they become engine failures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}