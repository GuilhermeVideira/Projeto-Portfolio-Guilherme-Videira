import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  detailedDescription: string;
  challenges: string;
  solutions: string;
  liveUrl: string;
  githubUrl: string;
}

export function ProjectsSection() {
  const ref = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Projeto Dashbord Portuario',
      description: 'Dashboard com IA que conecta, otimiza e transforma a eficiência dos portos.',
      image: '/images/imagem02.png',
      tags: ['Python','Streamlit', 'n8n', 'JavaScript (fetch API)', 'Pandas '],
      detailedDescription: 'O Projeto Portuário, é uma solução inovadora que visa centralizar a comunicação, otimizar processos logísticos e reduzir falhas operacionais nos portos brasileiros.',
      challenges: 'A ausência de uma comunicação clara e coordenada entre arrendatários, operadores e autoridades portuárias gera atrasos e dificulta a integração das atividades, afetando diretamente a eficiência dos portos.O projeto nasceu para resolver exatamente esse problema, atacando as principais dores: Falta de comunicação integrada; Processos lentos e fragmentados; Atrasos operacionais e conflitos de berços; Falhas em equipamentos e fatores externos.',
      solutions: 'O Dashboard Portuário integra comunicação, inteligência e operação em uma única plataforma, com os seguintes módulos principais: Centralização da Comunicação, Painel Unificado, Fluxo Operacional Integrado, Acompanhamento em Tempo Real, IA Assistente, Chatbot Inteligente, Chat Online',
      liveUrl: 'https://projeto-dashbord-portuario-gu3sumq9v5t53mu5rbhqdo.streamlit.app/',
      githubUrl: 'https://github.com/GuilhermeVideira/Projeto-Dashbord-Portuario',
    },
    {
      id: 2,
      title: 'Projeto Aplicativo VIA (Viagem Infraestruturada)',
      description: 'Aplicativo integrado ás funcionalidades práticas ao transporte ferroviário.',
      image: '/images/imagem03.jfif',
      tags: ['C#', 'ASP.NET WEB API', 'SignalR', 'Entity Framework Core', 'JSON', 'Dart', 'Flutter', 'MySQL'],
      detailedDescription: 'O projeto VIA visa facilitar e melhorar a experiência de quem utiliza o transporte ferroviário, integrando tecnologia e inovação para oferecer mais praticidade, eficiência e segurança.',
      challenges: 'Renderizar grandes volumes de dados sem comprometer a performance.',
      solutions: 'Implementei funcionalidades cujo melhoram a experiência do usuário, como: Informações em tempo real, Rastreamento de trajetos, Consulta de pontos turisticos, Planejamento de rotas,  Histórico de viagens, Feedback dos usuários',
      liveUrl: 'Disponivel apenas localmente',
      githubUrl: 'https://github.com/GuilhermeVideira/Projeto-Aplicativo-VIA',
    },
    {
      id: 3,
      title: 'Projeto Monitoramento em Tempo Real - Microrrobôs Ambientais',
      description: 'Dashboard inteligente com processamento de moniteramento de microrrobôs.',
      image: '/images/imagem06.png',
      tags: ['TypeScript', 'JavaScript', 'CSS'],
      detailedDescription: 'Desenvolvi um painel unificado capaz de monitorar microrrobôs ambientais de manuntenção preventiva de microdragagem retirando pequenos acúmulos de sendimentos.',
      challenges: 'Treinar modelo de eficiente a integrar conexão de informações aos microrrobôs, e cálculo médio métrico de relatório e previsões de IA.',
      solutions: 'Utilizei um painel dashborad, visualizando em tempo real o mapa da localização, dados cientificos, Insights, análise de correlação do ambiente marinho, status gerais especificos a cada dispositivo, controle manual, visualiççao completa de histórico, manutenção e perfomece, e métricas detalhadas de relátorios e alertas de inteligência artificial.',
      liveUrl: 'https://projeto-caranguejo-sentinela-3l4o61vc1.vercel.app/',
      githubUrl: 'https://github.com/GuilhermeVideira/Projeto-Carangueijo-Sentinela',
    },
    {
      id: 4,
      title: 'Projeto Aplicativo de Estudos SelfStudy',
      description: 'Aplicação mobile de um aplicativo de estudos.',
      image: '/images/imagem05.png',
      tags: ['JavaScript', 'Mysql', 'CSS'],
      detailedDescription: 'Criei um aplicativo completo de gerenciamento de tarefas de estudos.',
      challenges: 'Implementar chatbot fluido e gerenciar permissões de usuários.',
      solutions: 'Utilizei diversas soluções aplicadas, como: acesso aos componentes curriculares, registro de humor do usuário, consulta de datas, chatbot interativo, anotações, verificação de bateria do aparelho, cronômetro',
      liveUrl: 'Disponivel apenas localmente',
      githubUrl: 'https://github.com/GuilhermeVideira/Projeto-Aplicativo-de-Estudos-SelfStudy',
    },
    {
      id: 5,
      title: 'Projeto Aplicativo UnFore - Rede de Voluntariados',
      description: 'Rede de voluntariados á apoio de danos causados por problemas climáticos, obras ou acidentes.',
      image: '/images/imagem04.jfif',
      tags: ['Java Script', 'HTML', 'CSS'],
      detailedDescription: 'Desenvolvi uma aplicação mobile de rede de voluntariados para ajudar a conter os danos causados por problemas climáticos, obras ou acidentes no município de Mongaguá.',
      challenges: 'Sincronização em tempo real entre múltiplos usuários e otimização para mobile.',
      solutions: ' Funcionalidades do UnFore: Registro e consulta de relatos de pedidos de ajuda, Conexão para doações de alimentos, vestuários e itens básicos, Organização de equipes de voluntários para ações práticas em desastres, Suporte psicológico via chat, ajudando pessoas que enfrentam traumas e perdas,  Histórico de trabalhos voluntários e sistema de pontuação para incentivar o voluntariado.',
      liveUrl: 'https://guilhermevideira.github.io/Projeto-Aplicativo-UnForen/index.html',
      githubUrl: 'https://github.com/GuilhermeVideira/Projeto-Aplicativo-UnForen',
    },
    {
      id: 6,
      title: 'Projeto Sistema de Compras',
      description: 'Sistema operacional de uma loja online.',
      image: '/images/imagem07.png',
      tags: ['CSharp'],
      detailedDescription: 'Criei um sistema personalizado para gerenciar funções práticas de uma loja online.',
      challenges: 'Criar interface intuitiva e flexível para edição de conteúdo com CSharp',
      solutions: 'Implementei funções gerais práticas de cadastro de clientes, fornecedores, usuários, contas a pagar e contas a regitrar. Aplicando também a consulta, alterações de registros, e juntamente o relatório geral das aplicações funcionais. ',
      liveUrl: 'Disponivel apenas localmente',
      githubUrl: 'https://github.com/GuilhermeVideira/Projeto-Contas',
    },
  ];

  return (
    <>
      <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">
              <span className="text-sm uppercase tracking-wider text-orange-500">Portfólio</span>
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl">
              Projetos em{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                destaque
              </span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-accent text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-accent text-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Hover Actions */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg text-sm hover:shadow-lg transition-shadow"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 float-right mr-4 p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {/* Image */}
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <h2 className="mb-4">{selectedProject.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-lg bg-accent text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="mb-2 text-orange-500">Descrição</h4>
                  <p className="text-muted-foreground">{selectedProject.detailedDescription}</p>
                </div>

                <div>
                  <h4 className="mb-2 text-orange-500">Desafios</h4>
                  <p className="text-muted-foreground">{selectedProject.challenges}</p>
                </div>

                <div>
                  <h4 className="mb-2 text-orange-500">Soluções</h4>
                  <p className="text-muted-foreground">{selectedProject.solutions}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.liveUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-shadow"
                >
                  <ExternalLink className="w-5 h-5" />
                  Ver Projeto
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-foreground rounded-xl border border-border transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Ver Código
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
