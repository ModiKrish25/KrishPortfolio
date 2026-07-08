'use client';

import { motion } from 'framer-motion';

interface Tech {
  name: string;
  icon: string;
  color: string;
  bg: string;
  size?: string;
}

const techs: Tech[] = [
  { name: 'HTML5', icon: '⬢', color: 'text-[#e34f26]', bg: 'border-[#e34f26]/40', size: 'md:col-span-1' },
  { name: 'CSS3', icon: '⬢', color: 'text-[#2965f1]', bg: 'border-[#2965f1]/40' },
  { name: 'JavaScript', icon: 'JS', color: 'text-[#f7df1e]', bg: 'border-[#f7df1e]/40', size: 'md:col-span-2' },
  { name: 'ReactJS', icon: '⚛', color: 'text-[#61dafb]', bg: 'border-[#61dafb]/40' },
  { name: 'Tailwind', icon: '≈', color: 'text-[#38bdf8]', bg: 'border-[#38bdf8]/40' },
  { name: 'NodeJS', icon: '⬡', color: 'text-[#4ade80]', bg: 'border-[#4ade80]/40' },
  { name: 'Express', icon: 'EX', color: 'text-white/80', bg: 'border-white/30' },
  { name: 'MongoDB', icon: '◇', color: 'text-[#4db33d]', bg: 'border-[#4db33d]/40' },
  { name: 'MySQL', icon: 'DB', color: 'text-[#00758f]', bg: 'border-[#00758f]/40' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-[#336791]', bg: 'border-[#336791]/40' },
  { name: 'Python', icon: '🐍', color: 'text-[#3776ab]', bg: 'border-[#3776ab]/40', size: 'md:col-span-2' },
  { name: 'Git', icon: '⎇', color: 'text-[#f1502f]', bg: 'border-[#f1502f]/40' },
  { name: 'GitHub', icon: 'GH', color: 'text-white', bg: 'border-white/30' },
  { name: 'Vercel', icon: '▲', color: 'text-white', bg: 'border-white/30' },
  { name: 'Render', icon: '☁', color: 'text-[#46e3b7]', bg: 'border-[#46e3b7]/40' },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-vapor-yellow">// 03. TECH_ARSENAL</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white mt-2 tracking-tighter">
            THE <span className="vapor-text">STACK</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`group relative bg-brutal-black border-2 ${t.bg} p-5 sm:p-6 flex flex-col items-center justify-center gap-2 cursor-default overflow-hidden ${t.size || ''}`}
            >
              <div className={`text-3xl sm:text-4xl font-display font-bold ${t.color} transition-transform group-hover:scale-125`}>
                {t.icon}
              </div>
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-white/80">
                {t.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
