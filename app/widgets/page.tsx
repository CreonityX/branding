"use client";

import { SubSidebar } from "../components/SubSidebar";
import { SectionHeader } from "../components/SectionHeader";
import { WidgetShell } from "../components/WidgetShell";
import { Wallet, CloudUpload, Layout, Users, Megaphone, Search, CheckSquare, Bell, Calendar, Bot } from "lucide-react";
import { RevenueChart } from "../components/widgets/RevenueChart";
import { UploadNexus } from "../components/widgets/UploadNexus";
import { GigBoard } from "../components/widgets/GigBoard";
import { CampaignCommand } from "../components/widgets/CampaignCommand";
import { TalentScout } from "../components/widgets/TalentScout";

export default function WidgetsPage() {
    return (
        <div className="min-h-screen bg-brand-black flex flex-col md:flex-row font-sans text-zinc-300 selection:bg-[#a3e635] selection:text-black">

            {/* Sidebar */}
            <SubSidebar
                title="WIDGETS"
                groups={[
                    {
                        title: "Creator Suite",
                        items: [
                            { id: "creator-suite", label: "Earnings & Upload" },
                            { id: "creator-suite", label: "Gig Board" }, // Both in same section for now
                        ]
                    },
                    {
                        title: "Brand Suite",
                        items: [
                            { id: "brand-suite", label: "Campaigns" },
                            { id: "brand-suite", label: "Talent Scout" },
                        ]
                    }
                ]}
            />

            {/* Main */}
            <main className="flex-1 p-8 md:p-16 overflow-y-auto h-screen scroll-smooth bg-zinc-950 bg-grid-zinc">
                <div className="max-w-7xl mx-auto space-y-20 pb-40">

                    {/* Header */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-4">
                            WIDGET_ECOSYSTEM
                        </h1>
                        <p className="text-zinc-500 font-mono max-w-2xl">
                            v13.0 // A comprehensive library of functional, responsive dashboard widgets for Creators and Brands.
                        </p>
                    </div>

                    {/* CREATOR SUITE */}
                    <section id="creator-suite">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-zinc-800" />
                            <span className="font-mono text-xs text-[#a3e635] tracking-widest">CREATOR_SUITE</span>
                            <div className="h-px flex-1 bg-zinc-800" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* 1. Earnings Hub */}
                            <WidgetShell title="Earnings_Hub" subtitle="Revenue Analytics" icon={Wallet} className="h-96">
                                <RevenueChart />
                            </WidgetShell>

                            {/* 2. Upload Nexus */}
                            <WidgetShell title="Upload_Nexus" subtitle="Media Processing" icon={CloudUpload} className="h-96">
                                <UploadNexus />
                            </WidgetShell>

                            {/* 3. Gig Board */}
                            <WidgetShell title="Gig_Board" subtitle="Active Opportunities" icon={Layout} className="h-96">
                                <GigBoard />
                            </WidgetShell>

                            {/* 4. Audience Pulse */}
                            <WidgetShell title="Audience_Pulse" subtitle="Real-time Demographics" icon={Users} className="h-96">
                                <div className="p-8 flex items-center justify-center h-full text-zinc-600 font-mono text-xs">
                                    [WIDGET_UNDER_CONSTRUCTION]
                                </div>
                            </WidgetShell>
                        </div>
                    </section>

                    {/* BRAND SUITE */}
                    <section id="brand-suite">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-zinc-800" />
                            <span className="font-mono text-xs text-purple-400 tracking-widest">BRAND_SUITE</span>
                            <div className="h-px flex-1 bg-zinc-800" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <WidgetShell title="Campaign_Command" subtitle="ROI Tracker" icon={Megaphone} className="h-96">
                                <CampaignCommand />
                            </WidgetShell>

                            <WidgetShell title="Talent_Scout" subtitle="Discover Creators" icon={Search} className="h-96">
                                <TalentScout />
                            </WidgetShell>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
