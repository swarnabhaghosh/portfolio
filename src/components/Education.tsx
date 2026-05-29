'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'MCKV Institute of Engineering',
      cgpa: '9.74 / 10',
      period: '2023 - Present',
      description:
        'Focused on Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision with strong interest in intelligent systems and applied AI engineering.',

      highlights: [
        'Artificial Intelligence & Machine Learning',
        'Deep Learning & Neural Networks',
        'Computer Vision',
        'NLP',
        'Applied AI Systems',
      ],
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text tracking-tight">
            Education
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <div className="glass rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                {/* Top Section */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Icon */}
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <GraduationCap
                      className="text-cyan-400"
                      size={24}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                      {edu.degree}
                    </h3>

                    <p className="text-cyan-400 font-semibold mb-3 text-lg">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span className="text-cyan-300 font-bold text-lg">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>

                      <span className="hidden sm:block">•</span>

                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;