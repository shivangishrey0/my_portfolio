import { motion } from 'framer-motion';
import { ArrowDown, Eye, Download } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-24"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-amber/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 lg:order-2 text-center lg:text-right"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-neon-orange font-medium text-sm md:text-base tracking-wider uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Hi, I'm {''}
            <span className="gradient-text block sm:inline">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-4 max-w-lg mx-auto lg:mx-0"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm md:text-base text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-end mb-10"
          >
            <button
              onClick={() => handleScroll('#projects')}
              className="btn-gradient flex items-center gap-2 text-sm md:text-base"
            >
              <Eye size={18} />
              View My Work
            </button>
            <a
              href={personalInfo.resumeUrl}
              download="CV_Shivangi_FirstDraft.pdf"
              className="btn-outline flex items-center gap-2 text-sm md:text-base"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex gap-4 justify-center lg:justify-end"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                {...(social.url.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-orange hover:border-neon-orange/50 hover:shadow-[0_0_15px_rgba(255,122,24,0.25)] transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Left — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="order-1 lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative z-10">
            {/* Outer glow ring (Softened to match the new vibe) */}
            <div className="absolute -inset-4 rounded-[2rem] bg-orange-200/20 blur-xl animate-glow-pulse" />

            {/* Profile image container with soft peach frame */}
            <div className="relative w-[21rem] md:w-[28.5rem] rounded-[2rem] px-4 pt-4 pb-12 bg-white border border-orange-100/40 shadow-[0_8px_16px_rgba(255,140,64,0.15),0_16px_32px_rgba(255,122,24,0.16),0_24px_48px_rgba(255,140,64,0.12)]">
              <div className="relative w-full h-full rounded-[1rem] overflow-hidden bg-space-800">
                <img
                  src="/myimg2.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-auto block"
                />
                
                {/* Name Overlay */}
                <div 
                  className="absolute bottom-4 right-4 text-white text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-20" 
                  style={{ fontFamily: 'cursive' }}
                >
                  Shivangi Shreya
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -left-4 glass-card px-4 py-2 flex items-center gap-2 z-30 bg-black/40 backdrop-blur-md rounded-xl border border-white/10"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-200">Available for work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500 cursor-pointer"
          onClick={() => handleScroll('#about')}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}