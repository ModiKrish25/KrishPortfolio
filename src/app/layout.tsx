import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'ModiKrish // VAPOR.EXE',
  description: 'Full Stack Developer — building immersive digital experiences at the intersection of code, AI, and 3D.',
  keywords: ['ModiKrish', 'Full Stack Developer', '3D Portfolio', 'Vaporwave', 'Next.js', 'Three.js'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
