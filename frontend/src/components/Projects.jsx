import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800/90 transition-all duration-300 border border-gray-800 hover:border-gray-700">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-gray-300 text-xs font-medium rounded border border-gray-700">
          {project.category}
        </span>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group/link"
        >
          <Github size={18} />
          <span className="text-sm font-medium">View Code</span>
          <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gray-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/AbhipsaThakur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
