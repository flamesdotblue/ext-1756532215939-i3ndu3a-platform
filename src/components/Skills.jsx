import { motion } from 'framer-motion';
import { Code, Database, Rocket, Cpu, Layers, Wrench } from 'lucide-react';

const skills = [
  { name: 'React', icon: Code, color: 'from-red-500 to-red-300' },
  { name: 'TypeScript', icon: Layers, color: 'from-rose-500 to-rose-300' },
  { name: 'Node.js', icon: Wrench, color: 'from-orange-500 to-amber-300' },
  { name: 'PostgreSQL', icon: Database, color: 'from-pink-500 to-rose-300' },
  { name: 'Next.js', icon: Rocket, color: 'from-red-600 to-red-400' },
  { name: 'Systems', icon: Cpu, color: 'from-fuchsia-500 to-pink-300' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Skill Tree</h2>
          <p className="text-neutral-300 mt-2">Unlocked abilities and passive buffs. Hover to inspect.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, idx) => (
            <SkillCard key={s.name} index={idx} icon={s.icon} name={s.name} color={s.color} />
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <XPTrack title="Frontend XP" percent={88} gradient="from-red-500 to-red-300" />
          <XPTrack title="Backend XP" percent={81} gradient="from-rose-500 to-rose-300" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ index, icon: Icon, name, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      whileHover={{ y: -6 }}
      className="relative rounded-sm border border-neutral-800 bg-neutral-950/70 p-5 shadow-[8px_8px_0_0_#111]"
    >
      <div className="flex items-center gap-4">
        <div className={`grid place-items-center h-12 w-12 rounded-sm bg-gradient-to-br ${color} text-white shadow-[4px_4px_0_0_#111]`}>
          <Icon size={22} />
        </div>
        <div>
          <h3 className="font-black text-lg">{name}</h3>
          <p className="text-sm text-neutral-400">Lv. {12 + index} • Mastery {70 + index}%</p>
        </div>
      </div>
      <div className="mt-4 h-2 w-full bg-neutral-800 rounded-sm overflow-hidden border border-neutral-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${70 + index}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

function XPTrack({ title, percent, gradient }) {
  return (
    <div className="rounded-sm border border-neutral-800 bg-neutral-950/70 p-5 shadow-[8px_8px_0_0_#111]">
      <div className="flex items-center justify-between mb-2">
        <p className="text-neutral-300 font-semibold tracking-wide">{title}</p>
        <p className="text-neutral-400 text-sm">{percent}%</p>
      </div>
      <div className="h-3 w-full bg-neutral-800 rounded-sm overflow-hidden border border-neutral-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${gradient}`}
        />
      </div>
    </div>
  );
}
