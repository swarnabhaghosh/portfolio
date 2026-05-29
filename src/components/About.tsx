'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Brain,
  Zap,
  GraduationCap,
  Briefcase,
  FolderKanban,
} from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: Brain,
      title: 'Artificial Intelligence & Machine Learning',
      description:
        'Designing intelligent systems using Machine Learning, Deep Learning, and data-driven architectures for real-world applications.',
    },
    {
      icon: Cpu,
      title: 'Computer Vision & Intelligent Automation',
      description:
        'Building AI-powered vision systems using CNNs, YOLO, OpenCV, and image understanding pipelines for automation and analytics.',
    },
    {
      icon: Zap,
      title: 'Scalable AI Systems',
      description:
        'Building scalable AI systems, intelligent backend architectures, and real-world automation solutions.',
    },
  ];

  const stats = [
    {
      icon: GraduationCap,
      value: 'B.Tech CSE',
      label: 'CGPA: 9.74',
    },
    {
  icon: FolderKanban,
  value: 'AI/ML Projects',
  label: 'Deep Learning, Computer Vision & NLP',
},
    {
      icon: Briefcase,
      value: 'Research Internship',
      label: 'IEEE CS SBC IIT Kharagpur',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text tracking-tight">
            About Me
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto text-lg mb-16">
            Passionate about building intelligent AI systems that combine
            research, engineering, and practical real-world impact.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <stat.icon className="text-cyan-400" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              I am a Computer Science Engineering student at{' '}
              <span className="text-cyan-400 font-medium">
                MCKV Institute of Engineering
              </span>{' '}
              with a primary focus on{' '}
              <span className="text-cyan-400 font-medium">
                Artificial Intelligence and Machine Learning
              </span>
              . I enjoy building scalable intelligent systems that combine
              strong engineering principles with practical AI applications.
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              My work spans across{' '}
              <span className="text-cyan-400 font-medium">
                Machine Learning
              </span>
              , Deep Learning, Computer Vision, NLP, recommendation systems,
              optimization algorithms, and full-stack AI integration. I am
              particularly interested in applied AI systems that solve
              real-world operational and infrastructure challenges.
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              During my internship at{' '}
              <span className="text-cyan-400 font-medium">
                IIT Kharagpur
              </span>{' '}
              under IEEE CS SBC, I worked on Integer Linear Programming-based
              scheduling and optimization systems for intelligent aircraft
              parking allocation and operational efficiency.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <interest.icon className="text-cyan-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {interest.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {interest.description}
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

export default About;