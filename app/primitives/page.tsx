"use client";

import Link from "next/link";
import {
    ArrowLeft, Terminal, LayoutGrid, Type, Palette, Component, Cuboid, ArrowRight, Bot, Copy,
    Activity, Zap, Search, Filter, Sliders, Plus, Minus, X, Check, Upload, Download,
    Share2, Edit3, Trash2, Archive, Loader, AlertTriangle, CheckCircle, Info, HelpCircle,
    Bell, Settings, User, LogOut, ChevronRight, ChevronLeft, ChevronDown, FileText, Code,
    Command, CreditCard, Mail, Phone, Globe, Calendar as CalendarIcon, Clock, Hash,
    Eye, EyeOff, MoreHorizontal, MoreVertical, Menu, List, Grid, Image as ImageIcon,
    Video, Music, Mic, MapPin, Lock, Unlock, RefreshCw, Maximize2, Minimize2,
    ExternalLink, AlertCircle, XCircle, CheckSquare, Square, ToggleLeft, ToggleRight,
    MousePointer, Move, GripVertical, GripHorizontal
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
import * as Select from '@radix-ui/react-select';
import * as Avatar from '@radix-ui/react-avatar';
import * as Toast from '@radix-ui/react-toast';
import { GlassTechCard } from "../components/GlassTechCard";
import { useState } from "react";

export default function PrimitivesPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [toastOpen, setToastOpen] = useState(false);

    return (
        <Toast.Provider swipeDirection="right">
            <div className="min-h-screen bg-brand-black font-sans text-zinc-300 selection:bg-[#a3e635] selection:text-black p-8 md:p-16">
                <div className="max-w-7xl mx-auto space-y-16">

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
                                The comprehensive atomic inventory.
                                <br /><span className="text-[#a3e635] font-mono text-xs">v10.4_COMPLETE_SET</span>
                            </p>
                        </div>
                    </header>

                    {/* SECTION 1: FORM CONTROLS */}
                    <section className="space-y-8">
                        <SectionHeader title="01_FORM_CONTROLS" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Text Inputs */}
                            <GlassTechCard title="Text_Input" description="BASIC_FIELDS">
                                <div className="space-y-4">
                                    <Input placeholder="Text Input..." icon={<Type className="w-4 h-4" />} />
                                    <Input placeholder="Email Address..." type="email" icon={<Mail className="w-4 h-4" />} />
                                    <Input placeholder="Password..." type="password" icon={<Lock className="w-4 h-4" />} />
                                    <Input placeholder="Search query..." icon={<Search className="w-4 h-4" />} />
                                </div>
                            </GlassTechCard>

                            {/* Numeric & Specialized */}
                            <GlassTechCard title="Structured_Data" description="SPECIALIZED">
                                <div className="space-y-4">
                                    <Input placeholder="12345" type="number" icon={<Hash className="w-4 h-4" />} label="QUANTITY" />
                                    <Input placeholder="+1 (555) 000-0000" type="tel" icon={<Phone className="w-4 h-4" />} label="CONTACT" />
                                    <Input placeholder="https://" type="url" icon={<Globe className="w-4 h-4" />} label="ENDPOINT" />
                                </div>
                            </GlassTechCard>

                            {/* Textarea & Code */}
                            <GlassTechCard title="Long_Form" description="TEXT_AREAS">
                                <div className="space-y-4">
                                    <div className="group">
                                        <label className="text-[10px] font-bold text-zinc-500 font-mono mb-1 block">BIO</label>
                                        <div className="relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-focus-within:bg-[#a3e635] transition-colors"></div>
                                            <textarea rows={3} className="w-full bg-zinc-900/50 border-r border-t border-b border-zinc-800 p-3 pl-4 text-white font-mono text-xs focus:outline-none focus:border-white focus:bg-zinc-900 transition-all placeholder:text-zinc-700 resize-none" placeholder="// User bio..."></textarea>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="text-[10px] font-bold text-zinc-500 font-mono mb-1 block">CONFIG_JSON</label>
                                        <div className="relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-focus-within:bg-[#a3e635] transition-colors"></div>
                                            <textarea rows={3} className="w-full bg-black border-r border-t border-b border-zinc-800 p-3 pl-4 text-[#a3e635] font-mono text-xs focus:outline-none focus:border-white transition-all placeholder:text-zinc-800 resize-none" placeholder="{ 'sys': true }"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </GlassTechCard>

                            {/* Selects & Dropdowns */}
                            <GlassTechCard title="Selection" description="DROPDOWNS">
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-zinc-500 font-mono">MODEL</label>
                                        <Select.Root>
                                            <Select.Trigger className="w-full inline-flex items-center justify-between bg-zinc-900/50 border border-zinc-800 px-3 py-2 text-xs font-mono text-white hover:border-zinc-600 focus:border-[#a3e635] outline-none transition-colors group">
                                                <Select.Value placeholder="Select Model..." />
                                                <Select.Icon>
                                                    <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                                                </Select.Icon>
                                            </Select.Trigger>
                                            <Select.Portal>
                                                <Select.Content className="overflow-hidden bg-black border border-white/10 shadow-xl z-50">
                                                    <Select.Viewport className="p-1">
                                                        <SelectItem value="gpt-4">GPT-4_TURBO</SelectItem>
                                                        <SelectItem value="claude-3">CLAUDE_3_OPUS</SelectItem>
                                                        <SelectItem value="gemini-1.5">GEMINI_1.5_PRO</SelectItem>
                                                    </Select.Viewport>
                                                </Select.Content>
                                            </Select.Portal>
                                        </Select.Root>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-zinc-500 font-mono">REGION</label>
                                        <Select.Root>
                                            <Select.Trigger className="w-full inline-flex items-center justify-between bg-zinc-900/50 border border-zinc-800 px-3 py-2 text-xs font-mono text-white hover:border-zinc-600 focus:border-[#a3e635] outline-none transition-colors group">
                                                <Select.Value placeholder="Select Region..." />
                                                <Select.Icon>
                                                    <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                                                </Select.Icon>
                                            </Select.Trigger>
                                            <Select.Portal>
                                                <Select.Content className="overflow-hidden bg-black border border-white/10 shadow-xl z-50">
                                                    <Select.Viewport className="p-1">
                                                        <SelectItem value="us-east">US_EAST_N.VIRGINIA</SelectItem>
                                                        <SelectItem value="eu-west">EU_WEST_IRELAND</SelectItem>
                                                        <SelectItem value="ap-south">AP_SOUTH_MUMBAI</SelectItem>
                                                    </Select.Viewport>
                                                </Select.Content>
                                            </Select.Portal>
                                        </Select.Root>
                                    </div>
                                </div>
                            </GlassTechCard>

                            {/* Toggles & Checks */}
                            <GlassTechCard title="Booleans" description="TOGGLES_CHECKS">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-mono text-zinc-400">ENCRYPTION</label>
                                        <Switch.Root className="w-[36px] h-[20px] bg-zinc-900 rounded-full relative border border-zinc-700 data-[state=checked]:bg-[#a3e635] data-[state=checked]:border-[#a3e635] transition-colors">
                                            <Switch.Thumb className="block w-[16px] h-[16px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[16px]" />
                                        </Switch.Root>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-mono text-zinc-400">AUTO_SAVE</label>
                                        <Switch.Root className="w-[36px] h-[20px] bg-zinc-900 rounded-full relative border border-zinc-700 data-[state=checked]:bg-[#a3e635] data-[state=checked]:border-[#a3e635] transition-colors">
                                            <Switch.Thumb className="block w-[16px] h-[16px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[16px]" />
                                        </Switch.Root>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <Checkbox.Root className="flex h-5 w-5 appearance-none items-center justify-center rounded-[2px] border border-zinc-700 bg-zinc-900 outline-none hover:border-white data-[state=checked]:bg-[#a3e635] data-[state=checked]:text-black data-[state=checked]:border-[#a3e635]" id="c1">
                                            <Checkbox.Indicator>
                                                <Check className="w-3.5 h-3.5" />
                                            </Checkbox.Indicator>
                                        </Checkbox.Root>
                                        <label className="text-xs font-mono text-zinc-400" htmlFor="c1">AGREE_TO_TERMS</label>
                                    </div>
                                </div>
                            </GlassTechCard>

                            {/* Sliders & Range */}
                            <GlassTechCard title="Range" description="SLIDERS">
                                <div className="space-y-6 pt-2">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                                            <span>OPACITY</span>
                                            <span>85%</span>
                                        </div>
                                        <Slider.Root className="relative flex items-center select-none touch-none w-full h-5" defaultValue={[85]} max={100} step={1}>
                                            <Slider.Track className="bg-zinc-800 relative grow rounded-full h-[2px]">
                                                <Slider.Range className="absolute bg-[#a3e635] rounded-full h-full" />
                                            </Slider.Track>
                                            <Slider.Thumb className="block w-4 h-4 bg-black border border-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.3)] rounded-full hover:scale-110 focus:outline-none transition-transform" />
                                        </Slider.Root>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                                            <span>FREQUENCY</span>
                                            <span>2.4 GHz</span>
                                        </div>
                                        <Slider.Root className="relative flex items-center select-none touch-none w-full h-5" defaultValue={[40]} max={100} step={1}>
                                            <Slider.Track className="bg-zinc-800 relative grow rounded-full h-[2px]">
                                                <Slider.Range className="absolute bg-white rounded-full h-full" />
                                            </Slider.Track>
                                            <Slider.Thumb className="block w-4 h-4 bg-zinc-900 border border-white shadow-xl rounded-full hover:scale-110 focus:outline-none transition-transform" />
                                        </Slider.Root>
                                    </div>
                                </div>
                            </GlassTechCard>

                            {/* Specialized Pickers */}
                            <GlassTechCard title="Pickers" description="DATE_COLOR_FILE">
                                <div className="space-y-3">
                                    {/* Date */}
                                    <button className="w-full flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 p-2.5 rounded-sm hover:border-zinc-600 transition-colors group">
                                        <CalendarIcon className="w-4 h-4 text-zinc-600 group-hover:text-[#a3e635]" />
                                        <span className="text-xs font-mono text-zinc-400 group-hover:text-white">SELECT_DATE</span>
                                    </button>

                                    {/* Color */}
                                    <div className="flex items-center gap-2 p-2.5 border border-zinc-800 rounded-sm bg-zinc-900/30">
                                        <div className="w-4 h-4 rounded-full bg-[#a3e635] border border-white/20"></div>
                                        <span className="text-xs font-mono text-zinc-400 flex-1">#A3E635</span>
                                        <RefreshCw className="w-3 h-3 text-zinc-600 hover:text-white cursor-pointer" />
                                    </div>

                                    {/* File */}
                                    <div className="relative border border-dashed border-zinc-700 bg-zinc-900/20 p-4 text-center rounded-sm hover:bg-zinc-900/40 hover:border-zinc-500 transition-all cursor-pointer">
                                        <Upload className="w-4 h-4 text-zinc-500 mx-auto mb-2" />
                                        <p className="text-[10px] font-mono text-zinc-600">UPLOAD_ASSET</p>
                                    </div>
                                </div>
                            </GlassTechCard>
                        </div>
                    </section>

                    {/* SECTION 2: NAVIGATION */}
                    <section className="space-y-8">
                        <SectionHeader title="02_NAVIGATION" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Breadcrumbs */}
                            <GlassTechCard title="Path" description="BREADCRUMBS">
                                <nav className="flex items-center text-xs font-mono text-zinc-500">
                                    <span className="hover:text-white cursor-pointer transition-colors">HOME</span>
                                    <ChevronRight className="w-3 h-3 mx-1" />
                                    <span className="hover:text-white cursor-pointer transition-colors">SYSTEM</span>
                                    <ChevronRight className="w-3 h-3 mx-1" />
                                    <span className="text-[#a3e635]">CONFIG</span>
                                </nav>
                                <div className="mt-4 border-t border-dashed border-white/10 pt-4">
                                    <nav className="flex items-center text-xs font-mono text-zinc-500">
                                        <span className="hover:text-white cursor-pointer transition-colors"><Settings className="w-3 h-3" /></span>
                                        <span className="mx-2">/</span>
                                        <span className="hover:text-white cursor-pointer transition-colors">USERS</span>
                                        <span className="mx-2">/</span>
                                        <span className="text-white">ADMIN</span>
                                    </nav>
                                </div>
                            </GlassTechCard>

                            {/* Tabs */}
                            <GlassTechCard title="Segments" description="TABS">
                                <Tabs.Root defaultValue="tab1" className="w-full">
                                    <Tabs.List className="flex border-b border-white/10" aria-label="Manage your account">
                                        <Tabs.Trigger className="px-4 py-2 text-xs font-mono text-zinc-500 hover:text-white data-[state=active]:text-[#a3e635] data-[state=active]:border-b-2 data-[state=active]:border-[#a3e635] transition-all" value="tab1">
                                            OVERVIEW
                                        </Tabs.Trigger>
                                        <Tabs.Trigger className="px-4 py-2 text-xs font-mono text-zinc-500 hover:text-white data-[state=active]:text-[#a3e635] data-[state=active]:border-b-2 data-[state=active]:border-[#a3e635] transition-all" value="tab2">
                                            METRICS
                                        </Tabs.Trigger>
                                        <Tabs.Trigger className="px-4 py-2 text-xs font-mono text-zinc-500 hover:text-white data-[state=active]:text-[#a3e635] data-[state=active]:border-b-2 data-[state=active]:border-[#a3e635] transition-all" value="tab3">
                                            LOGS
                                        </Tabs.Trigger>
                                    </Tabs.List>
                                    <Tabs.Content className="py-4 text-xs font-mono text-zinc-400" value="tab1">
                                        System overview content...
                                    </Tabs.Content>
                                    <Tabs.Content className="py-4 text-xs font-mono text-zinc-400" value="tab2">
                                        Performance metrics content...
                                    </Tabs.Content>
                                    <Tabs.Content className="py-4 text-xs font-mono text-zinc-400" value="tab3">
                                        System logs content...
                                    </Tabs.Content>
                                </Tabs.Root>
                            </GlassTechCard>

                            {/* Pagination */}
                            <GlassTechCard title="Pagination" description="PIGINATION">
                                <div className="flex items-center justify-between font-mono text-xs">
                                    <button className="p-2 border border-zinc-800 hover:border-white text-zinc-500 hover:text-white transition-colors rounded-sm disabled:opacity-50">
                                        <ChevronLeft className="w-3 h-3" />
                                    </button>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 flex items-center justify-center border border-[#a3e635] bg-[#a3e635]/10 text-[#a3e635] rounded-sm">1</button>
                                        <button className="w-8 h-8 flex items-center justify-center border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white rounded-sm transition-colors">2</button>
                                        <button className="w-8 h-8 flex items-center justify-center border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white rounded-sm transition-colors">3</button>
                                        <span className="flex items-end justify-center pb-2 text-zinc-600">...</span>
                                        <button className="w-8 h-8 flex items-center justify-center border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white rounded-sm transition-colors">9</button>
                                    </div>
                                    <button className="p-2 border border-zinc-800 hover:border-white text-zinc-500 hover:text-white transition-colors rounded-sm">
                                        <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </GlassTechCard>
                        </div>
                    </section>

                    {/* SECTION 3: DISPLAY & CONTENT */}
                    <section className="space-y-8">
                        <SectionHeader title="03_DISPLAY_&_CONTENT" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Typography */}
                            <GlassTechCard title="Typography" description="TEXT_STACK">
                                <div className="space-y-4">
                                    <div>
                                        <h1 className="text-2xl font-display font-bold text-white">Heading 1</h1>
                                        <p className="text-[10px] text-zinc-500 font-mono">Display Bold 24px</p>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-display font-bold text-white">Heading 2</h2>
                                        <p className="text-[10px] text-zinc-500 font-mono">Display Bold 18px</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono font-bold text-[#a3e635]">Heading 3</h3>
                                        <p className="text-[10px] text-zinc-500 font-mono">Mono Bold 14px</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-300 leading-relaxed">
                                            Body text paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <span className="text-[#a3e635] underline decoration-dotted ml-1 cursor-pointer">Link style</span>
                                        </p>
                                        <p className="text-[10px] text-zinc-500 font-mono mt-1">Inter Regular 12px</p>
                                    </div>
                                </div>
                            </GlassTechCard>

                            {/* Lists */}
                            <GlassTechCard title="Lists" description="DATA_LISTS">
                                <div className="space-y-6">
                                    <ul className="list-disc list-inside text-xs text-zinc-400 font-mono space-y-1">
                                        <li>Unordered Item 01</li>
                                        <li>Unordered Item 02</li>
                                        <li className="text-[#a3e635]">Active Item 03</li>
                                    </ul>
                                    <ol className="list-decimal list-inside text-xs text-zinc-400 font-mono space-y-1">
                                        <li>Ordered Step 01</li>
                                        <li>Ordered Step 02</li>
                                        <li>Ordered Step 03</li>
                                    </ol>
                                    <dl className="grid grid-cols-3 gap-y-2 text-xs font-mono">
                                        <dt className="text-zinc-500">KEY_01</dt>
                                        <dd className="col-span-2 text-white">Value Alpha</dd>
                                        <dt className="text-zinc-500">KEY_02</dt>
                                        <dd className="col-span-2 text-white">Value Beta</dd>
                                    </dl>
                                </div>
                            </GlassTechCard>

                            {/* Code & Blockquote */}
                            <GlassTechCard title="Rich_Content" description="CODE_QUOTE">
                                <div className="space-y-4">
                                    <blockquote className="pl-3 border-l-2 border-[#a3e635] italic text-zinc-400 text-xs">
                                        "The interface is the system. There is no distinction."
                                    </blockquote>

                                    <div className="bg-black border border-zinc-800 p-3 rounded-sm font-mono text-[10px] text-zinc-300">
                                        <span className="text-purple-400">const</span> <span className="text-blue-400">init</span> = () ={'>'} {'{'}<br />
                                        &nbsp;&nbsp;<span className="text-green-400">console</span>.log(<span className="text-yellow-400">'Ready'</span>);<br />
                                        {'}'}
                                    </div>

                                    <div className="flex gap-2 text-[10px] font-mono">
                                        <span className="px-1.5 py-0.5 border border-zinc-700 bg-zinc-900 rounded-[2px] text-zinc-400">CTRL</span>
                                        <span>+</span>
                                        <span className="px-1.5 py-0.5 border border-zinc-700 bg-zinc-900 rounded-[2px] text-zinc-400">K</span>
                                    </div>
                                </div>
                            </GlassTechCard>
                        </div>
                    </section>

                    {/* SECTION 4: FEEDBACK & OVERLAYS */}
                    <section className="space-y-8">
                        <SectionHeader title="04_FEEDBACK_&_OVERLAYS" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Toasts & Alerts */}
                            <GlassTechCard title="Notifications" description="TOASTS">
                                <div className="space-y-4">
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-sm flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-[10px] font-bold font-mono uppercase">ERROR_CRITICAL</h4>
                                            <p className="text-[10px] text-red-400/70">Connection timed out.</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setToastOpen(true)}
                                        className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono rounded-sm transition-colors border border-zinc-700 hover:border-zinc-500"
                                    >
                                        TRIGGER_TOAST
                                    </button>
                                </div>
                            </GlassTechCard>

                            {/* Progress & Loading */}
                            <GlassTechCard title="Progress" description="LOADERS">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                                            <span>UPLOADING</span>
                                            <span>45%</span>
                                        </div>
                                        <Progress.Root className="relative overflow-hidden bg-zinc-800 rounded-full w-full h-[3px]" style={{ transform: 'translateZ(0)' }}>
                                            <Progress.Indicator className="bg-[#a3e635] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]" style={{ transform: `translateX(-${100 - 45}%)` }} />
                                        </Progress.Root>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Loader className="w-5 h-5 text-[#a3e635] animate-spin" />
                                        <span className="text-xs font-mono text-zinc-500">PROCESSING...</span>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="h-2 bg-zinc-800 rounded-sm w-3/4 animate-pulse"></div>
                                        <div className="h-2 bg-zinc-800 rounded-sm w-1/2 animate-pulse"></div>
                                    </div>
                                </div>
                            </GlassTechCard>

                            {/* Tooltips & Popovers */}
                            <GlassTechCard title="Context" description="TOOLTIPS">
                                <div className="flex justify-center gap-4 py-4">
                                    <Tooltip.Provider>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-600 transition-all">
                                                    <Info className="w-4 h-4 text-zinc-400" />
                                                </button>
                                            </Tooltip.Trigger>
                                            <Tooltip.Portal>
                                                <Tooltip.Content className="px-3 py-1.5 bg-black border border-zinc-700 text-zinc-300 text-[10px] font-mono shadow-xl rounded-sm mb-2" sideOffset={5}>
                                                    INFO_PANEL_01
                                                    <Tooltip.Arrow className="fill-zinc-700" />
                                                </Tooltip.Content>
                                            </Tooltip.Portal>
                                        </Tooltip.Root>
                                    </Tooltip.Provider>

                                    <Popover.Root>
                                        <Popover.Trigger asChild>
                                            <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-600 transition-all">
                                                <MoreHorizontal className="w-4 h-4 text-zinc-400" />
                                            </button>
                                        </Popover.Trigger>
                                        <Popover.Portal>
                                            <Popover.Content className="w-40 bg-zinc-950 border border-zinc-800 shadow-2xl p-1 rounded-sm z-50">
                                                <div className="flex flex-col gap-0.5">
                                                    <button className="text-left px-2 py-1.5 text-[10px] text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-[2px] font-mono">VIEW_DETAILS</button>
                                                    <button className="text-left px-2 py-1.5 text-[10px] text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-[2px] font-mono">EXPORT_DATA</button>
                                                    <div className="h-px bg-zinc-800 my-1"></div>
                                                    <button className="text-left px-2 py-1.5 text-[10px] text-red-500 hover:bg-red-900/10 rounded-[2px] font-mono">DELETE</button>
                                                </div>
                                                <Popover.Arrow className="fill-zinc-800" />
                                            </Popover.Content>
                                        </Popover.Portal>
                                    </Popover.Root>
                                </div>
                            </GlassTechCard>
                        </div>
                    </section>

                    {/* SECTION 5: INTERACTIVE & DATA */}
                    <section className="space-y-8">
                        <SectionHeader title="05_INTERACTIVE_&_DATA" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Table */}
                            <GlassTechCard title="Tabular_Data" description="DATA_GRID">
                                <div className="border border-zinc-800 rounded-sm overflow-hidden">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-zinc-900/50 border-b border-zinc-800">
                                                <th className="p-3 text-[10px] font-mono text-zinc-500 font-normal">ID</th>
                                                <th className="p-3 text-[10px] font-mono text-zinc-500 font-normal">STATUS</th>
                                                <th className="p-3 text-[10px] font-mono text-zinc-500 font-normal text-right">VALUE</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-xs font-mono">
                                            <tr className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
                                                <td className="p-3 text-white">#8821</td>
                                                <td className="p-3"><span className="text-[#a3e635]">ACTIVE</span></td>
                                                <td className="p-3 text-zinc-400 text-right">0.024 BTC</td>
                                            </tr>
                                            <tr className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
                                                <td className="p-3 text-white">#8822</td>
                                                <td className="p-3"><span className="text-yellow-500">PENDING</span></td>
                                                <td className="p-3 text-zinc-400 text-right">0.100 BTC</td>
                                            </tr>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="p-3 text-white">#8823</td>
                                                <td className="p-3"><span className="text-red-500">FAILED</span></td>
                                                <td className="p-3 text-zinc-400 text-right">0.000 BTC</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </GlassTechCard>

                            {/* Scroll Area & Tree */}
                            <GlassTechCard title="Structure" description="TREE_VIEW">
                                <ScrollArea.Root className="h-[200px] w-full overflow-hidden bg-zinc-900/20 border border-zinc-800 rounded-sm p-4">
                                    <ScrollArea.Viewport className="w-full h-full">
                                        <div className="space-y-3 font-mono text-xs">
                                            <div className="flex items-center gap-2 text-white">
                                                <ChevronDown className="w-3 h-3 text-zinc-500 my-auto" />
                                                <span className="text-[#a3e635]">ROOT_DIR</span>
                                            </div>
                                            <div className="pl-5 space-y-2 border-l border-zinc-800 ml-1.5">
                                                <div className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer group">
                                                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-white" />
                                                    <span>assets</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer group">
                                                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-white" />
                                                    <span>components</span>
                                                </div>
                                                <div className="pl-4 space-y-2 border-l border-zinc-800 ml-1.5">
                                                    <div className="flex items-center gap-2 text-zinc-500 hover:text-white cursor-pointer">
                                                        <FileText className="w-3 h-3" />
                                                        <span>Button.tsx</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-zinc-500 hover:text-white cursor-pointer">
                                                        <FileText className="w-3 h-3" />
                                                        <span>Input.tsx</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-zinc-500 hover:text-white cursor-pointer">
                                                    <FileText className="w-3 h-3" />
                                                    <span>package.json</span>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollArea.Viewport>
                                    <ScrollArea.Scrollbar className="flex select-none touch-none p-0.5 bg-zinc-900 transition-colors duration-[160ms] ease-out hover:bg-zinc-800 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5" orientation="vertical">
                                        <ScrollArea.Thumb className="flex-1 bg-zinc-700 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                                    </ScrollArea.Scrollbar>
                                </ScrollArea.Root>
                            </GlassTechCard>

                        </div>
                    </section>

                    {/* SECTION 6: STRUCTURE & IDENTITY */}
                    <section className="space-y-8">
                        <SectionHeader title="06_STRUCTURE_&_IDENTITY" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Overlays: Dialog & Sheet */}
                            <GlassTechCard title="Overlays_II" description="MODAL_SHEET">
                                <div className="flex flex-col gap-4">
                                    <Dialog.Root>
                                        <Dialog.Trigger asChild>
                                            <button className="w-full py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono hover:bg-zinc-800 hover:border-zinc-600 transition-all rounded-sm">
                                                OPEN_MODAL
                                            </button>
                                        </Dialog.Trigger>
                                        <Dialog.Portal>
                                            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                                            <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-zinc-800 bg-black p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
                                                <div>
                                                    <Dialog.Title className="text-lg font-display font-bold text-white">SYSTEM_OVERRIDE</Dialog.Title>
                                                    <Dialog.Description className="text-xs font-mono text-zinc-400 mt-2">
                                                        Are you sure you want to override the safety protocols? This action cannot be undone.
                                                    </Dialog.Description>
                                                </div>
                                                <div className="flex justify-end gap-3 mt-4">
                                                    <Dialog.Close asChild>
                                                        <button className="px-4 py-2 bg-zinc-900 text-zinc-400 text-xs font-mono hover:text-white transition-colors rounded-sm">CANCEL</button>
                                                    </Dialog.Close>
                                                    <button className="px-4 py-2 bg-[#a3e635] text-black text-xs font-bold font-mono hover:bg-[#b0f545] transition-colors rounded-sm">CONFIRM</button>
                                                </div>
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>

                                    <Dialog.Root>
                                        <Dialog.Trigger asChild>
                                            <button className="w-full py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono hover:bg-zinc-800 hover:border-zinc-600 transition-all rounded-sm">
                                                OPEN_SHEET_DRAWER
                                            </button>
                                        </Dialog.Trigger>
                                        <Dialog.Portal>
                                            <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                                            <Dialog.Content className="fixed z-50 gap-4 bg-black p-6 shadow-2xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-3/4 border-l border-zinc-800 sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                                                <div className="flex flex-col h-full">
                                                    <div className="flex items-center justify-between mb-8">
                                                        <Dialog.Title className="text-lg font-display font-bold text-white">CONFIG_PANEL</Dialog.Title>
                                                        <Dialog.Close>
                                                            <X className="w-5 h-5 text-zinc-500 hover:text-white transition-colors" />
                                                        </Dialog.Close>
                                                    </div>
                                                    <div className="flex-1 border-t border-zinc-800 py-4 space-y-4">
                                                        <Input label="PARAMETER_A" placeholder="Value..." />
                                                        <Input label="PARAMETER_B" placeholder="Value..." />
                                                        <div className="flex items-center justify-between pt-4">
                                                            <span className="text-xs font-mono text-zinc-500">DEBUG_MODE</span>
                                                            <Switch.Root className="w-[36px] h-[20px] bg-zinc-900 rounded-full relative border border-zinc-700 data-[state=checked]:bg-[#a3e635] data-[state=checked]:border-[#a3e635] transition-colors">
                                                                <Switch.Thumb className="block w-[16px] h-[16px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[16px]" />
                                                            </Switch.Root>
                                                        </div>
                                                    </div>
                                                    <button className="w-full py-3 bg-[#a3e635] text-black font-bold font-mono text-xs rounded-sm mt-auto">SAVE_CHANGES</button>
                                                </div>
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>
                                </div>
                            </GlassTechCard>

                            {/* Identity: Avatar & Badge */}
                            <GlassTechCard title="Identity" description="AVATAR_BADGE">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle border border-zinc-700 bg-zinc-800">
                                            <Avatar.Image className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60" alt="User" />
                                            <Avatar.Fallback className="text-zinc-500 leading-1 flex h-full w-full items-center justify-center bg-zinc-800 text-[10px] font-mono font-bold" delayMs={600}>US</Avatar.Fallback>
                                        </Avatar.Root>
                                        <div>
                                            <div className="text-sm font-bold text-white">Cmdr. Shepard</div>
                                            <div className="text-[10px] text-zinc-500 font-mono">ALLIANCE_NAVY</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">DEFAULT</span>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-bold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20">SUCCESS</span>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-bold bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">WARNING</span>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-bold bg-red-500/10 text-red-500 border border-red-500/20">ERROR</span>
                                    </div>
                                </div>
                            </GlassTechCard>

                            {/* Accordion */}
                            <GlassTechCard title="Collapsible" description="ACCORDION">
                                <Accordion.Root type="single" defaultValue="item-1" collapsible className="w-full space-y-2">
                                    <Accordion.Item value="item-1" className="border border-zinc-800 rounded-sm overflow-hidden data-[state=open]:border-zinc-600 transition-colors">
                                        <Accordion.Header className="flex">
                                            <Accordion.Trigger className="flex flex-1 items-center justify-between bg-zinc-900/50 p-3 text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all group">
                                                <span>SYSTEM_LOGS</span>
                                                <ChevronDown className="w-3 h-3 text-zinc-500 transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden />
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className="text-zinc-400 bg-black p-3 text-[10px] font-mono data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                                            [2024-10-24 08:00:01] System boot sequence initiated.<br />
                                            [2024-10-24 08:00:02] Kernel loaded.<br />
                                            [2024-10-24 08:00:05] All services active.
                                        </Accordion.Content>
                                    </Accordion.Item>

                                    <Accordion.Item value="item-2" className="border border-zinc-800 rounded-sm overflow-hidden data-[state=open]:border-zinc-600 transition-colors">
                                        <Accordion.Header className="flex">
                                            <Accordion.Trigger className="flex flex-1 items-center justify-between bg-zinc-900/50 p-3 text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all group">
                                                <span>ERROR_HISTORY</span>
                                                <ChevronDown className="w-3 h-3 text-zinc-500 transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden />
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className="text-zinc-400 bg-black p-3 text-[10px] font-mono data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                                            No critical errors found in the last 24 hours.
                                        </Accordion.Content>
                                    </Accordion.Item>
                                </Accordion.Root>
                            </GlassTechCard>
                        </div>
                    </section>

                </div>
            </div>

            {/* Toasts Render */}
            <Toast.Root className="bg-black border border-white/10 p-4 shadow-xl rounded-sm grid grid-cols-[auto_max-content] gap-x-4 items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:animate-swipeOut" open={toastOpen} onOpenChange={setToastOpen}>
                <Toast.Title className="text-white text-xs font-bold font-mono">ACTION_COMPLETE</Toast.Title>
                <Toast.Description className="text-zinc-400 text-[10px] font-mono mt-1">
                    The requested operation finished successfully.
                </Toast.Description>
                <Toast.Action className="grid-area-[toast-action]" asChild altText="Goto schedule to undo">
                    <button className="text-[#a3e635] text-[10px] font-bold hover:underline">UNDO</button>
                </Toast.Action>
            </Toast.Root>
            <Toast.Viewport className="[--viewport-padding:25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[100] outline-none" />
        </Toast.Provider>
    );
}

