import { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Dribbble, Download } from 'lucide-react';
import { motion } from 'motion/react';
import * as THREE from 'three';
import VANTA_FOG from 'vanta/dist/vanta.fog.min';

const socials = [
  { label: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/jaime-garcia-jr/' },
  { label: 'GitHub', icon: Github, url: 'https://github.com/jaimegarjr' },
  { label: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/jaimegarjr/' },
  { label: 'Dribbble', icon: Dribbble, url: 'https://dribbble.com/jaimegarciajr' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = VANTA_FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: 0x93c5fd,
        midtoneColor: 0x60a5fa,
        lowlightColor: 0x0052cc,
        baseColor: 0x001f5c,
        blurFactor: 0.9,
        speed: 0.8,
        zoom: 0.2,
      });
    }
    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen flex items-center justify-center">
      <motion.div
        className="relative flex flex-col items-center gap-6"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="w-24 h-24 rounded-full overflow-hidden"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img
            src="/images/jaime_ai.jpeg"
            alt="Jaime Garcia Jr."
            className="w-full h-full scale-125 translate-y-2"
          />
        </motion.div>
        <motion.div className="text-center" variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
          <h1 className="text-2xl font-semibold text-primary">Jaime Garcia Jr.</h1>
          <p className="text-muted mt-1 text-sm">Software Engineer at Atlassian</p>
        </motion.div>
        <motion.div className="flex items-center gap-6" variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
          {socials.map(({ label, icon: Icon, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-primary transition-colors duration-200"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
        <motion.a
          href="/assets/Resume - Jaime Garcia Jr. (RECENT).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-muted border border-muted/30 rounded-full px-4 py-2 hover:text-primary hover:border-muted/60 transition-colors duration-200"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Download size={13} strokeWidth={1.5} />
          Resume
        </motion.a>
      </motion.div>
    </div>
  );
}
