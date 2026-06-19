'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        alert('Inscrição realizada com sucesso!');
        setModalOpen(false);
        setName('');
        setEmail('');
      } else {
        alert('Erro ao realizar inscrição');
      }
    } catch {
      alert('Erro ao realizar inscrição');
    } finally {
      setLoading(false);
    }
  };

  const portfolioItems = [
    { num: '01', title: 'Anel de Pirita', subtitle: 'Cristais Alto Paraíso', img: '/portfolio/p-1.png' },
    { num: '02', title: 'Anel de Ametista', subtitle: 'Cristais Alto Paraíso', img: '/portfolio/p-2.png' },
    { num: '03', title: 'Anel de Citrino', subtitle: 'Cristais Alto Paraíso', img: '/portfolio/p-3.png' },
    { num: '04', title: 'Anel de Malaquita', subtitle: 'Cristais Alto Paraíso', img: '/portfolio/p-4.png' },
    { num: '05', title: 'Criança', subtitle: 'FOTOGRAFIA', img: '/portfolio/p-5.png' },
    { num: '06', title: 'MODA PRAIA', subtitle: 'Catalogo Moda', img: '/portfolio/p-6.png' },
    { num: '07', title: 'Capa', subtitle: 'Revista Atrevida', img: '/portfolio/p-7.png' },
    { num: '08', title: 'Editorial de Moda', subtitle: 'Revista Atrevida', img: '/portfolio/p-8.png' },
    { num: '09', title: 'Capa', subtitle: 'Revista Corpo a Corpo', img: '/portfolio/p-9.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - fixo no topo */}
<header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
  <div className="container mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
            
      {/* Menu de navegação - centralizado */}
      <nav className="hidden md:flex gap-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gray-800 hover:text-black transition font-medium"
        >
          Home
        </button>
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-800 hover:text-black transition font-medium"
        >
          Sobre
        </button>
        <button 
          onClick={() => {
            const solutionsSection = document.getElementById('solutions');
            if (solutionsSection) solutionsSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-800 hover:text-black transition font-medium"
        >
          Soluções
        </button>
        <button 
          onClick={() => {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) portfolioSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-800 hover:text-black transition font-medium"
        >
          Portfólio
        </button>
      </nav>
      
      {/* Telefone */}
      <a href="tel:67996701851" className="text-gray-800 font-medium hover:text-black transition">
        67 99670 1851
      </a>
    </div>
  </div>
</header>

      {/* Hero - COM IMAGEM DE FUNDO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/hero/bg-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-white max-w-4xl mx-auto">
          
          {/* STUDIO letra por letra */}
          
         {/* STUDIO com sobreposição, letras brancas e leve gradiente cinza - MAIS SEPARADAS */}
<div className="flex justify-start text-6xl md:text-8xl font-bold tracking-tight mb-0">
  <span className="relative -mr-4 bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-lg">
    S
  </span>
  <span className="relative -mr-4 bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
    T
  </span>
  <span className="relative -mr-4 bg-gradient-to-b from-white via-gray-400 to-gray-600 bg-clip-text text-transparent drop-shadow-lg">
    U
  </span>
  <span className="relative -mr-4 bg-gradient-to-b from-white via-gray-500 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">
    D
  </span>
  <span className="relative -mr-4 bg-gradient-to-b from-white via-gray-600 to-gray-800 bg-clip-text text-transparent drop-shadow-lg">
    I
  </span>
  <span className="relative bg-gradient-to-b from-white via-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-lg">
    O
  </span>
</div>

          {/* ON LINE - duas linhas, alinhadas verticalmente */}
<div className="text-left">
  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-0 leading-tight">
    On
  </h1>
  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
    Line
  </h1>
</div>

          {/* Descrição */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Bem-vindo à StudioOnLine, onde acreditamos no poder das ideias para transformar negócios e cativar o público. 
            Nossa equipe de criativos, estrategistas e tecnólogos talentosos trabalham juntos para desenvolver soluções 
            inovadoras que atendam aos seus objetivos e superar suas expectativas.
          </p>

          {/* Botão */}
          <a
            href="https://wa.me/message/PMLBMNWJ64IPP1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Vamos Conversar
          </a>
        </div>
      </section>

      {/* About - Sobre nós */}
<section id="about" className="py-20 px-6 bg-white scroll-mt-20">
  <div className="container mx-auto max-w-6xl">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Imagem - sem corte, mostrando completa */}
      <div className="relative flex justify-center">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="/about/about-image.png"
            alt="Sobre StudioOnLine"
            width={367}
            height={590}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
      
      {/* Texto */}
      <div>
        <span className="text-sm text-gray-400 uppercase tracking-wider">Conheça</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Sobre nós</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Na SOL, acreditamos que a criatividade tem o poder de mudar o mundo. Como uma agência criativa de serviço completo, 
          nos especializamos em fornecer soluções inovadoras e impactantes para os problemas mais desafiadores de nossos clientes. 
          Seja branding, marketing, design ou desenvolvimento, abordamos cada projeto com uma mente aberta e uma paixão por criar 
          algo verdadeiramente único.
        </p>
        <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
        <p className="text-gray-600 leading-relaxed">
          Nossa equipe de profissionais experientes se dedica a fornecer serviços excepcionais e entregar resultados que superem 
          as expectativas de nossos clientes. Com foco na colaboração e transparência, trabalhamos em estreita colaboração com 
          nossos clientes para entender seus objetivos e desenvolver estratégias customizadas.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Process - Descobrir / Estratégia / Execução */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <span className="text-gray-500 text-sm font-mono">01</span>
              <h3 className="text-2xl font-bold mt-3 mb-4">Descobrir</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Começamos conhecendo nossos clientes e entendendo seus objetivos. Ouvimos atentamente suas necessidades 
                e coletamos insights sobre seus negócios, seu público-alvo e sua concorrência.
              </p>
            </div>
            <div>
              <span className="text-gray-500 text-sm font-mono">02</span>
              <h3 className="text-2xl font-bold mt-3 mb-4">Estratégia</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desenvolvemos uma abordagem sólida e direcionada, construída sobre insights profundos e análises minuciosas. 
                Transformando esses insights em planos claros, detalhados e eficazes.
              </p>
            </div>
            <div>
              <span className="text-gray-500 text-sm font-mono">03</span>
              <h3 className="text-2xl font-bold mt-3 mb-4">Execução</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Com uma execução impecável e focada. Colocamos em prática as estratégias definidas, com precisão e excelência operacional, 
                mobilizando recursos e talentos para alcançar resultados tangíveis e duradouros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions - Oferecemos */}
<section id="solutions" className="py-20 px-6 bg-gray-50 scroll-mt-20">
  <div className="container mx-auto max-w-6xl">
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <span className="text-sm text-gray-400 uppercase tracking-wider">Oferecemos</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">SOLUÇÕES</h2>
        <p className="text-gray-600 leading-relaxed">
          Soluções personalizadas para elevar sua marca, impulsionar seu marketing e capturar momentos memoráveis através de fotos cativantes. 
          Combinamos estratégia e criatividade para construir marcas fortes, desenvolver campanhas de marketing impactantes e criar imagens 
          que contam histórias.
        </p>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-3">MARCA</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Construímos marcas que contam histórias. Da identidade visual à narrativa, criamos conexões emocionais que destacam sua singularidade.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-3">MARKETING</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Desenvolvemos estratégias de marketing personalizadas para impulsionar seu negócio. Da análise de mercado à execução, maximizamos seu alcance e impacto.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-3">FOTOS</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Destacamos a qualidade e os detalhes dos seus produtos através de imagens que encantam. Com iluminação cuidadosa e composição precisa, capturamos a essência e o valor de cada item.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Portfolio - Trabalhos */}
<section id="portfolio" className="py-20 px-6 bg-white scroll-mt-20">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-12">
      <span className="text-sm text-gray-400 uppercase tracking-wider">Veja nossos</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-2">Trabalhos</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Card 1: PREPARADO */}
      <a 
        href="https://preparado.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
      >
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/preparado.svg"
            alt="PREPARADO"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">01</span>
          <h3 className="text-white font-bold text-lg mt-1">PREPARADO</h3>
          <p className="text-gray-400 text-sm mt-1">Sua preparação para emergências</p>
        </div>
      </a>

      {/* Card 2: Banca UFO */}
      <a 
        href="https://banca-ufo-app.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
      >
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/banca-ufo.svg"
            alt="Banca UFO"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">02</span>
          <h3 className="text-white font-bold text-lg mt-1">Banca UFO</h3>
          <p className="text-gray-400 text-sm mt-1">Revista Brasileira de Ufologia</p>
        </div>
      </a>

      {/* Card 3: Anel de Pirita (exemplo com imagem existente) */}
      <div className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/p-1.png"
            alt="Anel de Pirita"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">03</span>
          <h3 className="text-white font-bold text-lg mt-1">Anel de Pirita</h3>
          <p className="text-gray-400 text-sm mt-1">Cristais Alto Paraíso</p>
        </div>
      </div>

      {/* Card 4: Anel de Ametista */}
      <div className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/p-2.png"
            alt="Anel de Ametista"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">04</span>
          <h3 className="text-white font-bold text-lg mt-1">Anel de Ametista</h3>
          <p className="text-gray-400 text-sm mt-1">Cristais Alto Paraíso</p>
        </div>
      </div>

      {/* Card 5: Anel de Citrino */}
      <div className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/p-3.png"
            alt="Anel de Citrino"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">05</span>
          <h3 className="text-white font-bold text-lg mt-1">Anel de Citrino</h3>
          <p className="text-gray-400 text-sm mt-1">Cristais Alto Paraíso</p>
        </div>
      </div>

      {/* Card 6: Anel de Malaquita */}
      <div className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/p-4.png"
            alt="Anel de Malaquita"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">06</span>
          <h3 className="text-white font-bold text-lg mt-1">Anel de Malaquita</h3>
          <p className="text-gray-400 text-sm mt-1">Cristais Alto Paraíso</p>
        </div>
      </div>

      {/* Card 7: Criança - FOTOGRAFIA */}
      <div className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/p-5.png"
            alt="Criança"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">07</span>
          <h3 className="text-white font-bold text-lg mt-1">Criança</h3>
          <p className="text-gray-400 text-sm mt-1">FOTOGRAFIA</p>
        </div>
      </div>

      {/* Card 8: MODA PRAIA */}
      <div className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/p-6.png"
            alt="MODA PRAIA"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">08</span>
          <h3 className="text-white font-bold text-lg mt-1">MODA PRAIA</h3>
          <p className="text-gray-400 text-sm mt-1">Catalogo Moda</p>
        </div>
      </div>

      {/* Card 9: Capa Revista Atrevida */}
      <div className="group bg-black rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image
            src="/portfolio/p-7.png"
            alt="Capa Revista Atrevida"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
        </div>
        <div className="p-5">
          <span className="text-gray-500 text-xs font-mono">09</span>
          <h3 className="text-white font-bold text-lg mt-1">Capa</h3>
          <p className="text-gray-400 text-sm mt-1">Revista Atrevida</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="bg-black">
  {/* Carrossel - fundo preto */}
  <div className="py-16 px-6 overflow-hidden border-b border-gray-800">
    <div className="container mx-auto max-w-6xl">
      <div className="relative">
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: flex;
            width: fit-content;
          }
        `}</style>
        
        <div className="overflow-hidden">
          <div className="animate-scroll">
            {/* Primeira série */}
            <div className="flex gap-12 items-center">
              <span className="text-4xl font-thin tracking-wider text-gray-400">SOL</span>
              <span className="text-5xl font-bold tracking-wider text-white">SOL</span>
              <span className="text-3xl font-light italic tracking-wider text-gray-300">SOL</span>
              <span className="text-6xl font-black tracking-wider text-white">SOL</span>
              <span className="text-4xl font-mono font-bold tracking-wider text-gray-300">SOL</span>
              <span className="text-5xl font-serif font-semibold italic tracking-wider text-white">SOL</span>
              <span className="text-3xl font-extralight tracking-wider text-gray-400">SOL</span>
              <span className="text-7xl font-black tracking-tight text-white">SOL</span>
              <span className="text-4xl font-medium tracking-wider text-gray-300">SOL</span>
            </div>
            {/* Segunda série */}
            <div className="flex gap-12 items-center ml-12">
              <span className="text-4xl font-thin tracking-wider text-gray-400">SOL</span>
              <span className="text-5xl font-bold tracking-wider text-white">SOL</span>
              <span className="text-3xl font-light italic tracking-wider text-gray-300">SOL</span>
              <span className="text-6xl font-black tracking-wider text-white">SOL</span>
              <span className="text-4xl font-mono font-bold tracking-wider text-gray-300">SOL</span>
              <span className="text-5xl font-serif font-semibold italic tracking-wider text-white">SOL</span>
              <span className="text-3xl font-extralight tracking-wider text-gray-400">SOL</span>
              <span className="text-7xl font-black tracking-tight text-white">SOL</span>
              <span className="text-4xl font-medium tracking-wider text-gray-300">SOL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Conteúdo principal - fundo claro */}
  <div className="bg-white text-black py-16 px-6">
    <div className="container mx-auto max-w-6xl text-center">
      
      <h3 className="text-2xl md:text-3xl mb-2 text-gray-600">Pronto para falar sobre</h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-black">SUAS IDEIAS</h2>

      <a
        href="https://wa.me/message/PMLBMNWJ64IPP1"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition mb-10 shadow-md"
      >
        Vamos conversar
      </a>

      <p className="text-gray-500 mb-8">ZIGURATS - MS</p>

      <button
        onClick={() => setModalOpen(true)}
        className="text-gray-500 underline hover:text-black transition mb-10"
      >
        inscreva-se e receba nossa newsletter
      </button>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <span className="text-gray-500 hover:text-black transition cursor-pointer">@StudioOnLine</span>
        <span className="text-gray-500 hover:text-black transition cursor-pointer">@StudioOnLine</span>
        <span className="text-gray-500 hover:text-black transition cursor-pointer">@StudioOnLine</span>
        <span className="text-gray-500 hover:text-black transition cursor-pointer">@StudioOnLine</span>
      </div>

      <p className="text-gray-400 text-sm">
        ©2025 Todos os direitos SOL - StudioOnLine
      </p>
    </div>
  </div>
</footer>

      {/* Modal Newsletter */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl text-center mb-4">Seu e-mail</h3>
            <form onSubmit={handleSubscribe}>
              <input
                type="text"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="email"
                placeholder="Seu endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-full mb-3 disabled:opacity-50 hover:bg-gray-800 transition font-medium"
              >
                {loading ? 'Enviando...' : 'Inscreva-se agora'}
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-full text-gray-500 hover:text-gray-700 transition"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}