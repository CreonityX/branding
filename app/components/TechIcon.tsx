import { LucideIcon, Copy } from "lucide-react";

interface TechIconProps {
    icon: LucideIcon;
    label: string;
    code?: string;
    index?: string | number;
}

export function TechIcon({ icon: Icon, label, code, index }: TechIconProps) {
    return (
        <div className="group relative border border-zinc-800 bg-zinc-950 p-6 flex flex-col items-center justify-center hover:border-white transition-colors aspect-square cursor-pointer">
            {index !== undefined && (
                <div className="absolute top-2 left-2 text-[8px] text-zinc-700 font-mono">
                    {index.toString().padStart(2, '0')}
                </div>
            )}

            {code && (
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity" title={`Copy <${code} />`}>
                    <Copy className="w-3 h-3 text-zinc-500 hover:text-[#a3e635]" />
                </div>
            )}

            <Icon className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors stroke-1 mb-4" />

            <div className="text-[10px] font-mono text-zinc-500 group-hover:text-white uppercase tracking-widest text-center">
                {label}
            </div>
        </div>
    );
}
