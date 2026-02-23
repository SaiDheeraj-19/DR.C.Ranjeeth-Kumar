"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, ExternalLink } from "lucide-react";

const engagements = [
    {
        org: "RMJ IT Solutions Private Limited",
        role: "Lead – AI Training & Skill Development Programs",
        focus: "Designing AI/ML curriculum, Industry-oriented AI modules, Corporate training, Hands-on ML & Deep Learning programs.",
        description: "Led structured AI capability development programs for students and professionals through industry-aligned curriculum design and applied AI workshops.",
        icon: BookOpen
    },
    {
        org: "upGrad",
        role: "Thesis Supervisor – DBA Program",
        focus: "Supervising doctoral research in AI, Business Analytics, and Data Science.",
        description: "Supervising applied doctoral research integrating Artificial Intelligence into real-world business problem-solving frameworks.",
        icon: GraduationCap
    }
];

export default function ResearchEngagement() {
    return (
        <section id="research-engagement" className="py-48 bg-[#F9FBFD] relative overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B82F6]/[0.01] rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Header Section */}
                <div className="max-w-4xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[#3B82F6] font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Academic Stewardship</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-[#0F172A] leading-[1.05] tracking-tight mb-8">
                            Academic–Industry <br />
                            <span className="italic">Research Engagement.</span>
                        </h2>
                        <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-2xl">
                            Leading AI skill development and applied research supervision initiatives across global academic frameworks.
                        </p>
                    </motion.div>
                </div>

                {/* Engagement Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
                    {engagements.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                className="group bg-white border border-[#0F172A]/5 p-12 lg:p-16 rounded-[4rem] hover:shadow-[0_40px_100px_rgba(0,0,0,0.03)] transition-all duration-700 relative flex flex-col items-start h-full"
                            >
                                {/* Typographic Logo Header */}
                                <div className="flex items-start justify-between w-full mb-12">
                                    <div className="flex flex-col">
                                        <div className="w-14 h-14 bg-[#F9FBFD] rounded-2xl flex items-center justify-center border border-[#0F172A]/5 mb-6 group-hover:border-[#3B82F6]/20 transition-all duration-700">
                                            <Icon className="text-[#0F172A]/20 group-hover:text-[#3B82F6] transition-colors duration-700" strokeWidth={1} size={28} />
                                        </div>
                                        <span className="text-[14px] font-black text-[#0F172A]/30 group-hover:text-[#0F172A] transition-colors tracking-[0.2em] uppercase select-none font-sans">
                                            {item.org.split(' ')[0]}
                                            <span className="opacity-40 font-light group-hover:text-[#3B82F6] transition-colors ml-1">
                                                {item.org.split(' ').slice(1).join(' ')}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#F9FBFD] flex items-center justify-center border border-[#0F172A]/5 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                        <ExternalLink size={14} className="text-[#3B82F6]" />
                                    </div>
                                </div>

                                <div className="space-y-8 flex-grow">
                                    <div className="space-y-4">
                                        <span className="text-[9px] font-bold text-[#3B82F6] uppercase tracking-[0.4em]">Leadership Focus</span>
                                        <h3 className="text-2xl font-serif text-[#0F172A] leading-tight font-bold">
                                            {item.role}
                                        </h3>
                                    </div>

                                    <p className="text-[#64748B] text-lg font-light leading-relaxed italic border-l border-[#0F172A]/10 pl-8">
                                        &quot;{item.description}&quot;
                                    </p>

                                    <div className="pt-4">
                                        <span className="text-[9px] font-black text-deep-slate opacity-30 uppercase tracking-widest mb-4 block">Core Domains</span>
                                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                                            {item.focus.split(',').map((f, fi) => (
                                                <div key={fi} className="flex items-center gap-3">
                                                    <div className="w-1 h-1 rounded-full bg-[#3B82F6]/30 group-hover:bg-[#3B82F6] transition-colors" />
                                                    <span className="text-[10px] font-bold text-[#64748B]/50 uppercase tracking-widest">{f.trim()}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final Institutional Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-40 pt-20 border-t border-[#0F172A]/5 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
                >
                    {[
                        { label: 'Doctoral Candidates', val: '10+' },
                        { label: 'Corporate Partners', val: '08' },
                        { label: 'Research Hours', val: '2500+' },
                        { label: 'Certifications Issued', val: '500+' }
                    ].map((m) => (
                        <div key={m.label} className="space-y-4 group">
                            <span className="text-3xl font-serif text-[#0F172A]/30 group-hover:text-[#3B82F6] transition-colors">{m.val}</span>
                            <p className="text-[9px] font-black text-[#64748B]/30 uppercase tracking-[0.4em] group-hover:text-[#0F172A] transition-colors">{m.label}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
