'use client'

import Image from "next/image"
import Link from "next/link"

import { useRouter, usePathname } from "next/navigation"
import { PhoneCall, Menu, X } from "lucide-react";
import { useState, useEffect } from "react"

export default function NavBar(){
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About Us", href: "#about-us" },
        { name: "Contact", href: "#contact" },
        { name: "Gallery", href: "#gallery" },
    ];
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    function handleClick(id: string) {
        setIsMenuOpen(false);

        if (pathname === "/") {
            const targetId = id.replace("#", "");

            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            router.push(`/${id}`);
        }
    }
    useEffect(() => {
        if (pathname !== "/" || !window.location.hash) return;

        const targetId = window.location.hash.substring(1);
        let attempts = 0;

        const timer = setInterval(() => {
            const element = document.getElementById(targetId);

            if (element) {
                clearInterval(timer);

                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            attempts++;

            if (attempts >= 20) {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [pathname]);
    return (
        <div className="fixed top-0 left-0 right-0 z-20 py-3 shadow-md bg-brand-green px-4 md:px-20 lg:px-40">
            <div className=" container mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <Image src="/VogueTech_logo.png" alt="Vogue Tech Logo" width={190} height={48} className="w-30 h-auto" />
                    </div>
                    <nav className="hidden lg:flex gap-6 items-center justify-center w-full">
                        {links.map((l) => {
                            return (
                                <button key={l.href} onClick={()=> handleClick(l.href)} className={`cursor-pointer relative text-base text-white`}>
                                    {l.name}
                                </button>
                            );
                        })}
                    </nav>
                    <div className="hidden lg:flex items-center justify-center">
                        <Link href={"tel:01375 531355"} className="inline-flex w-40 items-center justify-center p-2 gap-2 rounded-2xl bg-white text-base font-bold text-brand-green shadow-lg"><PhoneCall size={20} />01375 531355</Link>
                    </div>
                    <div className="flex lg:hidden items-center">
                        <button className="cursor-pointer text-white" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-16 md:top-18 left-0 right-0 w-full max-w-full bg-brand-green z-20 shadow-md">
                        <nav className="flex flex-col gap-2 px-4 md:px-8 py-4">
                            {links.map((l) => (
                                <button
                                    key={l.href}
                                    onClick={() => handleClick(l.href)}
                                    className="relative text-base text-white text-left"
                                >
                                    {l.name}
                                </button>
                            ))}
                            <Link href="tel:01375 531355" className="inline-flex w-40 items-center justify-center p-2 gap-2 rounded-2xl bg-white text-base font-bold text-brand-green shadow-lg self-center"><PhoneCall size={20} />01375 531355</Link>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    )
}