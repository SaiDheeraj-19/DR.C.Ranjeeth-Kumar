"use client";

import { motion } from "framer-motion";
const awards = [
    { title: "NVIDIA Research Grant", year: "2023", desc: "Recognized for outstanding contributions to accelerating edge AI research." },
    { title: "Faculty of the Year Award", year: "2022", desc: "For excellence in academic leadership and pedagogical innovation." },
    { title: "Top 100 International Distinguished Educators", year: "2021", desc: "Honored globally for transformative educational frameworks in Data Science." },
    { title: "Innovation Excellence Awards", year: "2020", desc: "Acknowledged for bridging academia and commercial AI implementation." },
    { title: "Industry Recognition Certificates", year: "Ongoing", desc: "Multiple certifications and honors from leading tech conglomerates." }
];

export default function GlobalRecognition() {
    return (
        <section id="awards" className="py-48 bg-white relative overflow-hidden noise-bg">
            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl"
                    >
                        <span className="text-accent-blue font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Distinctions</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-deep-slate leading-[0.9] tracking-tighter mb-8">
                            Global <br />
                            <span className="text-outline">Recognition.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:pt-16"
                    >
                        <p className="max-w-sm text-xl text-muted-gray font-light leading-relaxed border-l-2 border-accent-blue/20 pl-8">
                            Acknowledging scientific excellence and transformative leadership on the international stage.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Academic Year Marker */}
                            <div className="text-[10rem] font-serif text-deep-slate/[0.02] absolute -top-20 -left-10 select-none group-hover:text-accent-blue/[0.04] transition-all duration-700">
                                {award.year.slice(-2)}
                            </div>

                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-accent-blue/30 group-hover:w-20 transition-all duration-500" />
                                    <span className="text-accent-blue text-[10px] tracking-[0.3em] uppercase font-extrabold px-3 py-1 bg-accent-blue/5 rounded-full">
                                        Honor • {award.year}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-serif text-deep-slate group-hover:text-accent-blue transition-colors duration-500 leading-tight">
                                    {award.title}
                                </h3>

                                <p className="text-muted-gray text-lg font-light leading-relaxed italic border-l border-light-divider pl-8 ml-2">
                                    {award.desc}
                                </p>

                                <div className="flex items-center gap-3 ml-2 pt-4">
                                    <div className="w-2 h-2 rounded-full border border-accent-blue/20 group-hover:bg-accent-blue transition-all duration-500" />
                                    <span className="text-[9px] font-extrabold text-deep-slate/20 uppercase tracking-[0.2em] group-hover:text-deep-slate/40 transition-colors">Credential Verified</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
