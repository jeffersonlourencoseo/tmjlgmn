import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Globe, 
  TrendingUp, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  Instagram, 
  Menu, 
  X, 
  Phone,
  ArrowRight,
  ChevronDown,
  Layout,
  MousePointer2,
  Rocket,
  ShieldCheck,
  Zap,
  Target,
  BarChart3,
  Layers,
  Settings,
  Mail,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Sobre Mim', href: '#sobre-mim' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const primaryBtnClass = "px-8 py-3 bg-brand-green text-white font-bold rounded-[8px] hover:bg-green-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-2";
  const secondaryBtnClass = "px-8 py-3 bg-transparent border-2 border-navy text-white font-bold rounded-[8px] hover:bg-navy/10 transition-all flex items-center justify-center gap-2";

  return (
    <div className="min-h-screen bg-brand-black font-sans text-white tech-grid selection:bg-brand-green/30 selection:text-brand-green">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-navy-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-navy to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5 fill-white" />
            </div>
            <span className="font-display font-extrabold text-xl lg:text-2xl tracking-tighter uppercase italic leading-none text-white">
              TMJL Google Meu Negócio
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-brand-gray hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/5521997751577" className={primaryBtnClass}>
              Fale no WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }} 
              className="lg:hidden absolute top-full left-0 w-full bg-navy-dark border-b border-white/5 p-8 flex flex-col gap-6 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-display font-bold">
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/5521997751577" className={primaryBtnClass}>
                Fale no WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-24 lg:pt-60 lg:pb-48 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="lg:w-3/4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy/30 border border-navy/50 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-navy">Estrategista Google Meu Negócio</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8"
            >
              Domine seu Bairro, <br /> <span className="text-gradient">Região ou Cidade!</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Mais clientes encontrando seu negócio no Google — converta buscas em faturamento real.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} text-lg py-4`}>
                Diagnóstico Grátis Agora <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is GMN Section */}
      <section id="o-que-e-gmn" className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6">O que é o <span className="text-brand-green">Google Meu Negócio?</span></h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">Entenda como essa ferramenta gratuita é o segredo para o sucesso de empresas locais.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <div className="p-8 bg-brand-black border border-white/5 rounded-3xl hover:border-brand-green/20 transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
                <Search className="text-navy w-6 h-6 group-hover:text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 italic">A ferramenta</h3>
              <p className="text-brand-gray text-base leading-relaxed">É a plataforma que permite que sua empresa apareça no Google quando alguém busca por produtos ou serviços na sua região.</p>
            </div>

            <div className="p-8 bg-brand-black border border-white/5 rounded-3xl hover:border-brand-green/20 transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                <MapPin className="text-brand-green w-6 h-6 group-hover:text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 italic">Onde você aparece?</h3>
              <p className="text-brand-gray text-base leading-relaxed">Seu negócio é encontrado no Google Maps, exibindo informações como telefone, endereço, horário de funcionamento, avaliações e fotos.</p>
            </div>

            <div className="p-8 bg-brand-black border border-white/5 rounded-3xl hover:border-brand-green/20 transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <Target className="text-purple-500 w-6 h-6 group-hover:text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 italic">Qual o objetivo?</h3>
              <p className="text-brand-gray text-base leading-relaxed">Conectar sua empresa com pessoas que já estão procurando pelo que você oferece, no momento exato da intenção de compra.</p>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent z-10 pointer-events-none"></div>
              <img 
                src="/assets/gmn-modelo.jpg" 
                alt="Exemplo Google Meu Negócio" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" 
                referrerPolicy="no-referrer" 
                loading="lazy" 
              />
              <div className="absolute bottom-6 left-6 z-20">
                 <div className="px-4 py-2 bg-brand-green/90 backdrop-blur-md rounded-lg text-white font-bold text-xs uppercase tracking-widest shadow-xl border border-white/20">Perfil Otimizado</div>
              </div>
            </div>
          </div>

          <div className="bg-brand-black/50 border border-white/5 p-10 lg:p-16 rounded-[40px] relative overflow-hidden mb-16">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-green"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-3xl font-black mb-6 italic">Por que isso é importante para o seu negócio?</h3>
                <p className="text-brand-gray leading-relaxed mb-6">Quando bem estruturado, seu perfil no Google não apenas te coloca na frente da concorrência, mas facilita a decisão do cliente.</p>
                <div className="flex justify-start">
                  <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} px-8`}>
                    <Zap className="w-5 h-5 fill-white" /> Potencializar meu Perfil
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "Aumenta sua visibilidade nas buscas locais",
                  "Gera mais contatos (ligações e mensagens)",
                  "Transmite mais confiança através de avaliações",
                  "Facilita a decisão do cliente"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-navy-dark/50 border border-white/5 rounded-2xl">
                    <CheckCircle2 className="text-brand-green w-5 h-5 shrink-0" />
                    <span className="font-bold text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-10 text-center text-brand-gray italic">Não se trata apenas de “estar no Google”, mas de ser encontrado e escolhido.</p>
          </div>
          
          <div className="flex justify-center">
            <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} px-10`}>
              <MessageCircle className="w-5 h-5" /> Fale no Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-24 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6">Serviços</h2>
            <div className="h-1 lg:w-32 mx-auto lg:mx-0 bg-brand-green"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ServiceCard 
              icon={<MapPin className="text-brand-green w-8 h-8" />}
              title="Criação / Otimização do Google Meu Negócio"
              description="Criamos e/ou otimizamos seu perfil no Google Meu Negócio para aumentar sua visibilidade e atrair mais clientes de forma consistente."
            />
            <ServiceCard 
              icon={<Layout className="text-purple-500 w-8 h-8" />}
              title="Criação de Sites"
              description="Foco em transmitir autoridade, seriedade e qualidade no produto ou serviço. Posicionamento profissional e premium para converter visitantes em WhatsApp."
            />
            <ServiceCard 
              icon={<Settings className="text-navy w-8 h-8" />}
              title="Gestão Mensal (GMB)"
              description="Manutenção de autoridade, atualizações constantes e gerenciamento profissional de avaliações."
            />
          </div>
          <div className="flex justify-center">
            <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} px-10`}>
              <MessageCircle className="w-5 h-5" /> Fale no Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* How it Works - Tech Minimalist */}
      <section id="como-funciona" className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight">Engenharia de <span className="text-brand-green">Resultados</span></h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto leading-relaxed">Combinamos análise estratégica de dados com design orientado à conversão para transformar sua presença digital em um canal consistente de geração de clientes</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/2 text-left">
               <div className="space-y-8">
                  <ProcessStep num="01" title="Diagnóstico" text="Análise completa do seu perfil e presença no Google, identificando oportunidades de melhoria e pontos que limitam sua visibilidade." />
                  <ProcessStep num="02" title="Estratégia" text="Definição de palavras-chave e planejamento estratégico para posicionar sua empresa de forma mais competitiva nas buscas locais." />
                  <ProcessStep num="03" title="Execução" text="Aplicação das otimizações no Google Meu Negócio, incluindo estruturação do perfil, ajustes técnicos e melhorias visuais." />
                  <ProcessStep num="04" title="Acompanhamento" text="Monitoramento contínuo de desempenho, com ajustes estratégicos e análise de resultados ao longo do tempo." />
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-black p-8 rounded-2xl border border-white/5 relative group shrink-0">
                  <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/10 transition-colors rounded-2xl"></div>
                  <Target className="text-navy w-10 h-10 mb-4 relative z-10" />
                  <h4 className="font-display font-bold text-xl mb-2 relative z-10">Segmentação</h4>
                  <p className="text-xs text-brand-gray relative z-10">Direto no alvo do seu público local.</p>
                </div>
                <div className="bg-brand-black p-8 rounded-2xl border border-white/5 relative group mt-8">
                   <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-brand-green/10 transition-colors rounded-2xl"></div>
                   <BarChart3 className="text-brand-green w-10 h-10 mb-4 relative z-10" />
                   <h4 className="font-display font-bold text-xl mb-2 relative z-10">Escalabilidade</h4>
                   <p className="text-xs text-brand-gray relative z-10">Crescimento constante e monitorado.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} px-10`}>
              <MessageCircle className="w-5 h-5" /> Fale no Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="font-display text-4xl md:text-5xl font-black">Cases de <span className="text-navy italic">Impacto</span></h2>
            <a href="#contato" className="text-brand-green font-bold flex items-center gap-2 group">
              Quero esses resultados <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <PortfolioCard 
              title="Casa do Brincar | Colônia de Férias" 
              image="/assets/casa-brincar.jpg"
              desc="85% a mais de solicitações de rota e aumento drástico na visibilidade orgânica local."
              siteUrl="https://casadobrincar.vercel.app/"
              mapsUrl="https://www.google.com/maps/place/Casa+do+Brincar+%7C+Col%C3%B4nia+de+F%C3%A9rias/@-22.8447587,-43.3290958,17z/data=!3m1!4b1!4m6!3m5!1s0x997d86f6d7ca29:0xe50e9be7ac468ba5!8m2!3d-22.8447637!4d-43.3265155!16s%2Fg%2F11z2l9cwhm"
            />
            <PortfolioCard 
              title="URUS BARBERSHOP | BARBEARIA PREMIUM" 
              image="/assets/urus-barbershop.jpg"
              desc="Landing page integrada que gerou recorde de faturamento no semestre com GMN otimizado."
              siteUrl="https://urusbarbershop.vercel.app/"
              mapsUrl="https://www.google.com/maps/place/URUS+BARBERSHOP+%7C+BARBEARIA+PREMIUM/@-26.3604523,-48.8360195,17z/data=!3m1!4b1!4m6!3m5!1s0x94deb70e6d5ae363:0x4faf8cb607a3d039!8m2!3d-26.3604571!4d-48.8334392!16s%2Fg%2F11n51jsyjg"
            />
          </div>
          <div className="flex justify-center">
            <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} px-10`}>
              <MessageCircle className="w-5 h-5" /> Fale no Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-navy-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-8">O que dizem os parceiros.</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-brand-green fill-brand-green" />)}
              </div>
              <span className="font-bold text-xl text-white">5.0 / 5.0</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialItem 
              author="Ricardo Almeida" 
              text="O trabalho foi muito bem feito. Nosso perfil no Google ficou mais completo e começamos a receber mais contatos direto por lá." 
            />
            <TestimonialItem 
              author="Carla Mendes" 
              text="Depois da otimização no Google Meu Negócio, ficou muito mais fácil dos clientes encontrarem a gente. Fez diferença no dia a dia." 
            />
            <TestimonialItem 
              author="Bruno Carvalho" 
              text="O site ficou profissional e organizado. Passa muito mais confiança e ajudou bastante na conversão de clientes." 
            />
            <TestimonialItem 
              author="Juliana Rocha" 
              text="A gente não tinha noção de quanto estava deixando de aparecer no Google. Depois do trabalho, a visibilidade melhorou bastante." 
            />
            <TestimonialItem 
              author="André Martins" 
              text="Gostei muito da estratégia aplicada. O perfil ficou bem estruturado e o site ajudou a transformar visitas em contatos reais." 
            />
            <TestimonialItem 
              author="Marcos Oliveira" 
              text="A consultoria foi prática e direta ao ponto. Em pouco tempo, o fluxo de clientes vindos do Google aumentou e o site se tornou nossa principal ferramenta de vendas." 
            />
          </div>
          <div className="flex justify-center mt-16">
            <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} px-10`}>
              <MessageCircle className="w-5 h-5" /> Fale no Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="sobre-mim" className="py-24 bg-brand-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-navy/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
            <div className="lg:w-3/4">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-10 leading-tight text-center">Quem <span className="text-brand-green">sou?</span></h2>
              <div className="space-y-6 text-base md:text-lg text-brand-gray leading-relaxed text-justify max-w-3xl mx-auto">
                <p>Sou <span className="text-white font-bold">Jefferson Lourenço</span>, e meu foco é ajudar empresas a se posicionarem de forma estratégica no Google e transformarem sua presença digital em uma fonte consistente de oportunidades.</p>
                <p>Em um cenário onde muitos ainda tratam o digital de forma genérica, meu trabalho é construir estruturas sólidas, com foco em <span className="text-white font-bold">visibilidade, clareza e desempenho</span>.</p>
                <p>Atuo com criação e otimização de perfis no Google Meu Negócio, além do desenvolvimento de sites com foco comercial — pensados não apenas para estética, mas para gerar percepção de valor e facilitar a conversão.</p>
                <p className="text-white font-bold text-lg">Acredito que não basta estar presente no digital. É preciso estar bem posicionado, com uma comunicação clara e uma estrutura que gere confiança desde o primeiro contato.</p>
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4 border-y border-white/5 text-left">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 border border-navy/20 flex items-center justify-center shrink-0">
                      <span className="text-brand-green font-black">01</span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm mb-1 uppercase tracking-tight">Estratégico</p>
                      <p className="text-xs text-brand-gray">Diagnóstico e Planejamento sob medida.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0">
                      <span className="text-brand-green font-black">02</span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm mb-1 uppercase tracking-tight">Execução</p>
                      <p className="text-xs text-brand-gray">Foco em Resultados e Acompanhamento.</p>
                    </div>
                  </div>
                </div>
                <p className="pt-4 italic text-brand-gray text-base mb-10">Meu objetivo é construir uma presença digital organizada, profissional e preparada para gerar resultados de forma consistente.</p>
                <div className="flex justify-center">
                  <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} px-10`}>
                    <MessageCircle className="w-5 h-5" /> Fale no Whatsapp
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 relative group text-center flex justify-center">
               <div className="relative z-10 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 glow-blue border-4 border-white/10 w-48 h-48 md:w-64 md:h-64 shrink-0">
                 <img src="/assets/jefferson.jpg" alt="Jefferson Lourenço" className="w-full h-full object-cover" loading="lazy" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent flex flex-col justify-end p-6">
                   <p className="text-brand-green font-bold text-[8px] tracking-widest uppercase">Estrategista Google</p>
                 </div>
               </div>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-brand-green/20 rounded-full -z-10 rotate-12 transition-transform group-hover:rotate-0 duration-700 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl font-black text-center mb-16">Dúvidas <span className="text-brand-green">Frequentes</span></h2>
          <div className="space-y-4">
            <FAQItem 
              question="O Google Meu Negócio e o Site fazem parte do mesmo pacote?" 
              answer="Não. São produtos distintos com preços diferentes. Você pode contratar apenas a otimização do seu perfil no Google, apenas a criação do site, ou ambos, dependendo da necessidade atual da sua empresa." 
            />
            <FAQItem 
              question="Qual a diferença de objetivo entre os dois serviços?" 
              answer="O Google Meu Negócio tem como foco principal as buscas; ele faz o cliente te encontrar. O site tem como foco a autoridade; ele convence o cliente de que você é a melhor opção e o direciona para o seu WhatsApp." 
            />
            <FAQItem 
              question="Preciso ter os dois para ter resultados?" 
              answer="Não necessariamente. Muitos negócios começam apenas com o Google Meu Negócio para ganhar visibilidade local rápida. O site é o próximo passo para quem deseja um posicionamento mais profissional e premium no mercado." 
            />
          </div>
          <div className="flex justify-center mt-16">
            <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} px-10`}>
              <MessageCircle className="w-5 h-5" /> Fale no Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-navy-dark to-navy p-12 lg:p-24 rounded-[40px] text-center shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-10"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-7xl font-black mb-8 leading-tight">Vamos Dominar seu <br className="hidden md:block" /> <span className="text-brand-green italic">Bairro, Região ou Cidade?</span></h2>
              <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">Não deixe mais clientes irem para o concorrente por falta de uma estratégia profissional.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://wa.me/5521997751577" className={`${primaryBtnClass} text-xl py-6 px-16`}>
                   <MessageCircle className="w-7 h-7" /> Fale no Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section id="contatos-diretos" className="py-24 bg-navy-dark relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-black mb-12">Canais de Atendimento</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-10">
            <a 
              href="https://wa.me/5521997751577" 
              className="flex items-center justify-between gap-6 p-6 bg-brand-black border border-white/5 rounded-2xl hover:border-brand-green/30 transition-all group lg:min-w-[320px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-brand-gray tracking-widest">WhatsApp</p>
                  <p className="font-bold text-white whitespace-nowrap">(21) 99775-1577</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-brand-green opacity-0 group-hover:opacity-100 transition-all" />
            </a>

            <a 
              href="mailto:jeffersonlourencoseo@gmail.com" 
              className="flex items-center justify-between gap-6 p-6 bg-brand-black border border-white/5 rounded-2xl hover:border-brand-green/30 transition-all group lg:min-w-[320px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-brand-gray tracking-widest">E-mail</p>
                  <p className="font-bold text-white text-sm">jeffersonlourencoseo@gmail.com</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-brand-green opacity-0 group-hover:opacity-100 transition-all" />
            </a>

            <a 
              href="https://instagram.com/jeffersonlseo" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 p-6 bg-brand-black border border-white/5 rounded-2xl hover:border-brand-green/30 transition-all group lg:min-w-[320px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-brand-gray tracking-widest">Instagram</p>
                  <p className="font-bold text-white">@jeffersonlseo</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-brand-green opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-brand-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="w-6 h-6 bg-brand-green rounded-md flex items-center justify-center">
                <Zap className="text-white w-3 h-3 fill-white" />
              </div>
              <span className="font-display font-black text-xl tracking-tighter uppercase italic">TMJL Google Meu Negócio</span>
            </div>
            <p className="text-sm text-brand-gray font-medium">© {new Date().getFullYear()} TMJL Authority Systems. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-10">
            <a href="https://instagram.com" className="text-brand-gray hover:text-white"><Instagram className="w-6 h-6" /></a>
            <a href="https://wa.me/5521997751577" className="text-brand-gray hover:text-white"><Phone className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Buttons */}
      <a 
        href="https://wa.me/5521997751577" 
        className="fixed bottom-8 right-8 z-[1000] w-16 h-16 bg-brand-green text-white flex items-center justify-center rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-brand-black border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-2xl">
          Fale com Jefferson agora
        </span>
      </a>
    </div>
  );
}

function ServiceCard({ icon, title, description }: any) {
  return (
    <div className="p-10 bg-navy-dark border border-white/5 rounded-2xl hover:border-brand-green/30 hover:glow-blue transition-all group">
      <div className="mb-8">{icon}</div>
      <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-brand-green transition-colors">{title}</h3>
      <p className="text-brand-gray leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function ProcessStep({ num, title, text }: any) {
  return (
    <div className="flex gap-6 group">
      <span className="font-display font-black text-3xl text-navy italic group-hover:text-brand-green transition-colors">{num}</span>
      <div>
        <h4 className="font-display font-bold text-xl mb-2">{title}</h4>
        <p className="text-brand-gray text-sm">{text}</p>
      </div>
    </div>
  );
}

function PortfolioCard({ title, image, desc, siteUrl, mapsUrl }: any) {
  return (
    <div className="group bg-navy-dark/30 border border-white/5 p-8 rounded-3xl hover:border-brand-green/30 transition-all">
      <div className="relative overflow-hidden rounded-xl border border-white/5 aspect-video mb-8">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
      </div>
      <div>
        <h3 className="font-display font-bold text-2xl lg:text-3xl group-hover:text-brand-green transition-colors leading-tight mb-4">{title}</h3>
        <p className="text-brand-gray text-base mb-10 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm lg:text-base font-bold text-white hover:text-brand-green transition-colors">
            <Globe className="w-5 h-5 text-brand-green" /> Ver Website
          </a>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm lg:text-base font-bold text-white hover:text-brand-green transition-colors">
            <MapPin className="w-5 h-5 text-brand-green" /> Ver Ficha Google
          </a>
        </div>
      </div>
    </div>
  );
}

function TestimonialItem({ author, company, text }: any) {
  return (
    <div className="p-8 bg-brand-black border border-white/5 rounded-2xl hover:border-navy/50 transition-all group">
       <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-brand-green fill-brand-green" />)}
        </div>
       <p className="text-lg text-brand-gray mb-8 leading-relaxed group-hover:text-white transition-colors">"{text}"</p>
       <div>
         <p className="font-bold text-white mb-1">{author}</p>
         {company && <p className="text-[10px] uppercase font-bold text-navy tracking-widest">{company}</p>}
       </div>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-brand-black border border-white/5 rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors">
        <span className="font-bold">{question}</span>
        <ChevronDown className={`w-5 h-5 text-brand-gray transition-transform ${isOpen ? 'rotate-180 text-brand-green' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
            <div className="p-6 pt-0 text-brand-gray text-sm leading-relaxed border-t border-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

