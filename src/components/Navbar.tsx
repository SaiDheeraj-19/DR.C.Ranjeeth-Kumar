"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                ? "py-4"
                : "py-8"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
                <div className={`relative flex items-center gap-4 transition-all duration-700 ${scrolled ? "scale-90" : "scale-100"}`}>
                    <a href="#" className="font-serif text-xl font-black text-deep-slate tracking-tighter flex items-center gap-2 group">
                        <div className="w-2 h-2 rounded-full bg-accent-blue group-hover:animate-ping" />
                        DR. C. RANJEETH KUMAR
                    </a>
                    <div className="hidden lg:block w-px h-4 bg-light-divider" />
                    <span className="hidden lg:block text-[9px] font-bold text-deep-slate/30 uppercase tracking-[0.3em]">AI Researcher</span>
                </div>

                <div className={`flex items-center gap-2 p-1 transition-all duration-700 rounded-full border ${scrolled
                    ? "bg-white/80 backdrop-blur-xl border-light-divider shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                    : "bg-transparent border-transparent"
                    }`}>
                    <div className="hidden md:flex items-center px-4">
                        {[
                            { name: "About", href: "#about" },
                            { name: "Research", href: "#research" },
                            { name: "Impact", href: "#impact" },
                            { name: "Patents", href: "#patents" },
                            { name: "Leadership", href: "#leadership" }
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-[10px] font-bold text-deep-slate/60 hover:text-accent-blue uppercase tracking-widest transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <a href="#contact" className="px-8 py-3 bg-deep-slate text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-accent-blue transition-all duration-500 shadow-xl">
                        Initiate
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
