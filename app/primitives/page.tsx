"use client";

import Link from "next/link";
import {
    ArrowLeft, Terminal, LayoutGrid, Type, Palette, Component, Cuboid, ArrowRight, Bot, Copy,
    Activity, Zap, Search, Filter, Sliders, Plus, Minus, X, Check, Upload, Download,
    Share2, Edit3, Trash2, Archive, Loader, AlertTriangle, CheckCircle, Info, HelpCircle,
    Bell, Settings, User, LogOut, ChevronRight, ChevronLeft, ChevronDown, FileText, Code,
    Command, CreditCard, Mail
} from "lucide-react";
import * as Tabs from '@radix-ui/react-tabs';
import * as Slider from '@radix-ui/react-slider';
import * as Switch from '@radix-ui/react-switch';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Progress from '@radix-ui/react-progress';
import * as Accordion from '@radix-ui/react-accordion';
import * as Popover from '@radix-ui/react-popover';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Label from '@radix-ui/react-label';
import { GlassTechCard } from "../components/GlassTechCard";

export default function PrimitivesPage() {
    return (
        <div className="min-h-screen bg-brand-black font-sans text-zinc-300 selection:bg-[#a3e635] selection:text-black p-8 md:p-16">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-4 transition-colors text-xs font-mono group">
                            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> BACK_TO_MISSION_CONTROL
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                            PRIMITIVES_ATLAS
                        </h1>
                        <p className="text-base text-zinc-400 mt-2 max-w-xl">
                            The complete atomic inventory. Every component is built for high-density, technical precision.
                            <br /><span className="text-[#a3e635] font-mono text-xs">v10.3_EXPANDED</span>
                        </p>
                    </div>
                </header>

                {/* LAB 1: SIGNALS & CONTROL */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <h2 className="text-sm font-mono text-[#a3e635] uppercase tracking-widest">LAB_01: SIGNALS & CONTROL</h2>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Buttons */}
                        <GlassTechCard title="Interaction_Models" description="BUTTONS">
                            <div className="space-y-4">
                                <button className="relative group w-full py-3 bg-white text-black font-bold font-display tracking-wider hover:bg-[#a3e635] transition-colors tech-cut text-xs">
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black"></div>
                                    PRIMARY_EXECUTE
                                </button>
                                <button className="w-full py-3 border border-zinc-700 text-white font-mono text-xs hover:border-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
                                    <span className="text-zinc-500 group-hover:text-white transition-colors">[</span>
                                    SECONDARY_SCAN
                                    <span className="text-zinc-500 group-hover:text-white transition-colors">]</span>
                                </button>
                                <div className="flex gap-4">
                                    <button className="flex-1 py-3 bg-red-500/10 border border-red-500/50 text-red-500 font-bold text-xs hover:bg-red-500 hover:text-black transition-colors tech-cut flex items-center justify-center gap-2">
                                        ABORT
                                    </button>
                                    <button className="flex-1 py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-white transition-colors text-xs font-mono">
                                        GHOST
                                    </button>
                                </div>
                            </div>
                        </GlassTechCard>

                        {/* Inputs & Textareas */}
                        <GlassTechCard title="Data_Entry" description="FORMS">
                            <div className="space-y-4">
                                {/* Basic Input */}
                                <div className="group">
                                    <label className="text-[10px] font-bold text-[#a3e635] font-mono mb-1 block">ACCESS_ID</label>
                                    <div className="relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-focus-within:bg-[#a3e635] transition-colors"></div>
                                        <input type="text" placeholder="USR_8829_X" className="w-full bg-zinc-900/50 border-r border-t border-b border-zinc-800 p-3 pl-4 text-white font-mono text-xs focus:outline-none focus:border-white focus:bg-zinc-900 transition-all placeholder:text-zinc-700" />
                                    </div>
                                </div>

                                {/* Input Group */}
                                <div className="group">
                                    <label className="text-[10px] font-bold text-zinc-500 font-mono mb-1 block">BID_AMOUNT</label>
                                    <div className="relative flex">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-focus-within:bg-[#a3e635] transition-colors"></div>
                                        <div className="bg-zinc-900 border-t border-b border-zinc-800 p-3 text-zinc-500 font-mono text-xs select-none">$</div>
                                        <input type="text" placeholder="0.00" className="w-full bg-zinc-900/50 border-r border-t border-b border-zinc-800 p-3 text-white font-mono text-xs focus:outline-none focus:border-white transition-all placeholder:text-zinc-700" />
                                        <div className="bg-zinc-900 border-t border-b border-r border-zinc-800 p-3 text-zinc-500 font-mono text-xs select-none">USD</div>
                                    </div>
                                </div>

                                {/* Textarea */}
                                <div className="group">
                                    <label className="text-[10px] font-bold text-zinc-500 font-mono mb-1 block">MANIFEST_NOTES</label>
                                    <div className="relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-focus-within:bg-[#a3e635] transition-colors"></div>
                                        <textarea rows={3} className="w-full bg-zinc-900/50 border-r border-t border-b border-zinc-800 p-3 pl-4 text-white font-mono text-xs focus:outline-none focus:border-white focus:bg-zinc-900 transition-all placeholder:text-zinc-700 resize-none" placeholder="// Enter operational notes..."></textarea>
                                    </div>
                                </div>
                            </div>
                        </GlassTechCard>

                        {/* Toggles & Radio Cards */}
                        <GlassTechCard title="Selection_Logic" description="SWITCH_RADIO">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-3 border border-white/5 bg-black/40 rounded-sm">
                                    <label className="text-xs font-bold text-white font-mono">SECURE_MODE</label>
                                    <Switch.Root className="w-[36px] h-[20px] bg-zinc-900 rounded-full relative border border-zinc-700 data-[state=checked]:bg-[#a3e635] data-[state=checked]:border-[#a3e635] transition-colors">
                                        <Switch.Thumb className="block w-[16px] h-[16px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[16px]" />
                                    </Switch.Root>
                                </div>

                                <RadioGroup.Root defaultValue="standard" className="grid grid-cols-2 gap-4">
                                    <RadioGroup.Item value="standard" id="r1" className="group peer sr-only" />
                                    <Label.Root htmlFor="r1" className="p-4 border border-zinc-800 bg-zinc-900/50 rounded-sm cursor-pointer hover:border-zinc-600 peer-data-[state=checked]:border-[#a3e635] peer-data-[state=checked]:bg-[#a3e635]/5 transition-all">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-3 h-3 rounded-full border border-zinc-600 group-data-[state=checked]:border-[#a3e635] group-data-[state=checked]:bg-[#a3e635]"></div>
                                            <span className="text-xs font-bold text-white font-mono">STANDARD</span>
                                        </div>
                                        <p className="text-[10px] text-zinc-500 leading-tight">Basic throughput. <br />No priority.</p>
                                    </Label.Root>

                                    <RadioGroup.Item value="turbo" id="r2" className="group peer sr-only" />
                                    <Label.Root htmlFor="r2" className="p-4 border border-zinc-800 bg-zinc-900/50 rounded-sm cursor-pointer hover:border-zinc-600 peer-data-[state=checked]:border-[#a3e635] peer-data-[state=checked]:bg-[#a3e635]/5 transition-all">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-3 h-3 rounded-full border border-zinc-600 group-data-[state=checked]:border-[#a3e635] group-data-[state=checked]:bg-[#a3e635]"></div>
                                            <span className="text-xs font-bold text-white font-mono">TURBO</span>
                                        </div>
                                        <p className="text-[10px] text-zinc-500 leading-tight">High velocity. <br />Priority queue.</p>
                                    </Label.Root>
                                </RadioGroup.Root>
                            </div>
                        </GlassTechCard>

                        {/* File Upload */}
                        <GlassTechCard title="Data_Ingest" description="UPLOAD_ZONE">
                            <div className="border-2 border-dashed border-zinc-800 hover:border-[#a3e635] hover:bg-[#a3e635]/5 transition-all rounded-sm p-8 flex flex-col items-center justify-center text-center cursor-pointer group h-full">
                                <Upload className="w-8 h-8 text-zinc-600 group-hover:text-[#a3e635] mb-4 transition-colors" />
                                <h3 className="text-white font-bold font-display text-sm">DROP_ZONE</h3>
                                <p className="text-zinc-500 font-mono text-[10px] mt-1">
                                    Drag archives or <span className="text-[#a3e635] underline">browse system</span>
                                </p>
                            </div>
                        </GlassTechCard>
                    </div>
                </section>

                {/* LAB 2: STRUCTURE & NAV */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <h2 className="text-sm font-mono text-[#a3e635] uppercase tracking-widest">LAB_02: STRUCTURE & NAV</h2>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Accordion */}
                        <GlassTechCard title="Collapsible_Data" description="ACCORDION">
                            <Accordion.Root type="single" defaultValue="item-1" collapsible className="space-y-2">
                                <Accordion.Item value="item-1" className="bg-zinc-900/30 border border-white/5">
                                    <Accordion.Header>
                                        <Accordion.Trigger className="flex flex-1 items-center justify-between p-4 font-mono text-xs text-white hover:bg-white/5 transition-all group data-[state=open]:text-[#a3e635]">
                                            SYSTEM_LOGS_01
                                            <ChevronDown className="w-4 h-4 text-zinc-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="p-4 pt-0 text-zinc-400 text-[10px] font-mono leading-relaxed border-t border-white/5 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                                        &gt; Initializing core protocols...<br />
                                        &gt; Connection established.<br />
                                        &gt; Handshake complete.
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item value="item-2" className="bg-zinc-900/30 border border-white/5">
                                    <Accordion.Header>
                                        <Accordion.Trigger className="flex flex-1 items-center justify-between p-4 font-mono text-xs text-white hover:bg-white/5 transition-all group data-[state=open]:text-[#a3e635]">
                                            ERROR_REPORT
                                            <ChevronDown className="w-4 h-4 text-zinc-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="p-4 pt-0 text-zinc-400 text-[10px] font-mono leading-relaxed border-t border-white/5">
                                        [EMPTY_BUFFER]
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion.Root>
                        </GlassTechCard>

                        {/* Stepper (Vertical) */}
                        <GlassTechCard title="Sequence_Flow" description="STEPPER">
                            <div className="relative pl-4 space-y-8">
                                {/* Line */}
                                <div className="absolute top-2 bottom-2 left-[19px] w-px bg-zinc-800"></div>

                                {/* Step 1: Done */}
                                <div className="relative flex items-start gap-4">
                                    <div className="w-3 h-3 rounded-full bg-[#a3e635] ring-4 ring-black z-10 mt-1"></div>
                                    <div>
                                        <h4 className="text-xs font-bold text-[#a3e635] font-mono">INITIALIZATION</h4>
                                        <p className="text-[10px] text-zinc-500">Modules loaded successfully.</p>
                                    </div>
                                </div>

                                {/* Step 2: Active */}
                                <div className="relative flex items-start gap-4">
                                    <div className="w-3 h-3 rounded-full bg-white ring-4 ring-black z-10 mt-1 animate-pulse"></div>
                                    <div>
                                        <h4 className="text-xs font-bold text-white font-mono">DATA_SYNC</h4>
                                        <p className="text-[10px] text-zinc-400">Processing stream...</p>
                                    </div>
                                </div>

                                {/* Step 3: Pending */}
                                <div className="relative flex items-start gap-4">
                                    <div className="w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-black z-10 mt-1"></div>
                                    <div>
                                        <h4 className="text-xs font-bold text-zinc-600 font-mono">FINALIZE</h4>
                                        <p className="text-[10px] text-zinc-700">Waiting for sync.</p>
                                    </div>
                                </div>
                            </div>
                        </GlassTechCard>
                    </div>
                </section>

                {/* LAB 2.5: DATA DISPLAY (NEW) */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <h2 className="text-sm font-mono text-[#a3e635] uppercase tracking-widest">LAB_02.5: DATA DISPLAY</h2>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Description List */}
                        <GlassTechCard title="Tech_Specs" description="DL_LIST">
                            <dl className="grid grid-cols-3 gap-4 text-xs font-mono">
                                <dt className="text-zinc-500">VERSION</dt>
                                <dd className="col-span-2 text-white">v4.0.2_ALPHA</dd>

                                <dt className="text-zinc-500">RUNTIME</dt>
                                <dd className="col-span-2 text-white">Node.js v20.x</dd>

                                <dt className="text-zinc-500">STATUS</dt>
                                <dd className="col-span-2 text-[#a3e635]">OPERATIONAL</dd>

                                <dt className="text-zinc-500">HASH</dt>
                                <dd className="col-span-2 text-zinc-400 break-all">8f334a...29d0</dd>
                            </dl>
                        </GlassTechCard>

                        {/* Code Block */}
                        <GlassTechCard title="Source_Snippet" description="CODE_BLOCK">
                            <div className="relative bg-black border border-white/10 p-4 rounded-sm font-mono text-[10px] text-zinc-300 overflow-hidden">
                                <div className="absolute top-2 right-2 flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                                </div>
                                <pre className="mt-2">
                                    <span className="text-purple-400">function</span> <span className="text-blue-400">init</span>() {'{'}<br />
                                    &nbsp;&nbsp;<span className="text-[#a3e635]">return</span> <span className="text-orange-400">true</span>;<br />
                                    {'}'}
                                </pre>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <span className="px-1.5 py-0.5 border border-zinc-700 bg-zinc-900 rounded-[2px] text-[10px] font-mono text-zinc-400">⌘K</span>
                                <span className="text-xs font-mono text-zinc-600">to search commands</span>
                            </div>
                        </GlassTechCard>
                    </div>
                </section>

                {/* LAB 3: FEEDBACK & STATUS */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <h2 className="text-sm font-mono text-[#a3e635] uppercase tracking-widest">LAB_03: FEEDBACK & STATUS</h2>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Badges */}
                        <GlassTechCard title="Status_Tokens" description="TAGS">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-2 py-1 bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-[10px] font-bold font-mono rounded-sm">VERIFIED</span>
                                <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold font-mono rounded-sm">PENDING</span>
                                <span className="px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold font-mono rounded-sm">FAILED</span>
                                <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-mono rounded-sm">DRAFT</span>
                            </div>
                        </GlassTechCard>

                        {/* Alerts */}
                        <GlassTechCard title="System_Alerts" description="CALLOUTS">
                            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-sm flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[10px] font-bold font-mono uppercase">CRITICAL_ERROR</h4>
                                </div>
                            </div>
                            <div className="mt-3 p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-sm flex items-start gap-2">
                                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[10px] font-bold font-mono uppercase">UPDATE_AVAILABLE</h4>
                                </div>
                            </div>
                        </GlassTechCard>

                        {/* Loaders & Skeletons */}
                        <GlassTechCard title="Pulse_States" description="SKELETONS">
                            <div className="space-y-6">
                                {/* Text Skeleton */}
                                <div className="space-y-2">
                                    <div className="h-2 bg-zinc-800 rounded-sm w-3/4 animate-pulse"></div>
                                    <div className="h-2 bg-zinc-800 rounded-sm w-1/2 animate-pulse"></div>
                                </div>
                                {/* Card Skeleton */}
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 animate-pulse border border-zinc-700"></div>
                                    <div className="space-y-2 flex-1">
                                        <div className="h-2 bg-zinc-800 rounded-sm w-full animate-pulse"></div>
                                        <div className="h-2 bg-zinc-800 rounded-sm w-2/3 animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Loader className="w-4 h-4 text-[#a3e635] animate-spin" />
                                    <span className="text-[10px] font-mono text-zinc-500">SYNCING_ASSETS...</span>
                                </div>
                            </div>
                        </GlassTechCard>
                    </div>
                </section>

                {/* LAB 4: OVERLAYS */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <h2 className="text-sm font-mono text-[#a3e635] uppercase tracking-widest">LAB_04: OVERLAYS</h2>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Popover */}
                        <GlassTechCard title="Context_Menu" description="POPOVER">
                            <Popover.Root>
                                <Popover.Trigger asChild>
                                    <button className="w-full py-3 bg-zinc-900 border border-zinc-800 hover:border-white transition-colors text-xs font-mono">
                                        OPEN_CONTEXT_MENU
                                    </button>
                                </Popover.Trigger>
                                <Popover.Portal>
                                    <Popover.Content className="w-48 bg-black border border-zinc-800 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 data-[side=bottom]:slide-in-from-top-2">
                                        <div className="space-y-1">
                                            <button className="w-full text-left px-2 py-1.5 hover:bg-zinc-900 text-xs text-zinc-400 hover:text-white font-mono rounded-sm flex items-center gap-2">
                                                <Edit3 className="w-3 h-3" /> EDIT_FILE
                                            </button>
                                            <button className="w-full text-left px-2 py-1.5 hover:bg-zinc-900 text-xs text-zinc-400 hover:text-white font-mono rounded-sm flex items-center gap-2">
                                                <Share2 className="w-3 h-3" /> SHARE_LINK
                                            </button>
                                            <div className="h-px bg-zinc-800 my-1"></div>
                                            <button className="w-full text-left px-2 py-1.5 hover:bg-red-900/20 text-xs text-red-500 font-mono rounded-sm flex items-center gap-2">
                                                <Trash2 className="w-3 h-3" /> DELETE
                                            </button>
                                        </div>
                                        <Popover.Arrow className="fill-zinc-800" />
                                    </Popover.Content>
                                </Popover.Portal>
                            </Popover.Root>
                        </GlassTechCard>

                        {/* Dialog Preview */}
                        <GlassTechCard title="Modal_Dialog" description="DIALOG">
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <button className="w-full py-3 bg-[#a3e635] text-black font-bold font-display tracking-wider hover:bg-[#a3e635]/90 transition-colors text-xs">
                                        TRIGGER_MODAL
                                    </button>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                                    <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border border-white/10 bg-black p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:rounded-lg">
                                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40"></div>
                                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40"></div>
                                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40"></div>
                                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40"></div>

                                        <Dialog.Title className="text-lg font-bold font-display text-white mb-2">System Override</Dialog.Title>
                                        <Dialog.Description className="text-sm text-zinc-400 font-mono mb-6">
                                            Override protocols initiated. Confirm authorization?
                                        </Dialog.Description>
                                        <div className="flex justify-end gap-4">
                                            <Dialog.Close asChild>
                                                <button className="px-4 py-2 text-zinc-400 font-mono text-xs hover:text-white">CANCEL</button>
                                            </Dialog.Close>
                                            <button className="px-4 py-2 bg-[#a3e635] text-black font-bold font-mono text-xs hover:bg-[#a3e635]/80">AUTHORIZE</button>
                                        </div>
                                        <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                                            <X className="h-4 w-4 text-white" />
                                            <span className="sr-only">Close</span>
                                        </Dialog.Close>
                                    </Dialog.Content>
                                </Dialog.Portal>
                            </Dialog.Root>
                        </GlassTechCard>

                        {/* Side Drawer (Sheet) */}
                        <GlassTechCard title="Side_Panel" description="DRAWER">
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <button className="w-full py-3 border border-zinc-700 text-zinc-300 font-mono text-xs hover:border-white hover:text-white transition-colors flex items-center justify-between px-4">
                                        <span>OPEN_DRAWER</span>
                                        <ChevronRight className="w-3 h-3" />
                                    </button>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                                    <Dialog.Content className="fixed right-0 top-0 h-full w-[400px] z-50 bg-[#050505] border-l border-white/10 p-8 shadow-2xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                                        {/* Tech Deco */}
                                        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#a3e635] to-transparent opacity-50"></div>

                                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                            <Dialog.Title className="text-xl font-display font-bold text-white">Config_Panel</Dialog.Title>
                                            <Dialog.Close className="text-zinc-500 hover:text-white transition-colors">
                                                <X className="w-5 h-5" />
                                            </Dialog.Close>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-mono text-zinc-500 uppercase">Profile_Name</label>
                                                <input type="text" value="System_Admin" className="w-full bg-zinc-900 border border-zinc-800 p-2 text-sm text-white font-mono focus:border-[#a3e635] focus:outline-none" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-mono text-zinc-500 uppercase">Permissions</label>
                                                <div className="flex gap-2">
                                                    <span className="px-2 py-1 bg-[#a3e635]/20 text-[#a3e635] text-xs font-bold font-mono border border-[#a3e635]/20">ROOT</span>
                                                    <span className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs font-mono border border-zinc-700">WRITE</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-8 left-8 right-8">
                                            <button className="w-full py-3 bg-[#a3e635] text-black font-bold font-mono text-xs hover:bg-[#a3e635]/90">SAVE_CHANGES</button>
                                        </div>
                                    </Dialog.Content>
                                </Dialog.Portal>
                            </Dialog.Root>
                        </GlassTechCard>
                    </div>

                </section>

            </div>
        </div>
    )
}
