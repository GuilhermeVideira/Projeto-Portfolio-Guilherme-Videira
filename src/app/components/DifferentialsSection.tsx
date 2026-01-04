import { motion } from 'motion/react';
import { useRef } from 'react';
import { Users, Code2, Lightbulb, Rocket, Target, Heart } from 'lucide-react';

export function DifferentialsSection() {
  const ref = useRef(null);

  const differentials = [
    {
      icon: Users,
      title: 'Foco em UX',
      description: 'Desenvolvimento centrado no usuário, criando experiências intuitivas e agradáveis.',
      color: 'from-orange-500 to-pink-500',
    },
    {
      icon: Code2,
      title: 'Código Limpo',
      description: 'Código bem estruturado, documentado e seguindo as melhores práticas da indústria.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Pensamento Criativo',
      description: 'Soluções inovadoras para problemas complexos, sempre buscando a melhor abordagem.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Otimização constante visando velocidade, eficiência e melhor experiência.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Target,
      title: 'Orientado a Resultados',
      description: 'Foco em entregar valor real, cumprindo prazos e superando expectativas.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Heart,
      title: 'Aprendizado Contínuo',
      description: 'Sempre atualizado com as últimas tecnologias e tendências do mercado.',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="text-sm uppercase tracking-wider text-orange-500">Diferenciais</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl">
            O que me{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              destaca
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            
            return (
              <motion.div
                key={differential.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${differential.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${differential.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${differential.color} mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h4 className="mb-3 group-hover:text-orange-500 transition-colors">
                    {differential.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {differential.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${differential.color} blur-xl`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card to-accent/50 border border-border overflow-hidden"
        >
          <div className="absolute top-0 left-0 text-9xl text-orange-500/10 -mt-6 -ml-4">"</div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 italic">
              A tecnologia deve ser uma ferramenta para resolver problemas reais e melhorar a vida das pessoas. 
              Cada linha de código é uma oportunidade de fazer a diferença.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />
              <span className="text-sm text-orange-500">Guilherme Videira</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
