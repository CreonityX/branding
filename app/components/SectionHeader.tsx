import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeader({ title, subtitle, icon: Icon, link }: { title: string, subtitle?: string, icon?: any, link?: { href: string, label: string } }) {
    return (
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
                {Icon && (
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm">
                        <Icon className="w-6 h-6 text-[#a3e635]" />
                    </div>
                )}
                <div>
                    <h2 className="text-3xl font-display font-black text-white tracking-tighter uppercase mb-1">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {link && (
                <Link href={link.href} className="group flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-[#a3e635] transition-colors mb-1">
                    {link.label} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
            )}
        </div>
    );
}
