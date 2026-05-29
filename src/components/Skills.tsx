'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'C++'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Backend & Database',
      skills: ['SQL', 'Flask', 'FastAPI'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI, Machine Learning & Computer Vision',
      skills: [
        'TensorFlow',
        'Scikit-Learn',
        'Machine Learning',
        'Deep Learning',
        'OpenCV',
        'YOLO',
        'Computer Vision',
        'NLP',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'LLM & AI Tools',
      skills: ['OpenAI', 'Gemini', 'Groq', 'Ollama', 'Hugging Face'],
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            Skills
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            Technologies and tools I use to build intelligent AI systems and
            real-world applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
              }}
            >
              <div className="glass rounded-2xl p-7 h-full border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-xl">
                {/* Category Title */}
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <div
                    className={`w-2 h-8 bg-gradient-to-b ${category.color} rounded-full`}
                  />

                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: skillIndex * 0.05,
                      }}
                      className="px-3.5 py-1.5 bg-white/5 rounded-lg text-sm font-medium text-gray-300 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;