"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming utils exists, otherwise I'll mock it or use standard template lit

export function DocSidebar() {
    const [activeSection, setActiveSection] = useState("intro");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px", // Trigger when section is near top
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const scrollTo = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <aside className="w-full md:w-64 border-r border-white/5 bg-black h-screen sticky top-0 hidden md:flex flex-col p-6 z-50">
            <div className="flex flex-col gap-1 mb-10">
                <div className="text-[10px] font-mono font-normal text-[#a3e635]">DESIGN SYSTEM v11</div>
                <div className="font-display font-extrabold text-xl tracking-tight text-white">
                    CREONITY
                </div>
            </div>

            <nav className="space-y-8 flex-1 overflow-y-auto pr-2 no-scrollbar">
                <SidebarGroup title="Directives">
                    <SidebarLink id="intro" active={activeSection === "intro"} onClick={(e) => scrollTo("intro", e)}>Manifesto</SidebarLink>
                    <SidebarLink id="ai-prompts" active={activeSection === "ai-prompts"} onClick={(e) => scrollTo("ai-prompts", e)}>AI Prompts</SidebarLink>
                </SidebarGroup>

                <SidebarGroup title="Foundation">
                    <SidebarLink id="typography" active={activeSection === "typography"} onClick={(e) => scrollTo("typography", e)}>Typography</SidebarLink>
                    <SidebarLink id="colors" active={activeSection === "colors"} onClick={(e) => scrollTo("colors", e)}>Colors</SidebarLink>
                    <SidebarLink id="icons" active={activeSection === "icons"} onClick={(e) => scrollTo("icons", e)}>Iconography</SidebarLink>
                    <SidebarLink id="primitives" active={activeSection === "primitives"} onClick={(e) => scrollTo("primitives", e)}>Primitives</SidebarLink>
                </SidebarGroup>

                <SidebarGroup title="System">
                    <SidebarLink id="widgets" active={activeSection === "widgets"} onClick={(e) => scrollTo("widgets", e)}>Mission Control</SidebarLink>
                    <SidebarLink id="animations" active={activeSection === "animations"} onClick={(e) => scrollTo("animations", e)}>Kinetic Physics</SidebarLink>
                </SidebarGroup>

                <SidebarGroup title="Assets">
                    <SidebarLink id="downloads" active={activeSection === "downloads"} onClick={(e) => scrollTo("downloads", e)}>Downloads</SidebarLink>
                </SidebarGroup>
            </nav>

            <div className="mt-auto pt-6 border-t border-white/5">
                <div className="text-[10px] text-zinc-600 font-mono">
                    Build: v11.0.0<br />
                    Updated: Feb 13, 2026
                </div>
            </div>
        </aside>
    );
}

function SidebarGroup({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3 pl-3">{title}</div>
            <ul className="space-y-0.5">
                {children}
            </ul>
        </div>
    );
}

function SidebarLink({ id, active, onClick, children }: { id: string, active: boolean, onClick: (e: React.MouseEvent) => void, children: React.ReactNode }) {
    return (
        <li>
            <a
                href={`#${id}`}
                onClick={onClick}
                className={`
                    block px-3 py-1.5 text-xs font-mono border-l-2 transition-all duration-300
                    ${active
                        ? "border-[#a3e635] text-white bg-white/5"
                        : "border-transparent text-zinc-500 hover:text-white hover:border-zinc-800"
                    }
                `}
            >
                {children}
            </a>
        </li>
    );
}
