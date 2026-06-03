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

function RoomBackdrop() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,236,200,0.34),_transparent_30%),linear-gradient(180deg,#c96b3f_0%,#9f4d35_36%,#6d3227_100%)]" />
            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#ffd3a0]/35 to-transparent" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="absolute left-[6%] top-[11%] h-[52%] w-[18%] rounded-t-[999px] border-[18px] border-[#f0b67d]/20" />
            <div className="absolute left-[41%] top-[8%] h-[58%] w-[18%] rounded-t-[999px] border-[18px] border-[#f0b67d]/18" />
            <div className="absolute right-[6%] top-[12%] h-[50%] w-[18%] rounded-t-[999px] border-[18px] border-[#f0b67d]/20" />

            <div className="absolute left-[10%] top-[13%] h-40 w-44 rounded-[1.6rem] border border-[#f4ca9b]/30 bg-[#f3caa0]/20 shadow-[0_0_80px_rgba(255,220,160,0.18)] rotate-[-4deg]" />
            <div className="absolute right-[12%] top-[14%] h-44 w-52 rounded-[1.8rem] border border-[#f4ca9b]/28 bg-[#f3caa0]/18 shadow-[0_0_80px_rgba(255,220,160,0.14)] rotate-[4deg]" />
            <div className="absolute left-[22%] bottom-[18%] h-44 w-11 rounded-t-[2rem] bg-[#9d5934] shadow-[0_0_30px_rgba(0,0,0,0.18)]" />
            <div className="absolute left-[19.8%] bottom-[18%] h-24 w-20 rounded-t-[1rem] bg-[#d79a6f] shadow-[0_0_30px_rgba(0,0,0,0.1)]" />
            <div className="absolute right-[16%] bottom-[15%] h-40 w-40 rounded-[2rem] border border-[#f0cf9e]/25 bg-[#f9e7c9]/12 backdrop-blur-sm" />
            <div className="absolute left-[50%] top-[29%] h-20 w-20 -translate-x-1/2 rounded-full border border-[#fff1d6]/30 bg-[#fff1d6]/12 blur-[1px] shadow-[0_0_60px_rgba(255,240,210,0.35)]" />
            <div className="absolute left-[15%] bottom-[19%] h-px w-[70%] bg-gradient-to-r from-transparent via-[#ffd7a0]/40 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[14%] bg-[linear-gradient(90deg,transparent,rgba(80,32,23,0.08))]" />
        </div>
    );
}

function RoomFloor() {
    return (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35vh] overflow-hidden">
            <div
                className="absolute inset-x-[-10%] bottom-[-6vh] h-[44vh] origin-bottom skew-x-[-12deg] rotate-[-2deg] opacity-90"
                style={{
                    backgroundImage: [
                        'linear-gradient(rgba(81, 41, 27, 0.12) 1px, transparent 1px)',
                        'linear-gradient(90deg, rgba(81, 41, 27, 0.12) 1px, transparent 1px)',
                        'linear-gradient(180deg, rgba(255, 242, 224, 0.22), rgba(235, 159, 110, 0.1) 42%, rgba(64, 33, 22, 0.42) 100%)'
                    ].join(', '),
                    backgroundSize: '72px 72px, 72px 72px, 100% 100%',
                    backgroundPosition: 'center center',
                    clipPath: 'polygon(0 24%, 100% 0, 100% 100%, 0 100%)'
                }}
            />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#ffd8a7]/22 to-transparent" />
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#ffdba8]/12" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#26120d] to-transparent" />
        </div>
    );
}

