import Link from "next/link";
import { Zap, LayoutGrid, Type, Palette, Component, ArrowRight, Bot, Copy, Terminal, Activity, Download, FileJson, TextCursor } from "lucide-react";
import { ColorPalette } from "./components/ColorPalette";
import { TypeScale } from "./components/TypeScale";
import { PrimitivesPreview } from "./components/PrimitivesPreview";
import { AnimationShowcase } from "./components/AnimationShowcase";
import { IconShowcase } from "./components/IconShowcase";
import { DocSidebar } from "./components/DocSidebar";
import { SectionHeader } from "./components/SectionHeader";
import { GlassTechCard } from "./components/GlassTechCard";

// Widgets
import { RevenueChart } from "./components/widgets/RevenueChart";
import { TransactionList } from "./components/widgets/TransactionList";
import { CampaignCard } from "./components/widgets/CampaignCard";
import { AudienceDemographics } from "./components/widgets/AudienceDemographics";
import { LeaderboardWidget } from "./components/widgets/LeaderboardWidget";
import { MessageInterface } from "./components/widgets/MessageInterface";
import { MediaUpload } from "./components/widgets/MediaUpload";

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-black flex flex-col md:flex-row font-sans text-zinc-300 selection:bg-[#a3e635] selection:text-black">

            {/* v11 Structured Sidebar */}
            <DocSidebar />

            {/* Main Content Area */}
            <main className="flex-1 p-8 md:p-16 overflow-y-auto h-screen scroll-smooth bg-zinc-950 bg-grid-zinc">
                <div className="max-w-7xl mx-auto space-y-40 pb-40 relative z-10">

                    {/* Introduction */}
                    <section id="intro" className="pt-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white mb-8 hover:bg-white/10 transition-colors cursor-crosshair">
                            <Zap className="w-3 h-3 text-[#a3e635]" />
                            <span>SYSTEM_OPERATIONAL_v11.0</span>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-display font-extrabold text-white mb-12 tracking-tighter leading-[0.85]">
                            DESIGN<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">SYSTEM.</span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Architecture & Philosophy</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    The Creonity Design System is a rigorous framework for building data-dense, industrial-grade interfaces. It merges the **Expressive Chaos** of the Creator Economy with the **Precision Engineering** of Enterprise Finance.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Core Directives</h3>
                                <ul className="space-y-2 text-zinc-400 font-mono text-sm">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#a3e635]"></div> NO_SOFT_SHADOWS. HARD_LIGHT_ONLY.</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#8b5cf6]"></div> DATA_DENSITY_IS_DESIGN.</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white"></div> TYPOGRAPHY_IS_STRUCTURE.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* AI Prompts */}
                    <section id="ai-prompts" className="scroll-mt-20">
                        <SectionHeader title="AI Directives" subtitle="Generative Asset Protocols" />
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
                            <SectionHeader title="Typography" subtitle="Syne (Display) + Manrope (UI)" icon={Type} />
                            <TypeScale />
                        </section>

                        <section id="colors" className="scroll-mt-20">
                            <SectionHeader title="Color System" subtitle="Neon Lime / Cyber Violet / Zinc" icon={Palette} />
                            <ColorPalette />
                        </section>

                        <section id="icons" className="scroll-mt-20">
                            <SectionHeader
                                title="Iconography"
                                subtitle="2px Stroke / Lucide React"
                                icon={Zap}
                                link={{ href: "/icons", label: "VIEW_ALL_GLYPHS" }}
                            />
                            <IconShowcase />
                        </section>

                        <section id="primitives" className="scroll-mt-20">
                            <SectionHeader
                                title="Interface Primitives"
                                subtitle="Atoms & Molecules"
                                icon={Component}
                                link={{ href: "/primitives", label: "VIEW_ATLAS" }}
                            />
                            <PrimitivesPreview />
                        </section>
                    </div>

                    {/* Mission Control (v7 Unified Grid) */}
                    <section id="widgets" className="scroll-mt-20">
                        <SectionHeader title="Mission Control" subtitle="v7_Industrial_Holo_Hybrid" icon={LayoutGrid} link={{ href: "/widgets", label: "EXPLORE_ALL_WIDGETS" }} />

                        {/* BENTO GRID LAYOUT */}
                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[340px]">
                            <div className="md:col-span-2 xl:col-span-2 row-span-1"><RevenueChart /></div>
                            <div className="md:col-span-1 xl:col-span-1"><CampaignCard /></div>
                            <div className="md:col-span-1 xl:col-span-1"><LeaderboardWidget /></div>
                            <div className="md:col-span-1 xl:col-span-1"><AudienceDemographics /></div>
                            <div className="md:col-span-2 xl:col-span-1"><TransactionList /></div>
                            <div className="md:col-span-1 xl:col-span-1"><MessageInterface /></div>
                            <div className="md:col-span-1 xl:col-span-1"><MediaUpload /></div>
                        </div>
                    </section>

                    {/* Kinetic Physics */}
                    <section id="animations" className="scroll-mt-20">
                        <SectionHeader title="Kinetic Physics" subtitle="Motion & Interaction" icon={Activity} />
                        <AnimationShowcase />
                    </section>

                    {/* EXTERNAL ASSETS (NEW v11) */}
                    <section id="downloads" className="scroll-mt-20">
                        <SectionHeader title="Assets & Downloads" subtitle="External Resources" icon={Download} />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* Fonts */}
                            <GlassTechCard title="Typography" description="WOFF2_FILES">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center border border-zinc-700">
                                            <span className="font-display font-bold text-xl text-white">Aa</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">Syne</div>
                                            <div className="text-xs text-zinc-500 font-mono">Display / Headlines</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center border border-zinc-700">
                                            <span className="font-sans font-medium text-xl text-white">Aa</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">Manrope</div>
                                            <div className="text-xs text-zinc-500 font-mono">UI / Body</div>
                                        </div>
                                    </div>
                                    <button className="w-full py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors text-xs font-mono flex items-center justify-center gap-2 mt-2">
                                        <TextCursor className="w-3 h-3" /> GOOGLE_FONTS_LINK
                                    </button>
                                </div>
                            </GlassTechCard>

                            {/* Icons */}
                            <GlassTechCard title="Iconography" description="VECTOR_SETS">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center border border-zinc-700">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">Lucide</div>
                                            <div className="text-xs text-zinc-500 font-mono">Primary Set</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center border border-zinc-700">
                                            <Activity className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">Remix</div>
                                            <div className="text-xs text-zinc-500 font-mono">Fallback Set</div>
                                        </div>
                                    </div>
                                    <button className="w-full py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors text-xs font-mono flex items-center justify-center gap-2 mt-2">
                                        <Download className="w-3 h-3" /> DOWNLOAD_ICON_PACKS
                                    </button>
                                </div>
                            </GlassTechCard>

                            {/* Logos */}
                            <GlassTechCard title="Brand_Marks" description="SVG_VECTORS">
                                <div className="space-y-4">
                                    <div className="p-4 bg-black border border-zinc-800 flex items-center justify-center">
                                        <div className="font-display font-black text-xl text-white tracking-tighter">CREONITY</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors text-xs font-mono flex items-center justify-center gap-2">
                                            <Download className="w-3 h-3" /> SVG
                                        </button>
                                        <button className="py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors text-xs font-mono flex items-center justify-center gap-2">
                                            <Download className="w-3 h-3" /> PNG
                                        </button>
                                    </div>
                                </div>
                            </GlassTechCard>

                            {/* Figma */}
                            <GlassTechCard title="Design_Kit" description="FIGMA_FILE">
                                <div className="space-y-4">
                                    <div className="aspect-video bg-[#1e1e1e] border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <FileJson className="w-8 h-8 text-zinc-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <button className="w-full py-2 bg-[#a3e635] text-black font-bold text-xs font-mono hover:bg-[#b0f545] transition-colors flex items-center justify-center gap-2">
                                        OPEN_IN_FIGMA <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </GlassTechCard>

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
