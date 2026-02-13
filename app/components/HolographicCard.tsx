export function HolographicCard({ children, title, className = "" }: { children: React.ReactNode, title?: string, className?: string }) {
    return (
        <div className={`relative group perspective-1000 ${className}`}>
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-[60px] rounded-full transform scale-75 group-hover:bg-purple-500/30 transition-all duration-700"></div>

            {/* The Floating Card */}
            <div className="relative transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 preserve-3d">

                {/* Glass Surface */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">

                    {/* Glossy Reflection Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                    {/* Top Rim Light */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

                    {title && (
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-0.5">
                                <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white">
                                    JS
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm tracking-wide">{title}</h3>
                                <p className="text-white/40 text-[10px] font-mono">@janesmith_creative</p>
                            </div>
                            <div className="ml-auto">
                                <div className="w-4 h-4 text-blue-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="relative z-10">
                        {children}
                    </div>
                </div>

                {/* Bottom Reflection/Shadow */}
                <div className="absolute -bottom-10 left-4 right-4 h-4 bg-black/40 blur-xl rounded-[100%] transform scale-x-75 group-hover:scale-x-90 transition-transform duration-500"></div>
            </div>
        </div>
    );
}
