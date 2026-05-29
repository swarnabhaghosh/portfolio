'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from 'lucide-react';

import { SiLeetcode, SiKaggle } from 'react-icons/si';

const Contact = () => {
  const socials = [
    {
      icon: Github,
      href: 'https://github.com/swarnabhaghosh',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/swarnabhaghosh/',
    },
    {
      icon: SiKaggle,
      href: 'https://www.kaggle.com/swarnabhaghosh9',
    },
    {
      icon: SiLeetcode,
      href: 'https://leetcode.com/u/swarnabhaghosh/',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/swarnabha09',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Let&apos;s </span>
            <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl">
            Open to AI/ML internships, research collaborations, and
            opportunities in Machine Learning, Deep Learning,
            Computer Vision, and Intelligent Systems.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Let&apos;s Build Something
            </h3>

            <p className="text-gray-400 leading-relaxed mb-10">
              Whether it&apos;s an AI application, machine learning
              project, research collaboration, or an intelligent
              system, I&apos;m always open to discussing new ideas
              and opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full border border-white/10">
                  <Mail size={18} />
                </div>

                <span className="text-gray-300">
                  swarnabha983@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full border border-white/10">
                  <Phone size={18} />
                </div>

                <span className="text-gray-300">
                  +91 9836951351
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full border border-white/10">
                  <MapPin size={18} />
                </div>

                <span className="text-gray-300">
                  Howrah, West Bengal, India
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-10 flex-wrap">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <input
                type="text"
                placeholder="What&apos;s this about?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={7}
                placeholder="Tell me about the opportunity or project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-400 resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white hover:scale-[1.01] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Swarnabha Ghosh. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;