// Helpers
function SectionHeader({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="h-px bg-white/10 flex-1"></div>
            <h2 className="text-sm font-mono text-[#a3e635] uppercase tracking-widest">{title}</h2>
            <div className="h-px bg-white/10 flex-1"></div>
        </div>
    );
}

function Input({ label, icon, ...props }: any) {
    return (
        <div className="group">
            {label && <label className="text-[10px] font-bold text-zinc-500 font-mono mb-1 block">{label}</label>}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-focus-within:bg-[#a3e635] transition-colors"></div>
                {icon && <div className="absolute left-3 top-3 text-zinc-600 group-focus-within:text-white transition-colors">{icon}</div>}
                <input
                    {...props}
                    className={`w-full bg-zinc-900/50 border-r border-t border-b border-zinc-800 p-3 ${icon ? 'pl-9' : 'pl-4'} text-white font-mono text-xs focus:outline-none focus:border-white focus:bg-zinc-900 transition-all placeholder:text-zinc-700`}
                />
            </div>
        </div>
    );
}

function SelectItem({ children, value, ...props }: any) {
    return (
        <Select.Item value={value} {...props} className="text-[10px] leading-none text-zinc-400 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-zinc-600 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-[#a3e635] data-[highlighted]:text-black cursor-pointer">
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Check className="w-3 h-3" />
            </Select.ItemIndicator>
        </Select.Item>
    );
}
