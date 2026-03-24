'use client';

// Atualização final para o Vercel - Correção de imagens e logo
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ArrowUpRight, MessageCircle, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = "5581989410925";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`;

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Parallax for Hero Image
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroImageY = useTransform(heroScrollY, [0, 1], ["0%", "25%"]);
  const heroTextY = useTransform(heroScrollY, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: "01",
      title: "Seu Estilo, Sua Casa",
      category: "Design de Interiores",
      src: "/544817979_17861194389471962_7393712356043001417_n.webp",
      align: "left"
    },
    {
      id: "02",
      title: "Cortina Romana",
      category: "Praticidade e Controle de Luz",
      src: "/553478671_18334232917224689_476108177435869854_n.jpg",
      align: "right"
    },
    {
      id: "03",
      title: "Sala de Estar",
      category: "Cortinas Sob Medida",
      src: "/553951945_18334232932224689_7645658240316805964_n.jpg",
      align: "center"
    },
    {
      id: "04",
      title: "Cortina Tradicional",
      category: "Aconchego e Sofisticação",
      src: "/524452998_17856004287471962_4662601718407677164_n.jpg",
      align: "left"
    },
    {
      id: "05",
      title: "Composição de Texturas",
      category: "Harmonia e Personalidade",
      src: "/554857802_18334232935224689_419898895525272991_n.jpg",
      align: "right"
    },
    {
      id: "06",
      title: "Quarto Casal",
      category: "Conforto e Elegância",
      src: "/569190941_17865780957471962_7371738027080954022_n.webp",
      align: "center"
    }
  ];

  const services = [
    { title: 'Cortinas e Persianas', desc: 'Controle de luminosidade com elegância e sob medida para seu espaço.' },
    { title: 'Revestimentos', desc: 'Texturas exclusivas e sofisticadas para paredes e superfícies.' },
    { title: 'Pisos Premium', desc: 'Vinílicos, laminados e carpetes de alto padrão de durabilidade.' },
  ];

  const brands = ['Tarkett', 'Belgotex', 'Santa Luzia', 'Columbia', 'Real', 'Eucafloor'];

  return (
    <main className="min-h-screen bg-tok-beige text-tok-black font-sans selection:bg-tok-gold selection:text-tok-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-tok-beige/90 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* LOGO CSS (Mantido exatamente como aprovado) */}
          <a href="#" className="z-50 relative group">
            <div className="relative flex flex-col items-center justify-center bg-[#0a0a0a] border border-[#D4AF37] rounded-tr-[16px] rounded-bl-[16px] px-5 py-2 overflow-hidden transition-transform duration-500 group-hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#fff_2px,#fff_4px)]"></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-sans text-xl tracking-[0.15em] font-normal leading-none bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#C5A059] bg-clip-text text-transparent">TOK</span>
                <span className="font-sans text-[8px] tracking-[0.3em] font-light mt-1 bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#C5A059] bg-clip-text text-transparent">DESIGN</span>
              </div>
            </div>
          </a>
          
          <nav className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium">
            {['Sobre', 'Projetos', 'Serviços', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-tok-gold transition-colors relative group overflow-hidden">
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-tok-gold transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </a>
            ))}
          </nav>

          <button className="md:hidden z-50 relative p-2 text-tok-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-tok-beige z-40 flex flex-col items-center justify-center gap-10"
          >
            {['Sobre', 'Projetos', 'Serviços', 'Contato'].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-5xl hover:text-tok-gold transition-colors italic"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO (BEHANCE EDITORIAL STYLE) */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center bg-tok-beige overflow-hidden">
        
        {/* Right Image Container */}
        <div className="absolute top-0 right-0 w-full md:w-[65%] h-full overflow-hidden z-0">
          <motion.div 
            style={{ y: heroImageY, scale: 1.05 }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <Image 
              src="/617592423_17874456582471962_475829678467299139_n.webp"
              alt="Interior sofisticado e moderno"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlay on mobile for text readability, subtle on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-tok-black/90 via-tok-black/40 to-transparent md:bg-gradient-to-r md:from-tok-beige md:via-tok-beige/20 md:to-transparent"></div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-end md:justify-center pb-32 md:pb-0">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-tok-gold text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6 block drop-shadow-md md:drop-shadow-none">
                Estúdio de Interiores
              </span>
              <h1 className="font-serif text-[3.5rem] sm:text-7xl md:text-[110px] lg:text-[130px] leading-[1.05] md:leading-[0.9] tracking-tight text-tok-white md:text-tok-black mb-6 md:mb-8">
                Design <br />
                <span className="italic text-tok-gold font-light">com alma.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="font-sans text-[15px] md:text-lg font-light tracking-wide mb-10 md:mb-12 max-w-md text-tok-white/90 md:text-tok-black/70 leading-[1.7] md:leading-relaxed drop-shadow-md md:drop-shadow-none"
            >
              Curadoria de acabamentos e decoração de alto padrão para ambientes que inspiram e transformam.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                className="group inline-flex items-center gap-4 border-b border-tok-white md:border-tok-black pb-2 text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-tok-white md:text-tok-black hover:text-tok-gold hover:border-tok-gold transition-all duration-300 drop-shadow-md md:drop-shadow-none"
              >
                Descubra a Tok <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Social Links - Vertical */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-20"
        >
          <a href="https://instagram.com/_tokdesign" target="_blank" className="text-tok-white text-[10px] uppercase tracking-[0.3em] hover:text-tok-gold transition-colors" style={{ writingMode: 'vertical-rl' }}>Instagram</a>
          <div className="w-[1px] h-12 bg-tok-white/30"></div>
          <a href={WHATSAPP_LINK} target="_blank" className="text-tok-white text-[10px] uppercase tracking-[0.3em] hover:text-tok-gold transition-colors" style={{ writingMode: 'vertical-rl' }}>WhatsApp</a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden md:flex absolute bottom-10 left-12 flex-col items-center gap-4 z-20 text-tok-black"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-[1px] h-12 bg-tok-black/30 relative overflow-hidden">
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-tok-black"
            />
          </div>
        </motion.div>

      </section>

      {/* ABOUT (ASYMMETRIC LAYOUT) */}
      <section id="sobre" className="py-24 md:py-48 bg-tok-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
            
            <div className="md:col-span-5 md:col-start-2 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-[120vw] md:h-[700px] w-full overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.08 }}
                  whileHover={{ scale: 1.12 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src="/566526770_17865779706471962_6361482048050327975_n.webp"
                    alt="Detalhe de decoração"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>
            </div>

            <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.2em] text-tok-gold font-bold mb-6 block"
              >
                O Estúdio
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[2.75rem] md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.05] mb-8 md:mb-10 tracking-tight"
              >
                A essência <br/>do <span className="text-tok-gold italic font-light">bem viver.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-[15px] md:text-lg text-tok-black/70 font-light leading-[1.8] md:leading-relaxed mb-8 md:mb-10"
              >
                A TOK DESIGN cria ambientes que transcendem a estética. Somos especialistas em curadoria de acabamentos e decoração de alto padrão, entregando projetos que refletem a identidade e o estilo de vida de cada cliente, com precisão e exclusividade.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Image 
                  src="/620511179_17875089489471962_8450515293666265974_n.jpg" 
                  alt="Textura" 
                  width={200} 
                  height={100} 
                  className="opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS (EDITORIAL GALLERY) */}
      <section id="projetos" className="py-32 md:py-48 bg-tok-beige">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-40 gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif text-5xl md:text-7xl leading-[1.1]"
            >
              Projetos <br/><span className="italic text-tok-gold">Selecionados</span>
            </motion.h2>
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="https://instagram.com/_tokdesign" 
              target="_blank" 
              className="text-xs uppercase tracking-[0.2em] font-medium border-b border-tok-black pb-1 hover:text-tok-gold hover:border-tok-gold transition-colors"
            >
              Ver Portfólio Completo
            </motion.a>
          </div>
          
          <div className="space-y-32 md:space-y-48">
            {projects.map((project, i) => (
              <div 
                key={project.id} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  project.align === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative overflow-hidden ${
                    project.align === 'center' 
                      ? 'md:col-span-10 md:col-start-2 h-[60vh] md:h-[80vh]' 
                      : project.align === 'right'
                        ? 'md:col-span-7 md:col-start-6 h-[50vh] md:h-[70vh] order-1 md:order-2'
                        : 'md:col-span-7 h-[50vh] md:h-[70vh] order-1'
                  }`}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.08 }}
                    whileHover={{ scale: 1.12 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                  >
                    <Image 
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </motion.div>

                {/* Text */}
                <motion.div 
                  initial={{ opacity: 0, x: project.align === 'right' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col justify-center ${
                    project.align === 'center'
                      ? 'md:col-span-12 text-center items-center mt-8'
                      : project.align === 'right'
                        ? 'md:col-span-4 md:col-start-1 order-2 md:order-1'
                        : 'md:col-span-4 md:col-start-9 order-2'
                  }`}
                >
                  <span className="text-tok-gold text-2xl md:text-3xl font-serif italic mb-4 block">{project.id}</span>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">{project.title}</h3>
                  <p className="text-tok-black/50 uppercase tracking-[0.15em] text-xs font-medium">{project.category}</p>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES (MINIMALIST ACCORDION/LIST) */}
      <section id="servicos" className="py-32 md:py-48 bg-tok-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
          <div className="grid md:grid-cols-12 gap-16">
            
            <div className="md:col-span-4">
              <span className="text-xs uppercase tracking-[0.2em] text-tok-gold font-bold mb-6 block">Expertise</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 tracking-tight">
                Soluções <br/>sob medida.
              </h2>
              <p className="text-tok-black/60 font-light leading-relaxed">
                Trabalhamos com as melhores marcas do mercado para garantir acabamento impecável e durabilidade.
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="grid grid-cols-1 gap-6">
                {services.map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="group bg-white border border-tok-black/5 p-8 md:p-12 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-tok-gold/30 transition-all duration-500 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <h3 className="font-serif text-3xl md:text-4xl group-hover:text-tok-gold transition-colors">{service.title}</h3>
                    <p className="text-tok-black/50 font-light max-w-sm text-sm md:text-base leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-24 md:py-32 bg-tok-beige overflow-hidden border-y border-tok-black/5">
        <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-16 text-center">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-tok-black/40 font-medium">Marcas Parceiras</span>
        </div>
        <div className="relative w-full flex overflow-hidden">
          {/* Left/Right Gradient Masks for smooth fade */}
          <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-tok-beige to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-tok-beige to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <span 
                key={i} 
                className="font-serif text-3xl md:text-5xl tracking-widest text-tok-black/20 hover:text-tok-gold transition-colors duration-500 cursor-default mx-8 md:mx-16"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL (IMPACT) */}
      <section id="contato" className="py-32 md:py-48 bg-tok-black text-tok-beige text-center px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tok-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-12 tracking-tight">
            Seu projeto <br/><span className="text-tok-gold italic font-light">começa aqui.</span>
          </h2>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            className="group inline-flex items-center gap-6 border border-tok-beige/20 bg-transparent hover:bg-tok-gold hover:border-tok-gold hover:text-tok-black px-12 py-6 text-xs md:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500"
          >
            Fale no WhatsApp <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-tok-black text-tok-beige/50 pt-16 pb-32 md:py-16 px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* LOGO CSS REPLICADO NO RODAPÉ */}
          <div className="relative flex flex-col items-center justify-center bg-[#0a0a0a] border border-[#D4AF37] rounded-tr-[20px] rounded-bl-[20px] px-6 py-3 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#fff_2px,#fff_4px)]"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-sans text-2xl tracking-[0.15em] font-normal leading-none bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#C5A059] bg-clip-text text-transparent">TOK</span>
              <span className="font-sans text-[10px] tracking-[0.3em] font-light mt-1.5 bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#C5A059] bg-clip-text text-transparent">DESIGN</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a 
              href="https://instagram.com/_tokdesign" 
              target="_blank" 
              className="text-tok-beige/50 hover:text-tok-gold transition-colors duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              className="text-tok-beige/50 hover:text-tok-gold transition-colors duration-300 group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            </a>
          </div>
          
          <div className="text-xs font-light text-center md:text-right tracking-widest leading-loose md:pr-48">
            Rua Gonçalves Dias, 194<br/>
            Maurício de Nassau, Caruaru-PE
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 bg-tok-black/95 backdrop-blur-xl text-tok-white border border-tok-gold/30 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:bg-tok-gold hover:text-tok-black hover:border-tok-gold hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-500 overflow-hidden pr-5 pl-2 py-2"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="relative flex items-center justify-center w-10 h-10 bg-tok-gold/10 group-hover:bg-tok-black/10 rounded-full transition-colors duration-500">
          <MessageCircle className="w-5 h-5 text-tok-gold group-hover:text-tok-black transition-colors duration-500" />
          <span className="absolute inset-0 rounded-full border border-tok-gold/50 animate-ping opacity-30 group-hover:opacity-0" style={{ animationDuration: '3s' }}></span>
        </div>
        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
          WhatsApp
        </span>
      </motion.a>
    </main>
  );
}
