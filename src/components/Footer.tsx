'use client';

import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code className="text-purple-400" size={20} />
            <span className="text-gray-400 text-sm">
              © 2024 Swarnabha Ghosh. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            Built with
            <Heart className="text-red-500" size={16} />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
