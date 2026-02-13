import clsx from "clsx";

interface IsoCardProps {
    children: React.ReactNode;
    className?: string;
    depth?: "low" | "medium" | "high";
}

export function IsoCard({ children, className, depth = "medium" }: IsoCardProps) {
    const depthClasses = {
        low: "translate-z-4 hover:translate-z-8 transition-transform duration-500",
        medium: "translate-z-8 hover:translate-z-16 transition-transform duration-500",
        high: "translate-z-12 hover:translate-z-24 transition-transform duration-500",
    };

    return (
        <div className={clsx("relative group perspective-1000", className)}>
            <div className="iso-scene transition-transform duration-700 ease-out 
                rotate-x-[20deg] rotate-z-[-10deg]
                group-hover:rotate-x-[25deg] group-hover:rotate-z-[-5deg]
                transform-style-3d relative">

                {/* 1. The Shadow/Glow (Ground Level) */}
                <div className="absolute inset-x-0 inset-y-0 bg-purple-500/20 blur-[60px] transform scale-90 translate-z-[-40px] opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>

                {/* 2. The Tech Base Plate (Industrial Armor) */}
                <div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 transform translate-z-0 transition-colors group-hover:border-white/30 shadow-2xl relative">

                    {/* Industrial Markers */}
                    {/* Top Left Bracket */}
                    <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/60"></div>
                    {/* Bottom Right Bracket */}
                    <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/60"></div>

                    {/* Crosshairs */}
                    <div className="absolute top-1/2 -left-[1px] w-2 h-[1px] bg-white/40"></div>
                    <div className="absolute top-1/2 -right-[1px] w-2 h-[1px] bg-white/40"></div>
                    <div className="absolute -bottom-[1px] left-1/2 w-[1px] h-2 bg-white/40"></div>

                    {/* Tech Grid & Mesh */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-grid-white/[0.03]"></div>

                    {/* Sharp Rim Light */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                </div>

                {/* 3. The Levitating Content */}
                <div className={clsx("transform-style-3d relative", depthClasses[depth])}>
                    {children}
                </div>
            </div>
        </div>
    );
}
