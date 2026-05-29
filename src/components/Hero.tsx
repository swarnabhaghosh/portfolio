'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttons = [
    {
      icon: Download,
      label: 'Resume',
      href: '/resume.pdf',
      color:
        'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/30',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/swarnabhaghosh',
      color:
        'bg-white/10 border border-white/10 hover:border-cyan-400/40 hover:bg-white/15',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/swarnabhaghosh/',
      color:
        'bg-white/10 border border-white/10 hover:border-cyan-400/40 hover:bg-white/15',
    },
    {
      icon: Mail,
      label: 'Contact',
      href: '#contact',
      color:
        'bg-white/10 border border-white/10 hover:border-cyan-400/40 hover:bg-white/15',
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-purple-900/10" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Swarnabha
          </span>

          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ghosh
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-300 mb-6 tracking-wide"
          variants={itemVariants}
        >
          Artificial Intelligence & Machine Learning Engineer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-xl text-cyan-300 max-w-3xl mx-auto mb-10 font-medium"
          variants={itemVariants}
        >
          Building intelligent systems that solve real-world problems.
        </motion.p>

        {/* Intro Section */}
        <motion.div
          className="space-y-4 mb-12"
          variants={itemVariants}
        >
          <p className="text-base md:text-lg text-gray-300">
            B.Tech Computer Science and Engineering student at{' '}
            <span className="text-cyan-400 font-medium">
              MCKV Institute of Engineering
            </span>
          </p>

          <p className="text-base md:text-lg text-gray-400">
            Focused on{' '}
            <span className="text-cyan-300">
              Artificial Intelligence & Machine Learning
            </span>
            , intelligent automation, and scalable AI systems.
          </p>

          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Interested in building practical AI solutions through Machine
            Learning, Deep Learning, Computer Vision, and NLP.
          </p>
        </motion.div>

        {/* Tech Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
        >
          {[
            'Machine Learning',
            'Deep Learning',
            'Computer Vision',
            'NLP',
            'TensorFlow',
            'FastAPI',
            'YOLO',
            'Optimization',
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300 backdrop-blur-xl"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target={
  button.href === '/resume.pdf' || button.href.startsWith('http')
    ? '_blank'
    : '_self'
}
              rel="noopener noreferrer"
              className={`${button.color} text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm font-medium backdrop-blur-xl`}
            >
              <button.icon size={18} />
              <span>{button.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-[-100px]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;