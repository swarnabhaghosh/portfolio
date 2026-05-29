'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Movie Recommender System',
      description:
        'Hybrid movie recommendation system using content-based filtering and cosine similarity on 5,000+ movie dataset with Streamlit application for personalized recommendations.',
      metrics: ['5,000+ movies', '85% accuracy', 'TMDB API integration'],
      techStack: [
        'Python',
        'Scikit-Learn',
        'Pandas',
        'NumPy',
        'Streamlit',
        'Machine Learning',
      ],
      github:
        'https://github.com/swarnabhaghosh/Movie-Recommender-System',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },

    {
      title: 'PlantIQ',
      description:
        'AI-powered agricultural assistant combining crop recommendation and plant disease classification using Random Forest and MobileNetV2 CNN model.',
      metrics: ['92% accuracy', 'MobileNetV2', 'Random Forest'],
      techStack: [
        'TensorFlow',
        'Deep Learning',
        'Computer Vision',
        'Scikit-Learn',
        'CNN',
        'Streamlit',
      ],
      github: 'https://github.com/swarnabhaghosh/PlantIQ',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    },

    {
      title: 'CivicLens – Smart Civic Issue Management',
      description:
        'AI module and FastAPI backend for smart civic issue management with MultiOutputClassifier for text classification and CNN-RNN hybrid for image categorization.',
      metrics: ['CNN-RNN hybrid', 'FastAPI backend', 'MultiOutputClassifier'],
      techStack: [
        'FastAPI',
        'TensorFlow',
        'Scikit-Learn',
        'CNN-RNN',
        'Deep Learning',
        'MongoDB',
      ],
      github: 'https://github.com/soumalyokundu123/CivicLens',
      gradient: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text tracking-tight">
            Projects
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            AI and intelligent systems projects focused on solving practical
            real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -4,
              }}
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full flex flex-col">
                {/* Project Image/Gradient */}
                <div
                  className="w-full h-48 flex items-center justify-center relative"
                  style={{ background: project.gradient }}
                >
                  <span className="text-white/60 text-sm font-medium">Project Preview</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics?.map((metric) => (
                      <span key={metric} className="px-3 py-1 bg-cyan-500/10 rounded-full text-xs text-cyan-300 border border-cyan-500/20">
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-5 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;