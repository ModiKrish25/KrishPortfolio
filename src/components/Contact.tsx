'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/modi-krish-9b944b341/', handle: '@modi-krish', color: 'text-vapor-cyan', border: 'border-vapor-cyan' },
  { label: 'GitHub', href: 'https://github.com/ModiKrish25', handle: '@ModiKrish25', color: 'text-white', border: 'border-white' },
  { label: 'Email', href: 'mailto:modikrish.lj.2023@gmail.com', handle: 'modikrish.lj.2023@gmail.com', color: 'text-vapor-pink', border: 'border-vapor-pink' },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <section ref={ref} id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-vapor-pink/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-vapor-cyan/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          style={{ opacity }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-vapor-pink">// 04. LET&apos;S_CONNECT</span>
          <h2 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl text-white mt-4 tracking-tighter leading-none">
            LET&apos;S BUILD
            <br />
            <span className="vapor-text">SOMETHING</span>
            <br />
            <span className="text-brutal-paper">REAL.</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y-2 border-vapor-pink/30 py-4 mb-16">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="font-display font-bold text-3xl sm:text-5xl text-white/10 mx-8 tracking-tighter"
              >
                AVAILABLE_FOR_WORK — LET&apos;S_TALK — AVAILABLE_FOR_WORK — LET&apos;S_TALK —
              </span>
            ))}
          </div>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group bg-brutal-black border-2 ${s.border} p-6 flex flex-col gap-3 hover:bg-white/5 transition-colors`}
            >
              <span className="font-mono text-[10px] tracking-widest text-white/40">{s.label.toUpperCase()}</span>
              <span className={`font-display font-bold text-lg sm:text-xl ${s.color} group-hover:underline`}>
                {s.handle}
              </span>
              <span className="font-mono text-xs text-white/30 group-hover:text-white/60 transition-colors">
                OPEN_LINK &gt;&gt;
              </span>
            </motion.a>
          ))}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:modikrish.lj.2023@gmail.com"
            className="inline-block px-10 py-5 bg-vapor-pink text-brutal-black font-mono font-bold text-base tracking-widest border-2 border-brutal-black brutal-shadow-cyan hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            SAY_HELLO &gt;&gt;
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-white/30 tracking-wider">
          © 2026 MODIKRISH // BUILT WITH CODE, AI & 3D
        </p>
        <p className="font-mono text-xs text-white/30 tracking-wider">
          NEXT.JS · TAILWIND · FRAMER_MOTION · THREE.JS
        </p>
      </div>
    </section>
  );
}
