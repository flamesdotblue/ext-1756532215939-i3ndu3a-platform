import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <h4 className="font-black tracking-wider text-sm mb-3">DEV•PLAYER</h4>
          <p className="text-neutral-400 text-sm max-w-sm">
            Retro-styled, modern stack. Ping me for collaborations, quests, and boss fights.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-3">Gear</h5>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>React, Next.js, Vite</li>
            <li>TypeScript, Tailwind</li>
            <li>Node.js, PostgreSQL</li>
            <li>Cloud, CI/CD, Testing</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-3">Contact</h5>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-sm border border-neutral-800 hover:border-red-500 hover:text-red-400 transition-colors shadow-[4px_4px_0_0_#111]"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-sm border border-neutral-800 hover:border-red-500 hover:text-red-400 transition-colors shadow-[4px_4px_0_0_#111]"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-sm border border-neutral-800 hover:border-red-500 hover:text-red-400 transition-colors shadow-[4px_4px_0_0_#111]"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-neutral-500 flex items-center justify-between">
          <p className="flex items-center gap-1">Made with <Heart size={12} className="text-red-500" /> in the terminal</p>
          <p>© {new Date().getFullYear()} Dev Player. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
