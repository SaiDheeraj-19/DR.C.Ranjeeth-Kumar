"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, Target, Globe } from "lucide-react";

export default function InnovationEntrepreneurship() {
    const coreTechnologies = ["Computer Vision", "Machine Vision", "Industrial AI", "Edge Deployment"];
    const applications = ["Automated Quality Inspection", "Real-time Fault Detection", "Smart Manufacturing"];

    return (
        <section id="innovation-leadership" className="py-48 bg-white relative overflow-hidden">
            {/* Subtle Architectural Pattern */}
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Header Section */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[#3B82F6] font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Venture Leadership</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-[#0F172A] leading-[1.05] tracking-tight mb-8">
                            Innovation & <br />
                            <span className="italic">Entrepreneurial Leadership.</span>
                        </h2>
                        <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-2xl">
                            Bridging academic research with real-world AI product innovation through strategic venture development.
                        </p>
                    </motion.div>
                </div>

                {/* Main Innovation Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative bg-[#F9FBFD] border border-[#0F172A]/5 rounded-[4rem] p-12 lg:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.02)] overflow-hidden"
                >
                    {/* Glassmorphic Accent */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-transform duration-1000 group-hover:scale-110" />

                    <div className="grid lg:grid-cols-12 gap-16 relative z-10">
                        {/* Left Column: Core Identity */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[#0F172A]/5">
                                        <Briefcase className="text-[#3B82F6] w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[10px] font-black text-[#0F172A]/40 uppercase tracking-[0.4em]">Feature Venture</span>
                                </div>
                                <h3 className="text-4xl font-serif text-[#0F172A] mb-2 font-bold tracking-tight">Artispec Technologies Pvt. Ltd.</h3>
                                <p className="text-[#3B82F6] font-serif italic text-lg opacity-80 decoration-1 underline-offset-4 decoration-[#3B82F6]/30 px-1">Co-Founder</p>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest flex items-center gap-3">
                                    <Target size={14} className="text-[#3B82F6]" />
                                    Innovation Focus
                                </h4>
                                <p className="text-lg text-[#64748B] font-light leading-relaxed">
                                    Co-founded an AI innovation venture focused on machine vision systems for industrial automation, translating complex computer vision research into deployable industrial AI solutions.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Technical & Strategic Impact */}
                        <div className="lg:col-span-7 space-y-12 lg:pl-12 lg:border-l border-[#0F172A]/5">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest flex items-center gap-3">
                                        <Cpu size={14} className="text-[#3B82F6]" />
                                        Core Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {coreTechnologies.map(tech => (
                                            <span key={tech} className="text-[9px] font-bold text-[#64748B]/60 bg-white border border-[#0F172A]/5 px-3 py-1 rounded-full uppercase tracking-tighter">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest flex items-center gap-3">
                                        <Globe size={14} className="text-[#3B82F6]" />
                                        Industry Applications
                                    </h4>
                                    <ul className="space-y-3">
                                        {applications.map(app => (
                                            <li key={app} className="flex items-center gap-3 text-sm text-[#64748B] font-light italic">
                                                <div className="w-1.5 h-px bg-[#3B82F6]/40" />
                                                {app}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-10 bg-white/60 backdrop-blur-sm border border-[#0F172A]/5 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.4em] mb-6">Strategic Impact</h4>
                                <p className="text-xl font-serif text-[#0F172A] italic leading-relaxed">
                                    &quot;Directing the deployment of AI models for manufacturing automation, bridging the gap between theoretical academia and high-fidelity applied AI productization.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Metric */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 flex justify-center"
                >
                    <div className="flex items-center gap-12 opacity-30">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-serif text-[#0F172A]">01</span>
                            <span className="text-[8px] font-black text-[#0F172A] uppercase tracking-widest mt-2">Ventures Co-Founded</span>
                        </div>
                        <div className="w-px h-12 bg-[#0F172A]/20" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-serif text-[#0F172A]">High</span>
                            <span className="text-[8px] font-black text-[#0F172A] uppercase tracking-widest mt-2">Social Utility Impact</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
