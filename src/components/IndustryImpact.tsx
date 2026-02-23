"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Target, ShieldCheck } from "lucide-react";

const organizations = [
    { name: "International Aerospace Manufacturing", sub: "(Rolls-Royce & HAL JV)" },
    { name: "Rolls-Royce", sub: "(via IAMPL JV)" },
    { name: "HAL", sub: "(Hindustan Aeronautics Limited)" },
    { name: "GE Healthcare", sub: "Collaborative Research" },
    { name: "L&T Technology Services", sub: "" },
    { name: "Cameron", sub: "(Schlumberger Company)" },
    { name: "Bimetal Bearings Limited", sub: "" }
];

const caseStudies = [
    {
        org: "International Aerospace Manufacturing Pvt. Ltd. (Rolls-Royce & HAL JV)",
        title: "Aerospace AI Vision Inspection System",
        funding: "₹23.6 Lakhs",
        focus: "AI-powered robotic vision inspection",
        techniques: ["Deep Convolutional Neural Networks (CNN)", "Real-time Edge AI", "Robotic Path Synthesis"],
        outcome: "Quantified improvement in defect detection fidelity and a significant reduction in manual latent inspection cycles within the aerospace manufacturing pipeline.",
        narrative: "Led an interdisciplinary research initiative to architect and deploy a high-precision robotic vision framework for automated fracture detection in critical turbine components."
    },
    {
        org: "GE Healthcare",
        title: "AI-Based Mask Detection System",
        funding: "Research Consultancy",
        focus: "Computer Vision during globally critical health operations",
        techniques: ["YOLOv5 Architecture Optimization", "Multi-stream Video Analytics", "Temporal Compliance Scoring"],
        outcome: "Established a robust framework for real-time healthcare safety compliance monitoring, currently serving as a model for institutional PPE governance.",
        narrative: "Directed the development of a lightweight, scalable computer vision system for automated compliance monitoring within clinical environments."
    },
    {
        org: "L&T Technology Services",
        title: "AI/ML/DL-Based Video Gesture Classification",
        funding: "Applied Research Project",
        focus: "Industrial automation & gesture recognition",
        techniques: ["3D-Temporal Convolutional Networks", "MediaPipe Integration", "Spatial Transformer Networks"],
        outcome: "Enhanced gesture classification accuracy to 98% in high-noise industrial environments, facilitating contactless machine interaction protocols.",
        narrative: "Designed and deployed an applied AI framework for high-fidelity human-machine interaction within heavy industrial automation sectors."
    },
    {
        org: "Cameron (A Schlumberger Company)",
        title: "Automated Material Test Report (MTR) Validation",
        funding: "Industry Research Fund",
        focus: "AI-based document extraction and validation",
        techniques: ["LayoutLMv3", "Named Entity Recognition (NER)", "OCR Engine Tuning"],
        outcome: "Drastically reduced manual data verification latency and ensured 100% adherence to international engineering compliance standards.",
        narrative: "Executed funded consultancy research to leverage NLP-driven document intelligence for the automation of complex metallurgical report validation."
    },
    {
        org: "Bimetal Bearings Limited",
        title: "AI-Powered Visual Inspection System",
        funding: "₹3.4 Lakhs",
        focus: "Manufacturing defect detection",
        techniques: ["Autoencoder-based Anomaly Detection", "Transfer Learning", "Industrial Edge Deployment"],
        outcome: "Successfully transitioned the facility from manual quality checks to an AI-driven automated inspection protocol, improving throughput and reliability.",
        narrative: "Directed the system development of a non-invasive visual inspection module optimized for real-time defect identification in high-velocity manufacturing lines."
    }
];

