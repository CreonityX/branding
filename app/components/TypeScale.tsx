export function TypeScale() {
    return (
        <div className="space-y-12">
            {/* H1 */}
            <div className="grid grid-cols-12 items-baseline gap-4 py-4 border-b border-white/5">
                <div className="col-span-2 font-mono text-purple-400 text-xs">text-7xl / font-display</div>
                <div className="col-span-2 font-mono text-zinc-500 text-xs">
                    Family: Syne<br />Weight: Extra Bold (800)<br />Tracking: Tight (-2%)
                </div>
                <div className="col-span-8">
                    <h1 className="text-7xl font-display font-extrabold tracking-tighter text-white">The Quick <span className="text-white underline decoration-4 decoration-zinc-700 underline-offset-8">Brown Fox</span></h1>
                </div>
            </div>

            {/* H2 */}
            <div className="grid grid-cols-12 items-baseline gap-4 py-4 border-b border-white/5">
                <div className="col-span-2 font-mono text-purple-400 text-xs">text-5xl / font-display</div>
                <div className="col-span-2 font-mono text-zinc-500 text-xs">
                    Family: Syne<br />Weight: Bold (700)
                </div>
                <div className="col-span-8">
                    <h2 className="text-5xl font-display font-bold tracking-tight text-white">Jumps Over The Moon</h2>
                </div>
            </div>

            {/* H3 */}
            <div className="grid grid-cols-12 items-baseline gap-4 py-4 border-b border-white/5">
                <div className="col-span-2 font-mono text-purple-400 text-xs">text-3xl / font-display</div>
                <div className="col-span-2 font-mono text-zinc-500 text-xs">
                    Family: Syne<br />Weight: Regular (400)
                </div>
                <div className="col-span-8">
                    <h3 className="text-3xl font-display font-normal text-white">Distinctive & Artistic</h3>
                </div>
            </div>

            {/* Body Large */}
            <div className="grid grid-cols-12 items-baseline gap-4 py-4 border-b border-white/5">
                <div className="col-span-2 font-mono text-blue-400 text-xs">text-lg / font-sans</div>
                <div className="col-span-2 font-mono text-zinc-500 text-xs">
                    Family: Manrope<br />Weight: Medium (500)<br />Height: 1.6
                </div>
                <div className="col-span-8">
                    <p className="text-lg font-sans text-zinc-300 max-w-2xl leading-relaxed">
                        Creonity v4 embodies a radical shift in visual language. We combine the expressive, museum-quality aesthetics of <strong>Syne</strong> with the rigorous, data-driven cleanliness of <strong>Manrope</strong>.
                    </p>
                </div>
            </div>

            {/* Mono / Data */}
            <div className="grid grid-cols-12 items-baseline gap-4 py-4 border-b border-white/5">
                <div className="col-span-2 font-mono text-blue-400 text-xs">font-mono</div>
                <div className="col-span-2 font-mono text-zinc-500 text-xs">
                    Family: JetBrains Mono / Geist<br />Usage: Data, Code, IDs
                </div>
                <div className="col-span-8">
                    <p className="font-mono text-sm text-zinc-400 bg-zinc-900/50 p-4 rounded-sm border border-zinc-800 inline-block">
                        TX_ID: 8829-XJ-99<br />
                        VAL: $4,290.00 <span className="text-[#a3e635]">+12%</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
