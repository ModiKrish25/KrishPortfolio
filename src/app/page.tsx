import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';

const VaporBackground = dynamic(() => import('@/components/VaporBackground'), { ssr: false });

export default function Home() {
  return (
    <>
      <VaporBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
