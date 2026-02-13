import { GlassTechCard } from './GlassTechCard';
import { ArrowRight, Activity, Zap, Loader2, Check, Terminal } from 'lucide-react';

export function AnimationShowcase() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Kinetic Hover */}
            <GlassTechCard title="Kinetic_Response" description="HOVER_STATE">
                <div className="h-40 flex items-center justify-center">
                    <button className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-white font-mono text-xs transition-all duration-500 ease-out hover:scale-105 hover:border-[#a3e635] hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:text-[#a3e635] flex items-center gap-2 group">
                        <span>HOVER_ME</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <div className="mt-4 p-2 bg-black/40 border border-white/5 text-[10px] font-mono text-zinc-500">
                    duration-500 ease-out hover:scale-105
                </div>
            </GlassTechCard>

            {/* 2. Live Pulse */}
            <GlassTechCard title="System_Heartbeat" description="LIVE_DATA">
                <div className="h-40 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-4 h-4 bg-[#a3e635] rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-4 h-4 bg-[#a3e635] rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div className="ml-4 flex flex-col">
                        <span className="text-xs font-bold text-white font-mono">SYSTEM_ONLINE</span>
                        <span className="text-[10px] text-[#a3e635] font-mono flex items-center gap-1">
                            <Activity className="w-3 h-3" /> STABLE
                        </span>
                    </div>
                </div>
                <div className="mt-4 p-2 bg-black/40 border border-white/5 text-[10px] font-mono text-zinc-500">
                    animate-pulse + animate-ping
                </div>
            </GlassTechCard>

            {/* 3. Tech Reveal */}
            <GlassTechCard title="Tech_Reveal" description="ENTER_VIEW">
                <div className="h-40 flex items-center justify-center text-center">
                    <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-[#a3e635] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                        <div className="relative border border-white/10 bg-black p-4 tech-border group-hover:border-[#a3e635]/50 transition-colors">
                            <Zap className="w-6 h-6 text-zinc-500 group-hover:text-[#a3e635] transition-colors duration-300" />
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-2 bg-black/40 border border-white/5 text-[10px] font-mono text-zinc-500">
                    transition-opacity duration-700
                </div>
            </GlassTechCard>

            {/* 4. Scanning Sequence */}
            <GlassTechCard title="Scanning_Protocol" description="LOAD_STATE">
                <div className="h-40 flex flex-col items-center justify-center w-full px-8">
                    <div className="w-full flex justify-between text-[10px] font-mono text-zinc-400 mb-2">
                        <span>SCANNING...</span>
                        <span className="text-[#a3e635]">64%</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                        <div className="h-full bg-[#a3e635] w-[64%] relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/50 animate-[shimmer_1s_infinite] skew-x-12"></div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500 font-mono">
                        <Loader2 className="w-3 h-3 animate-spin" /> PROCESSING_ASSETS
                    </div>
                </div>
            </GlassTechCard>

            {/* 5. Success State */}
            <GlassTechCard title="Verification_Complete" description="SUCCESS_STATE">
                <div className="h-40 flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/5">
                        <div className="absolute inset-0 rounded-full border border-[#a3e635] animate-[ping_1.5s_ease-out_infinite] opacity-50"></div>
                        <Check className="w-8 h-8 text-[#a3e635]" />
                    </div>
                </div>
            </GlassTechCard>

            {/* 6. Text Glitch */}
            <GlassTechCard title="Data_Corruption" description="GLITCH_FX">
                <div className="h-40 flex items-center justify-center">
                    <div className="relative group cursor-default">
                        <h3 className="text-2xl font-display font-bold text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#a3e635] group-hover:to-white transition-all">
                            ENCRYPTED
                        </h3>
                        {/* Glitch Layers */}
                        <h3 className="text-2xl font-display font-bold text-red-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-75" aria-hidden="true">ENCRYPTED</h3>
                        <h3 className="text-2xl font-display font-bold text-blue-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] transition-all duration-75 delay-75" aria-hidden="true">ENCRYPTED</h3>
                    </div>
                </div>
            </GlassTechCard>

        </div>
    );
}
