"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Fingerprint } from "lucide-react";

/**
 * Technical Patent Metadata
 */
const patents = [
    {
        title: "Intelligent Exoskeleton for Mobility Restoration",
        status: "Granted",
        ref: "PAT-IND-2023-01",
        domain: "Neuro-Robotics",
        desc: "A neural-integrated robotic framework providing adaptive structural support and mobility enhancement through real-time physiological feedback loops.",
        metrics: ["98% Synergy", "Real-time Edge Sync", "Biometric Adaptation"]
    },
    {
        title: "Computer Vision Wearable for Spatial Awareness",
        status: "Granted",
        ref: "PAT-IND-2022-04",
        domain: "Assistive AI",
        desc: "Next-gen sensory augmentation device utilizing edge AI to transform environmental visual data into auditory and haptic mapping for the visually impaired.",
        metrics: ["Low-Latency Processing", "Spatial Audio Map", "Object Localization"]
    },
    {
        title: "Bio-Feedback Stress Mitigation System",
        status: "Filed",
        ref: "PAT-APP-2024-09",
        domain: "Applied Psychometry",
        desc: "Non-invasive cognitive state regulation module employing multi-modal sensors to detect and mitigate physiological stress indicators autonomously.",
        metrics: ["Autonomous Regulation", "Multi-modal Fusion", "Wearable Form-Factor"]
    },
    {
        title: "Edge-AI Content Generation Engine",
        status: "Filed",
        ref: "PAT-APP-2024-12",
        domain: "Generative Systems",
        desc: "Dedicated hardware architecture optimized for real-time generative tasks, bypassing cloud latency for secure, high-fidelity content automation.",
        metrics: ["Zero-Cloud Latency", "Silicon Optimization", "Encrypted Inference"]
    }
];

export default function InnovationPatents() {
    return (
        <section id="patents" className="py-48 bg-white relative overflow-hidden">
            {/* --- ARCHITECTURAL BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 left-1/4 w-px h-full bg-[#0F172A]" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-[#0F172A]" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-[#0F172A]" />

                {/* Minimal Blueprint Pattern */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F172A" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                {/* --- HEADER: TECHNICAL DISCLOSURE --- */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-16 mb-40 border-b border-[#0F172A]/5 pb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="px-5 py-1.5 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/5">
                                <span className="text-[9px] font-black text-[#3B82F6] uppercase tracking-[0.4em]">Intellectual Property Registry</span>
                            </div>
                            <div className="h-px w-16 bg-[#3B82F6]/20" />
                        </div>
                        <h2 className="text-6xl md:text-8xl font-serif text-[#0F172A] leading-[0.9] tracking-tighter mb-12">
                            Innovation <br />
                            <span className="italic text-[#3B82F6]">& Patents.</span>
                        </h2>
                        <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-2xl">
                            Protecting breakthrough Artificial Intelligence architectures through a rigorous global pipeline of international filings and awarded disclosures.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex flex-col items-center gap-6 p-10 bg-[#F9FBFD] border border-[#0F172A]/5 rounded-[3rem]"
                    >
                        <ShieldCheck size={48} className="text-[#3B82F6]" strokeWidth={1} />
                        <div className="text-center">
                            <span className="block text-3xl font-serif text-[#0F172A]">04</span>
                            <span className="text-[8px] font-black text-[#64748B]/50 uppercase tracking-[0.4em]">Global Assets</span>
                        </div>
                    </motion.div>
                </div>

                {/* --- PATENT SCHEMATIC GRID --- */}
                <div className="grid lg:grid-cols-2 gap-px bg-[#0F172A]/5 border border-[#0F172A]/5 overflow-hidden rounded-[4rem]">
                    {patents.map((patent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white group p-12 lg:p-20 relative overflow-hidden transition-colors duration-700 hover:bg-[#F9FBFD]"
                        >
                            {/* Technical Number Background */}
                            <div className="absolute top-12 right-12 text-[12rem] font-serif text-[#0F172A]/[0.02] select-none leading-none group-hover:text-[#3B82F6]/[0.04] transition-colors duration-700">
                                0{index + 1}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-16">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Fingerprint size={16} className="text-[#3B82F6]" strokeWidth={1.5} />
                                            <span className="text-[9px] font-black text-[#3B82F6] uppercase tracking-[0.4em]">{patent.domain}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full ${patent.status === 'Granted' ? 'bg-green-500' : 'bg-[#3B82F6]'}`} />
                                            <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-widest">{patent.status}</span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#64748B]/30 uppercase tracking-[0.2em]">{patent.ref}</span>
                                </div>

                                <div className="space-y-8 flex-grow">
                                    <h3 className="text-3xl font-serif text-[#0F172A] leading-tight max-w-sm group-hover:text-[#3B82F6] transition-colors duration-700">
                                        {patent.title}
                                    </h3>
                                    <p className="text-[#64748B] text-lg font-light leading-relaxed border-l border-[#0F172A]/10 pl-8 italic">
                                        &quot;{patent.desc}&quot;
                                    </p>
                                </div>

                                <div className="mt-20 pt-16 border-t border-[#0F172A]/5">
                                    <div className="flex flex-wrap gap-x-10 gap-y-6">
                                        {patent.metrics.map((metric, mi) => (
                                            <div key={mi} className="flex flex-col gap-2">
                                                <span className="text-[8px] font-black text-[#64748B]/40 uppercase tracking-widest">Parameter 0{mi + 1}</span>
                                                <span className="text-xs font-serif text-[#0F172A] font-bold">{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Interaction Action */}
                                <div className="mt-16 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                                    <div className="flex items-center gap-4 cursor-pointer">
                                        <div className="w-10 h-10 rounded-full border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6]">
                                            <FileText size={16} />
                                        </div>
                                        <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-[0.3em]">View Technical Disclosure</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>



            </div>
        </section>
    );
}
