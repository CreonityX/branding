import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Progress from '@radix-ui/react-progress';
import { GlassTechCard } from './GlassTechCard';
import { X, Info, AlertTriangle, CheckCircle, Loader } from 'lucide-react';

export function ComponentLibrary() {
    return (
        <div className="space-y-32">

            {/* ... Previous primitives ... */}

            {/* SECTION 5: FEEDBACK & OVERLAYS */}
            <div className="space-y-12">
                <h2 className="text-2xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4">05. Feedback & Overlays</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Alerts */}
                    <GlassTechCard title="System_Alerts" description="NOTIFICATIONS">
                        <div className="space-y-4">
                            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-sm flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xs font-bold font-mono uppercase mb-1">Warning: High Latency</h4>
                                    <p className="text-xs text-yellow-500/80">Network throughput below optimal threshold.</p>
                                </div>
                            </div>
                            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-sm flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xs font-bold font-mono uppercase mb-1">Deployment Successful</h4>
                                    <p className="text-xs text-green-500/80">Build v4.0.2 is now live on production.</p>
                                </div>
                            </div>
                        </div>
                    </GlassTechCard>

                    {/* Progress */}
                    <GlassTechCard title="Progress_Indicators" description="LOADING_STATES">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                                    <span>UPLOADING_ASSETS...</span>
                                    <span className="text-[#a3e635]">45%</span>
                                </div>
                                <Progress.Root className="relative overflow-hidden bg-zinc-800 rounded-full w-full h-1" value={45}>
                                    <Progress.Indicator className="bg-[#a3e635] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65,0,0.35,1)]" style={{ transform: `translateX(-${100 - 45}%)` }} />
                                </Progress.Root>
                            </div>

                            <div className="flex items-center gap-4">
                                <Loader className="w-5 h-5 text-[#a3e635] animate-spin" />
                                <span className="text-xs font-mono text-zinc-500">INITIALIZING_CORE...</span>
                            </div>

                            {/* Skeleton */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 animate-pulse"></div>
                                <div className="space-y-2 flex-1">
                                    <div className="h-2 w-3/4 bg-zinc-800 rounded-sm animate-pulse"></div>
                                    <div className="h-2 w-1/2 bg-zinc-800 rounded-sm animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </GlassTechCard>

                    {/* Modals */}
                    <GlassTechCard title="Modal_Dialog" description="OVERLAY_view">
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <button className="px-4 py-2 bg-white text-black font-bold font-mono text-xs hover:bg-zinc-200 transition-colors">
                                    OPEN_MODAL
                                </button>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border border-white/10 bg-black p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
                                    {/* Tech Borders */}
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40"></div>
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40"></div>

                                    <Dialog.Title className="text-lg font-bold font-display text-white mb-2">Confirm Sequence</Dialog.Title>
                                    <Dialog.Description className="text-sm text-zinc-400 font-mono mb-6">
                                        Are you sure you want to execute this command? This action cannot be undone.
                                    </Dialog.Description>
                                    <div className="flex justify-end gap-4">
                                        <Dialog.Close asChild>
                                            <button className="px-4 py-2 text-zinc-400 font-mono text-xs hover:text-white">CANCEL</button>
                                        </Dialog.Close>
                                        <button className="px-4 py-2 bg-[#a3e635] text-black font-bold font-mono text-xs hover:bg-[#a3e635]/80">CONFIRM</button>
                                    </div>
                                    <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                                        <X className="h-4 w-4 text-white" />
                                        <span className="sr-only">Close</span>
                                    </Dialog.Close>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </GlassTechCard>

                    {/* Tooltips */}
                    <GlassTechCard title="Context_Hints" description="TOOLTIPS">
                        <Tooltip.Provider>
                            <Tooltip.Root>
                                <Tooltip.Trigger asChild>
                                    <button className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                                        <Info className="w-4 h-4 text-zinc-400" />
                                    </button>
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                    <Tooltip.Content className="z-50 overflow-hidden rounded-sm border border-white/10 bg-black px-3 py-1.5 text-xs text-zinc-300 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-mono" sideOffset={5}>
                                        System_Info: v4.0.2
                                        <Tooltip.Arrow className="fill-white/10" />
                                    </Tooltip.Content>
                                </Tooltip.Portal>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                    </GlassTechCard>

                </div>
            </div>

        </div>
    );
}
