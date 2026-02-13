import { BadgeCheck, TrendingUp } from "lucide-react";

export function CreatorWidget() {
    return (
        // This container is designed to be tilted by the IsoCard engine
        <div className="w-72 h-[420px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl">

            {/* Internal Industrial Markers */}
            <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-1 h-1 bg-white/20"></div>
                <div className="w-1 h-1 bg-white/20"></div>
            </div>
            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/40"></div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            {/* 1. Header with Avatar */}
            <div className="relative z-10 flex flex-col items-center text-center mt-4 mb-8">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent border border-white/20 mb-4 relative">
                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden relative group">
                        {/* Placeholder Avatar */}
                        <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <span className="absolute text-white font-bold text-xl">JS</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-[#a3e635] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-sm border border-black z-20">PRO</div>
                </div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    Jane Smith <BadgeCheck className="w-4 h-4 text-blue-400" />
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">@janesmith_creative</p>
            </div>

            {/* 2. Mini Chart (Holo-styled) */}
            <div className="flex-1 w-full flex items-end justify-between gap-2 mb-6 px-2 relative z-10">
                {[30, 50, 40, 70, 55, 85].map((h, i) => (
                    <div key={i} className="w-full bg-white/5 rounded-t-sm relative group">
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-[#a3e635] transition-all duration-700 rounded-t-sm opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_10px_#a3e635]"
                            style={{ height: `${h}%` }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* 3. Stats Footer */}
            <div className="relative z-10 p-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
                <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Revenue</div>
                    <div className="text-lg font-bold text-white font-display">$12,450</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#a3e635]/10 flex items-center justify-center border border-[#a3e635]/20">
                    <TrendingUp className="w-4 h-4 text-[#a3e635]" />
                </div>
            </div>

        </div>
    );
}
