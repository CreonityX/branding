"use client";

import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface KineticCardProps {
    title: string;
    description?: string;
    animationClass: string; // The Tailwind class(es) to animate
    containerClass?: string; // Optional container styling
    children?: React.ReactNode; // The "Real Component" to animate
}

export function KineticCard({ title, description, animationClass, containerClass, children }: KineticCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(animationClass);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group relative bg-zinc-900/40 border border-zinc-800 rounded-sm overflow-hidden flex flex-col hover:border-zinc-700 transition-colors h-full">
            {/* Visual Stage */}
            <div className={cn("h-40 flex items-center justify-center bg-grid-zinc relative overflow-hidden p-6", containerClass)}>
                {/* The Animated Element */}
                {children ? (
                    <div className={animationClass}>
                        {children}
                    </div>
                ) : (
                    <div className={cn(
                        "w-24 h-24 bg-zinc-800 border border-zinc-600 rounded-sm flex items-center justify-center shadow-2xl",
                        "text-xs font-mono text-zinc-400 cursor-pointer",
                        animationClass
                    )}>
                        TARGET
                    </div>
                )}
            </div>

            {/* Code & Details */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-950/50">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-white font-display">{title}</h3>
                    {description && <span className="text-[10px] text-zinc-500 font-mono hidden md:inline-block">{description}</span>}
                </div>

                {/* Code Block */}
                <div
                    onClick={handleCopy}
                    className="relative group/code flex items-center justify-between bg-black border border-zinc-800 rounded-sm p-2 cursor-pointer hover:border-[#a3e635]/50 transition-colors"
                >
                    <code className="text-[10px] text-[#a3e635] font-mono truncate mr-2">
                        {animationClass}
                    </code>
                    <div className="text-zinc-500 group-hover/code:text-white transition-colors">
                        {copied ? <Check className="w-3 h-3 text-[#a3e635]" /> : <Copy className="w-3 h-3" />}
                    </div>
                </div>
            </div>
        </div>
    );
}
