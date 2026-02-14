"use client";

import { KineticCard } from "./KineticCard";
import { ArrowRight, Search, Heart, Share2, Bell, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function AnimationShowcase() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Example 1: Button */}
                <KineticCard
                    title="Elastic Button"
                    description="Micro-interaction"
                    animationClass="transition-all duration-300 active:scale-95 hover:scale-105"
                >
                    <button className="px-6 py-3 bg-[#a3e635] text-black font-bold font-mono rounded-sm flex items-center gap-2">
                        CLICK_ME <ArrowRight className="w-4 h-4" />
                    </button>
                </KineticCard>

                {/* Example 2: Card */}
                <KineticCard
                    title="Glow Card"
                    description="Cyberpunk Hover"
                    animationClass="transition-all duration-500 hover:border-[#a3e635] hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] border border-zinc-700"
                >
                    <div className="p-4 bg-zinc-900 rounded-sm w-48">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                <Search className="w-4 h-4 text-white" />
                            </div>
                            <div className="h-2 w-20 bg-zinc-800 rounded-full" />
                        </div>
                        <div className="h-2 w-32 bg-zinc-800 rounded-full mb-2" />
                        <div className="h-2 w-24 bg-zinc-800/50 rounded-full" />
                    </div>
                </KineticCard>

                {/* Example 3: Badge */}
                <KineticCard
                    title="Status Pulse"
                    description="Live Indicator"
                    animationClass="animate-pulse"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/50 rounded-full text-red-400 text-xs font-mono font-bold">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        RECORDING
                    </div>
                </KineticCard>
            </div>

        </div>
    );
}
