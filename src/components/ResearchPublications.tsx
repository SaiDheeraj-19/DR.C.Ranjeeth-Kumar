"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, FileText, CheckCircle2 } from "lucide-react";

const keyPublications = [
    {
        title: "Deep Learning for Smart Grids: Predictive Analysis and Optimization",
        journal: "Scientific Data Management & AI Review",
        focus: "Infrastructure Intelligence",
        indexing: "SCI/Scopus",
        impact: "4.8",
        desc: "Engineering adaptive neural architectures to optimize energy distribution and load forecasting in modern micro-grids."
    },
    {
        title: "Advanced Face Recognition using CNN and Siamese Networks",
        journal: "Journal of Computer Vision & Biometrics",
        focus: "Neural Security",
        indexing: "SCI Indexed",
        impact: "5.2",
        desc: "Developing high-fidelity biometric systems with one-shot learning capabilities for secure industrial access control."
    },
    {
        title: "AI-based Diabetes Prediction and Diagnostic Frameworks",
        journal: "Healthcare Systems & Computational Intelligence",
        focus: "Medical AI",
        indexing: "Scopus Indexed",
        impact: "4.5",
        desc: "Researching early-stage diagnostic models using gradient-boosted trees and deep neural networks for patient data analysis."
    }
];

export default function ResearchPublications() {
    return (
        <section id="research" className="py-48 bg-academic-white relative overflow-hidden">
            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl"
                    >
                        <span className="text-accent-blue font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Research Repository</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-deep-slate leading-[0.9] tracking-tighter mb-10">
                            The Scientific <br />
                            <span className="italic text-accent-blue">Archive.</span>
                        </h2>
                        <p className="text-xl text-muted-gray font-light leading-relaxed max-w-2xl border-l border-light-divider pl-8">
                            A cumulative portfolio of over 30 peer-reviewed publications, setting benchmarks in Deep Learning and Healthcare AI.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="p-10 bg-white border border-light-divider rounded-[2rem] text-center">
                            <span className="text-accent-blue font-serif text-4xl mb-2 block">17</span>
                            <span className="text-[9px] font-extrabold text-deep-slate/40 uppercase tracking-[0.2em]">SCI/Scopus Indexed</span>
                        </div>
                        <div className="p-10 bg-white border border-light-divider rounded-[2rem] text-center">
                            <span className="text-accent-blue font-serif text-4xl mb-2 block">30+</span>
                            <span className="text-[9px] font-extrabold text-deep-slate/40 uppercase tracking-[0.2em]">Total Publications</span>
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-16">
                    <h4 className="text-[10px] font-extrabold tracking-[0.5em] uppercase text-deep-slate/20 mb-12">Core Scientific Contributions</h4>

                    <div className="grid gap-8">
                        {keyPublications.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group bg-white p-12 lg:p-16 border border-light-divider rounded-[3rem] transition-all duration-700 hover:shadow-[0_60px_100px_rgba(0,0,0,0.04)] hover:-translate-y-2 flex flex-col lg:flex-row gap-16"
                            >
                                <div className="lg:w-1/3 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-academic-white rounded-2xl flex items-center justify-center border border-light-divider">
                                                <FileText size={20} className="text-accent-blue" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[10px] font-extrabold text-accent-blue tracking-[0.2em] uppercase">{pub.indexing}</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[9px] font-bold text-deep-slate/30 uppercase tracking-[0.3em] mb-2">Scientific Journal</h5>
                                            <p className="text-sm font-serif italic text-deep-slate pr-8">{pub.journal}</p>
                                        </div>
                                    </div>

                                    <div className="pt-8 flex items-center gap-6">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-bold text-muted-gray uppercase tracking-widest">Scientific Impact</span>
                                            <span className="text-xl font-serif text-deep-slate">{pub.impact}</span>
                                        </div>
                                        <div className="w-px h-8 bg-light-divider" />
                                        <Globe size={18} className="text-accent-blue/40" strokeWidth={1.5} />
                                    </div>
                                </div>

                                <div className="lg:w-2/3 space-y-8">
                                    <div className="space-y-4">
                                        <span className="text-[9px] font-bold text-accent-blue uppercase tracking-[0.4em]">{pub.focus}</span>
                                        <h3 className="text-3xl lg:text-4xl font-serif text-deep-slate leading-tight group-hover:text-accent-blue transition-colors duration-500">
                                            {pub.title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-muted-gray font-light leading-relaxed max-w-2xl italic pl-8 border-l-2 border-accent-blue/10">
                                        &quot;{pub.desc}&quot;
                                    </p>
                                    <div className="pt-6 flex flex-wrap items-center justify-between gap-8">
                                        <div className="flex items-center gap-10">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 size={14} className="text-green-500/40" />
                                                <span className="text-[9px] font-bold text-deep-slate/40 uppercase tracking-widest">Peer-Reviewed Verified</span>
                                            </div>
                                            <span className="text-[9px] font-bold text-deep-slate/40 uppercase tracking-widest">Archive Ref: P-2024-{index}</span>
                                        </div>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 text-accent-blue"
                                        >
                                            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em]">Access Scientific Data</span>
                                            <ExternalLink size={14} strokeWidth={1.5} />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