function SpaceProps() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[14%] top-[5%] h-28 w-[2px] bg-[#f7d9ae]/30" />
            <div className="absolute left-[13%] top-[6.5%] h-20 w-20 rounded-[1.5rem] border border-[#f7d9ae]/18 bg-[#2b1a13]/70 shadow-[0_18px_40px_rgba(0,0,0,0.25)] rotate-[-8deg]">
                <div className="absolute inset-x-4 top-1/2 h-[2px] -translate-y-1/2 bg-[#f7d9ae]/25" />
                <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffd59d]/30 bg-[#0f172a]" />
            </div>

            <div className="absolute left-[52%] top-[3%] h-32 w-[2px] bg-[#f7d9ae]/30" />
            <div className="absolute left-[49.8%] top-[11%] h-16 w-24 -translate-x-1/2 rounded-[1.25rem] border border-[#ffd8aa]/20 bg-[#efc38a]/18 shadow-[0_18px_50px_rgba(0,0,0,0.22)] rotate-[6deg]">
                <div className="absolute left-1/2 top-[-0.6rem] h-5 w-12 -translate-x-1/2 rounded-full bg-[#7c3d2a]" />
                <div className="absolute left-1/2 top-3 h-8 w-20 -translate-x-1/2 rounded-[1rem] bg-[#f8b76d]/70" />
                <div className="absolute left-1/2 bottom-3 h-2 w-8 -translate-x-1/2 rounded-full bg-[#ffe7c6]/90" />
            </div>

            <div className="absolute right-[10%] top-[8%] h-24 w-[2px] bg-[#f7d9ae]/30" />
            <div className="absolute right-[6%] top-[15%] h-24 w-24 rounded-[1.8rem] border border-[#f7d9ae]/18 bg-[#f7e7c8]/10 shadow-[0_16px_40px_rgba(0,0,0,0.18)] rotate-[7deg]">
                <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7ae0ff]/15 bg-[#0f172a]" />
                <div className="absolute inset-x-5 bottom-4 h-2 rounded-full bg-[#7ae0ff]/18" />
            </div>

            <div className="absolute left-[8%] bottom-[14%] h-36 w-36 rounded-full border border-[#f0cf9e]/20 bg-[#f7e6c8]/15 backdrop-blur-sm" />
            <div className="absolute left-[23%] bottom-[16%] h-24 w-20 rounded-t-[1rem] bg-[#d79a6f] shadow-[0_0_30px_rgba(0,0,0,0.1)]" />
            <div className="absolute left-[24.5%] bottom-[23%] h-20 w-4 rounded-full bg-[#6cb043] rotate-[-10deg]" />
            <div className="absolute left-[30%] bottom-[16%] h-28 w-28 rounded-[2rem] border border-[#f0cf9e]/18 bg-[#f3caa0]/12" />

            <div className="absolute right-[18%] bottom-[16%] h-14 w-36 rounded-full bg-[#000000]/18 blur-[18px]" />
            <div className="absolute right-[17%] bottom-[18%] h-20 w-20 rounded-[1.2rem] border border-[#f0cf9e]/18 bg-[#f7e6c8]/10 shadow-[0_0_24px_rgba(0,0,0,0.12)]" />
            <div className="absolute right-[16.4%] bottom-[18%] h-24 w-12 rounded-t-[2rem] bg-[#9d5934]" />
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

function Projects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
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

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const activeRoom = scrollProgress * (MUSEUM_ROOMS.length - 1);
    const cameraScale = 0.95 + scrollProgress * 0.08;
    const headerOpacity = Math.max(0, 1 - scrollProgress * 12);
    const headerY = -scrollProgress * 200;

    return (
        <div className="min-h-screen bg-[#140a07] text-white relative font-sans w-full max-w-[100vw] overflow-x-hidden" style={{ overflowX: 'clip' }}>
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 221, 168, 0.18), transparent 45%)`
                }}
            />

            <nav className="fixed top-6 w-full z-50 transition-all duration-500 ease-in-out px-6">
                <div className="mx-auto rounded-full border border-[#f0d2ac]/20 bg-[#2a1711]/55 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-between max-w-6xl px-8 py-4">
                    <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-[#f3ddc4] hover:text-white transition-colors">
                        <ChevronLeft className="w-5 h-5" /> Home
                    </Link>
                    <div className="flex items-center gap-2 text-xl font-bold text-[#ffe7c6] tracking-widest uppercase">
                        <Telescope className="h-4 w-4" /> Space Museum
                    </div>
                    <div className="w-[100px]" />
                </div>
            </nav>

            <section
                ref={sceneRef}
                className="relative w-full"
                style={{ height: `${MUSEUM_ROOMS.length * 100}vh` }}
            >
                <div className="sticky top-0 h-screen overflow-hidden [perspective:1800px]">
                    <motion.div
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ 
                            opacity: headerOpacity, 
                            y: headerY 
                        }}
                        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
                        className="pointer-events-none absolute left-6 right-6 top-24 z-20 mx-auto max-w-6xl"
                    >
                        <div className="inline-flex items-center gap-3 rounded-full border border-[#f0d2ac]/25 bg-[#3a2118]/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#ffe2bb] backdrop-blur-md">
                            <Bird className="h-4 w-4 text-[#ffd59d]" /> Scroll through the space museum
                        </div>
                        <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white md:text-6xl">
                            A 3D space museum room that reveals my work one hanging card at a time.
                        </h1>
                        <p className="mt-5 max-w-3xl text-xl font-light leading-relaxed text-[#f3d4b5]">
                            The room starts wide, then the camera pans right and zooms toward each project card while the telescope, shuttle, vases, and wall props stay in the scene.
                        </p>
                    </motion.div>

                    <RoomBackdrop />
                    <RoomFloor />
                    <SpaceProps />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,16,10,0.28),rgba(29,16,10,0.1)_40%,rgba(29,16,10,0.45)_100%)]" />
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-[20vw] bg-gradient-to-r from-[#3b2017]/55 via-[#3b2017]/22 to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-[20vw] bg-gradient-to-l from-[#3b2017]/55 via-[#3b2017]/22 to-transparent" />

                    <div
                        className="relative z-10 flex h-full w-max will-change-transform [transform-style:preserve-3d]"
                        style={{ transform: `translate3d(-${scrollProgress * (MUSEUM_ROOMS.length - 1) * 100}vw, 0, 0) rotateY(${(0.5 - scrollProgress) * 6}deg) scale(${cameraScale})` }}
                    >
                        {MUSEUM_ROOMS.map((room, index) => {
                            const delta = activeRoom - index;
                            const reveal = Math.max(0, 1 - Math.abs(delta));
                            const depth = Math.min(1.6, Math.abs(delta) * 0.3);
                            const roomShift = delta * 16;

                            return (
                                <div key={room.id} className="relative flex h-full w-screen flex-shrink-0 items-center px-6 md:px-12 lg:px-20">
                                    <div
                                        className="mx-auto flex h-full w-full max-w-7xl items-center [transform-style:preserve-3d]"
                                        style={{
                                            opacity: 0.18 + reveal * 0.82,
                                            transform: `translate3d(${delta * -18}px, ${roomShift}px, -${depth * 160}px) rotateY(${-delta * 7}deg) scale(${0.88 + reveal * 0.12})`
                                        }}
                                    >
                                        {room.kind === 'intro' && room.exhibitCards && (
                                            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-5xl mx-auto">
                                                <div className="flex flex-col items-center text-center gap-6 rounded-[2.5rem] border border-[#f0d2ac]/10 bg-[#2a1711]/35 p-8 backdrop-blur-sm shadow-[0_30px_90px_rgba(0,0,0,0.22)] w-full">
                                                    <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-[#ffe1b7]">
                                                        <Newspaper className="h-4 w-4" /> Space Museum Wing
                                                    </div>
                                                    <h2 className="text-3xl md:text-5xl font-black leading-tight text-white max-w-3xl">
                                                        Old room light, preserved like a space museum archive.
                                                    </h2>
                                                    <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#f0d0ab]">
                                                        The hall begins with space props and warm display cards before it opens into the projects I built.
                                                    </p>
                                                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                                                        <span className="rounded-full border border-[#f0d2ac]/20 bg-[#f3c38f]/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#ffe6c5]">Hanging cards</span>
                                                        <span className="rounded-full border border-[#f0d2ac]/20 bg-[#f3c38f]/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#ffe6c5]">Camera pan</span>
                                                        <span className="rounded-full border border-[#f0d2ac]/20 bg-[#f3c38f]/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#ffe6c5]">Zoom focus</span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full mt-4">
                                                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full max-w-5xl">
                                                        {room.exhibitCards.map((artifact) => (
                                                            <div 
                                                                key={artifact.title} 
                                                                className="transition-all hover:scale-[1.02] w-full"
                                                            >
                                                                <ExhibitCard {...artifact} />
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex lg:flex-col items-center justify-center gap-3 text-[#ffe7c6] animate-[pulse_2s_infinite] shrink-0 mt-4 lg:mt-0">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#ffd59d]">Projects</span>
                                                        <div className="rounded-full border border-[#f0d2ac]/20 bg-[#f0c38f]/10 p-4 shadow-lg backdrop-blur-md">
                                                            <ArrowRight className="h-8 w-8 text-[#ffd59d]" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {room.kind === 'project' && room.project && (
                                            <div className="w-full max-w-6xl mx-auto">
                                                <div className="mb-4 flex items-center justify-between gap-4 text-[#f0d0ab]">
                                                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em]">
                                                        {room.project.title.includes('Flutter') || room.subtitle.includes('Flutter') ? <SiFlutter className="h-4 w-4 text-[#67e8f9]" /> : <Brain className="h-4 w-4 text-violet-200" />}
                                                        {room.subtitle}
                                                    </div>
                                                    <span className="hidden sm:inline text-xs font-semibold uppercase tracking-[0.3em] text-[#d7ae84]">Room {index + 1}</span>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-[#ffd59d]/12 blur-2xl" />
                                                    <div className="absolute left-6 top-12 h-[calc(100%-3rem)] w-10 rounded-[2rem] bg-gradient-to-b from-[#d39a68]/35 via-[#895535]/55 to-[#3d2016]/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
                                                    <div className="absolute right-6 top-12 h-[calc(100%-3rem)] w-10 rounded-[2rem] bg-gradient-to-b from-[#d39a68]/35 via-[#895535]/55 to-[#3d2016]/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
                                                    <div className="absolute inset-x-12 bottom-0 h-12 rounded-t-[2rem] bg-[#6f3825]/70 shadow-[0_-18px_40px_rgba(0,0,0,0.2)]" />
                                                    <div className="absolute left-1/2 top-2 z-20 h-24 w-[2px] -translate-x-1/2 bg-[#f7d9ae]/30" />
                                                    <div className="relative z-10 rounded-[2.8rem] border border-[#f0d2ac]/12 bg-[#2a1711]/45 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                                                        <ProjectShowcase project={room.project} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {room.kind === 'bridge' && (
                                            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-5xl mx-auto">
                                                <div className="flex flex-col items-center text-center gap-6 rounded-[2.75rem] border border-[#f0d2ac]/12 bg-[#2a1711]/40 p-8 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.22)] w-full">
                                                    <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-[#ffe1b7]">
                                                        <Telescope className="h-4 w-4" /> Corridor
                                                    </div>
                                                    <h2 className="text-3xl md:text-5xl font-black leading-tight text-white max-w-3xl">
                                                        The camera keeps moving right from Flutter blue to AI violet.
                                                    </h2>
                                                    <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#f0d0ab]">
                                                        This transition room is the pause between my mobile work and my research projects, like walking farther along the same museum wall.
                                                    </p>
                                                </div>
                                                <div className="relative flex items-center justify-center w-full max-w-md">
                                                    <div className="absolute h-[24rem] w-[24rem] rounded-full bg-[#ffd59d]/10 blur-3xl" />
                                                    <div className="relative h-[18rem] w-full rounded-[2.5rem] border border-[#f0d2ac]/15 bg-[#2a1711]/55 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl [transform:rotateY(-8deg)_translateZ(20px)] flex flex-col justify-center items-center">
                                                        <div className="absolute left-8 right-8 top-12 h-px bg-gradient-to-r from-transparent via-[#ffdcae]/40 to-transparent" />
                                                        <div className="absolute left-10 top-14 h-[8rem] w-20 rounded-t-[999px] border-[12px] border-[#f0d2ac]/14" />
                                                        <div className="absolute right-10 top-14 h-[8rem] w-20 rounded-t-[999px] border-[12px] border-[#f0d2ac]/14" />
                                                        <div className="flex items-center gap-3 rounded-full border border-[#f0d2ac]/20 bg-[#f0c38f]/10 px-5 py-3 text-[#ffe7c6] z-10">
                                                            <ArrowRight className="h-5 w-5 animate-pulse" />
                                                            <span>Flutter wing to AI wing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {room.kind === 'outro' && (
                                            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-5xl mx-auto">
                                                <div className="flex flex-col items-center text-center gap-6 rounded-[2.5rem] border border-[#f0d2ac]/12 bg-[#2a1711]/42 p-8 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.22)] w-full">
                                                    <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-[#ffe1b7]">
                                                        <Orbit className="h-4 w-4" /> Archive Exit
                                                    </div>
                                                    <h2 className="text-3xl md:text-5xl font-black leading-tight text-white max-w-3xl">
                                                        The camera lands at the full source archive.
                                                    </h2>
                                                    <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#f0d0ab]">
                                                        If you want to inspect the broader collection, the public GitHub profile carries the rest of the repository trail and the live source surface.
                                                    </p>
                                                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                                                        <a href="https://github.com/hurairamuzammal?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#f0d2ac]/25 bg-[#f3c38f]/12 px-5 py-3 text-sm font-semibold text-[#ffe7c6] transition-all hover:border-[#ffd59d]/50 hover:bg-[#f3c38f]/18">
                                                            Open repositories <ExternalLink className="h-4 w-4" />
                                                        </a>
                                                        <a href="https://github.com/hurairamuzammal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#f0d2ac]/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10">
                                                            Open profile <Github className="h-4 w-4" />
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="grid gap-6 sm:grid-cols-2 w-full max-w-4xl">
                                                    <div className="transition-all hover:scale-[1.02] w-full">
                                                        <ExhibitCard
                                                            title="Repository Catalog"
                                                            subtitle="GitHub index"
                                                            note="A catalog wall that points at the collection of Flutter apps, NLP notebooks, and experimental AI repos."
                                                            icon={Newspaper}
                                                            accent="bg-[#f5e0c0] shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                                                        />
                                                    </div>
                                                    <div className="transition-all hover:scale-[1.02] w-full">
                                                        <ExhibitCard
                                                            title="Mission Notes"
                                                            subtitle="Source trail"
                                                            note="The final case in the museum keeps the source trail visible for anyone who wants to browse the broader archive."
                                                            icon={ScrollText}
                                                            accent="bg-[#f7e6c8] shadow-[0_20px_60px_rgba(0,0,0,0.16)]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#f0d2ac]/18 bg-[#2a1711]/65 px-4 py-3 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                        {MUSEUM_ROOMS.map((room, index) => (
                            <span
                                key={room.id}
                                className={`h-2.5 rounded-full transition-all duration-300 ${index <= activeRoom ? 'w-8 bg-[#ffd59d] shadow-[0_0_10px_rgba(255,213,157,0.6)]' : 'w-2.5 bg-white/25'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
