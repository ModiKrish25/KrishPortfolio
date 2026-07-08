'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#projects' },
  { label: 'STACK', href: '#stack' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brutal-black/80 backdrop-blur-md border-b-2 border-vapor-pink'
          : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2">
          <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tighter">
            MODIKRISH
          </span>
          <span className="font-mono text-vapor-pink text-xl group-hover:text-vapor-cyan transition-colors">
            _
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="relative px-4 py-2 font-mono text-xs font-bold tracking-widest text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-vapor-pink mr-1">0{i + 1}</span>
              {l.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-vapor-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-brutal-black/95 border-t-2 border-vapor-pink"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 font-mono text-sm font-bold tracking-widest text-white/80 hover:bg-vapor-pink/20 hover:text-vapor-pink transition-colors border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
