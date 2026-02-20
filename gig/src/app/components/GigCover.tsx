import { Brain, Smartphone, Zap, Code2, Sparkles, Monitor } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

function FlutterLogoMark({ className, opacity = 0.2 }: { className?: string, opacity?: number }) {
  return (
    <svg viewBox="0 0 300 371.43" className={className} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <path d="M185.72,0,0,185.72l57.15,57.15L300,0Z" fill="#54c5f8"/>
      <path d="M300,171.43l-100,100,100,100H185.72l-42.86-42.86h0L85.71,271.42l100-100Z" fill="#01579b"/>
      <path d="M142.85 328.57 185.72 371.44 300 371.44 200.01 271.44 142.85 328.57" fill="#01579b"/>
      <path d="M142.85 328.57 227.61 299.24 200.01 271.44 142.85 328.57" fill="#29b6f6"/>
    </svg>
  );
}

export function GigCover() {
  return (
    <div className="w-full max-w-[1200px] h-[675px] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        <div className="absolute top-10 left-10 w-32 h-32 rotate-12">
          <FlutterLogoMark opacity={0.03} />
        </div>
        <div className="absolute bottom-10 right-10 w-48 h-48 -rotate-12">
          <FlutterLogoMark opacity={0.03} />
        </div>
        <div className="absolute top-1/2 left-[5%] w-16 h-16 rotate-45">
          <FlutterLogoMark opacity={0.04} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 -rotate-45">
          <FlutterLogoMark opacity={0.02} />
        </div>
        <div className="absolute top-[15%] right-[20%] w-20 h-20 rotate-90">
          <FlutterLogoMark opacity={0.03} />
        </div>
        
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <line x1="0" y1="200" x2="1200" y2="200" stroke="url(#lineGradient)" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="url(#lineGradient)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative h-full flex items-center justify-center gap-16 px-16 pb-16 z-10">
        <div className="flex flex-col justify-center items-center text-center text-white max-w-[650px] h-full pt-4">
          <div className="relative mb-6">
            <div className="absolute -top-10 -left-14 w-36 h-36 pointer-events-none blur-[1px]">
              <FlutterLogoMark opacity={0.5} />
            </div>
            
            <h1 className="text-[68px] font-heading font-black leading-none tracking-tight whitespace-nowrap relative z-10">
              <span className="text-white pr-4">AI Apps</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                using Flutter
              </span>
            </h1>
            
            <div className="absolute -bottom-10 -right-12 w-20 h-20 pointer-events-none rotate-180">
              <FlutterLogoMark opacity={0.3} />
            </div>
          </div>
          
          <p className="text-lg text-slate-300 mb-6 leading-relaxed font-light max-w-[500px]">
            Building high-performance, intelligent mobile solutions with custom AI integration and premium architecture.
          </p>

          <div className="flex flex-col gap-3 mb-8 w-full items-center">
            <div className="group flex items-center gap-4 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 bg-white/5 w-full max-w-[380px] text-left">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-white text-base leading-none mb-1 tracking-wide">AI Core Integration</h3>
                <p className="text-xs text-slate-400 font-medium">Custom Gemini & TensorFlow Models</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 bg-white/5 w-full max-w-[380px] text-left">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-2.5 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-white text-base leading-none mb-1 tracking-wide">Flutter Framework</h3>
                <p className="text-xs text-slate-400 font-medium">Native-Feel Cross-Platform Excellence</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 bg-white/5 w-full max-w-[380px] text-left">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-white text-base leading-none mb-1 tracking-wide">Modern UI/UX</h3>
                <p className="text-xs text-slate-400 font-medium">Pixel-Perfect, Responsive Design</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-12 w-full">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-heading font-black text-white leading-none">10+</div>
              <div className="text-[10px] text-blue-400 font-black tracking-widest uppercase mt-2">Projects</div>
            </div>
            <div className="flex flex-col items-center border-x border-white/10 px-12">
              <div className="text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 leading-none">Modern Apps</div>
              <div className="text-[10px] text-slate-400 font-black tracking-widest uppercase mt-2">Industry Standard</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-heading font-black text-white leading-none">2Y+</div>
              <div className="text-[10px] text-indigo-400 font-black tracking-widest uppercase mt-2">Experience</div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-12 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative">
            <div className="w-[420px] h-[540px] rounded-[4rem] overflow-hidden border border-white/20 shadow-2xl relative bg-slate-900">
              <ImageWithFallback 
                src="/assets/me.jpg"
                alt="Professional Flutter Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -top-6 -right-6 backdrop-blur-2xl border border-white/20 p-5 rounded-3xl bg-white/10 shadow-3xl z-20">
              <FlutterLogoMark className="w-8 h-8" opacity={1} />
            </div>
            
            <div className="absolute top-1/2 -left-10 backdrop-blur-2xl border border-white/20 p-5 rounded-3xl bg-white/10 shadow-3xl z-20">
              <Brain className="w-8 h-8 text-indigo-300" />
            </div>
            
            <div className="absolute bottom-16 -right-10 backdrop-blur-2xl border border-white/20 p-5 rounded-3xl bg-white/10 shadow-3xl z-20">
              <Sparkles className="w-8 h-8 text-cyan-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl border-t border-white/5 py-5 px-20 flex items-center justify-between" style={{ background: "rgba(2, 6, 23, 0.8)" }}>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase">Core Tech</span>
          <div className="flex items-center gap-3">
            {['Flutter', 'Dart', 'TensorFlow', 'Firebase', 'OpenAI'].map((tech) => (
              <span key={tech} className="px-4 py-1.5 rounded-xl text-[11px] font-bold text-slate-200 border border-white/10 bg-white/5">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/20 px-5 py-2 rounded-2xl">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">Open for New Projects</span>
        </div>
      </div>
    </div>
  );
}
