import { Copy } from "lucide-react";
import { IsoCard } from "./IsoCard";

interface ColorSwatchProps {
    name: string;
    variable: string;
    hex: string;
    bgClass: string;
    textClass?: string;
}

function ColorSwatch({ name, variable, hex, bgClass, textClass = "text-white" }: ColorSwatchProps) {
    return (
        <div className="group relative">
            <div className={`h-24 w-full ${bgClass} rounded-sm border border-white/10 flex items-end p-3 transition-transform group-hover:scale-105`}>
                <span className={`font-mono text-xs font-bold ${textClass}`}>{hex}</span>
            </div>
            <div className="mt-2 space-y-1">
                <div className="font-bold text-sm text-white">{name}</div>
                <div className="font-mono text-[10px] text-zinc-500 flex items-center gap-1 cursor-pointer hover:text-white">
                    {variable} <Copy className="w-3 h-3" />
                </div>
            </div>
        </div>
    );
}

export function ColorPalette() {
    return (
        <div className="space-y-12">
            <section>
                <h3 className="text-xl font-display font-bold text-white mb-6 border-b border-white/10 pb-2">Creator Primary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ColorSwatch name="Electric Violet" variable="--color-creator-primary" hex="#8B5CF6" bgClass="bg-[#8b5cf6]" />
                    <ColorSwatch name="Acid Lime" variable="--color-creator-accent" hex="#A3E635" bgClass="bg-[#a3e635]" textClass="text-black" />
                    <ColorSwatch name="Signal Red" variable="--color-signal-red" hex="#EF4444" bgClass="bg-red-500" />
                    <ColorSwatch name="Signal Orange" variable="--color-signal-orange" hex="#F97316" bgClass="bg-orange-500" />
                </div>
            </section>

            <section>
                <h3 className="text-xl font-display font-bold text-white mb-6 border-b border-white/10 pb-2">Neutral / Surface</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ColorSwatch name="Zinc 950 (Bg)" variable="--color-brand-black" hex="#09090B" bgClass="bg-[#09090b]" />
                    <ColorSwatch name="Zinc 900 (Surface)" variable="--color-surface-900" hex="#18181B" bgClass="bg-zinc-900" />
                    <ColorSwatch name="Zinc 800 (Border)" variable="--color-border-800" hex="#27272A" bgClass="bg-zinc-800" />
                    <ColorSwatch name="Zinc 500 (Text)" variable="--color-text-muted" hex="#71717A" bgClass="bg-zinc-500" />
                </div>
            </section>
        </div>
    );
}
