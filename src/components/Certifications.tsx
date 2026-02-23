"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface Certification {
    title: string;
    org: string;
    type: string;
    description: string;
    year?: string;
    tags: string[];
}

const partnerLogos = [
    { name: "NVIDIA DLI", label: "Deep Learning Institute" },
    { name: "Oracle", label: "Cloud Infrastructure" },
    { name: "Google Cloud", label: "AI Leader" },
    { name: "IBM", label: "Skills Network" },
    { name: "DeepLearning.AI", label: "Neural Networks" },
    { name: "ISRO", label: "Space Research" },
    { name: "AICTE", label: "Innovation Ambassador" },
    { name: "Coursera", label: "Academic Partner" },
];

const certifications: Certification[] = [
    {
        title: "NVIDIA DLI Certified Instructor",
        org: "NVIDIA Deep Learning Institute",
        type: "Instructor",
        description: "Certified to deliver advanced curriculum on the Fundamentals of Deep Learning and GPU-accelerated computing.",
        year: "2023",
        tags: ["AI", "Deep Learning", "GPU Computing"]
    },
    {
        title: "NVIDIA Certified Associate",
        org: "NVIDIA",
        type: "Associate",
        description: "Specialization in Generative AI & Large Language Models (LLMs) including RAG and prompt engineering.",
        tags: ["Generative AI", "LLMs", "NLP"]
    },
    {
        title: "OCI AI Foundations Associate",
        org: "Oracle Cloud Infrastructure",
        type: "Associate",
        description: "Comprehensive validation of AI services, machine learning concepts and cloud-native AI workflows.",
        tags: ["Cloud AI", "OCl", "Machine Learning"]
    },
    {
        title: "Google Cloud Generative AI Leader",
        org: "Google Cloud",
        type: "Leader",
        description: "Multiple badges covering Large Language Models and Responsible AI principles for enterprise.",
        tags: ["Generative AI", "Responsible AI", "Cloud"]
    },
    {
        title: "IBM Machine Learning Specialization",
        org: "IBM Skills Network",
        type: "Specialist",
        description: "Advanced training in supervised, unsupervised, and deep learning algorithms with industrial applications.",
        tags: ["Machine Learning", "Data Science"]
    },
    {
        title: "GIS & Remote Sensing",
        org: "ISRO (Sponsored)",
        type: "Research Trainee",
        description: "Advanced training in Geographic Information Systems and Satellite Data Analysis for research.",
        tags: ["Remote Sensing", "GIS", "Research"]
    },
    {
        title: "Innovation Ambassador",
        org: "AICTE (Ministry of Education)",
        type: "Advanced Level",
        description: "Designated ambassador for promoting innovation, IPR, and startup culture in academic institutions.",
        tags: ["Innovation", "IPR", "Leadership"]
    },
    {
        title: "CNN & Neural Networks",
        org: "DeepLearning.AI",
        type: "Professional",
        description: "Focused certification on Convolutional Neural Network architectures for Computer Vision tasks.",
        tags: ["Computer Vision", "CNN", "Deep Learning"]
    },
    {
        title: "Predictive Maintenance AI",
        org: "Industrial AI Certification",
        type: "Specialist",
        description: "Applied Machine Learning for prognostic health management and industrial equipment validation.",
        tags: ["Industrial AI", "Predictive Maintenance"]
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-48 bg-white relative overflow-hidden noise-bg">
            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl"
                    >
                        <span className="text-accent-blue font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Professional Registry</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-deep-slate leading-[0.9] tracking-tighter mb-8">
                            Verified <br />
                            <span className="text-outline">Expertise.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:pt-16"
                    >
                        <p className="max-w-sm text-xl text-muted-gray font-light leading-relaxed border-l-2 border-accent-blue/20 pl-8 italic">
                            Continuously validating technical mastery through elite global certification programs.
                        </p>
                    </motion.div>
                </div>

                {/* Refined Logo Strip */}
                <div className="mb-32 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-30 hover:opacity-100 transition-opacity duration-700">
                    {partnerLogos.map((logo) => (
                        <div key={logo.name} className="flex flex-col items-center gap-2 group cursor-default">
                            <span className="text-lg font-serif text-deep-slate group-hover:text-accent-blue transition-colors duration-500">{logo.name}</span>
                            <div className="w-0 group-hover:w-full h-px bg-accent-blue/20 transition-all duration-500" />
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-academic-white p-10 border border-light-divider rounded-[2rem] transition-all duration-700 group-hover:bg-white group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] group-hover:-translate-y-2 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest">{cert.org}</span>
                                            <span className="text-[8px] font-bold text-muted-gray/40 uppercase tracking-[0.2em]">{cert.year || "LIFETIME"}</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 border border-green-500/10 rounded-full">
                                            <ShieldCheck className="text-green-500" size={10} />
                                            <span className="text-[8px] font-bold text-green-600 uppercase tracking-widest">Verified</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-serif text-deep-slate group-hover:text-accent-blue transition-colors duration-500 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-muted-gray text-sm font-light leading-relaxed mb-6 italic">
                                            {cert.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-light-divider/60 flex flex-wrap gap-2">
                                    {cert.tags.map((tag) => (
                                        <span key={tag} className="text-[8px] font-extrabold text-deep-slate/20 uppercase tracking-widest group-hover:text-deep-slate/40 transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
