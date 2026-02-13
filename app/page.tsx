import Link from "next/link";
import { Zap, LayoutGrid, Type, Palette, Component, Cuboid, ArrowRight, Bot, Copy, Terminal, Activity } from "lucide-react";
import { ColorPalette } from "./components/ColorPalette";
import { TypeScale } from "./components/TypeScale";
import { ComponentLibrary } from "./components/ComponentLibrary";
import { PrimitivesPreview } from "./components/PrimitivesPreview";
import { AnimationShowcase } from "./components/AnimationShowcase";
import { IsoCard } from "./components/IsoCard";
import { CreatorWidget } from "./components/CreatorWidget";
import { IconShowcase } from "./components/IconShowcase";

// Widgets
import { RevenueChart } from "./components/widgets/RevenueChart";
import { TransactionList } from "./components/widgets/TransactionList";
import { CampaignCard } from "./components/widgets/CampaignCard";
import { AudienceDemographics } from "./components/widgets/AudienceDemographics";
import { LeaderboardWidget } from "./components/widgets/LeaderboardWidget";
import { MessageInterface } from "./components/widgets/MessageInterface";
import { MediaUpload } from "./components/widgets/MediaUpload";
import { HolographicCard } from "./components/HolographicCard";
import { HolographicRevenue } from "./components/widgets/HolographicRevenue";

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-black flex flex-col md:flex-row font-sans text-zinc-300 selection:bg-[#a3e635] selection:text-black">

            {/* Sidebar Documentation Nav */}
            <aside className="w-full md:w-64 border-r border-white/5 bg-black h-auto md:h-screen sticky top-0 hidden md:flex flex-col p-6 z-50">
                <div className="font-display font-extrabold text-2xl tracking-tight flex-col flex gap-0 mb-10 text-white">
                    <div className="text-[10px] font-mono font-normal text-[#a3e635] mb-1">DESIGN SYSTEM v4</div>
                    CREONITY
                </div>

                <nav className="space-y-8">
                    <div>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3 pl-3">Directives</div>
                        <ul className="space-y-1">
                            <li><a href="#intro" className="block px-3 py-2 rounded-sm bg-white/5 text-white text-sm font-medium border-l-2 border-[#a3e635]">Manifesto</a></li>
                            <li><a href="#ai-prompts" className="block px-3 py-2 rounded-sm hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm border-l-2 border-transparent hover:border-zinc-700">AI Prompts</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3 pl-3">Foundation</div>
                        <ul className="space-y-1">
                            <li><a href="#typography" className="block px-3 py-2 rounded-sm hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm border-l-2 border-transparent hover:border-zinc-700">Typography</a></li>
                            <li><a href="#colors" className="block px-3 py-2 rounded-sm hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm border-l-2 border-transparent hover:border-zinc-700">Colors</a></li>
                            <li><a href="#icons" className="block px-3 py-2 rounded-sm hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm border-l-2 border-transparent hover:border-zinc-700">Iconography</a></li>
                            <li><a href="#primitives" className="block px-3 py-2 rounded-sm hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm border-l-2 border-transparent hover:border-zinc-700">Primitives</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3 pl-3">System</div>
                        <ul className="space-y-1">
                            <li><a href="#widgets" className="block px-3 py-2 rounded-sm hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm border-l-2 border-transparent hover:border-zinc-700">Widget Grid</a></li>
                            <li><a href="#isometric" className="block px-3 py-2 rounded-sm hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm border-l-2 border-transparent hover:border-zinc-700">Isometric Engine</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="text-[10px] text-zinc-600 font-mono">
                        Syne + Manrope<br />
                        Updated: Feb 13, 2026
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-8 md:p-16 overflow-y-auto h-screen scroll-smooth bg-zinc-950 bg-grid-zinc">
                <div className="max-w-7xl mx-auto space-y-40 pb-40 relative z-10">

                    {/* Introduction */}
                    <section id="intro" className="pt-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white mb-8 hover:bg-white/10 transition-colors cursor-crosshair">
                            <Zap className="w-3 h-3 text-[#a3e635]" />
                            <span>SYSTEM_OPERATIONAL_v4.0</span>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-display font-extrabold text-white mb-12 tracking-tighter leading-[0.85]">
                            VISUAL<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">CULTURE.</span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">The Dual Soul</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Creonity is not just a tool; it is a gallery. We merge the **Expressive Chaos** of the Creator Economy with the **Rigorous Precision** of Enterprise Finance.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Key Directives</h3>
                                <ul className="space-y-2 text-zinc-400 font-mono text-sm">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#a3e635]"></div> No soft shadows. Only hard light.</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#8b5cf6]"></div> Data density is design.</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white"></div> Typography is art.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* AI Prompts (NEW) */}
                    <section id="ai-prompts" className="scroll-mt-20">
                        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <h2 className="text-4xl font-display font-bold text-white">AI Directives</h2>
                                        <p className="text-zinc-500 font-mono text-xs mt-1">Generative Asset Protocols</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <PromptCard
                                title="Isometric Glass Icons"
                                prompt="High-quality 3D render of a [SUBJECT] icon, isometric view, frosted glass texture, neon violet and lime green lighting accents, dark background, sharp edges, 8k resolution, octane render, translucent materials."
                            />
                            <PromptCard
                                title="3D Creator Avatar"
                                prompt="3D character illustration of a cool [GENDER] content creator, cyberpunk fashion, wearing oversized streetwear, glowing accessories, expressive pose, studio lighting, solid matte purple background, claymorphism style but detailed."
                            />
                            <PromptCard
                                title="Abstract Backgrounds"
                                prompt="Abstract data visualization background, dark mode, flowing neon lines, node connections, violet and lime green color palette, depth of field, tech interface overlay, 4k wallpaper."
                            />
                            <PromptCard
                                title="Product Mockup"
                                prompt="Floating isometric device mockup showing a dashboard interface, dark glass finish, hovering elements, dramatic rim lighting, sharp focus, technical aesthetic."
                            />
                        </div>
                    </section>

                    {/* Foundation Grid */}
                    <div className="grid grid-cols-1 gap-32">
                        <section id="typography" className="scroll-mt-20">
                            <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
                                <Type className="w-8 h-8 text-zinc-700" /> Typography
                            </h2>
                            <TypeScale />
                        </section>



                        <section id="colors" className="scroll-mt-20">
                            <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
                                <Palette className="w-8 h-8 text-zinc-700" /> Color System
                            </h2>
                            <ColorPalette />
                        </section>

                        <section id="icons" className="scroll-mt-20">
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-4xl font-display font-bold text-white flex items-center gap-4">
                                    <Zap className="w-8 h-8 text-zinc-700" /> Iconography
                                </h2>
                                <Link href="/icons" className="group flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-[#a3e635] transition-colors">
                                    VIEW_ALL_GLYPHS <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <IconShowcase />
                        </section>

                        <section id="animations" className="scroll-mt-20">
                            <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
                                <Activity className="w-8 h-8 text-zinc-700" /> Kinetic Physics
                            </h2>
                            <AnimationShowcase />
                        </section>

                        <section id="primitives" className="scroll-mt-20">
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-4xl font-display font-bold text-white flex items-center gap-4">
                                    <Component className="w-8 h-8 text-zinc-700" /> Interface Primitives
                                </h2>
                                <Link href="/primitives" className="group flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-[#a3e635] transition-colors">
                                    VIEW_ALL_PRIMITIVES <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <PrimitivesPreview />
                        </section>


                    </div>

                    {/* Mission Control (v7 Unified Grid) */}
                    <section id="widgets" className="scroll-mt-20">
                        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm">
                                    <LayoutGrid className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-display font-bold text-white">Mission Control</h2>
                                    <p className="text-zinc-500 font-mono text-xs mt-1">v7_Industrial_Holo_Hybrid</p>
                                </div>
                            </div>
                        </div>

                        {/* BENTO GRID LAYOUT */}
                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[340px]">

                            {/* 1. Main Revenue (Span 2 cols) */}
                            <div className="md:col-span-2 xl:col-span-2 row-span-1">
                                <RevenueChart />
                            </div>

                            {/* 2. Campaign Status */}
                            <div className="md:col-span-1 xl:col-span-1">
                                <CampaignCard />
                            </div>

                            {/* 3. Leaderboard */}
                            <div className="md:col-span-1 xl:col-span-1">
                                <LeaderboardWidget />
                            </div>

                            {/* 4. Demographics */}
                            <div className="md:col-span-1 xl:col-span-1">
                                <AudienceDemographics />
                            </div>

                            {/* 5. Transactions (Bit wider if space permits) */}
                            <div className="md:col-span-2 xl:col-span-1">
                                <TransactionList />
                            </div>

                            {/* 6. Communication (Fixed Height now) */}
                            <div className="md:col-span-1 xl:col-span-1">
                                <MessageInterface />
                            </div>

                            {/* 7. Upload (Compact) */}
                            <div className="md:col-span-1 xl:col-span-1">
                                <MediaUpload />
                            </div>

                        </div>
                    </section>

                    {/* Isometric Engine */}
                    <section id="isometric" className="scroll-mt-20">
                        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm">
                                    <Cuboid className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-display font-bold text-white">Isometric Engine</h2>
                                    <p className="text-zinc-500 font-mono text-xs mt-1">Marketing & Promotional Assets</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[600px] w-full bg-grid-zinc border border-white/10 overflow-hidden flex items-center justify-center bg-[#050505]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent"></div>
                            <div className="relative z-10">
                                <IsoCard depth="high">
                                    <CreatorWidget />
                                </IsoCard>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}

function PromptCard({ title, prompt }: { title: string, prompt: string }) {
    return (
        <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-sm hover:border-[#a3e635]/50 transition-colors group">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white">{title}</h3>
                <Terminal className="w-4 h-4 text-zinc-600 group-hover:text-[#a3e635]" />
            </div>
            <div className="bg-black p-4 rounded-sm border border-zinc-900 font-mono text-xs text-zinc-400 mb-4 leading-relaxed">
                {prompt}
            </div>
            <button className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#a3e635] transition-colors">
                <Copy className="w-3 h-3" /> Copy Prompt
            </button>
        </div>
    )
}
