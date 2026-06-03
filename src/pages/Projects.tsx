import { useState, useEffect, useRef, type ElementType } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Github, Database, Code2, Server, ExternalLink, ArrowRight, Bird, Brain, Sparkles, Activity, MoonStar, Telescope, Orbit, Newspaper, ScrollText } from 'lucide-react';
import { Link } from 'react-router';
import { SiFlutter, SiDart, SiFirebase, SiSqlite, SiSupabase, SiPython } from 'react-icons/si';

type StackItem = {
    name: string;
    icon: ElementType;
    color: string;
};

type ProjectCard = {
    id: string;
    title: string;
    logo?: string;
    badge: string;
    summary: string;
    problemSolved: string;
    approach: string;
    impact: string;
    technologies: StackItem[];
    infrastructure: string;
    auth: string;
    practices: string;
    github: string;
    theme: {
        glow: string;
        border: string;
        chip: string;
        chipText: string;
        button: string;
        buttonHover: string;
        title: string;
    };
};

const FLUTTER_PROJECTS: ProjectCard[] = [
    {
        id: "notlyfe",
        title: "NotLyfe Organizer",
        logo: "/logo.png",
        badge: "Flutter App",
        summary: "Student productivity app for notes, schedules, and todos.",
        problemSolved: "A comprehensive solution for students to manage lecture notes, schedules, and todos seamlessly across multiple devices with real-time sync.",
        approach: "I designed the app around a calm Material You experience, then tied the workflow together with sync-first data handling so the same study state follows the user across devices.",
        impact: "Helps students keep their academic workflow in one place with a clean, polished mobile experience.",
        technologies: [
            { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
            { name: "Dart", icon: SiDart, color: "text-[#0175C2]" },
            { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" }
        ],
        infrastructure: "Firebase Firestore",
        auth: "Firebase Authentication",
        practices: "Material You design, state management, cross-device sync",
        github: "https://github.com/hurairamuzammal/Notlyfe-Student-Oragnizer",
        theme: {
            glow: "from-[#02569B]/35 via-cyan-400/10 to-transparent",
            border: "border-[#02569B]/25 hover:border-[#38bdf8]/45",
            chip: "bg-[#02569B]/10",
            chipText: "text-[#67e8f9]",
            button: "bg-[#02569B]/15 border-[#02569B]/30 text-[#67e8f9]",
            buttonHover: "hover:bg-[#02569B]/25 hover:border-[#67e8f9]/50",
            title: "group-hover:text-[#67e8f9]"
        }
    },
    {
        id: "cricketworld",
        title: "CricketWorld",
        logo: "/logo2.png",
        badge: "Flutter + AI",
        summary: "Real-time scores, predictions, and cricket analytics.",
        problemSolved: "Delivering custom, AI-powered real-time cricket scores, predictions, and detailed analytics for cricket enthusiasts.",
        approach: "The app combines a sport-driven UI with lightweight AI-assisted data interpretation so the experience feels fast, dynamic, and useful during live matches.",
        impact: "Turns live cricket information into a focused, mobile-first experience that is easy to scan during a match.",
        technologies: [
            { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
            { name: "AI custom API", icon: Server, color: "text-[#10b981]" },
            { name: "Open Router", icon: Code2, color: "text-[#8b5cf6]" },
            { name: "Scrapy", icon: SiPython, color: "text-[#3b82f6]" }
        ],
        infrastructure: "Custom architecture DB",
        auth: "Advanced secure auth",
        practices: "Flutter clean architecture, custom AI API integration, scalable backend",
        github: "https://github.com/hurairamuzammal/Cricket-world",
        theme: {
            glow: "from-amber-400/25 via-orange-400/10 to-transparent",
            border: "border-amber-300/20 hover:border-amber-300/45",
            chip: "bg-amber-400/10",
            chipText: "text-amber-200",
            button: "bg-amber-400/10 border-amber-300/30 text-amber-100",
            buttonHover: "hover:bg-amber-400/20 hover:border-amber-200/50",
            title: "group-hover:text-amber-200"
        }
    },
    {
        id: "healthsync",
        title: "Health Sync",
        logo: "/logo3.png",
        badge: "Health Flutter App",
        summary: "Health Connect integration for wellness tracking.",
        problemSolved: "Aggregating and synchronizing user health data like steps, heart rate, and workouts centrally by integrating with Health Connect and tracking wellness progress.",
        approach: "I focused on reliable background sync, safe permission handling, and a clean dashboard so the app could behave like a personal health command center.",
        impact: "Makes health data easier to understand without forcing the user to jump between disconnected apps.",
        technologies: [
            { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
            { name: "Health Connect", icon: Activity, color: "text-[#ef4444]" },
            { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" }
        ],
        infrastructure: "SQLite / local storage",
        auth: "Google Sign-In",
        practices: "Native API integration, background processing, secure data handling",
        github: "https://github.com/hurairamuzammal?tab=repositories",
        theme: {
            glow: "from-emerald-400/25 via-cyan-400/10 to-transparent",
            border: "border-emerald-300/20 hover:border-emerald-300/45",
            chip: "bg-emerald-400/10",
            chipText: "text-emerald-200",
            button: "bg-emerald-400/10 border-emerald-300/30 text-emerald-100",
            buttonHover: "hover:bg-emerald-400/20 hover:border-emerald-200/50",
            title: "group-hover:text-emerald-200"
        }
    }
];

const AI_PROJECTS: ProjectCard[] = [
    {
        id: "localcua",
        title: "LocalCua / FYP",
        badge: "FYP Concept",
        summary: "A personal AI research and final year project lane.",
        problemSolved: "This lane represents the larger AI work where I experiment with local-first assistants, final year project ideas, and practical NLP workflows.",
        approach: "I usually start with the problem statement, then shape the dataset, model choice, and evaluation plan so the prototype stays practical instead of becoming a demo-only experiment.",
        impact: "Shows the direction of my applied AI work: local reasoning, usable prototypes, and clear research value.",
        technologies: [
            { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
            { name: "NLP", icon: Brain, color: "text-[#22c55e]" },
            { name: "Research", icon: Sparkles, color: "text-[#f59e0b]" }
        ],
        infrastructure: "Experiment tracking and local inference",
        auth: "Project-specific access",
        practices: "Dataset prep, prompt/model iteration, research-driven evaluation",
        github: "https://github.com/hurairamuzammal?tab=repositories",
        theme: {
            glow: "from-violet-500/25 via-fuchsia-400/10 to-transparent",
            border: "border-violet-300/20 hover:border-violet-300/45",
            chip: "bg-violet-500/10",
            chipText: "text-violet-200",
            button: "bg-violet-500/10 border-violet-300/30 text-violet-100",
            buttonHover: "hover:bg-violet-500/20 hover:border-violet-200/50",
            title: "group-hover:text-violet-200"
        }
    },
    {
        id: "image-captioning",
        title: "Image Captioning Model",
        badge: "Vision + NLP",
        summary: "Turns visual input into natural language captions.",
        problemSolved: "An end-to-end image captioning system that combines computer vision and NLP to generate descriptive text from images.",
        approach: "I connected the vision encoder with the language decoder, then iterated on the training loop so the model could better align visual features with fluent captions.",
        impact: "A strong example of multimodal AI where the output is immediately readable and useful.",
        technologies: [
            { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
            { name: "NLP", icon: Brain, color: "text-[#22c55e]" },
            { name: "Captioning", icon: Sparkles, color: "text-[#f59e0b]" }
        ],
        infrastructure: "Training notebooks and model checkpoints",
        auth: "N/A",
        practices: "Encoder-decoder architecture, evaluation on generated text quality",
        github: "https://github.com/hurairamuzammal/image_captioning_model",
        theme: {
            glow: "from-cyan-500/25 via-sky-400/10 to-transparent",
            border: "border-cyan-300/20 hover:border-cyan-300/45",
            chip: "bg-cyan-500/10",
            chipText: "text-cyan-200",
            button: "bg-cyan-500/10 border-cyan-300/30 text-cyan-100",
            buttonHover: "hover:bg-cyan-500/20 hover:border-cyan-200/50",
            title: "group-hover:text-cyan-200"
        }
    },
    {
        id: "nlp-finetuning",
        title: "NLP_Finetuning_Bert_GPT2_T5",
        badge: "LLM Finetuning",
        summary: "Fine-tuning BERT, GPT-2, and T5 for NLP tasks.",
        problemSolved: "Finetuning various large language models including BERT, GPT-2, and T5 for advanced NLP tasks.",
        approach: "I treat this as an experimentation suite: prepare task-specific data, compare model behavior, and keep the benchmark loop tight so improvements are measurable.",
        impact: "Shows hands-on model adaptation across multiple transformer families.",
        technologies: [
            { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
            { name: "BERT", icon: Brain, color: "text-[#22c55e]" },
            { name: "T5", icon: Sparkles, color: "text-[#f59e0b]" }
        ],
        infrastructure: "Notebook-based experimentation",
        auth: "N/A",
        practices: "Finetuning, prompt/data iteration, task evaluation",
        github: "https://github.com/hurairamuzammal/NLP_Finetuning_Bert_GPT2_T5",
        theme: {
            glow: "from-rose-500/20 via-orange-400/10 to-transparent",
            border: "border-rose-300/20 hover:border-rose-300/45",
            chip: "bg-rose-500/10",
            chipText: "text-rose-200",
            button: "bg-rose-500/10 border-rose-300/30 text-rose-100",
            buttonHover: "hover:bg-rose-500/20 hover:border-rose-200/50",
            title: "group-hover:text-rose-200"
        }
    },
    {
        id: "nlp-rag",
        title: "NLP_Project04_RAG",
        badge: "RAG Project",
        summary: "Retrieval-assisted NLP experiments.",
        problemSolved: "A project focused on retrieval-augmented generation workflows and practical document-grounded answers.",
        approach: "I combine retrieval, context selection, and response generation so the model can stay grounded in source material rather than guessing.",
        impact: "Useful for showing how I think about modern AI pipelines beyond a single model call.",
        technologies: [
            { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
            { name: "Retrieval", icon: Database, color: "text-[#22c55e]" },
            { name: "Generation", icon: Sparkles, color: "text-[#f59e0b]" }
        ],
        infrastructure: "Notebook research stack",
        auth: "N/A",
        practices: "RAG pipeline design, document retrieval, grounded answers",
        github: "https://github.com/hurairamuzammal/NLP_Project04_RAG",
        theme: {
            glow: "from-emerald-500/20 via-teal-400/10 to-transparent",
            border: "border-emerald-300/20 hover:border-emerald-300/45",
            chip: "bg-emerald-500/10",
            chipText: "text-emerald-200",
            button: "bg-emerald-500/10 border-emerald-300/30 text-emerald-100",
            buttonHover: "hover:bg-emerald-500/20 hover:border-emerald-200/50",
            title: "group-hover:text-emerald-200"
        }
    }
];

function ProjectShowcase({ project }: { project: ProjectCard }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className={`relative overflow-hidden rounded-[2.6rem] border bg-[#f7ead4]/95 text-[#512d1c] shadow-[0_0_60px_rgba(0,0,0,0.28)] transition-all ${project.theme.border} group`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.theme.glow} opacity-70`} />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),transparent_30%,rgba(255,255,255,0.06)_100%)]" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl bg-white/30 opacity-60" />

            <div className="relative grid gap-8 p-6 md:p-8 lg:p-10 md:grid-cols-[0.95fr_1.25fr]">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className={`rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] ${project.theme.chip} ${project.theme.chipText} border-white/20`}>
                            {project.badge}
                        </span>
                        <span className="h-px flex-1 bg-[#7c4a31]/20" />
                    </div>

                    <div className="flex items-center gap-4">
                        {project.logo ? (
                            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/40 bg-white p-2 shadow-2xl">
                                <img src={project.logo} alt={`${project.title} logo`} className="h-full w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        ) : (
                            <div className={`flex h-24 w-24 items-center justify-center rounded-[1.6rem] border border-white/30 bg-white/70 ${project.theme.chipText}`}>
                                <Brain className="h-10 w-10" />
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <h3 className={`text-3xl font-black tracking-tight text-[#3f2217] transition-colors ${project.theme.title}`}>
                                {project.title}
                            </h3>
                            <p className="max-w-md text-sm leading-relaxed text-[#6f4329] md:text-base">
                                {project.summary}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a href={project.github} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all ${project.theme.button} ${project.theme.buttonHover}`}>
                            <Github className="h-4 w-4" /> View on GitHub
                            <ExternalLink className="h-4 w-4" />
                        </a>
                        <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[#7c4a31]/15 bg-white/65 px-5 py-3 text-sm font-semibold text-[#512d1c] transition-all hover:border-[#7c4a31]/25 hover:bg-white/80">
                            Back to Home <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="rounded-[1.5rem] border border-[#7c4a31]/12 bg-white/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a5d38]">My approach</p>
                        <p className="mt-3 text-sm leading-relaxed text-[#6f4329] md:text-base">
                            {project.approach}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 border-t border-[#7c4a31]/12 pt-8 md:border-l md:border-t-0 md:pt-0 md:pl-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-[#7c4a31]/12 bg-white/55 p-5">
                            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#9a5d38]">Problem solved</h4>
                            <p className="text-sm leading-relaxed text-[#6f4329]">{project.problemSolved}</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-[#7c4a31]/12 bg-white/55 p-5">
                            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#9a5d38]">Impact</h4>
                            <p className="text-sm leading-relaxed text-[#6f4329]">{project.impact}</p>
                        </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-[#7c4a31]/12 bg-white/60 p-5">
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#9a5d38]">Technologies</h4>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <div key={index} className="flex items-center gap-2 rounded-2xl border border-[#7c4a31]/12 bg-white/70 px-4 py-3 shadow-sm">
                                    <tech.icon className={`h-5 w-5 ${tech.color}`} />
                                    <span className="text-sm font-medium text-[#5d3827]">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-[#7c4a31]/12 bg-white/55 p-5">
                            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#9a5d38]">
                                <Database className="h-4 w-4" /> Infrastructure
                            </h4>
                            <p className="text-sm text-[#6f4329]">{project.infrastructure}</p>
                            <p className="mt-2 text-sm text-[#8a5335]">Auth: {project.auth}</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-[#7c4a31]/12 bg-white/55 p-5">
                            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#9a5d38]">
                                <Server className="h-4 w-4" /> Practices
                            </h4>
                            <p className="text-sm leading-relaxed text-[#6f4329]">{project.practices}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

type ExhibitCardProps = {
    title: string;
    subtitle: string;
    note: string;
    accent: string;
    icon: ElementType;
};

function ExhibitCard({ title, subtitle, note, accent, icon: Icon }: ExhibitCardProps) {
    return (
        <div className={`relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#fff4df] text-[#5f351f] shadow-[0_24px_50px_rgba(0,0,0,0.22)] ${accent}`}>
            <div className="absolute inset-0 opacity-70" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.52), transparent 38%, rgba(255,255,255,0.08) 100%)' }} />
            <div className="relative p-5">
                <div className="flex items-center justify-between gap-3 border-b border-[#8d5c3c]/15 pb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.45em] text-[#a15a39]">Wall card</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#8a5335]">{subtitle}</span>
                </div>
                <div className="mt-4 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#8d5c3c]/15 bg-white/70 shadow-inner">
                        <Icon className="h-7 w-7 text-[#8a5335]" />
                    </div>
                    <div className="space-y-2">
                        <div className="text-sm font-black uppercase tracking-[0.3em] text-[#b36237]">{title}</div>
                        <p className="text-sm leading-relaxed text-[#6f4329]">{note}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ExhibitProps {
    x: number;
    y: number;
    z: number;
    image: string;
    title: string;
    glowColor: string;
    opacity: number;
}

function MuseumExhibit({ x, y, z, image, title, glowColor, opacity }: ExhibitProps) {
    const D = 100; // Pedestal depth
    const W = 100; // Pedestal width
    const H = 220; // Pedestal height
    
    const GD = 120; // Glass case depth
    const GW = 120; // Glass case width
    const GH = 120; // Glass case height

    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: '50%',
                top: '50%',
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* 3D Pedestal Stand */}
            <div className="absolute" style={{ top: '0px', left: '0px', transformStyle: 'preserve-3d' }}>
                {/* Front Face */}
                <div 
                    className="absolute bg-gradient-to-b from-[#1a3036] to-[#0c1a1d] border border-[#d4af37]/25 shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                    style={{
                        width: `${W}px`,
                        height: `${H}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${W/2}px`,
                        marginTop: `-${H/2}px`,
                        transform: `translate3d(0px, 0px, ${D/2}px)`,
                        opacity
                    }}
                >
                    <div 
                        className="absolute top-2 left-0 right-0 h-[2px]"
                        style={{
                            boxShadow: `0 0 12px 2px ${glowColor}`,
                            background: glowColor,
                        }}
                    />
                    <div className="absolute top-0 left-0 right-0 h-2 bg-[#d4af37]/35 border-b border-[#d4af37]/20" />
                </div>
                {/* Back Face */}
                <div 
                    className="absolute bg-[#0c1a1d] border border-[#d4af37]/20"
                    style={{
                        width: `${W}px`,
                        height: `${H}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${W/2}px`,
                        marginTop: `-${H/2}px`,
                        transform: `translate3d(0px, 0px, -${D/2}px) rotateY(180deg)`,
                        opacity
                    }}
                />
                {/* Left Face */}
                <div 
                    className="absolute bg-[#14262b] border border-[#d4af37]/20"
                    style={{
                        width: `${D}px`,
                        height: `${H}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${D/2}px`,
                        marginTop: `-${H/2}px`,
                        transform: `translate3d(-${W/2}px, 0px, 0px) rotateY(-90deg)`,
                        opacity
                    }}
                />
                {/* Right Face */}
                <div 
                    className="absolute bg-[#1e343c] border border-[#d4af37]/20"
                    style={{
                        width: `${D}px`,
                        height: `${H}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${D/2}px`,
                        marginTop: `-${H/2}px`,
                        transform: `translate3d(${W/2}px, 0px, 0px) rotateY(90deg)`,
                        opacity
                    }}
                />
                {/* Top Face */}
                <div 
                    className="absolute bg-[#1a3036] border border-[#d4af37]/20"
                    style={{
                        width: `${W}px`,
                        height: `${D}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${W/2}px`,
                        marginTop: `-${D/2}px`,
                        transform: `translate3d(0px, -${H/2}px, 0px) rotateX(90deg)`,
                        opacity
                    }}
                />
            </div>

            {/* 3D Glass Showcase Cover */}
            <div className="absolute" style={{ top: `-${H/2 + GH/2}px`, left: '0px', transformStyle: 'preserve-3d' }}>
                {/* Front Glass */}
                <div 
                    className="absolute border border-white/10 bg-white/5 backdrop-blur-[1px] shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]"
                    style={{
                        width: `${GW}px`,
                        height: `${GH}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${GW/2}px`,
                        marginTop: `-${GH/2}px`,
                        transform: `translate3d(0px, 0px, ${GD/2}px)`,
                        opacity: opacity * 0.75
                    }}
                />
                {/* Back Glass */}
                <div 
                    className="absolute border border-white/10 bg-white/5 backdrop-blur-[1px]"
                    style={{
                        width: `${GW}px`,
                        height: `${GH}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${GW/2}px`,
                        marginTop: `-${GH/2}px`,
                        transform: `translate3d(0px, 0px, -${GD/2}px) rotateY(180deg)`,
                        opacity: opacity * 0.75
                    }}
                />
                {/* Left Glass */}
                <div 
                    className="absolute border border-white/10 bg-white/5 backdrop-blur-[1px]"
                    style={{
                        width: `${GD}px`,
                        height: `${GH}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${GD/2}px`,
                        marginTop: `-${GH/2}px`,
                        transform: `translate3d(-${GW/2}px, 0px, 0px) rotateY(-90deg)`,
                        opacity: opacity * 0.75
                    }}
                />
                {/* Right Glass */}
                <div 
                    className="absolute border border-white/10 bg-white/5 backdrop-blur-[1px]"
                    style={{
                        width: `${GD}px`,
                        height: `${GH}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${GD/2}px`,
                        marginTop: `-${GH/2}px`,
                        transform: `translate3d(${GW/2}px, 0px, 0px) rotateY(90deg)`,
                        opacity: opacity * 0.75
                    }}
                />
                {/* Top Glass */}
                <div 
                    className="absolute border border-white/10 bg-white/5 backdrop-blur-[1px]"
                    style={{
                        width: `${GW}px`,
                        height: `${GD}px`,
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${GW/2}px`,
                        marginTop: `-${GD/2}px`,
                        transform: `translate3d(0px, -${GH/2}px, 0px) rotateX(90deg)`,
                        opacity: opacity * 0.75
                    }}
                />

                {/* Floating Exhibit Image (Inside Glass Box) */}
                <motion.div
                    animate={{
                        y: [-6, 6, -6],
                        rotateY: [0, 360],
                    }}
                    transition={{
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        rotateY: { duration: 18, repeat: Infinity, ease: "linear" }
                    }}
                    className="absolute w-20 h-20 flex items-center justify-center"
                    style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: '-40px',
                        marginTop: '-40px',
                        transform: 'translateZ(0px)',
                        transformStyle: 'preserve-3d',
                        opacity
                    }}
                >
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-16 h-16 object-contain"
                        style={{
                            filter: `drop-shadow(0 0 8px ${glowColor}77)`
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}

function MuseumColumn({ x, z, opacity }: { x: number; z: number; opacity: number }) {
    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: '50%',
                top: '50%',
                transform: `translate3d(${x}px, 0px, ${z}px)`,
                width: '60px',
                height: '1000px',
                marginLeft: '-30px',
                marginTop: '-500px',
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Front Face */}
            <div 
                className="absolute bg-gradient-to-r from-[#182d33] via-[#243e47] to-[#182d33] border-x border-[#d4af37]/20"
                style={{
                    width: '60px',
                    height: '1000px',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-30px',
                    marginTop: '-500px',
                    transform: 'translate3d(0px, 0px, 30px)',
                    opacity
                }}
            />
            {/* Back Face */}
            <div 
                className="absolute bg-[#102024]"
                style={{
                    width: '60px',
                    height: '1000px',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-30px',
                    marginTop: '-500px',
                    transform: 'translate3d(0px, 0px, -30px) rotateY(180deg)',
                    opacity
                }}
            />
            {/* Left Face */}
            <div 
                className="absolute bg-[#14262b]"
                style={{
                    width: '60px',
                    height: '1000px',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-30px',
                    marginTop: '-500px',
                    transform: 'translate3d(-30px, 0px, 0px) rotateY(-90deg)',
                    opacity
                }}
            />
            {/* Right Face */}
            <div 
                className="absolute bg-[#1e343c]"
                style={{
                    width: '60px',
                    height: '1000px',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-30px',
                    marginTop: '-500px',
                    transform: `translate3d(30px, 0px, 0px) rotateY(90deg)`,
                    opacity
                }}
            />
            {/* Gold trim base and capital */}
            <div 
                className="absolute bg-gradient-to-r from-[#bf953f] to-[#b38728] border border-[#fcf6ba]/40" 
                style={{
                    width: '62px',
                    height: '32px',
                    left: '50%',
                    bottom: '0px',
                    marginLeft: '-31px',
                    transform: 'translate3d(0px, 0px, 31px)',
                    opacity
                }} 
            />
            <div 
                className="absolute bg-gradient-to-r from-[#bf953f] to-[#b38728] border border-[#fcf6ba]/40" 
                style={{
                    width: '62px',
                    height: '32px',
                    left: '50%',
                    top: '0px',
                    marginLeft: '-31px',
                    transform: 'translate3d(0px, 0px, 31px)',
                    opacity
                }} 
            />
        </div>
    );
}

type MuseumRoom = {
    id: string;
    kind: 'intro' | 'project' | 'bridge' | 'outro';
    title: string;
    subtitle: string;
    detail?: string;
    project?: ProjectCard;
    exhibitCards?: ExhibitCardProps[];
};

const MUSEUM_ROOMS: MuseumRoom[] = [
    {
        id: 'intro',
        kind: 'intro',
        title: 'The Gallery Wing',
        subtitle: 'Scroll down to walk through the rooms.',
        detail: 'Each room reveals a different project card, framed by warm gallery light and 3D depth.',
        exhibitCards: [
            {
                title: 'Apollo 11 Dispatch',
                subtitle: 'Wall note',
                note: 'A gallery card used as the entry point for the room sequence and the first visual anchor.',
                icon: Newspaper,
                accent: 'shadow-[0_20px_60px_rgba(60,30,10,0.25)]'
            },
            {
                title: 'Voyager 1 Record',
                subtitle: 'Wall note',
                note: 'A second warm-toned card that introduces the idea of stepping from one exhibit to the next.',
                icon: Orbit,
                accent: 'shadow-[0_20px_60px_rgba(20,10,10,0.24)]'
            },
            {
                title: 'Lunar Mission Tag',
                subtitle: 'Catalog label',
                note: 'A compact label card that feels closer to a project tag than a framed picture.',
                icon: ScrollText,
                accent: 'shadow-[0_20px_60px_rgba(60,30,10,0.2)]'
            },
            {
                title: 'Mission Logbook',
                subtitle: 'Handwritten notes',
                note: 'A soft card that closes the opening room and points toward the project rooms that follow.',
                icon: MoonStar,
                accent: 'shadow-[0_20px_60px_rgba(60,30,10,0.18)]'
            }
        ]
    },
    ...FLUTTER_PROJECTS.map((project) => ({
        id: project.id,
        kind: 'project' as const,
        title: project.title,
        subtitle: 'Flutter wing exhibit',
        project
    })),
    {
        id: 'bridge',
        kind: 'bridge',
        title: 'Across the Corridor',
        subtitle: 'The museum turns from mobile work to research work.',
        detail: 'The lighting shifts from blue glass to violet lab light as the hallway connects the Flutter wing to the AI wing.'
    },
    ...AI_PROJECTS.map((project) => ({
        id: project.id,
        kind: 'project' as const,
        title: project.title,
        subtitle: 'AI wing exhibit',
        project
    })),
    {
        id: 'outro',
        kind: 'outro',
        title: 'The Archive Exit',
        subtitle: 'A final wall for GitHub and the broader collection.',
        detail: 'The final room points back to the public repository list and closes the walk-through like a gallery exit hall.'
    }
];

interface CameraState {
    x: number;
    y: number;
    z: number;
    rotateX: number;
    rotateY: number;
}

const Z_GAP = 1800; // Distance between each room section

const WAYPOINTS: CameraState[] = [
    { x: 0, y: -80, z: 400, rotateX: 5, rotateY: 0 },              // Intro room — elevated overview
    { x: -650, y: -20, z: -Z_GAP * 1, rotateX: 0, rotateY: 90 },   // Project 1 (Left Wall)
    { x: 650, y: -20, z: -Z_GAP * 2, rotateX: 0, rotateY: -90 },   // Project 2 (Right Wall)
    { x: -650, y: -20, z: -Z_GAP * 3, rotateX: 0, rotateY: 90 },   // Project 3 (Left Wall)
    { x: 0, y: -40, z: -Z_GAP * 4, rotateX: 0, rotateY: 0 },       // Bridge corridor
    { x: 650, y: -20, z: -Z_GAP * 5, rotateX: 0, rotateY: -90 },   // Project 4 (Right Wall)
    { x: -650, y: -20, z: -Z_GAP * 6, rotateX: 0, rotateY: 90 },   // Project 5 (Left Wall)
    { x: 650, y: -20, z: -Z_GAP * 7, rotateX: 0, rotateY: -90 },   // Project 6 (Right Wall)
    { x: -650, y: -20, z: -Z_GAP * 8, rotateX: 0, rotateY: 90 },   // Project 7 (Left Wall)
    { x: 0, y: -40, z: -Z_GAP * 9, rotateX: 0, rotateY: 0 },       // Outro / Exit
];

const smoothEase = (f: number) => {
    if (f <= 0.05) return 0;
    if (f >= 0.95) return 1;
    const t = (f - 0.05) / 0.9;
    return t * t * (3 - 2 * t);
};

function StarrySky() {
    const stars = useRef(
        Array.from({ length: 80 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 4 + 2,
            color: ['#fff', '#ffd700', '#add8e6', '#ffb6c1'][Math.floor(Math.random() * 4)]
        }))
    ).current;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full animate-pulse"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        backgroundColor: star.color,
                        boxShadow: star.size > 2 ? `0 0 8px ${star.color}` : 'none',
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}

interface FloatingEasterEggProps {
    x: number;
    y: number;
    z: number;
    emoji: string;
    label: string;
    opacity: number;
    scale?: number;
    animation: {
        y?: number[];
        x?: number[];
        rotateZ?: number[];
        rotateY?: number[];
    };
    duration?: number;
}

function FloatingEasterEgg({ x, y, z, emoji, label, opacity, scale = 1, animation, duration = 6 }: FloatingEasterEggProps) {
    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: '50%',
                top: '50%',
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                transformStyle: 'preserve-3d',
                opacity,
            }}
        >
            <motion.div
                animate={animation}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="flex flex-col items-center justify-center"
                style={{
                    transformStyle: 'preserve-3d',
                }}
            >
                <div className="absolute w-24 h-24 rounded-full bg-indigo-500/20 blur-xl pointer-events-none" />
                <span 
                    className="select-none filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.45)]"
                    style={{ fontSize: `${scale * 4.5}rem` }}
                >
                    {emoji}
                </span>
                <div className="mt-2 rounded-full border border-amber-400/30 bg-indigo-950/80 px-2 py-0.5 text-[8px] font-mono font-bold tracking-widest text-[#fcf6ba] uppercase shadow-[0_0_10px_rgba(251,191,36,0.25)]">
                    {label}
                </div>
            </motion.div>
        </div>
    );
}

interface HangingAstronautProps {
    x: number;
    y: number;
    z: number;
    image: string;
    label: string;
    opacity: number;
    scale?: number;
    swingDelay?: number;
}

function HangingAstronaut({ x, y, z, image, label, opacity, scale = 1, swingDelay = 0 }: HangingAstronautProps) {
    const height = 180; 
    const astronautTopY = y - (height * scale) / 2;
    const stringLength = Math.max(20, astronautTopY - (-500));

    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: '50%',
                top: '50%',
                transform: `translate3d(${x}px, -500px, ${z}px)`,
                transformStyle: 'preserve-3d',
                opacity,
            }}
        >
            <motion.div
                animate={{
                    rotateZ: [-6, 6, -6],
                    rotateY: [-15, 15, -15],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: swingDelay
                }}
                style={{
                    transformOrigin: 'top center',
                    transformStyle: 'preserve-3d',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div 
                    style={{
                        width: '2px',
                        height: `${stringLength}px`,
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(212,175,55,0.4))',
                        boxShadow: '0 0 4px rgba(255,255,255,0.3)',
                    }}
                />

                <div
                    style={{
                        transformStyle: 'preserve-3d',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div className="absolute w-36 h-36 rounded-full bg-indigo-500/15 blur-2xl pointer-events-none" />
                    <img 
                        src={image} 
                        alt={label} 
                        className="object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                        style={{
                            width: `${scale * 140}px`,
                            height: `${scale * 140}px`,
                        }}
                    />
                    <div className="mt-2 rounded-full border border-amber-400/30 bg-indigo-950/80 px-2.5 py-0.5 text-[8px] font-mono font-bold tracking-widest text-[#fcf6ba] uppercase shadow-[0_0_10px_rgba(251,191,36,0.25)]">
                        {label}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function Projects() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scene = sceneRef.current;
            if (!scene) return;

            const rect = scene.getBoundingClientRect();
            const scrollable = rect.height - window.innerHeight;
            if (scrollable <= 0) {
                setScrollProgress(0);
                return;
            }

            const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
            setScrollProgress(nextProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Calculate camera state based on scrollProgress
    const totalWaypoints = MUSEUM_ROOMS.length;
    const activeRoom = scrollProgress * (totalWaypoints - 1);
    const currentRoomIndex = Math.floor(activeRoom);
    const currentRoomFraction = activeRoom - currentRoomIndex;

    const easedFraction = smoothEase(currentRoomFraction);

    const currentWaypoint = WAYPOINTS[currentRoomIndex];
    const nextWaypoint = WAYPOINTS[Math.min(currentRoomIndex + 1, totalWaypoints - 1)];

    const cameraX = currentWaypoint.x + (nextWaypoint.x - currentWaypoint.x) * easedFraction;
    const cameraY = currentWaypoint.y + (nextWaypoint.y - currentWaypoint.y) * easedFraction;
    const cameraZ = currentWaypoint.z + (nextWaypoint.z - currentWaypoint.z) * easedFraction;
    const cameraRotX = currentWaypoint.rotateX + (nextWaypoint.rotateX - currentWaypoint.rotateX) * easedFraction;
    const cameraRotY = currentWaypoint.rotateY + (nextWaypoint.rotateY - currentWaypoint.rotateY) * easedFraction;

    const worldTransform = `rotateX(${-cameraRotX}deg) rotateY(${-cameraRotY}deg) translate3d(${-cameraX}px, ${-cameraY}px, ${-cameraZ}px)`;

    const headerOpacity = Math.max(0, 1 - scrollProgress * 12);

    const EASTER_EGGS = [
        { x: -450, y: -80, z: -600, type: 'astronaut', image: "/astronaut_sticker_1.png", label: "ASTRONAUT HARRY", scale: 1.15, swingDelay: 0, targetRoomIndex: 0 },
        { x: 450, y: -260, z: -900, type: 'prop', emoji: "🔭", label: "APOLLO FINDER", animation: { y: [-15, 15, -15], rotateY: [0, 360] }, duration: 12, targetRoomIndex: 0 },
        { x: -420, y: -120, z: -2700, type: 'astronaut', image: "/astronaut_sticker_1.png", label: "ORBIT ROVER", scale: 1.1, swingDelay: 2.0, targetRoomIndex: 2 },
        { x: 420, y: -280, z: -2300, type: 'prop', emoji: "🪐", label: "PLANET NOTLYFE", animation: { y: [-10, 10, -10], rotateY: [0, 360] }, duration: 15, targetRoomIndex: 1 },
        { x: -450, y: -250, z: -3900, type: 'prop', emoji: "🛰️", label: "CRICKET-SAT 1", animation: { y: [-20, 20, -20], rotateZ: [0, 360] }, duration: 20, targetRoomIndex: 2 },
        { x: 450, y: -290, z: -5700, type: 'prop', emoji: "🛸", label: "HEALTH UFO", animation: { y: [-30, 30, -30], rotateZ: [-8, 8, -8] }, duration: 4, targetRoomIndex: 3 },
        { x: -400, y: -220, z: -7500, type: 'prop', emoji: "🚀", label: "FYP-RUSH", animation: { y: [-15, 15, -15], x: [-15, 15, -15] }, duration: 6, targetRoomIndex: 4 },
        { x: 400, y: -260, z: -7000, type: 'prop', emoji: "☄️", label: "AI TRANSITION", animation: { y: [-20, 20, -20], rotateZ: [-45, -35, -45] }, duration: 3, targetRoomIndex: 4 },
        { x: 450, y: -100, z: -9300, type: 'astronaut', image: "/astronaut_moon_sticker.png", label: "LOCAL MOON WALKER", scale: 1.2, swingDelay: 1.5, targetRoomIndex: 5 },
        { x: -420, y: -150, z: -10800, type: 'astronaut', image: "/astronaut_moon_sticker.png", label: "STAR CHARTER", scale: 1.05, swingDelay: 0.8, targetRoomIndex: 6 },
        { x: 450, y: -270, z: -11200, type: 'prop', emoji: "🌍", label: "VISION ORB", animation: { y: [-10, 10, -10], rotateY: [0, -360] }, duration: 18, targetRoomIndex: 6 },
        { x: -450, y: -290, z: -12900, type: 'prop', emoji: "🧠", label: "BERT-GPT-T5", animation: { y: [-15, 15, -15], scale: [0.95, 1.05, 0.95] }, duration: 4, targetRoomIndex: 7 },
        { x: 450, y: -250, z: -14800, type: 'prop', emoji: "📚", label: "RAG KNOWLEDGE", animation: { y: [-20, 20, -20], rotateZ: [-5, 5, -5] }, duration: 7, targetRoomIndex: 8 },
        { x: -500, y: -240, z: -16800, type: 'prop', emoji: "✨", label: "THANKS FOR VISITING", animation: { y: [-10, 10, -10], rotateZ: [0, 360] }, duration: 10, targetRoomIndex: 9 }
    ];

    return (
        <div className="min-h-screen bg-[#070e11] text-white relative font-sans w-full max-w-[100vw] overflow-x-hidden" style={{ overflowX: 'clip' }}>
            <style>{`
                .viewport-3d {
                    perspective: 1100px;
                    perspective-origin: 50% 50%;
                    overflow: hidden;
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    background: radial-gradient(circle at center, #1b1947 0%, #050512 100%);
                }
                .world-3d {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transform-style: preserve-3d;
                    will-change: transform;
                }
                .floor-grid {
                    background-color: #0b0a1d;
                    background-image: 
                        linear-gradient(45deg, #f3edd7 25%, transparent 25%, transparent 75%, #f3edd7 75%, #f3edd7),
                        linear-gradient(45deg, #f3edd7 25%, #0b0a1d 25%, #0b0a1d 75%, #f3edd7 75%, #f3edd7);
                    background-size: 120px 120px;
                    background-position: 0 0, 60px 60px;
                    box-shadow: inset 0 0 200px rgba(0,0,0,0.95);
                    border-y: 6px solid rgba(212, 175, 55, 0.5);
                }
                .ceiling-grid {
                    background-size: 80px 80px;
                    background-image: 
                        linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
                    background-color: #080a1c;
                    box-shadow: inset 0 0 120px rgba(0,0,0,0.9);
                }
                .wall-panel {
                    background: linear-gradient(to right, #17153b 0%, #2f2c75 50%, #17153b 100%);
                    box-shadow: inset 0 0 60px rgba(0,0,0,0.75);
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #7c4a31;
                    border-radius: 3px;
                }
            `}</style>

            <nav className="fixed top-6 w-full z-50 transition-all duration-500 ease-in-out px-6">
                <div className="mx-auto rounded-full border border-amber-400/20 bg-[#161535]/85 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.4)] flex items-center justify-between max-w-6xl px-8 py-4">
                    <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-[#f3ddc4] hover:text-white transition-colors">
                        <ChevronLeft className="w-5 h-5" /> Home
                    </Link>
                    <div className="flex items-center gap-2 text-xl font-bold text-[#fcf6ba] tracking-widest uppercase">
                        <Telescope className="h-5 w-5 text-amber-400" /> Space Museum
                    </div>
                    <div className="w-[100px]" />
                </div>
            </nav>

            <section
                ref={sceneRef}
                className="relative w-full"
                style={{ height: `${MUSEUM_ROOMS.length * 120}vh` }}
            >
                <div className="sticky top-0 h-screen overflow-hidden">
                    
                    {/* Floating Intro Overlay */}
                    <motion.div
                        style={{ opacity: headerOpacity, pointerEvents: headerOpacity > 0.1 ? 'auto' : 'none' }}
                        className="absolute left-6 right-6 top-28 z-20 mx-auto max-w-6xl text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-[#17153b]/90 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#fcf6ba] backdrop-blur-md">
                            <Bird className="h-4 w-4 text-[#bf953f]" /> Scroll to walkthrough the space exhibits
                        </div>
                        <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl uppercase">
                            Cartoon Space Wing <span className="text-amber-400 font-serif font-light">meets</span> Tech Museum.
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#c3d1d4]">
                            Welcome, Explorer! As you scroll downward, you will zoom forward through a cartoonish cosmic corridor. Look out for floating space objects, alien friends, and gold-trimmed project displays.
                        </p>
                    </motion.div>

                    {/* 3D Viewport container */}
                    <div className="viewport-3d w-full h-full">
                        {/* Twinkling stars backdrop */}
                        <StarrySky />

                        {/* 3D World container */}
                        <div 
                            className="world-3d"
                            style={{ transform: worldTransform }}
                        >
                            {MUSEUM_ROOMS.map((room, index) => {
                                const zPos = -index * Z_GAP;
                                const isLeftWall = WAYPOINTS[index]?.x < 0;
                                
                                const activeDelta = activeRoom - index;
                                const isActive = Math.abs(activeDelta) < 0.45;
                                const roomOpacity = Math.max(0.06, 1.1 - Math.abs(activeDelta) * 0.75);
                                const isVisible = Math.abs(activeDelta) <= 2.2;

                                return (
                                    <div 
                                        key={room.id} 
                                        className="absolute inset-0"
                                        style={{ 
                                            transform: `translate3d(0px, 0px, ${zPos}px)`,
                                            transformStyle: 'preserve-3d',
                                            display: isVisible ? 'block' : 'none',
                                        }}
                                    >
                                        {/* Floor Segment */}
                                        <div
                                            className="absolute floor-grid border-y border-cyan-500/25"
                                            style={{
                                                width: '2000px',
                                                height: `${Z_GAP}px`,
                                                left: '50%',
                                                top: '50%',
                                                marginLeft: '-1000px',
                                                marginTop: `-${Z_GAP / 2}px`,
                                                transform: 'translate3d(0px, 500px, 0px) rotateX(90deg)',
                                                opacity: roomOpacity,
                                            }}
                                        />

                                        {/* Ceiling Segment */}
                                        <div
                                            className="absolute ceiling-grid border-y border-purple-500/10"
                                            style={{
                                                width: '2000px',
                                                height: `${Z_GAP}px`,
                                                left: '50%',
                                                top: '50%',
                                                marginLeft: '-1000px',
                                                marginTop: `-${Z_GAP / 2}px`,
                                                transform: 'translate3d(0px, -500px, 0px) rotateX(-90deg)',
                                                opacity: roomOpacity,
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(253,230,138,0.06),_transparent_65%)] pointer-events-none" />
                                        </div>

                                        {/* Left Wall Segment */}
                                        <div
                                            className="absolute wall-panel border-y-8 border-amber-400/80 shadow-[inset_-30px_0_70px_rgba(0,0,0,0.85)]"
                                            style={{
                                                width: `${Z_GAP}px`,
                                                height: '1000px',
                                                left: '50%',
                                                top: '50%',
                                                marginLeft: `-${Z_GAP / 2}px`,
                                                marginTop: '-500px',
                                                transform: 'translate3d(-1000px, 0px, 0px) rotateY(90deg)',
                                                opacity: roomOpacity,
                                            }}
                                        >
                                            <div className="absolute inset-x-0 top-12 h-6 border-y border-amber-400/35 bg-[#141235]/60" />
                                            <div className="absolute inset-x-0 bottom-12 h-16 border-y border-amber-400/35 bg-[#141235]/60" />

                                            {/* Space Porthole Window */}
                                            {(!isLeftWall || room.kind === 'intro' || room.kind === 'bridge') && (
                                                <div className="absolute top-1/2 -translate-y-1/2 left-[15%] w-40 h-40 rounded-full border-8 border-amber-400 bg-[#090b1e] overflow-hidden shadow-[0_0_20px_rgba(251,191,36,0.35),inset_0_0_20px_rgba(0,0,0,0.95)] flex items-center justify-center">
                                                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#2d1b4e_0%,_transparent_70%)]" />
                                                    <motion.span 
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 25 + index, repeat: Infinity, ease: 'linear' }}
                                                        className="text-6xl z-10"
                                                    >
                                                        {index % 3 === 0 ? '🪐' : index % 3 === 1 ? '🌍' : '🌞'}
                                                    </motion.span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Wall Segment */}
                                        <div
                                            className="absolute wall-panel border-y-8 border-amber-400/80 shadow-[inset_30px_0_70px_rgba(0,0,0,0.85)]"
                                            style={{
                                                width: `${Z_GAP}px`,
                                                height: '1000px',
                                                left: '50%',
                                                top: '50%',
                                                marginLeft: `-${Z_GAP / 2}px`,
                                                marginTop: '-500px',
                                                transform: 'translate3d(1000px, 0px, 0px) rotateY(-90deg)',
                                                opacity: roomOpacity,
                                            }}
                                        >
                                            <div className="absolute inset-x-0 top-12 h-6 border-y border-amber-400/35 bg-[#141235]/60" />
                                            <div className="absolute inset-x-0 bottom-12 h-16 border-y border-amber-400/35 bg-[#141235]/60" />

                                            {/* Space Porthole Window */}
                                            {(isLeftWall || room.kind === 'intro' || room.kind === 'bridge') && (
                                                <div className="absolute top-1/2 -translate-y-1/2 right-[15%] w-40 h-40 rounded-full border-8 border-amber-400 bg-[#090b1e] overflow-hidden shadow-[0_0_20px_rgba(251,191,36,0.35),inset_0_0_20px_rgba(0,0,0,0.95)] flex items-center justify-center">
                                                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#2d1b4e_0%,_transparent_70%)]" />
                                                    <motion.span 
                                                        animate={{ rotate: -360 }}
                                                        transition={{ duration: 28 + index, repeat: Infinity, ease: 'linear' }}
                                                        className="text-6xl z-10"
                                                    >
                                                        {index % 3 === 0 ? '🌞' : index % 3 === 1 ? '🪐' : '🌍'}
                                                    </motion.span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Columns flanking the room joints */}
                                        <MuseumColumn x={-970} z={-Z_GAP / 2} opacity={roomOpacity} />
                                        <MuseumColumn x={970} z={-Z_GAP / 2} opacity={roomOpacity} />
                                        <MuseumColumn x={-970} z={Z_GAP / 2} opacity={roomOpacity} />
                                        <MuseumColumn x={970} z={Z_GAP / 2} opacity={roomOpacity} />

                                        {/* Intro room panels */}
                                        {room.kind === 'intro' && room.exhibitCards && (
                                            <>
                                                {/* Left Wall Exhibit Cards */}
                                                <div 
                                                    className="absolute grid grid-cols-2 gap-4 p-4"
                                                    style={{
                                                        width: '760px',
                                                        height: '520px',
                                                        left: '50%',
                                                        top: '50%',
                                                        marginLeft: '-380px',
                                                        marginTop: '-260px',
                                                        transform: 'translate3d(-980px, -20px, 0px) rotateY(90deg)',
                                                        transformStyle: 'preserve-3d',
                                                        opacity: roomOpacity,
                                                    }}
                                                >
                                                    {room.exhibitCards.map((card) => (
                                                        <div key={card.title} className="rounded-2xl border border-amber-400/20 bg-[#161535]/90 p-4 shadow-xl flex flex-col justify-between backdrop-blur-sm">
                                                            <div className="flex items-center gap-3 border-b border-amber-400/20 pb-2">
                                                                <card.icon className="h-5 w-5 text-amber-400" />
                                                                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{card.subtitle}</span>
                                                            </div>
                                                            <div className="mt-2">
                                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{card.title}</h4>
                                                                <p className="mt-1 text-xs text-slate-300 leading-relaxed">{card.note}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Right Wall Introduction Poster */}
                                                <div 
                                                    className="absolute flex flex-col justify-center rounded-[2.5rem] border border-amber-400/35 bg-[#161535]/90 p-8 shadow-2xl backdrop-blur-sm"
                                                    style={{
                                                        width: '760px',
                                                        height: '460px',
                                                        left: '50%',
                                                        top: '50%',
                                                        marginLeft: '-380px',
                                                        marginTop: '-230px',
                                                        transform: 'translate3d(980px, -20px, 0px) rotateY(-90deg)',
                                                        transformStyle: 'preserve-3d',
                                                        opacity: roomOpacity,
                                                    }}
                                                >
                                                    <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4af37] mb-3">
                                                        <Telescope className="h-5 w-5 text-amber-400 animate-pulse" /> SPACE MUSEUM WING
                                                    </div>
                                                    <h2 className="text-2xl md:text-3xl font-black leading-tight text-white uppercase tracking-wide">
                                                        Galactic Archives & Engineering Exhibits
                                                    </h2>
                                                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                                                        Welcome to the Space Museum. This wing houses structural portfolios, application interfaces, and intelligent NLP prototypes. Walk down the hallway to view the projects and space technology models.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#ffe6c5]">Holographic Displays</span>
                                                        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#ffe6c5]">3D Gallery Exhibits</span>
                                                        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#ffe6c5]">Deep Space Tech</span>
                                                    </div>
                                                </div>

                                                {/* Floor Exhibit Pedestals */}
                                                <MuseumExhibit 
                                                    x={-420} 
                                                    y={260} 
                                                    z={-250} 
                                                    image="/moon_stone.png" 
                                                    title="Lunar Meteorite" 
                                                    glowColor="#06b6d4" 
                                                    opacity={roomOpacity}
                                                />
                                                <MuseumExhibit 
                                                    x={420} 
                                                    y={260} 
                                                    z={250} 
                                                    image="/space_telescope.png" 
                                                    title="Hubble Replica" 
                                                    glowColor="#f59e0b" 
                                                    opacity={roomOpacity}
                                                />
                                            </>
                                        )}

                                        {/* Bridge Room panels */}
                                        {room.kind === 'bridge' && (
                                            <>
                                                {/* Left Wall Transition Panel */}
                                                <div 
                                                    className="absolute flex flex-col justify-center rounded-[2.5rem] border border-amber-400/35 bg-[#161535]/90 p-8 shadow-2xl backdrop-blur-sm"
                                                    style={{
                                                        width: '760px',
                                                        height: '460px',
                                                        left: '50%',
                                                        top: '50%',
                                                        marginLeft: '-380px',
                                                        marginTop: '-230px',
                                                        transform: 'translate3d(-980px, -20px, 0px) rotateY(90deg)',
                                                        transformStyle: 'preserve-3d',
                                                        opacity: roomOpacity,
                                                    }}
                                                >
                                                    <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4af37] mb-3">
                                                        <Telescope className="h-5 w-5 text-amber-400" /> CORRIDOR JUNCTION
                                                    </div>
                                                    <h2 className="text-2xl md:text-3xl font-black leading-tight text-white uppercase tracking-wide">
                                                        Transitioning to AI Wing
                                                    </h2>
                                                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                                                        The museum shifts here from Flutter mobile engineering to advanced research and NLP works. Notice the transition of spotlight schemes ahead.
                                                    </p>
                                                </div>

                                                {/* Right Wall Transition Visual */}
                                                <div 
                                                    className="absolute flex flex-col items-center justify-center rounded-[2.5rem] border border-amber-400/20 bg-[#161535]/75 p-8 shadow-2xl backdrop-blur-sm"
                                                    style={{
                                                        width: '760px',
                                                        height: '460px',
                                                        left: '50%',
                                                        top: '50%',
                                                        marginLeft: '-380px',
                                                        marginTop: '-230px',
                                                        transform: 'translate3d(980px, -20px, 0px) rotateY(-90deg)',
                                                        transformStyle: 'preserve-3d',
                                                        opacity: roomOpacity,
                                                    }}
                                                >
                                                    <div className="w-20 h-20 rounded-full border-4 border-dashed border-amber-400/40 flex items-center justify-center animate-[spin_20s_linear_infinite] mb-4">
                                                        <Orbit className="w-10 h-10 text-amber-400" />
                                                    </div>
                                                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400">FLUTTER WING ➔ AI WING</span>
                                                </div>

                                                {/* Floor Pedestals */}
                                                <MuseumExhibit 
                                                    x={-420} 
                                                    y={260} 
                                                    z={-250} 
                                                    image="/space_shuttle.png" 
                                                    title="Space Shuttle" 
                                                    glowColor="#ef4444" 
                                                    opacity={roomOpacity}
                                                />
                                                <MuseumExhibit 
                                                    x={420} 
                                                    y={260} 
                                                    z={250} 
                                                    image="/radar_screen.png" 
                                                    title="ATC console" 
                                                    glowColor="#10b981" 
                                                    opacity={roomOpacity}
                                                />
                                            </>
                                        )}

                                        {/* Project Rooms displays */}
                                        {room.kind === 'project' && room.project && (
                                            <>
                                                {/* Project Artwork Frame */}
                                                <div
                                                    className="absolute overflow-hidden"
                                                    style={{
                                                        width: '500px',
                                                        height: '420px',
                                                        left: '50%',
                                                        top: '50%',
                                                        marginLeft: '-250px',
                                                        marginTop: '-210px',
                                                        transform: `translate3d(${isLeftWall ? -985 : 985}px, -280px, -100px) rotateY(${isLeftWall ? 90 : -90}deg)`,
                                                        border: '14px solid',
                                                        borderImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c) 1',
                                                        boxShadow: '0 20px 40px rgba(0,0,0,0.65), inset 0 0 30px rgba(0,0,0,0.85)',
                                                        background: '#0a1012',
                                                        transformStyle: 'preserve-3d',
                                                        opacity: roomOpacity,
                                                    }}
                                                >
                                                    {/* Spot light cone */}
                                                    <div 
                                                        className="absolute top-0 left-0 right-0 h-44 opacity-25 pointer-events-none"
                                                        style={{
                                                            background: `linear-gradient(to bottom, ${room.project.theme.glow.includes('emerald') ? '#10b981' : room.project.theme.glow.includes('amber') ? '#f59e0b' : room.project.theme.glow.includes('violet') ? '#8b5cf6' : '#02569B'}, transparent)`
                                                        }}
                                                    />
                                                    {/* Tech grid overlay */}
                                                    <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

                                                    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 text-center p-6">
                                                        {room.project.logo ? (
                                                            <div className="w-24 h-24 rounded-2xl bg-white p-2 border border-white/20 shadow-2xl flex items-center justify-center">
                                                                <img src={room.project.logo} alt="logo" className="w-full h-full object-contain" />
                                                            </div>
                                                        ) : (
                                                            <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-400">
                                                                <Brain className="w-12 h-12" />
                                                            </div>
                                                        )}
                                                        <h3 className="text-2xl font-black tracking-tight text-white mt-2">{room.project.title}</h3>
                                                        <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                                                            {room.project.badge}
                                                        </span>
                                                        
                                                        <div className="mt-2 flex items-center gap-3 text-[9px] text-slate-400 font-mono">
                                                            <span>EXHIBIT #{index}</span>
                                                            <span>•</span>
                                                            <span>WING: {index < 4 ? 'FLUTTER' : 'AI'}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="absolute bottom-2 left-6 right-6 h-[1px] bg-[#d4af37]/20" />
                                                    <div className="absolute top-2 left-6 right-6 h-[1px] bg-[#d4af37]/20" />
                                                </div>

                                                {/* Project Details Plaque Card */}
                                                <div
                                                    className="absolute transition-all duration-300"
                                                    style={{
                                                        width: '740px',
                                                        height: '560px',
                                                        left: '50%',
                                                        top: '50%',
                                                        marginLeft: '-370px',
                                                        marginTop: '-280px',
                                                        transform: `translate3d(${isLeftWall ? -975 : 975}px, -20px, 0px) rotateY(${isLeftWall ? 90 : -90}deg)`,
                                                        pointerEvents: isActive ? 'auto' : 'none',
                                                        filter: isActive ? 'none' : 'brightness(0.65) blur(0.5px)',
                                                        transformStyle: 'preserve-3d',
                                                        opacity: roomOpacity,
                                                    }}
                                                >
                                                    {/* Museum info plaque wood backing board */}
                                                    <div className="absolute inset-0 bg-[#3a1d12] rounded-[2.2rem] border-4 border-[#24120b] shadow-[0_25px_50px_rgba(0,0,0,0.65)] p-2">
                                                        <div className="w-full h-full rounded-[1.8rem] bg-[#f7ead4] border border-[#7c4a31]/20 overflow-y-auto custom-scrollbar relative">
                                                            <ProjectShowcase project={room.project} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Floor Exhibit Pedestals for Project Rooms */}
                                                <MuseumExhibit 
                                                    x={isLeftWall ? 420 : -420} 
                                                    y={260} 
                                                    z={-350} 
                                                    image={
                                                        index % 3 === 0 ? "/space_telescope.png" :
                                                        index % 3 === 1 ? "/space_shuttle.png" :
                                                        "/radar_screen.png"
                                                    } 
                                                    title={
                                                        index % 3 === 0 ? "Hubble Replica" :
                                                        index % 3 === 1 ? "Space Shuttle" :
                                                        "ATC Console"
                                                    } 
                                                    glowColor={
                                                        index % 3 === 0 ? "#f59e0b" :
                                                        index % 3 === 1 ? "#ef4444" :
                                                        "#10b981"
                                                    } 
                                                    opacity={roomOpacity}
                                                />
                                                <MuseumExhibit 
                                                    x={isLeftWall ? -420 : 420} 
                                                    y={260} 
                                                    z={350} 
                                                    image={
                                                        index % 3 === 0 ? "/moon_stone.png" :
                                                        index % 3 === 1 ? "/space_telescope.png" :
                                                        "/space_shuttle.png"
                                                    } 
                                                    title={
                                                        index % 3 === 0 ? "Lunar Meteorite" :
                                                        index % 3 === 1 ? "Hubble Replica" :
                                                        "Space Shuttle"
                                                    } 
                                                    glowColor={
                                                        index % 3 === 0 ? "#06b6d4" :
                                                        index % 3 === 1 ? "#f59e0b" :
                                                        "#ef4444"
                                                    } 
                                                    opacity={roomOpacity}
                                                />
                                            </>
                                        )}

                                        {/* Outro Room Exit display */}
                                        {room.kind === 'outro' && (
                                            <div
                                                className="absolute flex flex-col items-center justify-center rounded-[2.75rem] border-4 border-amber-400/30 bg-[#161535] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] text-center"
                                                style={{
                                                    width: '900px',
                                                    height: '600px',
                                                    left: '50%',
                                                    top: '50%',
                                                    marginLeft: '-450px',
                                                    marginTop: '-300px',
                                                    transform: 'translate3d(0px, -40px, -500px)',
                                                    transformStyle: 'preserve-3d',
                                                    opacity: roomOpacity,
                                                }}
                                            >
                                                <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
                                                <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-amber-400 mb-6">
                                                    <Orbit className="h-5 w-5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} /> ARCHIVE EXIT
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-black leading-tight text-white uppercase tracking-wider">
                                                    Space Museum Exit Wing
                                                </h2>
                                                <p className="max-w-xl text-xs leading-relaxed text-[#c3d1d4] mt-3">
                                                    You have reached the end of the space museum corridor. For the complete code base and repository trail, please browse my public profiles.
                                                </p>
                                                
                                                <div className="flex flex-wrap justify-center gap-4 mt-6">
                                                    <a href="https://github.com/hurairamuzammal?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-amber-400/15 px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition-all hover:bg-amber-400/35 shadow-[0_0_15px_rgba(251,191,36,0.35)]">
                                                        Open Repositories <ExternalLink className="h-4 w-4" />
                                                    </a>
                                                    <a href="https://github.com/hurairamuzammal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition-all hover:bg-white/10">
                                                        Open Profile <Github className="h-4 w-4" />
                                                    </a>
                                                </div>

                                                <div className="grid gap-4 sm:grid-cols-2 mt-8 w-full max-w-xl text-left [transform-style:preserve-3d]">
                                                    <div className="bg-[#0b0a1d] border border-amber-400/10 p-4 rounded-xl">
                                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400 mb-1">Repository Catalog</h4>
                                                        <p className="text-[11px] text-slate-300 leading-relaxed">
                                                            A comprehensive listing of other projects, CLI utilities, and older school projects.
                                                        </p>
                                                    </div>
                                                    <div className="bg-[#0b0a1d] border border-amber-400/10 p-4 rounded-xl">
                                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400 mb-1">Source Trail</h4>
                                                        <p className="text-[11px] text-slate-300 leading-relaxed">
                                                            The final case in the museum keeps the source trail visible for anyone who wants to browse the broader archive.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {/* Render the floating space props (easter eggs) in 3D */}
                            {EASTER_EGGS.map((egg, i) => {
                                const eggActiveDelta = activeRoom - egg.targetRoomIndex;
                                const eggOpacity = Math.max(0, 1.1 - Math.abs(eggActiveDelta) * 0.75);
                                if (eggOpacity <= 0) return null;

                                if (egg.type === 'astronaut') {
                                    return (
                                        <HangingAstronaut 
                                            key={i}
                                            x={egg.x}
                                            y={egg.y || 0}
                                            z={egg.z}
                                            image={egg.image || ''}
                                            label={egg.label}
                                            opacity={eggOpacity}
                                            scale={egg.scale}
                                            swingDelay={egg.swingDelay}
                                        />
                                    );
                                }

                                return (
                                    <FloatingEasterEgg 
                                        key={i}
                                        x={egg.x}
                                        y={egg.y || 0}
                                        z={egg.z}
                                        emoji={egg.emoji || ''}
                                        label={egg.label}
                                        opacity={eggOpacity}
                                        animation={egg.animation || {}}
                                        duration={egg.duration}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation dot markers */}
                    <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-amber-400/20 bg-[#161535]/85 px-4 py-3 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                        {MUSEUM_ROOMS.map((room, index) => (
                            <span
                                key={room.id}
                                className={`h-2.5 rounded-full transition-all duration-300 ${index <= activeRoom ? 'w-8 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]' : 'w-2.5 bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
