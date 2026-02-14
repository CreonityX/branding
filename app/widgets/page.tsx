"use client";

import { SubSidebar } from "../components/SubSidebar";
import { SectionHeader } from "../components/SectionHeader";
import { WidgetShell } from "../components/WidgetShell";
import { Wallet, CloudUpload, Layout, Users, Megaphone, Search, CheckSquare, Bell, Calendar, Bot, PieChart, User } from "lucide-react";

// FINANCIAL WIDGETS
import { TotalEarningsCard } from "../components/widgets/creator/financial/TotalEarningsCard";
import { EarningsChart_Pro } from "../components/widgets/creator/financial/EarningsChart_Pro";
import { RevenueBreakdown } from "../components/widgets/creator/financial/RevenueBreakdown";
import { TransactionLedger } from "../components/widgets/creator/financial/TransactionLedger";
import { PayoutManager } from "../components/widgets/creator/financial/PayoutManager";
import { SpendTracker } from "../components/widgets/brand/financial/SpendTracker";
import { ROICalculator } from "../components/widgets/brand/financial/ROICalculator";
import { InvoiceVault } from "../components/widgets/brand/financial/InvoiceVault";
import { BudgetAlerts } from "../components/widgets/brand/financial/BudgetAlerts";

// ANALYTICS WIDGETS
import { ViewershipInsights } from "../components/widgets/creator/analytics/ViewershipInsights";
import { AudienceMap } from "../components/widgets/creator/analytics/AudienceMap";
import { ContentTopList } from "../components/widgets/creator/analytics/ContentTopList";
import { SentimentTracker } from "../components/widgets/brand/analytics/SentimentTracker";
import { CampaignComparison } from "../components/widgets/brand/analytics/CampaignComparison";
import { DemographicsDeepDive } from "../components/widgets/brand/analytics/DemographicsDeepDive";

// COMMAND CENTER WIDGETS
import { GigKanban } from "../components/widgets/shared/command/GigKanban";
import { CalendarWidget } from "../components/widgets/shared/command/CalendarWidget";
import { CampaignWizard } from "../components/widgets/brand/command/CampaignWizard";
import { ApprovalQueue } from "../components/widgets/brand/command/ApprovalQueue";

// MARKETPLACE WIDGETS
import { TalentGrid } from "../components/widgets/brand/marketplace/TalentGrid";
import { GigFinder } from "../components/widgets/creator/marketplace/GigFinder";

// SYSTEM CORE WIDGETS
import { MessageTerminal } from "../components/widgets/shared/os/MessageTerminal";
import { NotificationCenter } from "../components/widgets/shared/os/NotificationCenter";
import { SettingsHub } from "../components/widgets/shared/os/SettingsHub";
import { UserProfileHeader } from "../components/widgets/shared/os/UserProfileHeader";
import { MediaUpload } from "../components/widgets/MediaUpload";

import { Briefcase } from "lucide-react";

