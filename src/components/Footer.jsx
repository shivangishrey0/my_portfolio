import { Heart } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold">
          <span className="gradient-text-cyan">Port</span>
          <span className="text-white">Folio</span>
        </a>

        {/* Copyright */}
        <p className="text-gray-500 text-sm flex items-center gap-1.5">
          Made with{' '}
          <Heart size={14} className="text-neon-deeporange fill-neon-deeporange" />{' '}
          © {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              {...(social.url.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="text-gray-500 hover:text-neon-orange transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
