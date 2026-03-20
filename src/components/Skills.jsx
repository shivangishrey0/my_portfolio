import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills, softSkills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="My" highlight="Skills" />

        <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills</h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 md:p-8 text-center cursor-default group"
            >
              <div className="text-4xl md:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-white font-semibold text-sm md:text-base group-hover:text-neon-orange transition-colors duration-300">
                {skill.name}
              </p>
              <p className="text-gray-600 text-xs mt-1">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>

        <h3 className="text-2xl font-bold text-white mt-14 mb-6 text-center">Soft Skills</h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {softSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 md:p-8 text-center cursor-default group"
            >
              <div className="text-4xl md:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-white font-semibold text-sm md:text-base group-hover:text-neon-orange transition-colors duration-300">
                {skill.name}
              </p>
              <p className="text-gray-600 text-xs mt-1">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
