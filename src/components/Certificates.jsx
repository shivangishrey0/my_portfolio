import { motion } from 'framer-motion';
import { Award, ExternalLink, Code2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { certificates, achievements } from '../data/portfolioData';

/* ─── SVG Donut Chart ─── */
function DonutChart({ stats, total }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg viewBox="0 0 140 140" className="w-36 h-36">
      {/* Track */}
      <circle
        cx="70" cy="70" r={radius}
        fill="none" stroke="#1e293b" strokeWidth="14"
      />
      {/* Segments */}
      {stats.map((s, i) => {
        const pct = s.count / total;
        const dash = pct * circumference;
        const gap = circumference - dash;
        const seg = (
          <circle
            key={i}
            cx="70" cy="70" r={radius}
            fill="none"
            stroke={s.color}
            strokeWidth="14"
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-offset}
            strokeLinecap="round"
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
          />
        );
        offset += dash;
        return seg;
      })}
      {/* Center label */}
      <text x="70" y="64" textAnchor="middle" fill="white" fontSize="26" fontWeight="700">
        {total}
      </text>
      <text x="70" y="82" textAnchor="middle" fill="#94a3b8" fontSize="11">
        Solved
      </text>
    </svg>
  );
}

export default function Certificates() {
  const certVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Certificates &" highlight="Achievements" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Left: Certificates ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={certVariants}
            className="flex flex-col gap-4"
          >
            {certificates.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card p-5 flex items-center gap-5 group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-neon-orange/10 flex items-center justify-center group-hover:bg-neon-orange/20 transition-colors duration-300">
                  <Award className="w-6 h-6 text-neon-orange" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm md:text-base truncate">
                    {cert.title}
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">{cert.issuer}</p>
                  <p className="text-gray-600 text-[11px] mt-0.5">Issued: {cert.date}</p>
                </div>

                {/* Arrow */}
                <ExternalLink
                  size={16}
                  className="text-gray-600 group-hover:text-neon-orange transition-colors duration-300 shrink-0"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* ── Right: Achievements ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={certVariants}
            className="flex flex-col gap-6"
          >
            {achievements.map((ach, i) => (
              <motion.a
                key={i}
                href={ach.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="glass-card p-6 group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-neon-amber/15 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-neon-amber" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">{ach.platform}</h4>
                    <p className="text-gray-500 text-xs">{ach.subtitle}</p>
                  </div>
                </div>

                {/* Chart + Legend */}
                <div className="flex items-center justify-center gap-8">
                  <DonutChart stats={ach.stats} total={ach.totalSolved} />

                  <div className="flex flex-col gap-3">
                    {ach.stats.map((s, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: s.color }}
                        />
                        <span className="text-gray-300 text-sm">
                          {s.count} {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <p className="text-gray-500 text-xs text-center mt-5">
                  Practicing algorithmic problems and building core computer science concepts.
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
