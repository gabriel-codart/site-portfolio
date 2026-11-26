import { TiltCard } from "./TiltCard"

export function AboutMeSection() {
  return (
    <section
      id="sobre"
      className="flex flex-col justify-center px-8 md:px-16 max-w-6xl mx-auto pt-68 py-52 border-t border-green-500/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Coluna de texto */}
        <div className="lg:col-span-7 space-y-5">
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-400 font-mono tracking-tight">
            Sobre Mim
          </h2>

          <p className="text-zinc-100 text-base md:text-base leading-relaxed font-medium font-mono">
            Sou Gabriel Oliveira, desenvolvedor web com formação superior em Análise e Desenvolvimento de Sistemas pelo IFPI e foco em TypeScript, Next.js, React, Node.js e Python/Django.
          </p>

          <p className="text-zinc-300 text-base md:text-base leading-relaxed font-mono">
            Tenho vivência prática em desenvolvimento web e ambientes ágeis (Scrum/Kanban), atuando desde a criação de interfaces responsivas até a construção de APIs e sistemas completos, como o <span className="text-green-400 font-mono">DMEIsys</span> durante meu estágio na SEMEC DMEI e entregas em Next.js, Fastify e Prisma na Juridiq.
          </p>

          <p className="text-zinc-400 text-base md:text-base leading-relaxed font-mono">
            Gosto de unir organização de código, componentização e boas práticas de interface para entregar aplicações úteis, legíveis e fáceis de manter.
          </p>
        </div>

        {/* Elemento visual de Prompt */}
        <div className="lg:col-span-5 flex justify-center">
          <TiltCard className="max-w-sm">
            <div className="w-full max-w-sm h-64 border border-green-500/50 rounded-lg bg-black/60 p-5 font-mono text-xs text-green-500/75 overflow-hidden select-none shadow-[0_0_25px_rgba(34,197,94,0.08)] flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-green-500/20 pb-2 text-green-400">
                <span>about_me.ts</span>
                <span className="text-green-500/60">UTF-8</span>
              </div>

              <div className="space-y-1.5 leading-snug my-auto">
                <p className="text-green-400">const developer = &#123;</p>
                <p className="pl-4">role: &quot;Web / Fullstack Dev&quot;,</p>
                <p className="pl-4">stack: [&quot;TS&quot;, &quot;Next.js&quot;, &quot;Python&quot;, &quot;Django&quot;],</p>
                <p className="pl-4">focus: &quot;Clean UI &amp; Scalable Apps&quot;,</p>
                <p className="text-green-400">&#125;;</p>
              </div>

              <div className="border-t border-green-500/20 pt-2 text-[11px] text-green-500/60 flex justify-between">
                <span>status: ready_to_build</span>
                <span>&#47;&#47; v1.0</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}