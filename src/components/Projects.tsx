'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

interface Project {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
  color: string;
  glow: string;
  icon: string;
  size: string;
}

const projects: Project[] = [
  {
    name: 'Newslytic',
    subtitle: 'Dynamic News Aggregator',
    description: 'Real-time news aggregation with analytics on trending topics. Pulls from multiple APIs and visualizes sentiment data.',
    tech: ['React', 'Node.js', 'NewsAPI'],
    link: 'https://github.com/ModiKrish25/Newslytic',
    linkLabel: 'VIEW_CODE',
    color: 'border-vapor-cyan',
    glow: 'brutal-shadow-cyan',
    icon: '📰',
    size: 'md:col-span-2 md:row-span-2',
  },
  {
    name: 'CoachAI',
    subtitle: 'Intelligent Assistant',
    description: 'AI-powered personal coaching providing tailored advice using NLP.',
    tech: ['ReactJS', 'NodeJS', 'MongoDB'],
    link: 'https://coachai-project.vercel.app/',
    linkLabel: 'VIEW_LIVE',
    color: 'border-brutal-lime',
    glow: 'brutal-shadow-lime',
    icon: '🤖',
    size: 'md:col-span-1 md:row-span-2',
  },
  {
    name: 'Crypto_Master',
    subtitle: 'Market Dashboard',
    description: 'Live crypto price tracking with 3D visualizations.',
    tech: ['CSS', 'Three.js', 'API'],
    link: 'https://crypto-mastercoin.vercel.app/',
    linkLabel: 'VIEW_LIVE',
    color: 'border-vapor-yellow',
    glow: 'brutal-shadow-pink',
    icon: '₿',
    size: 'md:col-span-1 md:row-span-1',
  },
];

function FlipCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`relative ${project.size}`}
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative w-full h-full min-h-[200px] transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 bg-brutal-black border-2 ${project.color} ${project.glow} p-6 flex flex-col justify-between cursor-pointer`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-start justify-between">
            <span className="text-4xl sm:text-5xl">{project.icon}</span>
            <span className="font-mono text-[10px] tracking-widest text-white/30">0{index + 1}</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">{project.name}</h3>
            <p className="font-mono text-xs text-white/40">{project.subtitle}</p>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-vapor-cyan animate-pulse">
            HOVER_TO_FLIP &gt;&gt;
          </span>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-vapor-grid to-brutal-black border-2 ${project.color} p-6 flex flex-col justify-between`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-2">{project.name}</h3>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] tracking-widest px-2.5 py-1 bg-white/5 border border-white/20 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block self-start mt-4 px-5 py-2.5 bg-vapor-pink text-brutal-black font-mono font-bold text-xs tracking-widest border-2 border-brutal-black hover:bg-vapor-cyan transition-colors"
          >
            {project.linkLabel} &gt;&gt;
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-vapor-cyan">// 02. FEATURED_WORK</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white mt-2 tracking-tighter">
            PROJECTS<span className="text-vapor-pink">.</span>EXE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {projects.map((p, i) => (
            <FlipCard key={p.name} project={p} index={i} />
          ))}

          {/* CTA card */}
          <TiltCard className="md:col-span-1 bg-vapor-pink border-2 border-brutal-black brutal-shadow">
            <a
              href="https://github.com/ModiKrish25"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 h-full min-h-[200px] flex flex-col justify-between hover:bg-vapor-cyan transition-colors group"
            >
              <span className="text-4xl">→</span>
              <div>
                <h3 className="font-display font-bold text-2xl text-brutal-black mb-1">SEE_ALL</h3>
                <p className="font-mono text-xs text-brutal-black/70">github.com/ModiKrish25</p>
              </div>
              <span className="font-mono text-[10px] tracking-widest text-brutal-black font-bold">
                EXPLORE_MORE &gt;&gt;
              </span>
            </a>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
