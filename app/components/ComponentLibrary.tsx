import * as Slider from '@radix-ui/react-slider';
import * as Switch from '@radix-ui/react-switch';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Search, Loader2, Check, Shield, AlertTriangle, Terminal, ChevronDown, ChevronUp } from "lucide-react";
import { GlassTechCard } from './GlassTechCard';

export function ComponentLibrary() {
    return (
        <div className="space-y-20">

            {/* SECTION 1: INTERACTION PRIMITIVES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <GlassTechCard title="Button_Protocol" description="INTERACTION_MODELS" className="min-h-[300px]">
                    <div className="space-y-8">
                        {/* Buttons... (Keep existing) */}
                        <div className="space-y-2">
                            <span className="text-[10px] text-zinc-500 font-mono uppercase">01. Primary_Execute</span>
                            <button className="relative group w-full py-4 bg-white text-black font-bold font-display tracking-wider hover:bg-[#a3e635] transition-colors tech-cut">
                                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black"></div>
                                INITIALIZE_SEQUENCE
                            </button>
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] text-zinc-500 font-mono uppercase">02. Secondary_Scan</span>
                            <button className="w-full py-4 border border-zinc-700 text-white font-mono text-xs hover:border-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
                                <span className="text-zinc-500 group-hover:text-white transition-colors">[</span>
                                SYSTEM_DIAGNOSTIC
                                <span className="text-zinc-500 group-hover:text-white transition-colors">]</span>
                            </button>
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] text-zinc-500 font-mono uppercase">03. Destructive_Halt</span>
                            <button className="w-full py-4 bg-red-500/10 border border-red-500/50 text-red-500 font-bold text-xs hover:bg-red-500 hover:text-black transition-colors tech-cut flex items-center justify-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> ABORT_OPERATION
                            </button>
                        </div>
                    </div>
                </GlassTechCard>

                <GlassTechCard title="Control_Modules" description="INPUT_SWITCHES" className="min-h-[300px]">
                    <div className="space-y-8">
                        {/* Toggle Switches */}
                        <div className="flex items-center justify-between p-4 border border-white/5 bg-black/40 rounded-sm">
                            <label className="text-xs font-bold text-white font-mono flex items-center gap-2">
                                <Shield className="w-4 h-4 text-[#a3e635]" /> SECURE_MODE
                            </label>
                            <Switch.Root className="w-[42px] h-[25px] bg-zinc-900 rounded-full relative shadow-inner border border-zinc-700 data-[state=checked]:bg-[#a3e635] data-[state=checked]:border-[#a3e635] transition-colors">
                                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px_rgba(0,0,0,0.3)] transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                            </Switch.Root>
                        </div>

                        {/* Sliders */}
                        <div className="space-y-4 p-4 border border-white/5 bg-black/40 rounded-sm">
                            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                                <span>OUTPUT_GAIN</span>
                                <span className="text-[#a3e635]">85%</span>
                            </div>
                            <Slider.Root className="relative flex items-center select-none touch-none w-full h-5" defaultValue={[85]} max={100} step={1}>
                                <Slider.Track className="bg-zinc-800 relative grow rounded-full h-[3px]">
                                    <Slider.Range className="absolute bg-[#a3e635] rounded-full h-full shadow-[0_0_10px_#a3e635]" />
                                </Slider.Track>
                                <Slider.Thumb className="block w-5 h-5 bg-black border-2 border-[#a3e635] rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.5)] focus:outline-none focus:scale-110 transition-transform" />
                            </Slider.Root>
                        </div>

                        {/* Checkboxes */}
                        <div className="flex items-center gap-4 p-4 border border-white/5 bg-black/40 rounded-sm">
                            <div className="flex items-center gap-2">
                                <Checkbox.Root className="flex h-5 w-5 appearance-none items-center justify-center rounded-sm border border-zinc-600 bg-black outline-none data-[state=checked]:border-[#a3e635] data-[state=checked]:bg-[#a3e635]/20">
                                    <Checkbox.Indicator className="text-[#a3e635]">
                                        <Check className="w-3.5 h-3.5" />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <label className="text-xs font-mono text-zinc-400">AUTO_SAVE</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox.Root className="flex h-5 w-5 appearance-none items-center justify-center rounded-sm border border-zinc-600 bg-black outline-none data-[state=checked]:border-[#a3e635]" defaultChecked>
                                    <Checkbox.Indicator className="text-[#a3e635]">
                                        <Check className="w-3.5 h-3.5" />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <label className="text-xs font-mono text-zinc-400">SYNC_CLOUD</label>
                            </div>
                        </div>

                        {/* Radio Group (Card Style) */}
                        <RadioGroup.Root className="grid grid-cols-2 gap-4" defaultValue="opt1">
                            {['OPTIMAL', 'MAX_PWR'].map((opt, i) => (
                                <RadioGroup.Item key={opt} value={i === 0 ? 'opt1' : 'opt2'} className="group relative flex items-center justify-center p-3 border border-zinc-800 bg-black/50 hover:border-zinc-600 transition-colors data-[state=checked]:border-[#a3e635] data-[state=checked]:bg-[#a3e635]/10">
                                    <span className="text-[10px] font-bold font-mono text-zinc-500 group-data-[state=checked]:text-[#a3e635]">{opt}</span>
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-800 group-data-[state=checked]:bg-[#a3e635]"></div>
                                </RadioGroup.Item>
                            ))}
                        </RadioGroup.Root>

                    </div>
                </GlassTechCard>
            </div>

            {/* SECTION 2: DATA ENTRY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Text Fields */}
                <div className="space-y-4">
                    <h3 className="text-zinc-500 font-mono text-xs uppercase mb-6 border-b border-zinc-800 pb-2">04. Data_Input</h3>

                    {/* Text Input */}
                    <div className="group">
                        <label className="text-[10px] font-bold text-[#a3e635] font-mono mb-1 block">ACCESS_ID</label>
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-focus-within:bg-[#a3e635] transition-colors"></div>
                            <input type="text" placeholder="USR_8829_X" className="w-full bg-zinc-900/50 border-r border-t border-b border-zinc-800 p-4 pl-6 text-white font-mono text-sm focus:outline-none focus:border-white focus:bg-zinc-900 transition-all placeholder:text-zinc-700" />
                            <div className="absolute right-3 top-4 opacity-0 group-focus-within:opacity-100 transition-opacity">
                                <div className="w-2 h-2 bg-[#a3e635] animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Select / Dropdown */}
                    <div className="group relative">
                        <label className="text-[10px] font-bold text-zinc-500 font-mono mb-1 block group-focus-within:text-white">REGION_SELECT</label>
                        <Select.Root>
                            <Select.Trigger className="w-full inline-flex items-center justify-between bg-black border border-zinc-800 px-4 py-3 text-sm text-white font-mono hover:border-zinc-600 focus:outline-none focus:border-[#a3e635] data-[placeholder]:text-zinc-500">
                                <Select.Value placeholder="Select Server..." />
                                <Select.Icon>
                                    <ChevronDown className="w-4 h-4 text-zinc-500" />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content className="overflow-hidden bg-black border border-zinc-800 shadow-[0_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0_10px_20px_-15px_rgba(22,_23,_24,_0.2)] rounded-sm z-50">
                                    <Select.Viewport className="p-2">
                                        {['US_EAST_1', 'EU_WEST_2', 'ASIA_PAC_3'].map((item) => (
                                            <Select.Item key={item} value={item.toLowerCase()} className="text-sm font-mono text-zinc-400 p-2 hover:bg-white/10 hover:text-white cursor-pointer outline-none flex items-center justify-between group">
                                                <Select.ItemText>{item}</Select.ItemText>
                                                <Select.ItemIndicator>
                                                    <Check className="w-3 h-3 text-[#a3e635]" />
                                                </Select.ItemIndicator>
                                            </Select.Item>
                                        ))}
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    </div>

                    {/* Textarea */}
                    <div className="group">
                        <label className="text-[10px] font-bold text-zinc-500 font-mono mb-1 block group-focus-within:text-white">COMMAND_LOG</label>
                        <div className="relative">
                            <textarea
                                className="w-full bg-black/50 border border-zinc-800 p-3 text-xs font-mono text-zinc-300 focus:outline-none focus:border-white focus:bg-black transition-all min-h-[100px]"
                                placeholder="// Enter system commands..."
                            ></textarea>
                            <div className="absolute bottom-2 right-2">
                                <Terminal className="w-3 h-3 text-zinc-700" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Badges & Avatars */}
                <div className="space-y-8">
                    <h3 className="text-zinc-500 font-mono text-xs uppercase mb-6 border-b border-zinc-800 pb-2">05. Status & Identity</h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-4 align-start content-start">
                        <span className="inline-flex items-center px-2 py-1 bg-[#a3e635]/10 border border-[#a3e635]/50 text-[#a3e635] text-[10px] font-bold font-mono tracking-wider shadow-[0_0_10px_rgba(163,230,53,0.2)]">
                            LIVE_UPLINK
                            <span className="w-1.5 h-1.5 bg-[#a3e635] rounded-full ml-2 animate-pulse"></span>
                        </span>
                        <span className="inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-700 text-zinc-400 text-[10px] font-mono tracking-wider">
                            OFFLINE
                        </span>
                        <span className="inline-flex items-center px-2 py-1 bg-purple-500/10 border border-purple-500/50 text-purple-400 text-[10px] font-bold font-mono tracking-wider">
                            <Terminal className="w-3 h-3 mr-1" />
                            COMPILING
                        </span>
                    </div>

                    {/* Avatars */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full border-2 border-white/20 bg-zinc-900 flex items-center justify-center overflow-hidden">
                            <span className="font-bold text-white">JS</span>
                            {/* Online Dot */}
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#a3e635] border-2 border-black rounded-full"></div>
                        </div>
                        <div className="relative w-10 h-10 rounded-full border border-zinc-700 bg-zinc-950 flex items-center justify-center text-xs text-zinc-500 font-mono">
                            JD
                        </div>
                        <div className="relative w-8 h-8 rounded-sm border border-dashed border-zinc-600 flex items-center justify-center text-zinc-600 hover:border-white hover:text-white transition-colors cursor-pointer">
                            +
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
