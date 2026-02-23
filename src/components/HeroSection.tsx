"use client";

import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Orbit } from "lucide-react";
import { useEffect, useRef } from "react";

/**
 * Senior Dev Principle: Component modularity and refined prop types
 */
const AuthorityMetric = ({ label, value, index }: { label: string; value: string; index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 + (index * 0.1) }}
        className="flex flex-col gap-1 border-l border-accent-blue/20 pl-6"
    >
        <span className="text-[10px] font-black text-accent-blue/40 uppercase tracking-[0.3em]">{label}</span>
        <span className="text-sm font-serif text-deep-slate group-hover:text-accent-blue transition-colors duration-500">{value}</span>
    </motion.div>
);

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Smooth physics for mouse-tracking (Performance optimized)
    const springX = useSpring(0, { stiffness: 50, damping: 20 });
    const springY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const moveX = (clientX / window.innerWidth - 0.5) * 40;
            const moveY = (clientY / window.innerHeight - 0.5) * 40;
            springX.set(moveX);
            springY.set(moveY);
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [springX, springY]);

    const { scrollY } = useScroll();
    const backgroundParallax = useTransform(scrollY, [0, 1000], [0, 200]);
    const contentParallax = useTransform(scrollY, [0, 1000], [0, -100]);

    const stats = [
        { label: "Credentials", value: "Ph.D. Doctorate" },
        { label: "Archive", value: "30+ Publications" },
        { label: "IP Assets", value: "4 Global Patents" },
        { label: "Impact", value: "₹35L+ Industry Grant" }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden bg-white selection:bg-accent-blue/10 selection:text-accent-blue"
        >
            {/* --- THE GENERATIVE CANVAS --- */}
            <motion.div
                style={{ y: backgroundParallax }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                {/* 
                    Senior Dev Note: Using SVG patterns for zero-paint performance overhead grid.
                */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(#3B82F6 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

                <motion.div
                    style={{ x: springX, y: springY }}
                    className="absolute inset-0 flex items-center justify-center opacity-[0.07]"
                >
                    <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="600" cy="400" r="300" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 8" />
                        <motion.circle
                            animate={{ rotate: 360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            cx="600" cy="400" r="450" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="2 12" />

                        {/* Dynamic Connection Web */}
                        <motion.path
                            animate={{
                                d: [
                                    "M100 200 Q 600 400 1100 200",
                                    "M100 200 Q 600 100 1100 200",
                                    "M100 200 Q 600 400 1100 200"
                                ]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            stroke="#3B82F6" strokeWidth="0.2"
                        />
                    </svg>
                </motion.div>

                {/* Depth Layers */}
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-accent-blue/[0.02] blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-accent-blue/[0.01] blur-[120px] rounded-full" />
            </motion.div>

            {/* --- ADAPTIVE GRID CONTENT --- */}
            <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-40 pb-20">
                <motion.div style={{ y: contentParallax }} className="grid lg:grid-cols-12 gap-16 items-end">

                    {/* Masthead: Left Heavy Column */}
                    <div className="lg:col-span-12 xl:col-span-10 space-y-12">

                        {/* 2. Identity Line: Precise, Minimal */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="flex flex-wrap items-center gap-6"
                        >
                            <span className="text-[10px] font-black text-accent-blue uppercase tracking-[0.6em] whitespace-nowrap">Core Identification</span>
                            <div className="hidden md:block h-px w-16 bg-accent-blue/20" />
                            <p className="text-[10px] font-bold text-deep-slate/40 uppercase tracking-[0.4em] leading-relaxed">
                                AI Researcher · Professor · Innovation Leader
                            </p>
                        </motion.div>

                        {/* 1. Headline: High-End Editorial Typographic Sculpture */}
                        <div className="space-y-6">
                            <div className="overflow-visible">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-serif text-deep-slate leading-[0.85] tracking-tight"
                                >
                                    Advancing <br />
                                    <span className="text-accent-blue italic font-light lowercase">intelligence</span>
                                </motion.h1>
                            </div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.8 }}
                                className="text-2xl md:text-5xl lg:text-6xl font-serif text-deep-slate/80 tracking-tight leading-[1.1]"
                            >
                                for Industry, Research, <br className="hidden md:block" /> and Society.
                            </motion.h2>
                        </div>

                        {/* 3. Authority Bar: Grid Integrated */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12">
                            {stats.map((stat, i) => (
                                <AuthorityMetric key={i} index={i} label={stat.label} value={stat.value} />
                            ))}
                        </div>

                        <div className="h-px w-full bg-light-divider/60 mt-16" />

                        {/* 4. Action Protocol: Senior Dev Approach - Clean, Purpose-built */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="flex flex-col sm:flex-row items-center gap-8 pt-8"
                        >
                            <motion.a
                                href="#research"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-12 py-6 bg-deep-slate text-white rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_20px_40px_rgba(15,23,42,0.1)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.2)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-[#1e40af] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                                <span className="relative z-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em]">
                                    View Research Archive
                                    <Orbit size={16} className="group-hover:rotate-180 transition-transform duration-1000" />
                                </span>
                            </motion.a>

                            <motion.a
                                href="#impact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-8 px-10 py-6 border border-light-divider rounded-2xl bg-white hover:bg-academic-white transition-all duration-500"
                            >
                                <div className="flex flex-col text-left">
                                    <span className="text-[7px] font-black text-accent-blue uppercase tracking-[0.4em] mb-1 opacity-60">Impact Analysis</span>
                                    <span className="text-[10px] font-black text-deep-slate uppercase tracking-[0.2em] leading-none">Industrial Growth</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-deep-slate/5 flex items-center justify-center group-hover:bg-accent-blue transition-all duration-500">
                                    <ArrowRight size={14} className="text-deep-slate group-hover:text-white transition-all duration-700" />
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>

                </motion.div>
            </div>


        </section>
    );
}
