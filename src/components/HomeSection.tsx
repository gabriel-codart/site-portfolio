export function HomeSection() {
  return (
    <section id="perfil" className="min-h-[85vh] flex flex-col justify-center px-8 md:px-16 max-w-6xl mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-green-400 tracking-tight font-mono">
            Gabriel Oliveira
          </h1>
          
          <p className="text-green-500/80 font-mono text-sm md:text-base">
            Next.js • TypeScript • ShadcnUI_
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Desenvolvedor web full stack focado em soluções escaláveis. Sistemas web, APIs REST, designs responsivos e UI/UX.
          </p>

          <div className="flex gap-4 pt-4">
            <a 
              href="https://linkedin.com/in/gabriel-codart/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 px-6 py-2.5 rounded font-mono text-sm hover:bg-green-500/10 transition-all"
            >
              &gt; LinkedIn
            </a>
            <a 
              href="https://github.com/gabriel-codart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 px-6 py-2.5 rounded font-mono text-sm hover:bg-green-500/10 transition-all"
            >
              &gt; GitHub
            </a>
          </div>
        </div>

        {/* Espaço reservado para o elemento visual / avatar pixelado do wireframe */}
        <div className="w-64 h-64 border border-green-500/40 rounded-xl flex items-center justify-center bg-black/40 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
          <span className="text-green-500 font-mono text-sm animate-pulse">[Avatar / Terminal]</span>
        </div>
      </div>
    </section>
  );
}