"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const mentorshipStories = [
    {
        name: "S. Raghavan",
        role: "Research Lead",
        placement: "NVIDIA",
        quote: "Under Dr. Ranjeeth's guidance, I transitioned from theoretical learning to deploying high-performance AI models in real-time environments.",
    },
    {
        name: "Ananya K.",
        role: "Software Engineer",
        placement: "Google",
        quote: "The focus on industrial scalability and scientific rigor provided me with a competitive edge during global technical assessments.",
    },
    {
        name: "Mohammed Z.",
        role: "Data Scientist",
        placement: "Amazon Robotics",
        quote: "His mentorship was pivotal in helping me bridge the gap between complex computer vision research and commercial hardware integration.",
    }
];

export default function Mentorship() {
    return (
        <section id="mentorship" className="py-32 bg-white relative overflow-hidden noise-bg">
            <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl"
                    >
                        <span className="text-accent-blue font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Legacy of Mentorship</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-deep-slate leading-[0.9] tracking-tighter mb-8">
                            Empowering <br />
                            <span className="italic text-accent-blue">Global Leaders.</span>
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
                            Empowering students to transition from academic logic to industrial leadership.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {mentorshipStories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="h-full bg-academic-white p-10 lg:p-12 border border-light-divider rounded-[3rem] transition-all duration-700 group-hover:bg-white group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] group-hover:-translate-y-4 flex flex-col justify-between">
                                <div className="space-y-8">
                                    <Quote className="text-accent-blue/20 w-12 h-12" strokeWidth={1} />
                                    <p className="text-lg text-deep-slate/80 font-light leading-relaxed italic">
                                        &quot;{story.quote}&quot;
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-light-divider/60 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-deep-slate flex items-center justify-center text-white font-serif text-sm">
                                            {story.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="text-base font-serif text-deep-slate group-hover:text-accent-blue transition-colors duration-500">{story.name}</h4>
                                            <span className="text-[10px] font-bold text-muted-gray/60 uppercase tracking-widest">{story.role}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-px bg-accent-blue/30" />
                                        <span className="text-[10px] font-extrabold text-accent-blue/60 uppercase tracking-tighter">Placed at {story.placement}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Metrics Summary Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 pt-20 border-t border-light-divider/60 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
                >
                    {[
                        { label: 'Student Projects', val: '50+' },
                        { label: 'Industry Placements', val: '95%' },
                        { label: 'Peer Publications', val: '12' },
                        { label: 'Hackathon Wins', val: '15+' }
                    ].map((m) => (
                        <div key={m.label} className="space-y-2">
                            <span className="text-4xl font-serif text-deep-slate">{m.val}</span>
                            <p className="text-[10px] font-bold text-muted-gray uppercase tracking-[0.2em]">{m.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
