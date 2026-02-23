"use client";

import { motion } from "framer-motion";
import { Linkedin, Globe, BookOpen, ArrowRight, ExternalLink } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-48 bg-white relative overflow-hidden">
            {/* Minimal Academic Backdrop */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0F172A]/10 to-transparent" />

            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Main Contact Flow */}
                <div className="grid lg:grid-cols-2 gap-24 items-start pb-32">

                    {/* Left: Direct Engagement */}
                    <div className="space-y-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#3B82F6] font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Scientific Liaison</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-[#0F172A] leading-tight tracking-tight mb-8">
                                Let&apos;s Initiate <br />
                                <span className="italic">Dialogue.</span>
                            </h2>
                            <p className="text-lg text-[#64748B] font-light leading-relaxed max-w-md">
                                Open for strategic research partnerships, institutional advisory, and collaborative AI innovation.
                            </p>
                        </motion.div>

                        <div className="space-y-12">
                            <ContactItem
                                label="Primary Transmission"
                                value="ranjithkumar.c@gmail.com"
                                href="mailto:ranjithkumar.c@gmail.com"
                            />
                            <div className="flex gap-4">
                                <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/dr-c-ranjeeth-kumar-25636484" />
                                <SocialLink icon={BookOpen} href="https://scholar.google.com/citations?user=oSRpBXMAAAAJ&hl=en" />
                                <SocialLink icon={Globe} href="https://www.scopus.com/authid/detail.uri?authorId=57215661487" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Minimalist Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#F9FBFD] border border-[#0F172A]/5 p-12 lg:p-16 rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.02)]"
                    >
                        <form className="space-y-10">
                            <div className="space-y-4">
                                <label className="text-[9px] font-black text-[#0F172A]/30 uppercase tracking-widest ml-4">Researcher Identification</label>
                                <input type="text" placeholder="Full Name" className="w-full bg-white border-b border-[#0F172A]/10 px-6 py-4 text-[#0F172A] placeholder:text-[#0F172A]/20 focus:outline-none focus:border-[#3B82F6] transition-all duration-500" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[9px] font-black text-[#0F172A]/30 uppercase tracking-widest ml-4">Brief of Inquiry</label>
                                <textarea rows={2} placeholder="Institutional collaboration regarding..." className="w-full bg-white border-b border-[#0F172A]/10 px-6 py-4 text-[#0F172A] placeholder:text-[#0F172A]/20 focus:outline-none focus:border-[#3B82F6] transition-all duration-500 resize-none" />
                            </div>
                            <button className="flex items-center gap-4 text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.4em] group">
                                <span>Send Inquiry</span>
                                <div className="w-8 h-8 rounded-full border border-[#3B82F6]/20 flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-500">
                                    <ArrowRight size={14} />
                                </div>
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Lower Footer Branding */}
                <div className="pt-20 border-t border-[#0F172A]/5 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="space-y-2">
                        <span className="text-xl font-serif text-[#0F172A] tracking-tighter">Dr. C. Ranjeeth Kumar</span>
                        <p className="text-[9px] font-black text-[#64748B]/40 uppercase tracking-[0.4em]">AI Researcher & Innovation Leader</p>
                    </div>

                    <div className="hidden md:block h-12 w-px bg-[#0F172A]/5" />

                    <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
                        <p className="text-[9px] font-black text-[#64748B]/30 uppercase tracking-widest">Digital Archive © {new Date().getFullYear()}</p>
                        <p className="text-[10px] font-serif italic text-[#3B82F6] opacity-60">Engineered for Academic Persistence.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ContactItem = ({ label, value, href }: { label: string, value: string, href: string }) => (
    <a href={href} className="group block space-y-2">
        <span className="text-[9px] font-black text-[#64748B]/40 uppercase tracking-[0.4em] group-hover:text-[#3B82F6] transition-colors">{label}</span>
        <div className="flex items-center gap-3">
            <span className="text-2xl font-serif text-[#0F172A] border-b border-[#0F172A]/5 group-hover:border-[#3B82F6] transition-all duration-700">{value}</span>
            <ExternalLink size={14} className="text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </div>
    </a>
);

const SocialLink = ({ icon: Icon, href }: { icon: React.ElementType, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-[#0F172A]/5 flex items-center justify-center text-[#0F172A]/30 hover:text-[#3B82F6] hover:border-[#3B82F6]/20 transition-all duration-500 bg-white shadow-sm">
        <Icon size={18} strokeWidth={1.5} />
    </a>
);
