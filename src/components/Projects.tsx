'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Movie Recommender System',
      description:
        'Developed a hybrid movie recommendation system using content-based filtering and cosine similarity on a 5,000+ movie dataset. Built an interactive Streamlit application with dynamically fetched movie posters using the TMDB API to deliver personalized recommendations.',

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
    },

    {
      title: 'PlantIQ',
      description:
        'Built an AI-powered agricultural assistant combining crop recommendation and plant disease classification. Implemented a Random Forest-based recommendation system using soil and weather parameters, alongside a MobileNetV2 CNN model for plant disease detection from leaf images.',

      techStack: [
        'TensorFlow',
        'Deep Learning',
        'Computer Vision',
        'Scikit-Learn',
        'CNN',
        'Streamlit',
      ],

      github: 'https://github.com/swarnabhaghosh/PlantIQ',
    },

    {
      title: 'CivicLens – Smart Civic Issue Management',
      description:
        'Developed the AI module and FastAPI backend for a smart civic issue management platform. Integrated a MultiOutputClassifier for text-based issue classification and a CNN–RNN hybrid deep learning model for automated image-based issue categorization and resolution workflows.',

      techStack: [
        'FastAPI',
        'TensorFlow',
        'Scikit-Learn',
        'CNN-RNN',
        'Deep Learning',
        'MongoDB',
      ],

      github: 'https://github.com/soumalyokundu123/CivicLens',
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
                y: -6,
              }}
            >
              <div className="glass rounded-2xl p-6 h-full border border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] hover:scale-[1.02] transition-all duration-300">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;