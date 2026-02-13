"use client";

import Link from "next/link";
import {
    ArrowLeft, Terminal, LayoutDashboard, Briefcase, MessageSquare, Wallet, Settings,
    Users, Calendar, BarChart3, Home, Bell, Search, Filter, Sliders, Plus, Minus,
    X, Check, ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Upload, Download,
    Share2, Copy, Edit3, Trash2, Archive, Image, Video, Mic, Music, File, FileText,
    Code, Link as LinkIcon, Folder, FolderOpen, AlertTriangle, CheckCircle2, Info,
    HelpCircle, Lock, Unlock, Shield, Zap, Loader2, DollarSign, CreditCard,
    TrendingUp, TrendingDown, Eye, EyeOff, Menu, MoreHorizontal, MoreVertical,
    LogOut, UserPlus, Phone, MapPin, Globe, Mail
} from "lucide-react";
import { TechIcon } from "../components/TechIcon";
import { SubSidebar } from "../components/SubSidebar";
import { SectionHeader } from "../components/SectionHeader";

export default function IconsPage() {
    const categories = [
        {
            title: "Navigation & Layout",
            id: "navigation",
            icons: [
                { icon: LayoutDashboard, label: "Dashboard" },
                { icon: Briefcase, label: "Projects" },
                { icon: MessageSquare, label: "Chat" },
                { icon: Wallet, label: "Finance" },
                { icon: Settings, label: "Config" },
                { icon: Users, label: "Team" },
                { icon: Calendar, label: "Schedule" },
                { icon: BarChart3, label: "Analytics" },
                { icon: Home, label: "Home" },
                { icon: Bell, label: "Notify" },
                { icon: Menu, label: "Menu" },
            ]
        },
        {
            title: "Actions & Utility",
            id: "actions",
            icons: [
                { icon: Plus, label: "Add" },
                { icon: Minus, label: "Remove" },
                { icon: X, label: "Close" },
                { icon: Check, label: "Confirm" },
                { icon: Search, label: "Search" },
                { icon: Filter, label: "Filter" },
                { icon: Sliders, label: "Adjust" },
                { icon: Edit3, label: "Edit" },
                { icon: Trash2, label: "Delete" },
                { icon: Archive, label: "Archive" },
                { icon: Copy, label: "Copy" },
                { icon: Share2, label: "Share" },
                { icon: Upload, label: "Upload" },
                { icon: Download, label: "Download" },
                { icon: LogOut, label: "Exit" },
            ]
        },
        {
            title: "Arrows & Chevrons",
            id: "arrows",
            icons: [
                { icon: ChevronRight, label: "Right" },
                { icon: ChevronLeft, label: "Left" },
                { icon: ChevronDown, label: "Down" },
                { icon: ChevronUp, label: "Up" },
                { icon: MoreHorizontal, label: "More H" },
                { icon: MoreVertical, label: "More V" },
                { icon: ArrowLeft, label: "Back" },
            ]
        },
        {
            title: "Media & Files",
            id: "media",
            icons: [
                { icon: Image, label: "Image" },
                { icon: Video, label: "Video" },
                { icon: Mic, label: "Audio" },
                { icon: Music, label: "Music" },
                { icon: File, label: "File" },
                { icon: FileText, label: "Document" },
                { icon: Code, label: "Code" },
                { icon: LinkIcon, label: "Link" },
                { icon: Folder, label: "Folder" },
                { icon: FolderOpen, label: "Open Dir" },
            ]
        },
        {
            title: "System & Status",
            id: "system",
            icons: [
                { icon: AlertTriangle, label: "Warning" },
                { icon: CheckCircle2, label: "Success" },
                { icon: Info, label: "Info" },
                { icon: HelpCircle, label: "Help" },
                { icon: Shield, label: "Secure" },
                { icon: Lock, label: "Locked" },
                { icon: Unlock, label: "Unlocked" },
                { icon: Zap, label: "Energy" },
                { icon: Loader2, label: "Loading" },
                { icon: Eye, label: "View" },
                { icon: EyeOff, label: "Hide" },
            ]
        },
        {
            title: "Finance & Commerce",
            id: "finance",
            icons: [
                { icon: DollarSign, label: "Dollar" },
                { icon: CreditCard, label: "Card" },
                { icon: TrendingUp, label: "Profit" },
                { icon: TrendingDown, label: "Loss" },
            ]
        },
        {
            title: "Contact & Social",
            id: "contact",
            icons: [
                { icon: Mail, label: "Email" },
                { icon: Phone, label: "Phone" },
                { icon: MapPin, label: "Location" },
                { icon: Globe, label: "Web" },
                { icon: UserPlus, label: "Add Usr" },
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-brand-black font-sans text-zinc-300 selection:bg-[#a3e635] selection:text-black flex flex-col md:flex-row">

            <SubSidebar
                title="ICONOGRAPHY"
                groups={[
                    {
                        title: "Categories",
                        items: categories.map(c => ({ id: c.id, label: c.title }))
                    }
                ]}
            />

            <main className="flex-1 p-8 md:p-16 overflow-y-auto h-screen scroll-smooth bg-zinc-950/50">
                <div className="max-w-7xl mx-auto space-y-12 pb-40">

                    {/* Header */}
                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                                ICONOGRAPHY_DB
                            </h1>
                            <p className="text-base text-zinc-400 mt-2 max-w-xl">
                                The complete glyph inventory for Creonity. All icons are rendered with `stroke-width={1.5}` for technical precision.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center gap-3">
                                <Terminal className="w-4 h-4 text-[#a3e635]" />
                                <span className="text-xs font-mono text-zinc-400">TOTAL_ASSETS: <span className="text-white">68</span></span>
                            </div>
                        </div>
                    </header>

                    {/* Categories */}
                    {categories.map((cat, catIndex) => (
                        <section key={cat.title} id={cat.id} className="space-y-6 scroll-mt-20">
                            <SectionHeader title={cat.title} />

                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                                {cat.icons.map((item, i) => (
                                    <TechIcon
                                        key={item.label}
                                        icon={item.icon}
                                        label={item.label}
                                        // Make a pseudo-unique ID 
                                        index={`${catIndex + 1}.${i + 1}`}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}

                </div>
            </main>
        </div>
    );
}
