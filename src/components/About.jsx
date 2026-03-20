import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { personalInfo, education } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About" highlight="Me" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="glass-card p-8"
          >
            {personalInfo.bio.map((para, i) => (
              <motion.p
                key={i}
                variants={itemVariants}
                className="text-gray-400 leading-relaxed mb-4 last:mb-0 text-sm md:text-base"
              >
                {para}
              </motion.p>
            ))}

            {/* Stat mini-cards */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-8"
            >
              <div className="glass-card p-4 text-center flex-1">
                <Briefcase className="w-8 h-8 text-neon-orange mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">Experience</p>
                <p className="text-gray-500 text-xs mt-1">Problem Solving &amp; Web Dev</p>
              </div>
              <div className="glass-card p-4 text-center flex-1">
                <GraduationCap className="w-8 h-8 text-neon-orange mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">Education</p>
                <p className="text-gray-500 text-xs mt-1">B.Tech CSE</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold gradient-text-cyan mb-8">
              Educational Details
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-neon-orange via-neon-amber to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 border-neon-amber bg-space-900 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-neon-amber" />
                    </div>

                    <h4 className="text-white font-bold text-base md:text-lg">
                      {edu.degree}
                    </h4>
                    <p className="text-neon-orange text-sm mt-1">{edu.institution}</p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium border border-neon-amber/40 text-gray-300">
                      {edu.period}
                    </span>
                    <p className="text-gray-400 text-sm mt-2">{edu.score}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
