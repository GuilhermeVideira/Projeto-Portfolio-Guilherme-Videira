import { motion } from 'motion/react';
import { useRef } from 'react';
import { Award, Target, Zap } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);

  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '4+' },
    { icon: Target, label: 'Projetos Concluídos', value: '70+' },
    { icon: Zap, label: 'Tecnologias', value: '30+' },
  ];

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            <span className="text-sm uppercase tracking-wider text-orange-500">Sobre Mim</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl">
            Transformando ideias em{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              realidade digital
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/imagem01.jpeg"
                alt="Imagem profissional"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-3xl opacity-50" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou desenvolvedor Full Stack com formação técnica em Desenvolvimento de Sistemas e atualmente graduando em Ciência da Computação. Tenho interesse em construir aplicações completas, atuando do front ao back, sempre com foco em usabilidade, clareza e funcionamento real das soluções.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tenho experiência em projetos colaborativos e hackathons, onde trabalhei com resolução de problemas reais, validação rápida de ideias e trabalho em equipe. Essas vivências fortaleceram minha comunicação e visão prática da tecnologia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             Acredito em código com propósito e em tecnologia feita para pessoas. Busco criar soluções intuitivas, eficientes e bem estruturadas, unindo lógica, design e impacto positivo.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-orange-500 mb-4" />
                  <div className="text-4xl mb-2 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
