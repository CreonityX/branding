import Link from 'next/link';
import { ArrowRight, Component } from 'lucide-react';
import { GlassTechCard } from './GlassTechCard';

export function PrimitivesPreview() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Button Preview */}
                <GlassTechCard title="Interaction" description="BUTTONS">
                    <button className="relative group w-full py-3 bg-white text-black font-bold font-display tracking-wider hover:bg-[#a3e635] transition-colors tech-cut text-xs mb-3">
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black"></div>
                        PRIMARY_EXECUTE
                    </button>
                    <button className="w-full py-3 border border-zinc-700 text-white font-mono text-xs hover:border-white hover:bg-white/5 transition-all group">
                        SECONDARY_SCAN
                    </button>
                </GlassTechCard>

                {/* Input Preview */}
                <GlassTechCard title="Data_Entry" description="INPUTS">
                    <div className="group mb-3">
                        <label className="text-[10px] font-bold text-[#a3e635] font-mono mb-1 block">ACCESS_ID</label>
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-focus-within:bg-[#a3e635] transition-colors"></div>
                            <input type="text" placeholder="USR_8829_X" className="w-full bg-zinc-900/50 border-r border-t border-b border-zinc-800 p-2 pl-3 text-white font-mono text-xs focus:outline-none focus:border-white focus:bg-zinc-900 transition-all placeholder:text-zinc-700" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border border-zinc-600 bg-zinc-900 flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#a3e635]"></div>
                        </div>
                        <span className="text-xs font-mono text-zinc-400">REMEMBER_ME</span>
                    </div>
                </GlassTechCard>

                {/* Badge Preview */}
                <GlassTechCard title="Status" description="TOKENS">
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-[10px] font-bold font-mono rounded-sm">VERIFIED</span>
                        <span className="px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold font-mono rounded-sm">FAILED</span>
                        <span className="px-2 py-1 bg-black border border-white/10 text-white text-[10px] font-mono rounded-full flex items-center w-max">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                            SYNCING
                        </span>
                    </div>
                </GlassTechCard>

            </div>

        </div>
    );
}
