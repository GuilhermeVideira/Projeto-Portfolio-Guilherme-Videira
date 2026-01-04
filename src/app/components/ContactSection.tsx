import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs
    .send(
      'service_7pwa3ql',
      'template_mdzylzy',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'wOliAAJnL586tDIN_'
    )
    .then(
      () => {
        alert('Mensagem enviada com sucesso! Obrigado!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error(error);
        alert('Erro ao enviar a mensagem. Tente novamente.');
      }
    );
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'guifvideira@gmail.com',
      href: 'mailto:guifvideira@gmail.com',
      color: 'from-orange-500 to-pink-500',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (13) 99637-4996',
      href: 'tel:+5513996374996',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/guilherme-videira-5b147b238/',
      color: 'hover:text-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/GuilhermeVideira',
      color: 'hover:text-purple-500',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      href: 'https://wa.me/5513996374996',
      color: 'hover:text-green-500',
    },
  ];

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="text-sm uppercase tracking-wider text-orange-500">Contato</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Vamos trabalhar{' '}  
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              juntos?
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades. Entre em contato e vamos criar algo incrível!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h4 className="mb-6">Informações de Contato</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="group-hover:text-orange-500 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-4 rounded-xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 border border-orange-500/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl" />
              <div className="relative z-10">
                <h4 className="mb-2">Disponível para Freelance</h4>
                <p className="text-sm text-muted-foreground">
                  Aceito projetos interessantes e desafiadores. Vamos conversar sobre sua ideia!
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute -top-2 left-4 px-2 bg-background text-xs transition-colors duration-200 ${
                    focusedField === 'name' ? 'text-orange-500' : 'text-muted-foreground'
                  }`}
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-3 bg-card border rounded-xl transition-all duration-200 outline-none ${
                    focusedField === 'name'
                      ? 'border-orange-500 shadow-lg shadow-orange-500/10'
                      : 'border-border'
                  }`}
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute -top-2 left-4 px-2 bg-background text-xs transition-colors duration-200 ${
                    focusedField === 'email' ? 'text-orange-500' : 'text-muted-foreground'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-3 bg-card border rounded-xl transition-all duration-200 outline-none ${
                    focusedField === 'email'
                      ? 'border-orange-500 shadow-lg shadow-orange-500/10'
                      : 'border-border'
                  }`}
                  placeholder="seu@email.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute -top-2 left-4 px-2 bg-background text-xs transition-colors duration-200 ${
                    focusedField === 'message' ? 'text-orange-500' : 'text-muted-foreground'
                  }`}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 bg-card border rounded-xl transition-all duration-200 outline-none resize-none ${
                    focusedField === 'message'
                      ? 'border-orange-500 shadow-lg shadow-orange-500/10'
                      : 'border-border'
                  }`}
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enviar Mensagem
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
