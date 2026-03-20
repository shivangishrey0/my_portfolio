import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const colorMap = {
  cyan: {
    border: 'group-hover:border-neon-orange/40',
    text: 'text-neon-orange',
    shadow: 'group-hover:shadow-[0_0_30px_rgba(255,122,24,0.16)]',
    iconBg: 'bg-neon-orange/10',
  },
  purple: {
    border: 'group-hover:border-neon-amber/40',
    text: 'text-neon-amber',
    shadow: 'group-hover:shadow-[0_0_30px_rgba(255,179,71,0.16)]',
    iconBg: 'bg-neon-amber/10',
  },
  magenta: {
    border: 'group-hover:border-neon-deeporange/40',
    text: 'text-neon-deeporange',
    shadow: 'group-hover:shadow-[0_0_30px_rgba(255,87,34,0.16)]',
    iconBg: 'bg-neon-deeporange/10',
  },
};

export default function ProjectCard({ project, index, className = '' }) {
  const colors = colorMap[project.color] || colorMap.cyan;
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className={`group glass-card overflow-hidden ${colors.shadow} ${className}`}
    >
      {/* Project Visual Header */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-space-700 to-space-800 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-20 h-20 rounded-2xl ${colors.iconBg} flex items-center justify-center`}>
              <Icon className={`w-10 h-10 ${colors.text}`} />
            </div>
          </div>
        )}

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Hover overlay links */}
        <div className="absolute inset-0 bg-space-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-neon-orange hover:text-space-900 transition-all duration-300"
            aria-label="View live demo"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-neon-orange hover:text-space-900 transition-all duration-300"
            aria-label="View source code"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
