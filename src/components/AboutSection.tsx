"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ end, label, duration = 2, prefix = "", suffix = "" }: { end: number, label: string, duration?: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            let startTime: number;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    setCount(end);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, end, duration]);

    return (
        <div ref={ref} className="group p-8 bg-academic-white border border-light-divider/60 rounded-[2rem] transition-all duration-700 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:-translate-y-1">
            <div className="text-4xl font-serif text-deep-slate group-hover:text-accent-blue transition-colors mb-2">
                <span className="text-xl font-sans font-bold opacity-30 mr-1">{prefix}</span>
                {count}<span className="text-xl font-sans font-bold opacity-30 ml-1">{suffix}</span>
            </div>
            <div className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-muted-gray/50 group-hover:text-deep-slate transition-colors">{label}</div>
        </div>
    );
};

export default function AboutSection() {
    return (
        <section id="about" className="py-48 bg-white relative overflow-hidden">
            {/* Subtle Institutional Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-academic-white/50 -z-0" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-blue/[0.02] rounded-full blur-[100px]" />

            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-24 items-start">

                    {/* Left: Scientific Narrative */}
                    <div className="lg:col-span-6 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-accent-blue font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Academic Stewardship</span>
                            <h2 className="text-5xl md:text-6xl font-serif text-deep-slate mb-12 leading-[1.1] tracking-tight">
                                Over 15 +years of <br />
                                <span className="italic">Scientific Leadership</span> <br />
                                and Global Impact.
                            </h2>

                            <div className="space-y-8">
                                <p className="text-xl text-muted-gray font-light leading-relaxed border-l-2 border-accent-blue/10 pl-8">
                                    A Ph.D. in Information & Communication Engineering, Dr. C. Ranjeeth Kumar integrates <span className="text-deep-slate font-medium">theoretical intelligence</span> with scalable industrial engineering.
                                </p>
                                <p className="text-lg text-muted-gray font-light leading-relaxed pl-8">
                                    His specialization in <span className="text-deep-slate font-medium">Deep Learning</span> and <span className="text-deep-slate font-medium">Computer Vision</span> has led to 30+ peer-reviewed publications and 4 breakthrough patents, reinforcing his position as a pioneer in the neural frontier.
                                </p>
                            </div>

                            <div className="mt-16 bg-academic-white p-10 rounded-[3rem] border border-light-divider/40">
                                <h4 className="text-deep-slate font-extrabold uppercase tracking-[0.3em] text-[9px] mb-8 px-2">Core Research Domains</h4>
                                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                    {['Artificial Intelligence', 'Machine Learning', 'Deep Vision', 'Industrial Robotics'].map((item) => (
                                        <div key={item} className="flex items-center gap-4 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/20 group-hover:bg-accent-blue transition-all duration-500" />
                                            <span className="text-sm font-bold text-muted-gray group-hover:text-deep-slate transition-colors uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Quantified Milestones */}
                    <div className="lg:col-span-6">
                        <div className="grid grid-cols-2 gap-6 pb-12">
                            <div className="space-y-6">
                                <Counter end={30} label="Scientific Publications" suffix="+" />
                                <Counter end={12} label="Industry Collaborations" suffix="+" />
                                <Counter end={25} label="Hackathon Mentorships" suffix="+" />
                            </div>
                            <div className="space-y-6 mt-16">
                                <Counter end={35} label="Research Grants" prefix="₹" suffix="L+" />
                                <Counter end={4} label="Innovation Patents" suffix=" (2G)" />
                                <Counter end={15} label="Years of Excellence" />
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 p-10 bg-deep-slate rounded-[3rem] text-white flex flex-col gap-6"
                        >
                            <span className="text-accent-blue font-bold tracking-[0.4em] uppercase text-[9px]">Strategic Vision</span>
                            <p className="text-2xl font-serif leading-tight">
                                &quot;Our mission is to architect AI systems that not only solve industrial bottlenecks but also empower the next generation of researchers.&quot;
                            </p>
                            <div className="w-12 h-px bg-white/20" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