export default function IndustryImpact() {
    return (
        <section id="impact" className="py-48 bg-[#F9FBFD] relative overflow-hidden">
            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                {/* --- HEADER (Scholarly & Credible) --- */}
                <div className="max-w-4xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[#3B82F6] font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Translational Research & Leadership</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-[#0F172A] leading-[1.05] tracking-tight mb-12">
                            Industry Collaborations <br />
                            & <span className="italic">Applied Research Impact.</span>
                        </h2>
                        <p className="text-xl text-[#64748B] font-light leading-relaxed max-w-3xl">
                            Translating Artificial Intelligence research into real-world industrial systems across aerospace, healthcare, manufacturing, and engineering sectors.
                        </p>
                    </motion.div>
                </div>

                {/* --- LOGO STRIP (Prestige Display) --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="mb-48 pb-20 border-b border-[#0F172A]/5"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 items-center">
                        {organizations.map((org, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center group cursor-default transition-all duration-700"
                            >
                                <div className="text-center space-y-2">
                                    <span className="block text-[10px] font-black text-[#0F172A]/60 group-hover:text-[#3B82F6] transition-colors duration-500 uppercase tracking-widest leading-tight">
                                        {org.name}
                                    </span>
                                    {org.sub && (
                                        <span className="block text-[7px] font-bold text-[#64748B]/50 group-hover:text-[#0F172A]/70 transition-colors duration-500 uppercase tracking-tighter">
                                            {org.sub}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- CASE STUDY BLOCKS --- */}
                <div className="space-y-40">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative grid lg:grid-cols-12 gap-16 items-start"
                        >
                            {/* Organization Metadata */}
                            <div className="lg:col-span-4 flex flex-col items-start pt-2">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-4xl font-serif text-[#0F172A]/10 group-hover:text-[#3B82F6]/20 transition-colors duration-700 select-none">0{index + 1}</span>
                                    <div className="h-px w-12 bg-[#0F172A]/10" />
                                </div>
                                <h4 className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.3em] mb-4">Lead Organization</h4>
                                <p className="text-base font-serif text-[#0F172A] font-bold leading-snug max-w-[240px]">
                                    {study.org}
                                </p>

                                {study.funding && (
                                    <div className="mt-12 p-6 bg-white border border-[#0F172A]/5 rounded-2xl w-full">
                                        <span className="text-[8px] font-black text-[#64748B]/50 uppercase tracking-widest block mb-2">Research Funding</span>
                                        <p className="text-xl font-serif text-[#0F172A]">{study.funding}</p>
                                    </div>
                                )}
                            </div>

                            {/* Core Lab Content */}
                            <div className="lg:col-span-8 space-y-12">
                                <div className="space-y-6">
                                    <h3 className="text-3xl md:text-5xl font-serif text-[#0F172A] leading-tight flex items-start gap-6 group-hover:text-[#3B82F6] transition-colors duration-700">
                                        {study.title}
                                        <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700 mt-2" />
                                    </h3>
                                    <p className="text-lg text-[#64748B] font-light leading-relaxed italic border-l-2 border-[#3B82F6]/20 pl-8">
                                        &quot;{study.narrative}&quot;
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Target size={14} className="text-[#3B82F6]" />
                                            <h5 className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest">Research Focus</h5>
                                        </div>
                                        <p className="text-sm text-[#64748B] leading-relaxed">
                                            {study.focus}
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Cpu size={14} className="text-[#3B82F6]" />
                                            <h5 className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest">AI Techniques Employed</h5>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {study.techniques.map((tech, t) => (
                                                <span key={t} className="text-[9px] font-bold text-[#64748B]/60 bg-white border border-[#0F172A]/5 px-3 py-1 rounded-full uppercase tracking-tighter">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 bg-white border border-[#0F172A]/5 rounded-[2.5rem] shadow-sm relative overflow-hidden group/outcome">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover/outcome:opacity-[0.08] transition-opacity duration-700">
                                        <ShieldCheck size={80} />
                                    </div>
                                    <h5 className="text-[9px] font-black text-[#3B82F6] uppercase tracking-[0.4em] mb-6">Measurable Scientific Outcome</h5>
                                    <p className="text-xl font-serif text-[#0F172A] italic leading-relaxed">
                                        {study.outcome}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- FOOTER BADGE (Scholarly Authority) --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-48 flex flex-col items-center text-center opacity-30 group"
                >
                    <div className="w-px h-24 bg-gradient-to-b from-[#0F172A] to-transparent mb-12" />
                    <span className="text-[9px] font-black text-[#0F172A] uppercase tracking-[1em] mb-4">Core Applied AI Archive</span>
                    <p className="text-[10px] font-serif italic text-[#64748B]">Bridging the gap between Theoretical Discovery and Industrial Deployment.</p>
                </motion.div>

            </div>
        </section>
    );
}
