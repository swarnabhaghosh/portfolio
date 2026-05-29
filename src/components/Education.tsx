'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  FolderKanban,
  Briefcase,
} from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'MCKV Institute of Engineering',
    cgpa: '9.74 / 10',
    period: '2023 - Present',
    description:
      'Focused on Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision while building practical AI systems through research, internships, and real-world projects.',
  };

  const stats = [
    {
      label: 'Current Semester',
      value: '6th Semester',
      icon: BookOpen,
    },
    {
      label: 'Projects Completed',
      value: '10+ Projects',
      icon: FolderKanban,
    },
    {
      label: 'Research Internship',
      value: 'IIT Kharagpur',
      icon: Briefcase,
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
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
            Education
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            Academic foundation and continuous learning in Artificial Intelligence,
            Machine Learning, and Software Engineering.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <GraduationCap
                    className="text-cyan-400"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {education.degree}
                  </h3>

                  <p className="text-cyan-400 font-semibold text-lg mb-3">
                    {education.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Award
                        size={16}
                        className="text-cyan-400"
                      />

                      <span className="text-cyan-300 font-semibold">
                        CGPA: {education.cgpa}
                      </span>
                    </div>

                    <span className="hidden sm:block">•</span>

                    <span>{education.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {education.description}
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="glass rounded-xl p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10">
                    <stat.icon
                      size={20}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs mb-1">
                      {stat.label}
                    </p>

                    <p className="text-white font-semibold text-sm">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;