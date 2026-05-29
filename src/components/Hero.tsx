'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Phone,
  ArrowRight,
} from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'AI/ML Engineer',
    'Deep Learning Enthusiast',
    'Computer Vision Developer',
    'Intelligent Systems Builder',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
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
      icon: ArrowRight,
      label: 'View Projects',
      href: '#projects',
      color:
        'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/30',
    },
    {
      icon: Download,
      label: 'Resume',
      href: '/resume.pdf',
      color:
        'bg-white/10 border border-white/10 hover:border-cyan-400/40 hover:bg-white/15',
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
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

        {/* Animated Roles */}
        <motion.div
          className="h-8 mb-6"
          variants={itemVariants}
        >
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl lg:text-4xl font-medium text-cyan-300"
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Building practical AI systems using Machine Learning, Deep Learning, Computer Vision, and intelligent automation.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base text-gray-400"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-cyan-400" />
            <span>Howrah, West Bengal, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-cyan-400" />
            <a href="mailto:swarnabha983@gmail.com" className="hover:text-cyan-300 transition-colors">
              swarnabha983@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-cyan-400" />
            <span>+91 9836951351</span>
          </div>
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
              className={`${button.color} text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-102 hover:shadow-xl text-sm font-medium backdrop-blur-xl`}
            >
              <button.icon size={18} />
              <span>{button.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-8"
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