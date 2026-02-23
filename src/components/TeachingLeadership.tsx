"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Lightbulb, Briefcase } from "lucide-react";

const roles = [
    {
        title: "Dean – Innovation & Entrepreneurship",
        org: "Institutional Leadership",
        period: "Current",
        desc: "Spearheading the ecosystem for startup incubation and technological commercialization."
    },
    {
        title: "Professor – AI & Data Science",
        org: "Advanced Pedagogy",
        period: "Tenured",
        desc: "Engineering advanced curricula for the next generation of AI specialists and data scientists."
    },
    {
        title: "Associate Professor",
        org: "14 Years of Academic Excellence",
        period: "Long-term Impact",
        desc: "Cultivating scientific rigor and research methodologies across a decade of teaching."
    }
];

const impacts = [
    {
        icon: Users,
        title: "Student Mentorship",
        desc: "Guided 50+ high-impact student projects, bridging the gap between classroom theory and real-world deployment."
    },
    {
        icon: Award,
        title: "Hackathon Leadership",
        desc: "Mentoring teams to victory in National & International Hackathons, fostering a culture of rapid innovation."
    },
    {
        icon: Lightbulb,
        title: "Innovation Ambassador",
        desc: "Certified AICTE Innovation Ambassador, driving institutional growth through strategic IP and policy-making."
    },
    {
        icon: Briefcase,
        title: "Industry-Academia Bridge",
        desc: "Architecting collaborative programs that align academic research with industrial scalability and requirements."
    }
];

export default function TeachingLeadership() {
    return (
        <section id="leadership" className="py-48 bg-white relative overflow-hidden">
            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <span className="text-accent-blue font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Scientific Pedagogy</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-deep-slate leading-[0.9] tracking-tighter mb-12">
                            Academic Stewardship <br />
                            <span className="italic text-accent-blue">& Leadership.</span>
                        </h2>
                        <p className="text-xl text-muted-gray font-light leading-relaxed max-w-2xl border-l-2 border-accent-blue/10 pl-8">
                            Nurturing the next generation of researchers through a fusion of academic rigor and strategic innovation leadership.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Institutional Narrative */}
                    <div className="lg:col-span-12 grid md:grid-cols-3 gap-8 mb-24">
                        {roles.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group p-10 bg-academic-white border border-light-divider/60 rounded-[3rem] hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.03)] transition-all duration-700"
                            >
                                <div className="space-y-6">
                                    <div className="w-12 h-[1px] bg-accent-blue/20 group-hover:w-full transition-all duration-700" />
                                    <h3 className="text-2xl font-serif text-deep-slate leading-tight group-hover:text-accent-blue transition-colors duration-500">
                                        {role.title}
                                    </h3>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-extrabold text-muted-gray/40 uppercase tracking-[0.2em]">{role.org}</p>
                                        <p className="text-[9px] font-bold text-accent-blue/40 uppercase tracking-widest">{role.period}</p>
                                    </div>
                                    <p className="text-sm text-muted-gray font-light leading-relaxed">
                                        {role.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Operational Impact Grid */}
                    <div className="lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impacts.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="p-8 bg-white border border-light-divider rounded-[2.5rem] flex flex-col items-center text-center group hover:border-accent-blue/30 transition-all duration-500"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-academic-white flex items-center justify-center mb-6 group-hover:bg-accent-blue/5 transition-colors duration-500">
                                        <Icon size={24} className="text-deep-slate group-hover:text-accent-blue transition-colors duration-500" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-deep-slate mb-4">{item.title}</h4>
                                    <p className="text-sm text-muted-gray font-light leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                    <div className="mt-auto w-2 h-2 rounded-full bg-light-divider group-hover:bg-accent-blue transition-all duration-500" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Quote Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-16 bg-deep-slate rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="flex-shrink-0 w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                        <GraduationCap size={40} className="text-accent-blue" strokeWidth={1} />
                    </div>
                    <div className="space-y-6 relative z-10">
                        <span className="text-accent-blue font-bold tracking-[0.4em] uppercase text-[10px]">Mentorship Philosophy</span>
                        <p className="text-3xl font-serif leading-tight">
                            &quot;I believe in engineering an environment where academic curiosity meets industrial pragmatism, transforming students into visionaries.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-white/20" />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest opacity-40 italic">Signature Excellence</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
