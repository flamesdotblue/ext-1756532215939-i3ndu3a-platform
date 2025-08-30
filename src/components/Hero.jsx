import Spline from '@splinetool/react-spline';
import { Rocket, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-widest rounded-sm border border-neutral-700 bg-neutral-900/80 shadow-[4px_4px_0_0_#111]">
            RETRO DEV PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]">
            Building blocky, blazing-fast web experiences
          </h1>
          <p className="mt-4 text-neutral-300 max-w-xl">
            I’m a full‑stack engineer crafting crisp, gamified interfaces and scalable systems. Tap the grid to play with the vibe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-sm font-bold tracking-wider shadow-[6px_6px_0_0_#111] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0_0_#111]"
            >
              <Rocket size={18} /> Start Quest
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-700 px-5 py-3 rounded-sm font-bold tracking-wider shadow-[6px_6px_0_0_#111] hover:border-red-500 hover:text-red-400 transition-colors active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0_0_#111]"
            >
              <Code size={18} /> View Code
            </a>
          </div>
        </div>

        <div className="md:justify-self-end">
          <div className="rounded-sm border border-neutral-800 bg-neutral-900/70 p-4 max-w-md shadow-[8px_8px_0_0_#111]">
            <div className="grid grid-cols-3 gap-3 text-center">
              <Stat label="LEVEL" value="29" />
              <Stat label="COMMITS" value="10k+" />
              <Stat label="BOSSES" value="42" />
            </div>
            <div className="mt-5">
              <p className="text-xs text-neutral-400 mb-2 tracking-wider">XP PROGRESS</p>
              <div className="h-3 w-full bg-neutral-800 rounded-sm overflow-hidden border border-neutral-700">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-300 animate-[pulse_2s_ease-in-out_infinite]" style={{ width: '76%' }} />
              </div>
              <p className="text-right text-xs mt-1">76%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-3 rounded-sm border border-neutral-800 bg-neutral-950/60 shadow-[4px_4px_0_0_#111]">
      <div className="text-xs text-neutral-400 tracking-widest">{label}</div>
      <div className="text-xl font-black">{value}</div>
    </div>
  );
}
