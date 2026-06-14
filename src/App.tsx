import { useEffect, useRef } from 'react';
import { Download, Dribbble, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { siBandcamp, siInstagram, siSoundcloud, siTiktok, siYoutube } from 'simple-icons';
import * as THREE from 'three';
import VANTA_FOG from 'vanta/dist/vanta.fog.min';

type SimpleIconData = {
  path: string;
  title: string;
};

type Profile = {
  label: string;
  accessibleLabel?: string;
  url: string;
  icon?: typeof Github;
  simpleIcon?: SimpleIconData;
};

const professionalProfiles: Profile[] = [
  { label: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/jaime-garcia-jr/' },
  { label: 'GitHub', icon: Github, url: 'https://github.com/jaimegarjr' },
  { label: 'Dribbble', icon: Dribbble, url: 'https://dribbble.com/jaimegarciajr' },
  {
    label: 'Personal',
    accessibleLabel: 'Personal Instagram',
    simpleIcon: siInstagram,
    url: 'https://www.instagram.com/jaimegarjr/',
  },
];

const musicProfiles: Profile[] = [
  {
    label: 'Drums',
    accessibleLabel: 'Drums Instagram',
    simpleIcon: siInstagram,
    url: 'https://www.instagram.com/jaimedrumz',
  },
  { label: 'TikTok', simpleIcon: siTiktok, url: 'https://www.tiktok.com/@jaimegarjr' },
  { label: 'YouTube', simpleIcon: siYoutube, url: 'https://www.youtube.com/@jaimegarjr' },
  { label: 'SoundCloud', simpleIcon: siSoundcloud, url: 'https://www.soundcloud.com/jaimegarjr' },
  { label: 'Bandcamp', simpleIcon: siBandcamp, url: 'https://jaimegarjr.bandcamp.com/' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function ProfileLink({ profile }: { profile: Profile }) {
  const { accessibleLabel, icon: Icon, label, simpleIcon, url } = profile;
  const linkLabel = accessibleLabel ?? label;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={linkLabel}
      title={linkLabel}
      className="group flex min-w-20 flex-col items-center gap-1 text-muted transition-colors duration-200 hover:text-primary focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/0 transition duration-200 group-hover:-translate-y-0.5 group-hover:border-white/15 group-hover:bg-white/5">
        {simpleIcon ? (
          <svg
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
          >
            <path d={simpleIcon.path} />
          </svg>
        ) : (
          Icon && <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
        )}
      </span>
      <span className="text-xs tracking-wide">{label}</span>
    </a>
  );
}

function ProfileSection({ label, profiles }: { label: string; profiles: Profile[] }) {
  const sectionId = `${label.toLowerCase().replace(/[^a-z]+/g, '-')}-profiles`;

  return (
    <section aria-labelledby={sectionId} className="w-full">
      <div className="mb-5 flex items-center gap-4">
        <h2
          id={sectionId}
          className="shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-primary"
        >
          {label}
        </h2>
        <div className="h-px w-full bg-white/35" />
      </div>
      <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-5">
        {profiles.map((profile) => (
          <ProfileLink key={profile.accessibleLabel ?? profile.label} profile={profile} />
        ))}
      </div>
    </section>
  );
}

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
    <div ref={vantaRef} className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div
        className="relative flex w-full max-w-2xl flex-col items-center gap-7"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="h-30 w-30 overflow-hidden rounded-full"
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
          <h1 className="text-3xl font-semibold text-primary">Jaime Garcia Jr.</h1>
          <p className="mt-1.5 text-base text-muted">Software Engineer at Atlassian</p>
        </motion.div>
        <motion.a
          href="/assets/Resume - Jaime Garcia Jr. (RECENT).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-surface shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Download size={16} strokeWidth={1.75} aria-hidden="true" />
          Resumé
        </motion.a>
        <motion.nav
          aria-label="Profile links"
          className="flex w-full max-w-lg flex-col gap-7"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <ProfileSection label="Software" profiles={professionalProfiles} />
          <ProfileSection label="Music" profiles={musicProfiles} />
        </motion.nav>
      </motion.div>
    </div>
  );
}
