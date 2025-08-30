import { Gamepad2, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-neutral-950/70 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 bg-red-600 text-white rounded-sm shadow-[4px_4px_0_0_#111]">
            <Gamepad2 size={18} />
          </div>
          <span className="font-black tracking-wider text-sm md:text-base leading-none">
            DEV•PLAYER
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
          <a href="#skills" className="hover:text-red-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-sm border border-neutral-800 hover:border-red-500 hover:text-red-400 transition-colors shadow-[4px_4px_0_0_#111]"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-sm border border-neutral-800 hover:border-red-500 hover:text-red-400 transition-colors shadow-[4px_4px_0_0_#111]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-sm font-semibold text-xs tracking-wider shadow-[4px_4px_0_0_#111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#111]"
          >
            <Mail size={16} /> Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
