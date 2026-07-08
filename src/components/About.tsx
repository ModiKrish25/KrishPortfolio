'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const stats = [
  { label: 'PROJECTS', value: '10+', color: 'text-vapor-pink' },
  { label: 'TECHNOLOGIES', value: '15+', color: 'text-vapor-cyan' },
  { label: 'YEARS_CODING', value: '3+', color: 'text-vapor-yellow' },
  { label: 'COFFEE', value: '∞', color: 'text-vapor-purple' },
];

const focus = [
  { icon: '⚡', title: 'Modern Web Apps', desc: 'React, Next.js, full-stack architecture' },
  { icon: '🧠', title: 'AI & ML', desc: 'Integrating intelligence into products' },
  { icon: '🎨', title: '3D & Creative', desc: 'Three.js, WebGL, immersive UIs' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-vapor-pink">// 01. ABOUT_ME</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white mt-2 tracking-tighter">
            WHO_IS <span className="vapor-text">KRISH?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Bio — large card */}
          <TiltCard className="md:col-span-2 md:row-span-2 bg-brutal-black border-2 border-vapor-pink brutal-shadow-pink">
            <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-vapor-cyan mb-4 block">~/about/me.txt</span>
                <p className="font-body text-lg sm:text-xl text-white/80 leading-relaxed mb-4">
                  I&apos;m a passionate{' '}
                  <span className="text-vapor-pink font-semibold">full stack developer</span>{' '}
                  transforming complex problems into elegant, 3D solutions. I specialize in building
                  scalable web applications and integrating cutting-edge technologies.
                </p>
                <p className="font-body text-base text-white/60 leading-relaxed">
                  From vaporwave aesthetics to brutalist interfaces, I craft digital experiences that
                  don&apos;t just function — they resonate.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Problem Solver', 'Creative Coder', 'AI Enthusiast', '3D Explorer'].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-widest px-3 py-1.5 border border-white/20 text-white/60 hover:border-vapor-cyan hover:text-vapor-cyan transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>

          {/* Stats grid */}
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-brutal-black border-2 border-white/10 p-5 flex flex-col justify-between hover:border-vapor-cyan transition-colors ${
                i === 0 ? 'border-vapor-cyan/40' : ''
              }`}
            >
              <span className="font-mono text-[10px] tracking-widest text-white/40">{s.label}</span>
              <span className={`font-display font-bold text-4xl sm:text-5xl ${s.color}`}>{s.value}</span>
            </motion.div>
          ))}

          {/* Focus areas */}
          {focus.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-gradient-to-br from-vapor-grid to-brutal-black border-2 border-white/10 p-5 hover:border-vapor-yellow transition-colors group"
            >
              <span className="text-2xl mb-2 block">{f.icon}</span>
              <h3 className="font-display font-bold text-lg text-white mb-1">{f.title}</h3>
              <p className="font-body text-sm text-white/50">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
