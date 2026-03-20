import { motion } from 'framer-motion';

export default function SectionTitle({ title, highlight }) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold"
      >
        {title}{' '}
        <span className="gradient-text">{highlight}</span>
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '4rem' }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-neon-orange to-neon-amber mx-auto mt-4 rounded-full"
      />
    </div>
  );
}
