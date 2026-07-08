'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
    >
      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-block mb-6"
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-vapor-cyan border border-vapor-cyan/50 px-4 py-2 bg-vapor-cyan/5">
            &lt;FULL_STACK_DEV /&gt;
          </span>
        </motion.div>

        <h1 className="font-display font-bold leading-[0.85] tracking-tighter mb-6">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="block text-6xl sm:text-8xl md:text-9xl text-white"
          >
            MODI
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="block text-6xl sm:text-8xl md:text-9xl vapor-text"
          >
            KRISH
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-body text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          Building immersive digital experiences at the intersection of{' '}
          <span className="text-vapor-pink font-semibold">code</span>,{' '}
          <span className="text-vapor-cyan font-semibold">AI</span>, and{' '}
          <span className="text-vapor-yellow font-semibold">3D</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-vapor-pink text-brutal-black font-mono font-bold text-sm tracking-widest border-2 border-brutal-black brutal-shadow-cyan hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            VIEW_WORK &gt;&gt;
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-transparent text-white font-mono font-bold text-sm tracking-widest border-2 border-white hover:bg-white hover:text-brutal-black transition-all"
          >
            CONTACT_ME
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/40">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-vapor-cyan to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