export default function WidgetsPage() {
    return (
        <div className="min-h-screen bg-brand-black flex flex-col md:flex-row font-sans text-zinc-300 selection:bg-[#a3e635] selection:text-black">

            {/* Sidebar */}
            <SubSidebar
                title="WIDGETS"
                groups={[
                    {
                        title: "Financial Engine",
                        items: [
                            { id: "financial-core", label: "Creator Finance" },
                            { id: "brand-finance", label: "Brand Finance" },
                        ]
                    },
                    {
                        title: "Analytics Core",
                        items: [
                            { id: "analytics-core", label: "Performance Data" }
                        ]
                    },
                    {
                        title: "Command Center",
                        items: [
                            { id: "command-center", label: "Project Mgmt" }
                        ]
                    },
                    {
                        title: "Marketplace",
                        items: [
                            { id: "marketplace", label: "Discovery" }
                        ]
                    },
                    {
                        title: "System Core",
                        items: [
                            { id: "system-core", label: "OS Utilities" }
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
                            v17.0 // FINAL_BUILD. Comprehensive Dashboard OS.
                            <br />
                            <span className="text-[#a3e635]">ALL SYSTEMS OPERATIONAL.</span>
                        </p>
                    </div>

                    {/* FINANCIAL ENGINE */}
                    <section id="financial-core">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-zinc-800" />
                            <span className="font-mono text-xs text-[#a3e635] tracking-widest">CREATOR_FINANCE_CORE</span>
                            <div className="h-px flex-1 bg-zinc-800" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <WidgetShell title="Total_Earnings" subtitle="Lifetime Revenue" icon={Wallet} className="h-80">
                                <TotalEarningsCard />
                            </WidgetShell>

                            <WidgetShell title="Revenue_Analytics" subtitle="Interactive History" icon={Wallet} className="h-80 col-span-1 lg:col-span-2">
                                <EarningsChart_Pro />
                            </WidgetShell>

                            <WidgetShell title="Income_Sources" subtitle="Revenue Split" icon={PieChart} className="h-96">
                                <RevenueBreakdown />
                            </WidgetShell>

                            <WidgetShell title="Transaction_Ledger" subtitle="Activity Log" icon={CheckSquare} className="h-96 lg:col-span-2">
                                <TransactionLedger />
                            </WidgetShell>

                            <WidgetShell title="Payout_Methods" subtitle="Configuration" icon={Wallet} className="h-auto">
                                <PayoutManager />
                            </WidgetShell>
                        </div>
                    </section>

                    <section id="brand-finance">
                        <div className="flex items-center gap-4 mb-8 pt-12">
                            <h2 className="text-2xl font-bold font-display text-white tracking-tight">BRAND_FINANCE</h2>
                            <div className="h-px bg-zinc-800 flex-1" />
                            <span className="text-xs font-mono text-[#a3e635]">BUDGET_CONTROL_ALGORITHMS_ACTIVE</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <WidgetShell title="Spend_Tracker" subtitle="Budget Control" icon={Wallet} className="h-96 lg:col-span-2">
                                <SpendTracker />
                            </WidgetShell>
                            <WidgetShell title="ROI_Simulator" subtitle="Projection Engine" icon={Wallet} className="h-96">
                                <ROICalculator />
                            </WidgetShell>
                            <div className="space-y-8 flex flex-col h-96">
                                <WidgetShell title="Budget_Alerts" subtitle="Critical Warnings" icon={Bot} className="flex-1" indicatorState="error">
                                    <BudgetAlerts />
                                </WidgetShell>
                                <WidgetShell title="Invoice_Vault" subtitle="Billing History" icon={CheckSquare} className="flex-1">
                                    <InvoiceVault />
                                </WidgetShell>
                            </div>
                        </div>
                    </section>

                    <section id="analytics-core">
                        <div className="flex items-center gap-4 mb-8 pt-12">
                            <h2 className="text-2xl font-bold font-display text-white tracking-tight">ANALYTICS_CORE</h2>
                            <div className="h-px bg-zinc-800 flex-1" />
                            <span className="text-xs font-mono text-blue-400">DATA_V12.0_ONLINE</span>
                        </div>

                        {/* Creator Analytics Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            <WidgetShell title="Viewership_Insights" subtitle="Growth Telemetry" icon={Layout} className="h-80 lg:col-span-2">
                                <ViewershipInsights />
                            </WidgetShell>
                            <WidgetShell title="Audience_Map" subtitle="Global Reach" icon={Users} className="h-80">
                                <AudienceMap />
                            </WidgetShell>
                            <WidgetShell title="Top_Content" subtitle="Performance Rank" icon={Megaphone} className="h-80">
                                <ContentTopList />
                            </WidgetShell>
                        </div>

                        {/* Brand Analytics Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <WidgetShell title="Sentiment_Tracker" subtitle="Brand Health" icon={Bot} className="h-80">
                                <SentimentTracker />
                            </WidgetShell>
                            <WidgetShell title="Campaign_VS" subtitle="Quarterly Compare" icon={Layout} className="h-80">
                                <CampaignComparison />
                            </WidgetShell>
                            <WidgetShell title="Demographics" subtitle="Audience DNA" icon={Users} className="h-80">
                                <DemographicsDeepDive />
                            </WidgetShell>
                        </div>
                    </section>

                    <section id="command-center">
                        <div className="flex items-center gap-4 mb-8 pt-12">
                            <h2 className="text-2xl font-bold font-display text-white tracking-tight">COMMAND_CENTER</h2>
                            <div className="h-px bg-zinc-800 flex-1" />
                            <span className="text-xs font-mono text-indigo-400">OPS_LEVEL_5</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {/* Project Management */}
                            <WidgetShell title="Gig_Kanban" subtitle="Project Status" icon={Layout} className="h-96 xl:col-span-2">
                                <GigKanban />
                            </WidgetShell>

                            <WidgetShell title="Ops_Calendar" subtitle="Schedule & Deadlines" icon={Calendar} className="h-96">
                                <CalendarWidget />
                            </WidgetShell>

                            {/* Workflows */}
                            <WidgetShell title="Campaign_Wizard" subtitle="New Deployment" icon={Megaphone} className="h-96">
                                <CampaignWizard />
                            </WidgetShell>

                            <WidgetShell title="Approval_Queue" subtitle="Content Review" icon={CheckSquare} className="h-96 xl:col-span-2">
                                <ApprovalQueue />
                            </WidgetShell>
                        </div>
                    </section>

                    <section id="marketplace">
                        <div className="flex items-center gap-4 mb-8 pt-12">
                            <h2 className="text-2xl font-bold font-display text-white tracking-tight">MARKETPLACE</h2>
                            <div className="h-px bg-zinc-800 flex-1" />
                            <span className="text-xs font-mono text-purple-400">CONNECT_NODES_ACTIVE</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <WidgetShell title="Talent_Grid" subtitle="Discover Creators" icon={Search} className="h-[500px]">
                                <TalentGrid />
                            </WidgetShell>

                            <WidgetShell title="Gig_Finder" subtitle="Active Opportunities" icon={Briefcase} className="h-[500px]">
                                <GigFinder />
                            </WidgetShell>
                        </div>
                    </section>

                    <section id="system-core">
                        <div className="flex items-center gap-4 mb-8 pt-12">
                            <h2 className="text-2xl font-bold font-display text-white tracking-tight">SYSTEM_CORE</h2>
                            <div className="h-px bg-zinc-800 flex-1" />
                            <span className="text-xs font-mono text-zinc-500">OS_UTILITY_RUNNING</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Row 1: Profile & Upload */}
                            <WidgetShell title="User_Identity" subtitle="Profile Stats" icon={User} className="h-[280px]">
                                <UserProfileHeader />
                            </WidgetShell>

                            <WidgetShell title="Upload_Nexus" subtitle="Asset Ingest" icon={CloudUpload} className="h-[280px]">
                                <MediaUpload />
                            </WidgetShell>

                            <div className="flex flex-col h-[280px]">
                                <WidgetShell title="Config_Hub" subtitle="User Preferences" icon={Users} className="flex-1">
                                    <SettingsHub />
                                </WidgetShell>
                            </div>

                            {/* Row 2: Communication */}
                            <WidgetShell title="Terminal_Link" subtitle="Encrypted Chat" icon={Search} className="h-[400px] lg:col-span-2">
                                <MessageTerminal />
                            </WidgetShell>

                            <WidgetShell title="Alert_Stream" subtitle="Live Feed" icon={Bell} className="h-[400px]">
                                <NotificationCenter />
                            </WidgetShell>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
