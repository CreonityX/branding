"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SubSidebarProps {
    title: string;
    backHref?: string;
    backLabel?: string;
    groups: {
        title: string;
        items: { id: string; label: string }[];
    }[];
}

export function SubSidebar({
    title,
    backHref = "/",
    backLabel = "SYSTEM_HOME",
    groups
}: SubSidebarProps) {

    const scrollTo = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <aside className="w-full md:w-64 border-r border-white/5 bg-black h-screen sticky top-0 hidden md:flex flex-col p-6 z-50">
            {/* Back Navigation */}
            <div className="mb-8">
                <Link href={backHref} className="group flex items-center gap-2 text-[10px] font-mono text-zinc-500 hover:text-[#a3e635] transition-colors mb-4">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    {backLabel}
                </Link>

                <div className="flex flex-col gap-1">
                    <div className="text-[10px] font-mono font-normal text-[#a3e635]">SUB_SYSTEM</div>
                    <div className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                        {title}
                    </div>
                </div>
            </div>

            {/* Navigation Groups */}
            <nav className="space-y-8 flex-1 overflow-y-auto pr-2 no-scrollbar">
                {groups.map((group, idx) => (
                    <div key={idx}>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3 pl-3">
                            {group.title}
                        </div>
                        <ul className="space-y-0.5">
                            {group.items.map((item, i) => (
                                <li key={`${item.id}-${i}`}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => scrollTo(item.id, e)}
                                        className="block px-3 py-1.5 text-xs font-mono border-l-2 border-transparent text-zinc-500 hover:text-white hover:border-zinc-800 transition-all duration-300"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-white/5">
                <div className="text-[10px] text-zinc-600 font-mono">
                    Creonity Design System<br />
                    v14.0 // Sub-Module
                </div>
            </div>
        </aside>
    );
}
