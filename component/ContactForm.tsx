'use client'

import { useState, useEffect } from "react"
import type { ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";

export default function ContactForm({compact = false}:{compact?:boolean}) {

    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [num1, setNum1] = useState((0))
    const [num2, setNum2] = useState(0)
    const [answer, setAnswer] = useState("")

    const [registration, setRegistration] = useState("")
    const [nameVal, setNameVal] = useState("")
    const [emailVal, setEmailVal] = useState("")
    const [phoneVal, setPhoneVal] = useState("")
    const [postcodeVal, setPostcodeVal] = useState("")
    const [issueVal, setIssueVal] = useState("")

    function generateCaptcha() {
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
        setAnswer("");
    };

    useEffect(() => {
    const id = requestAnimationFrame(() => {
        generateCaptcha();
    });
    return () => cancelAnimationFrame(id);
    }, []);

    function registrationValidation(e: ChangeEvent<HTMLInputElement>){
        const value = e.target.value;

        if (value.length > 7) {
            return;
        }

        if (!/^[a-zA-Z0-9]*$/.test(value)) {
            return;
        }

        setRegistration(value);
    }

    function nameValidation(e: ChangeEvent<HTMLInputElement>){
        const value = e.target.value;


        if (!/^[a-zA-Z]*$/.test(value)) {
            return;
        }

        setNameVal(value);
    }

    function phoneValidation(e: ChangeEvent<HTMLInputElement>){
        const value = e.target.value;

        if (!/^\+?[0-9]*$/.test(value)) {
            return;
        }

        if (value.length > 13) {
            return;
        }

        setPhoneVal(value);
    }

    function postcodeValidation(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.toUpperCase();

        if (!/^[A-Z0-9 ]*$/.test(value)) {
            return;
        }

        if (value.length > 8) {
            return;
        }

        setPostcodeVal(value);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        console.log("Form submitted");
        e.preventDefault();
        if (loading) return;
        if (!registration || !nameVal || !emailVal || !phoneVal || !postcodeVal || !issueVal) {
            toast.error("Please fill in all required fields.");
            return;
        }
        if (Number(answer) !== num1 + num2) {
            toast.error("Incorrect answer to the maths question. Please try again.");
            generateCaptcha();
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    registration: registration.toUpperCase(),
                    name: nameVal.trim(),
                    email: emailVal.trim(),
                    phone: phoneVal,
                    postcode: postcodeVal.trim(),
                    issue: issueVal.trim(),
                }),
            });
            if (!res.ok) {
            throw new Error(`Request failed: ${res.status}`);
            }

            toast.success("Thank you! We will contact you shortly.");
            setRegistration("");
            setNameVal("");
            setEmailVal("");
            setPhoneVal("");
            setPostcodeVal("");
            setIssueVal("");
            generateCaptcha();
            router.push("/")
        } catch {
            toast.error("Something went wrong. Please try again or call us.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="">
            <div className="space-y-1">
                <label htmlFor="vrm" className="block text-base font-bold text-black">
                    Registration Number*
                </label>
                <div className="relative flex items-stretch h-14 md:h-16 w-full">
                    <div className="bg-[#002d72] w-10 md:w-12 rounded-l flex flex-col items-center justify-center p-1">
                        <div className="w-5 h-3 relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-800"></div>
                            <div className="absolute w-[200%] h-[20%] bg-white rotate-[31deg] origin-center -translate-x-1/4 -translate-y-1/4"></div>
                            <div className="absolute w-[200%] h-[20%] bg-white -rotate-[31deg] origin-center -translate-x-1/4 translate-y-1/4"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-[30%] bg-white absolute"></div>
                                <div className="h-full w-[20%] bg-white absolute"></div>
                                <div className="w-full h-[15%] bg-red-600 absolute"></div>
                                <div className="h-full w-[10%] bg-red-600 absolute"></div>
                            </div>
                        </div>
                        <span className="text-white text-[8px] md:text-[10px] font-bold mt-1">UK</span>
                    </div>
                    <input id="vrm" placeholder="ENTER REG" className="flex-1 bg-[#FFC107] border-none text-black text-center font-bold text-lg md:text-xl placeholder:text-gray-600 uppercase outline-none rounded-r transition-all focus:ring-2 focus:ring-[#088D50]" type="text" name="vrm" required value={registration} onChange={registrationValidation} />
                </div>
            </div>
            <div className={ compact ? "grid grid-cols-1 gap-4 mt-5" : "grid grid-cols-1 md:grid-cols-2 gap-4 mt-5" }>
                <div className="space-y-1">
                    <label htmlFor="name" className="block text-base font-bold text-black">
                        Full Name*
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="mt-1 block w-full border border-gray-300 text-black rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00C950] focus:border-[#00C950]"
                        value={nameVal}
                        onChange={nameValidation}
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="email" className="block text-base font-bold text-black">
                        Email Address*
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        required
                        value={emailVal}
                        onChange={(e)=> setEmailVal(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 text-black rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00C950] focus:border-[#00C950]"
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="phone" className="block text-base font-bold text-black">
                        Phone Number*
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="07123 456789"
                        required
                        value={phoneVal}
                        onChange={phoneValidation}
                        className="mt-1 block w-full text-black border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00C950] focus:border-[#00C950]"
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="postcode" className="block text-base font-bold text-black">
                        Post Code*
                    </label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        placeholder="RM20 4EL"
                        required
                        value={postcodeVal}
                        onChange={postcodeValidation}
                        className="mt-1 block w-full border border-gray-300 text-black rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00C950] focus:border-[#00C950]"
                    />
                </div>
            </div>
            <div className="space-y-1 mt-5">
                <label htmlFor="issue" className="block text-[14px] text-base font-bold text-black">
                    Issue With Vehicle*
                </label>
                <textarea
                    id="issue"
                    name="issue"
                    placeholder="Please describe the issue with your vehicle..."
                    required
                    value={issueVal}
                    onChange={(e) => setIssueVal(e.target.value)}
                    className="h-32 resize-none mt-1 block w-full border border-gray-300 text-black rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00C950] focus:border-[#00C950]"
                />
            </div>
            <div className="space-y-1 mt-5">
                <div className="rounded-lg border border-[#dce3ec] bg-[#f3f6fa] px-3 py-3">
                    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">

                        <span className="whitespace-nowrap text-base font-semibold text-black">
                            What is {num1} + {num2}?
                        </span>

                        <input
                            type="number"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Your answer"
                            className="h-9 min-w-0 w-full rounded-lg border border-[#dce3ec] bg-white px-3 text-center text-sm text-gray-700 outline-none focus:border-[#00C950]"
                        />

                        <button
                            type="button"
                            onClick={generateCaptcha}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green text-xl text-white transition hover:bg-blue-hover active:scale-95"
                            title="Refresh Captcha"
                        >
                            ↻
                        </button>

                    </div>
                </div>
            </div>
            <button
                type="submit"
                disabled={loading}
                className="cursor-pointer mt-8 rounded-lg w-full h-10 bg-brand-green text-base font-bold text-white transition hover:bg-brand-darkGreen disabled:cursor-not-allowed disabled:opacity-60"
            >
                {loading ? "Sending..." : "Submit"}
            </button>
        </form>
    )
}