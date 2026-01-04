import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { Code, Palette, Database, Wrench, Zap, Layout } from 'lucide-react';

export function SkillsSection() {
  const ref = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Front-end',
      color: 'from-orange-500 to-pink-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'Back-end',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      icon: Palette,
      title: 'Design',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 75 },
        { name: 'UI/UX', level: 85 },
        { name: 'Prototyping', level: 80 },
      ],
    },
    {
      icon: Wrench,
      title: 'Ferramentas',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
      ],
    },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'Next.js', 'React','Bootstrap','Tailwind CSS','HTML','CSS',
    'Node.js','Express.js','Java','PHP','Python','C#',
    'SQL','MySQL','MongoBD','Firebase','PostgreSQL',
    'JSON',
    'Git', 'Github','Docker','AWS','CI/CD','VS Code',
    'Flutter', 'React Native',
    'Figma', 'Adobe XD', 'WCAG',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="text-sm uppercase tracking-wider text-orange-500">Skills & Tecnologias</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl">
            Ferramentas que{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              domino
            </span>
          </h3>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="mb-4">{category.title}</h4>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-accent rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + 0.5 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative p-8 rounded-2xl bg-gradient-to-br from-accent/50 to-transparent border border-border overflow-hidden"
        >
          <div className="absolute top-4 left-4">
            <Zap className="w-8 h-8 text-orange-500" />
          </div>
          
          <h4 className="mb-6 text-center">Tecnologias & Frameworks</h4>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                onHoverStart={() => setHoveredSkill(tech)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={`px-4 py-2 rounded-lg bg-card border transition-all duration-200 cursor-default ${
                  hoveredSkill === tech
                    ? 'border-orange-500 shadow-lg shadow-orange-500/20'
                    : 'border-border'
                }`}
              >
                <span className="text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Layout, text: 'Design Responsivo' },
            { icon: Zap, text: 'Performance Otimizada' },
            { icon: Code, text: 'Código Limpo' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <Icon className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
