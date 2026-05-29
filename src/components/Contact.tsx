'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Instagram,
  Download,
} from 'lucide-react';

import {
  SiLeetcode,
  SiKaggle,
} from 'react-icons/si';

const Contact = () => {
  const socials = [
  {
    icon: Github,
    href: 'https://github.com/swarnabhaghosh',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/swarnabhaghosh/',
    label: 'LinkedIn',
  },
  {
    icon: SiKaggle,
    href: 'https://www.kaggle.com/swarnabhaghosh9',
    label: 'Kaggle',
  },
  {
    icon: SiLeetcode,
    href: 'https://leetcode.com/u/swarnabhaghosh/',
    label: 'LeetCode',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/swarnabha09',
    label: 'Instagram',
  },
];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg mb-12">
            Feel free to reach out for collaborations, opportunities, or just a friendly conversation.
          </p>

          {/* Email */}
          <a
            href="mailto:swarnabha983@gmail.com"
            className="inline-flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors duration-300 mb-12 text-lg"
          >
            <Mail size={22} />
            <span>swarnabha983@gmail.com</span>
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
                title={social.label}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/10 mt-20 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2026 Swarnabha Ghosh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;