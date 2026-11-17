import Image from "next/image";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export function ProjectsSection() {
  const projects: Project[] = projectsData;

  return (
    <section
      id="projetos"
      className="min-h-[85vh] flex flex-col justify-center px-8 md:px-16 max-w-6xl mx-auto py-16 border-t border-green-500/10"
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-400 font-mono tracking-tight">
            Projetos
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-mono">
            Aplicações desenvolvidas e projetos em reconstrução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border border-green-500/40 hover:border-green-400 rounded-lg bg-black/50 overflow-hidden flex flex-col justify-between transition-all shadow-[0_0_20px_rgba(34,197,94,0.05)]"
            >
              <div>
                {/* Área de capa local ou placeholder enquanto não houver imagem */}
                <div className="relative w-full h-44 bg-zinc-900/90 border-b border-green-500/20 flex items-center justify-center overflow-hidden">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={`Capa do projeto ${project.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-center font-mono px-4">
                      <p className="text-xs text-green-500/70">
                        [preview_{project.title.toLowerCase().replace(/\+/g, "plus")}.png]
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-1">
                        Imagem de capa em breve
                      </p>
                    </div>
                  )}
                </div>

                {/* Conteúdo do card */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-mono text-zinc-100 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono bg-green-950/70 text-green-300 px-2.5 py-1 rounded border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links de ação */}
              <div className="px-6 py-4 border-t border-green-500/15 flex items-center gap-5 font-mono text-xs">
                {project.deployUrl ? (
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 hover:underline font-semibold"
                  >
                    &gt; Ver Demo
                  </a>
                ) : (
                  <span className="text-zinc-500 cursor-not-allowed">
                    &gt; Demo em breve
                  </span>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-green-400 transition-colors"
                  >
                    &gt; GitHub
                  </a>
                ) : (
                  <span className="text-zinc-500 cursor-not-allowed">
                    &gt; Código privado / mockup
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}