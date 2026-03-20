import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="My" highlight="Projects" />

        {/* 3-column grid — all side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
