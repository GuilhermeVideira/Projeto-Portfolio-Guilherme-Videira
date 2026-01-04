import { motion } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export function ExperienceSection() {
  const ref = useRef(null);

  const experiences = [
    {
      type: 'education',
      icon: Briefcase,
      title: 'Formação & Base Técnica',
      company: 'Tecnologia geral',
      period: '2022 - Presente',
      description: 'Formação técnica e acadêmica em tecnologia, com participação ativa em projetos, hackathons e desafios práticos que fortaleceram minha base em desenvolvimento de software e resolução de problemas, com o inglês em segundo idioma.',
      achievements: [
        'Técnico em desenvolvimento de sistemas (ETEC ADOLPHO BEREZIN)',
        'Bacharelado em Ciência da Computação (Universidade Anhembi Morumbi) - Em andamento',
        'Curso de idioma Inglês (Wizard by Person) - Em andamento',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Experiência Profissional',
      company: 'Vivência profissional, organização e contanto com o público',
      period: '2024 - 2026',
      description: 'Experiência em ambientes reais de trabalho, com uso de sistemas, organização de informações e contato direto com pessoas. Essas vivências fortaleceram habilidades como comunicação, responsabilidade, adaptabilidade e resolução de problemas.',
      achievements: [
        'Estágio - Secretária de Saúde',
        'Vendedor',
        'Atendimento ao público',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Liderança & Atuação Voluntária',
      company: 'Iniciativa, e impacto social',
      period: '2022 - 2025',
      description: 'Atuação em iniciativas voluntárias de lideranças, exercendo responsabilidade, trabalho em equipe, comunicação e tomada de decisão, sempre buscando impacto positivo da comunidade.',
      achievements: [
        'Representante de classe',
        'Jovem Vereador',
        'Projetos sociais e educaionais',
      ],
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Projetos, Eventos & Evolução',
      company: 'Aprendizado contínuo e crescimento',
      period: '2022 - 2026',
      description: 'Participo ativamente de eventos, hackathons e projetos que me desafiam a sair da zona de conforto, aprender novas tecnologias e evoluir constantemente como desevoldedor.',
      achievements: [
        'Hackathons',
        'Participação de competições de programação',
        'Eventos e feiras de tecnologia',
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="text-sm uppercase tracking-wider text-orange-500">Trajetória</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl">
            Experiência &{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Formação
            </span>
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${
                      exp.type === 'work'
                        ? 'from-orange-500 to-pink-500'
                        : 'from-blue-500 to-cyan-500'
                    } shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 ${
                    isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                  } md:w-1/2 w-full`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        exp.type === 'work'
                          ? 'from-orange-500/5 to-transparent'
                          : 'from-blue-500/5 to-transparent'
                      } opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg">{exp.title}</h4>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className="text-sm text-orange-500 mb-3">{exp.company}</p>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-16 text-center"
>
  <a
    href="./src/img/Curriculo - Guilherme F. Videira.pdf"
    download
    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-foreground rounded-xl border border-border transition-all duration-300 hover:shadow-lg"
  >
    <span>Baixar Currículo Completo</span>
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  </a>
</motion.div>
      </div>
    </section>
  );
}
