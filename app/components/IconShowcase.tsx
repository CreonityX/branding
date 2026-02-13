import { Rocket, Zap, Box, Layers, Shield, Activity, Command, Cpu, Disc, Aperture, Copy } from "lucide-react";

export function IconShowcase() {
    return (
        <div className="space-y-12">

            {/* Grid of Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: Rocket, label: "LAUNCH", code: "rocket" },
                    { icon: Zap, label: "ENERGY", code: "zap" },
                    { icon: Box, label: "CONTAINER", code: "box" },
                    { icon: Layers, label: "STACK", code: "layers" },
                    { icon: Shield, label: "SECURE", code: "shield" },
                    { icon: Activity, label: "PULSE", code: "activity" },
                    { icon: Command, label: "CMD", code: "command" },
                    { icon: Cpu, label: "COMPUTE", code: "cpu" },
                ].map((item, i) => (
                    <div key={i} className="group relative border border-zinc-800 bg-zinc-950 p-6 flex flex-col items-center justify-center hover:border-white transition-colors aspect-square">
                        <div className="absolute top-2 left-2 text-[8px] text-zinc-700 font-mono">0{i + 1}</div>
                        <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Copy className="w-3 h-3 text-zinc-500" />
                        </div>

                        <item.icon className="w-8 h-8 text-zinc-300 group-hover:text-white transition-colors stroke-1 mb-4" />

                        <div className="text-[10px] font-mono text-zinc-500 group-hover:text-white uppercase tracking-widest">{item.label}</div>
                    </div>
                ))}
            </div>

            {/* Icon Packs */}
            <div className="border border-zinc-800 p-6 bg-zinc-900/20">
                <h3 className="font-mono text-xs text-zinc-500 uppercase mb-4">Recommended Libraries</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="font-bold text-white mb-1">Lucide React</div>
                        <p className="text-zinc-500 text-xs">Standard. Clean 2px stroke.</p>
                    </div>
                    <div>
                        <div className="font-bold text-white mb-1">Phosphor Icons</div>
                        <p className="text-zinc-500 text-xs">Geometric. Good bold weights.</p>
                    </div>
                    <div>
                        <div className="font-bold text-white mb-1">Remix Icon</div>
                        <p className="text-zinc-500 text-xs">Neutral. High coverage.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
