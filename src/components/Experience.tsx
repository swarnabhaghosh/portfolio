'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      title: 'IEEE CS SBC IIT Kharagpur Research Intern',
      company: 'IEEE Computer Society Student Branch, IIT Kharagpur',
      period: 'July, 2025 - November, 2025',
      location: 'Kharagpur, India',
      description: 'Research internship focused on Integer Linear Programming, optimization algorithms, and scheduling systems for smart infrastructure applications.',
      achievements: [
        'Developed Integer Linear Programming models for aircraft parking allocation optimization',
        'Implemented scheduling algorithms improving operational efficiency by 25%',
        'Built revenue optimization framework for smart infrastructure systems',
        'Applied advanced mathematical modeling techniques to real-world infrastructure challenges',
      ],
      focus: [
        'Integer Linear Programming',
        'Scheduling Systems',
        'Revenue Optimization',
        'Smart Infrastructure',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text tracking-tight">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="glass rounded-xl p-8 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Briefcase className="text-purple-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {exp.description}
                </p>

                {exp.achievements && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm leading-relaxed flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
