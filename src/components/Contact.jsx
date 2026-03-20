import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { personalInfo, socialLinks } from '../data/portfolioData';

// Web3Forms — free email API (no backend needed)
const WEB3FORMS_ACCESS_KEY = '4b120dd2-c3b1-4b26-b294-096f3cbe25a4';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');   // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
          to: personalInfo.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Get In" highlight="Touch" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's work together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Feel free to reach out for collaborations, freelance work, or
                just to say hello! I'm always open to discussing new projects
                and creative ideas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-orange/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-neon-orange" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-white text-sm hover:text-neon-orange transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-amber/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-neon-amber" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Location</p>
                  <p className="text-white text-sm">Punjab, India</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    {...(social.url.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-orange hover:border-neon-orange/50 hover:bg-neon-orange/5 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-gray-400 text-sm mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-space-800 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-orange/50 focus:ring-1 focus:ring-neon-orange/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-gray-400 text-sm mb-2">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-space-800 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-orange/50 focus:ring-1 focus:ring-neon-orange/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-gray-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-space-800 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-orange/50 focus:ring-1 focus:ring-neon-orange/20 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="btn-gradient w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle size={18} />
                    </motion.div>
                    Message Sent!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={18} />
                    Failed — try again
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-gray-600 text-xs text-center">
                Your message will be sent directly to my email
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
