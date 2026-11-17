interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "juridiq",
    role: "Desenvolvedor Fullstack (Estágio)",
    company: "Juridiq",
    location: "Teresina",
    period: "JANEIRO DE 2025 - MARÇO DE 2025",
    highlights: [
      "Desenvolvimento de novas funcionalidades e resolução de bugs em aplicações de alta complexidade utilizando Next.js, Fastify e Prisma.",
      "Implementação de interfaces modernas e responsivas baseadas em protótipos do Figma, utilizando Tailwind CSS, Shadcn/ui e Radix.",
      "Atuação em ambiente ágil com metodologias Scrum/Kanban, garantindo a entrega de tasks e manutenção da qualidade do código.",
    ],
  },
  {
    id: "semec-dmei",
    role: "Suporte de TI (Estágio)",
    company: "SEMEC DMEI",
    location: "Teresina",
    period: "DEZEMBRO DE 2022 - NOVEMBRO DE 2024",
    highlights: [
      "Idealização e desenvolvimento do DMEIsys, um sistema Full Stack para gestão de chamados que centralizou e modernizou as demandas de suporte do setor.",
      "Criação de interfaces utilizando React, Bootstrap e gerenciamento de estado com Context API.",
      "Suporte técnico a hardware, redes e sistemas operacionais, garantindo a continuidade das operações de TI.",
    ],
  },
];

export function ExperiencesSection() {
  return (
    <section
      id="experiencias"
      className="min-h-[80vh] flex flex-col justify-center px-8 md:px-16 max-w-6xl mx-auto py-16 border-t border-green-500/10"
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-400 font-mono tracking-tight">
            Experiências
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-mono">
            Trajetória prática em desenvolvimento web, sistemas internos e suporte técnico.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="border border-green-500/40 hover:border-green-400/80 rounded-lg bg-black/50 p-6 md:p-7 transition-all shadow-[0_0_20px_rgba(34,197,94,0.05)] space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-green-500/15 pb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-mono text-zinc-100">
                    <span className="text-green-400">{exp.company}</span>, {exp.location}{" "}
                    <span className="text-zinc-400 font-normal">— {exp.role}</span>
                  </h3>
                </div>

                <span className="text-xs font-mono text-green-400/90 bg-green-950/60 border border-green-500/30 px-3 py-1 rounded w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 text-sm md:text-base text-zinc-300 leading-relaxed">
                {exp.highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-400 font-mono select-none">
                      &gt;
                    </span>
                    <span className="text-sm font-mono">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}