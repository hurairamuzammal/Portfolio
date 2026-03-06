import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Github, Database, Code2, Server, Download, Lock, Activity } from 'lucide-react';
import { Link } from 'react-router';
import { UniverseBackground } from '../components/UniverseBackground';
import { SiFlutter, SiDart, SiFirebase, SiSqlite, SiSupabase, SiPython } from 'react-icons/si';

const PROJECTS_DATA = [
    {
        id: "notlyfe",
        title: "NotLyfe Organizer",
        logo: "/logo.png",
        poster: "/Notlyfe Posters-1 conv 3_compressed.pdf",
        problemSolved: "A comprehensive solution for students to manage lecture notes, schedules, and todos seamlessly across multiple devices with real-time sync.",
        technologies: [
            { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
            { name: "Dart", icon: SiDart, color: "text-[#0175C2]" },
            { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" }
        ],
        database: "Firebase Firestore",
        auth: "Firebase Authentication",
        practices: "Material You Design, State Management, Cross-Device Sync",
        github: "https://github.com/hurairamuzammal/Notlyfe-Student-Oragnizer"
    },
    {
        id: "cricketworld",
        title: "CricketWorld",
        logo: "/logo2.png",
        poster: "/cricket_world.pdf",
        problemSolved: "Delivering custom, AI-powered real-time cricket scores, predictions, and detailed analytics for cricket enthusiasts.",
        technologies: [
            { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
            { name: "AI custom API", icon: Server, color: "text-[#10b981]" },
            { name: "Open Router", icon: Code2, color: "text-[#8b5cf6]" },
            { name: "Scrapy", icon: SiPython, color: "text-[#3b82f6]" }
        ],
        database: "Custom Architecture DB",
        auth: "Advanced Secure Auth",
        practices: "Flutter Clean Architecture, Custom AI API Integration, Scalable Backend",
        github: "https://github.com/hurairamuzammal"
    },
    {
        id: "healthsync",
        title: "Health Sync",
        logo: "/logo3.png",
        poster: null,
        posterText: "Poster added later",
        problemSolved: "Aggregating and synchronizing user health data like steps, heart rate, and workouts centrally by integrating with Health Connect and tracking wellness progress.",
        technologies: [
            { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
            { name: "Health Connect", icon: Activity, color: "text-[#ef4444]" },
            { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" }
        ],
        database: "SQLite / Local Storage",
        auth: "Google Sign-In",
        practices: "Native API Integration, Background Processing, Secure Data Handling",
        github: "https://github.com/hurairamuzammal"
    }
];

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

            <main className="relative z-10 pt-40 pb-24 px-6 lg:px-12 max-w-5xl mx-auto w-full flex flex-col gap-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-6 mb-8"
                >
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-2">
                        Showcase <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#67e8f9]">Projects</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl">
                        Deep dive into the core architecture, solved problems, and the technologies powering my featured mobile applications.
                    </p>
                </motion.div>

                {PROJECTS_DATA.map((project, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: idx * 0.1, duration: 0.7 }}
                        key={project.id}
                        className="w-full flex md:flex-row flex-col gap-8 p-8 md:p-12 rounded-[3rem] bg-[#020617]/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-[#38bdf8]/30 hover:shadow-[0_0_50px_rgba(56,189,248,0.1)] transition-all group overflow-hidden relative"
                    >
                        {/* Glow indicator */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-3xl group-hover:bg-[#38bdf8]/10 transition-colors" />

                        {/* Logo and Quick Info Section */}
                        <div className="flex flex-col gap-6 md:w-1/3">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-white border border-white/20 p-2 shadow-2xl flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                                <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>

                            <h2 className="text-3xl font-black text-white group-hover:text-[#38bdf8] transition-colors">{project.title}</h2>

                            <div className="flex flex-col gap-4 mt-2">
                                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0f172a] border border-white/10 hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10 text-white font-semibold transition-all w-fit">
                                    <Github className="w-5 h-5" /> View on GitHub
                                </a>
                                {project.poster ? (
                                    <a href={project.poster} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0f172a] border border-white/10 hover:border-[#34d399]/50 hover:bg-[#34d399]/10 text-white font-semibold transition-all w-fit">
                                        <Download className="w-5 h-5" /> View Poster View
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0f172a] border border-white/5 text-slate-500 font-semibold transition-all w-fit cursor-not-allowed">
                                        <Lock className="w-5 h-5" /> {project.posterText}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Detailed Description Section */}
                        <div className="flex flex-col gap-8 md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">

                            {/* Problem */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#38bdf8] uppercase tracking-widest font-bold text-sm flex items-center gap-2">
                                    <Code2 className="w-4 h-4" /> Core Problem Solved
                                </h3>
                                <p className="text-lg text-slate-300 font-light leading-relaxed">
                                    {project.problemSolved}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#38bdf8] uppercase tracking-widest font-bold text-sm flex items-center gap-2">
                                    <Server className="w-4 h-4" /> Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    {project.technologies.map((tech, i) => (
                                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f172a] border border-white/5">
                                            <tech.icon className={`w-5 h-5 ${tech.color}`} />
                                            <span className="text-slate-300 font-medium text-sm">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                                {/* Infrastructure */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#38bdf8] uppercase tracking-widest font-bold text-sm flex items-center gap-2">
                                        <Database className="w-4 h-4" /> Infrastucture & Auth
                                    </h3>
                                    <div className="flex flex-col gap-1 mt-1">
                                        <span className="text-slate-300 font-medium">{project.database}</span>
                                        <span className="text-slate-400 font-light text-sm">{project.auth}</span>
                                    </div>
                                </div>

                                {/* Architecture */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#38bdf8] uppercase tracking-widest font-bold text-sm flex items-center gap-2">
                                        <Activity className="w-4 h-4" /> Practices Used
                                    </h3>
                                    <p className="text-slate-300 font-medium mt-1 leading-snug">
                                        {project.practices}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </main>
        </div>
    );
}

export default Projects;
