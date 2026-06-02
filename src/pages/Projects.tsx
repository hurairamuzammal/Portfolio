import { useState, useEffect, type ElementType } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Github, Database, Code2, Server, ExternalLink, ArrowRight, Bird, Brain, Sparkles, Activity } from 'lucide-react';
import { Link } from 'react-router';
import { UniverseBackground } from '../components/UniverseBackground';
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
            className={`relative overflow-hidden rounded-[2.4rem] border bg-[#020617]/70 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.45)] transition-all ${project.theme.border} group`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.theme.glow} opacity-100`} />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl bg-white/5 opacity-40" />

            <div className="relative grid gap-8 p-8 md:p-10 lg:p-12 md:grid-cols-[0.95fr_1.25fr]">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className={`rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] ${project.theme.chip} ${project.theme.chipText} border-white/10`}>
                            {project.badge}
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="flex items-center gap-4">
                        {project.logo ? (
                            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/15 bg-white p-2 shadow-2xl">
                                <img src={project.logo} alt={`${project.title} logo`} className="h-full w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        ) : (
                            <div className={`flex h-24 w-24 items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/5 text-white ${project.theme.chipText}`}>
                                <Brain className="h-10 w-10" />
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <h3 className={`text-3xl font-black tracking-tight text-white transition-colors ${project.theme.title}`}>
                                {project.title}
                            </h3>
                            <p className="max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
                                {project.summary}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a href={project.github} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all ${project.theme.button} ${project.theme.buttonHover}`}>
                            <Github className="h-4 w-4" /> View on GitHub
                            <ExternalLink className="h-4 w-4" />
                        </a>
                        <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-white/20 hover:bg-white/10">
                            Back to Home <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">My approach</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                            {project.approach}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pt-0 md:pl-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Problem solved</h4>
                            <p className="text-sm leading-relaxed text-slate-300">{project.problemSolved}</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Impact</h4>
                            <p className="text-sm leading-relaxed text-slate-300">{project.impact}</p>
                        </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Technologies</h4>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <div key={index} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                    <tech.icon className={`h-5 w-5 ${tech.color}`} />
                                    <span className="text-sm font-medium text-slate-200">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                                <Database className="h-4 w-4" /> Infrastructure
                            </h4>
                            <p className="text-sm text-slate-300">{project.infrastructure}</p>
                            <p className="mt-2 text-sm text-slate-400">Auth: {project.auth}</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                                <Server className="h-4 w-4" /> Practices
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-300">{project.practices}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

function Projects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-white relative font-sans w-full max-w-[100vw] overflow-x-hidden" style={{ overflowX: 'clip' }}>
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.05), transparent 40%)`
                }}
            />

            <UniverseBackground mousePosition={mousePosition} />

            <nav className="fixed top-6 w-full z-50 transition-all duration-500 ease-in-out px-6">
                <div className="mx-auto rounded-full border border-[#38bdf8]/30 bg-[#020617]/60 backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.15)] flex items-center justify-between max-w-5xl px-8 py-4">
                    <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#38bdf8] transition-colors">
                        <ChevronLeft className="w-5 h-5" /> Home
                    </Link>
                    <div className="text-xl font-bold text-[#38bdf8] tracking-widest uppercase">
                        Lab
                    </div>
                    <div className="w-[100px]" /> {/* Spacer */}
                </div>
            </nav>

            <main className="relative z-10 pt-40 pb-24 px-6 lg:px-12 max-w-6xl mx-auto w-full flex flex-col gap-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-6 mb-8"
                >
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-slate-300">
                        <Bird className="h-4 w-4 text-[#38bdf8]" /> Flutter + AI portfolio
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-2 max-w-4xl">
                        Two themed lanes, one portfolio.
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-3xl">
                        The Flutter lane covers my mobile apps with a blue Material feel. The AI lane switches to a deeper lab theme for my FYP and NLP work.
                    </p>
                </motion.div>

                <section className="space-y-8">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <SiFlutter className="h-5 w-5 text-[#38bdf8]" />
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Flutter Apps</h2>
                        </div>
                        <p className="max-w-3xl text-slate-400 font-light leading-relaxed">
                            Flutter work with a lighter blue theme, Flutter branding, and bird accents to signal the mobile side of the portfolio.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {FLUTTER_PROJECTS.map((project) => (
                            <ProjectShowcase key={project.id} project={project} />
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <a href="https://github.com/hurairamuzammal?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/25 bg-[#38bdf8]/10 px-6 py-3 text-sm font-semibold text-[#a5f3fc] transition-all hover:border-[#67e8f9]/50 hover:bg-[#38bdf8]/20">
                            See the Flutter repos on GitHub <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <Brain className="h-5 w-5 text-violet-300" />
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">AI, NLP, and Research</h2>
                        </div>
                        <p className="max-w-3xl text-slate-400 font-light leading-relaxed">
                            The AI lane uses a darker research theme for the FYP and NLP work, with each card explaining the problem, my approach, and the stack behind it.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {AI_PROJECTS.map((project) => (
                            <ProjectShowcase key={project.id} project={project} />
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-[#020617]/75 px-6 py-5">
                        <p className="text-sm text-slate-300">
                            If you want the full source trail, I linked the public GitHub repos I could verify and the profile repository list for the broader set.
                        </p>
                        <a href="https://github.com/hurairamuzammal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10">
                            Open GitHub profile <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Projects;
