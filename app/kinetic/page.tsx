"use client";

import { KineticCard } from "../components/KineticCard";
import { SubSidebar } from "../components/SubSidebar";
import { SectionHeader } from "../components/SectionHeader";
import { Wind, MousePointer2, Zap, Type, Search, User, Bell, ArrowRight, Check, X, Shield, Star, Heart } from "lucide-react";

export default function KineticAtlasPage() {
    return (
        <div className="min-h-screen bg-brand-black flex flex-col md:flex-row font-sans text-zinc-300 selection:bg-[#a3e635] selection:text-black">
            <SubSidebar
                title="KINETIC"
                groups={[
                    {
                        title: "Motion Atlas",
                        items: [
                            { id: "buttons", label: "Buttons & Actions" },
                            { id: "inputs", label: "Inputs & Fields" },
                            { id: "cards", label: "Cards & Containers" },
                            { id: "utility", label: "Utility & Status" }
                        ]
                    }
                ]}
            />

            <main className="flex-1 p-8 md:p-16 overflow-y-auto h-screen scroll-smooth bg-zinc-950 bg-grid-zinc">
                <div className="max-w-7xl mx-auto space-y-20 pb-40">

                    {/* Header */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-4">
                            MOTION_ATLAS
                        </h1>
                        <p className="text-zinc-500 font-mono max-w-2xl">
                            v16.0 // Kinetic definitions applied to real interface components.
                            <br />
                            <span className="text-[#a3e635]">Click the code block to copy the Tailwind utility.</span>
                        </p>
                    </div>

                    {/* 1. Buttons */}
                    <section id="buttons">
                        <SectionHeader title="Buttons & Actions" subtitle="Interactables" icon={MousePointer2} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <KineticCard
                                title="Primary Elastic"
                                description="Scale Up"
                                animationClass="transition-transform duration-300 active:scale-95 hover:scale-105"
                            >
                                <button className="px-6 py-2 bg-[#a3e635] text-black font-bold font-mono rounded-sm shadow-lg shadow-[#a3e635]/20">
                                    CONFIRM
                                </button>
                            </KineticCard>

                            <KineticCard
                                title="Secondary Lift"
                                description="Y-Axis Shift"
                                animationClass="transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800"
                            >
                                <button className="px-6 py-2 bg-zinc-900 border border-zinc-700 text-white font-mono rounded-sm">
                                    CANCEL
                                </button>
                            </KineticCard>

                            <KineticCard
                                title="Ghost Glow"
                                description="Text & Shadow"
                                animationClass="transition-all duration-500 hover:text-[#a3e635] hover:shadow-[0_0_15px_rgba(163,230,53,0.3)]"
                            >
                                <button className="px-6 py-2 border border-transparent text-zinc-400 font-mono text-sm tracking-widest uppercase">
                                    Details
                                </button>
                            </KineticCard>

                        </div>
                    </section>

                    {/* 2. Inputs */}
                    <section id="inputs">
                        <SectionHeader title="Inputs & Fields" subtitle="Focus States" icon={Type} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <KineticCard
                                title="Focus Expand"
                                description="Width Transition"
                                animationClass="transition-all duration-500 ease-out focus-within:w-64 focus-within:border-[#a3e635]"
                            >
                                <div className="w-48 border border-zinc-700 bg-zinc-900/50 rounded-sm flex items-center px-3 py-2 gap-2">
                                    <Search className="w-4 h-4 text-zinc-500" />
                                    <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-xs text-white w-full font-mono placeholder:text-zinc-600" />
                                </div>
                            </KineticCard>

                            <KineticCard
                                title="Underline Slide"
                                description="Border Bottom"
                                animationClass="transition-all duration-300 focus-within:border-b-[#a3e635] focus-within:bg-zinc-900"
                            >
                                <div className="border-b border-zinc-700 bg-transparent px-2 py-2 w-full">
                                    <input type="text" placeholder="Enter Email" className="bg-transparent border-none outline-none text-sm text-white font-mono placeholder:text-zinc-600 w-full" />
                                </div>
                            </KineticCard>

                        </div>
                    </section>

                    {/* 3. Cards */}
                    <section id="cards">
                        <SectionHeader title="Cards & Containers" subtitle="Hover Physics" icon={Zap} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <KineticCard
                                title="Neon Border"
                                description="Glow Effect"
                                animationClass="transition-all duration-500 hover:border-[#a3e635] hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] group"
                            >
                                <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-sm w-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-[#a3e635] transition-colors">
                                            <Shield className="w-4 h-4 text-zinc-500 group-hover:text-[#a3e635]" />
                                        </div>
                                        <span className="text-[10px] font-mono text-zinc-600">SECURE</span>
                                    </div>
                                    <div className="h-2 w-16 bg-zinc-800 rounded-full mb-1" />
                                    <div className="h-2 w-24 bg-zinc-900 rounded-full" />
                                </div>
                            </KineticCard>

                            <KineticCard
                                title="Tilt & Scale"
                                description="3D Pop"
                                animationClass="transition-transform duration-500 ease-out hover:scale-105 hover:-rotate-1 hover:z-10"
                            >
                                <div className="p-4 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-sm w-full shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <User className="w-8 h-8 text-white p-1.5 bg-purple-500 rounded-sm" />
                                        <div>
                                            <div className="text-xs font-bold text-white">PRO_USER</div>
                                            <div className="text-[10px] text-zinc-400 font-mono">ID: 8829</div>
                                        </div>
                                    </div>
                                </div>
                            </KineticCard>

                        </div>
                    </section>

                    {/* 4. Utility */}
                    <section id="utility">
                        <SectionHeader title="Utility & Status" subtitle="Indicators" icon={Bell} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <KineticCard
                                title="Success Pulse"
                                description="Green Ping"
                                animationClass="animate-pulse"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#a3e635]/20 flex items-center justify-center border border-[#a3e635]">
                                    <Check className="w-5 h-5 text-[#a3e635]" />
                                </div>
                            </KineticCard>

                            <KineticCard
                                title="Error Shake"
                                description="Validation Fail"
                                animationClass="animate-bounce" // Simplified shake
                            >
                                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500">
                                    <X className="w-5 h-5 text-red-500" />
                                </div>
                            </KineticCard>

                            <KineticCard
                                title="New Item Glow"
                                description="Infinite Animation"
                                animationClass="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                            >
                                <div className="px-3 py-1 bg-purple-500 text-white text-[10px] font-bold tracking-widest rounded-sm">
                                    NEW
                                </div>
                            </KineticCard>

                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
