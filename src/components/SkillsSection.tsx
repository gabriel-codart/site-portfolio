import { TiltCard } from "./TiltCard";

interface SkillItem {
  name: string;
  badge: string;
  category: "Frontend" | "Backend" | "Ferramentas";
}

const skills: SkillItem[] = [
  { name: "TypeScript", badge: "TS", category: "Frontend" },
  { name: "JavaScript", badge: ".js", category: "Frontend" },
  { name: "React", badge: "⚛", category: "Frontend" },
  { name: "Next.js", badge: "N", category: "Frontend" },
  { name: "Tailwind CSS", badge: "TW", category: "Frontend" },
  { name: "Shadcn/ui", badge: "UI", category: "Frontend" },
  { name: "Python", badge: "PY", category: "Backend" },
  { name: "Django", badge: "DJ", category: "Backend" },
  { name: "Node.js", badge: "JS", category: "Backend" },
  { name: "SQL / PG", badge: "DB", category: "Backend" },
  { name: "Git", badge: "GIT", category: "Ferramentas" },
  { name: "Docker", badge: "DKR", category: "Ferramentas" },
];

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="flex flex-col justify-center px-6 sm:px-8 md:px-16 max-w-6xl mx-auto py-28 md:pt-58 md:py-42 border-t border-green-500/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Grade de habilidades */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-green-400 font-mono tracking-tight">
              Habilidades
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-mono">
              Stack principal em desenvolvimento web, APIs e organização de código.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group border border-green-500/40 hover:border-green-400 rounded-lg bg-black/50 p-4 flex flex-col items-center justify-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.12)] hover:scale-102"
              >
                <span className="text-xl md:text-2xl font-bold font-mono text-green-400 group-hover:scale-105 transition-transform">
                  {skill.badge}
                </span>
                <span className="text-xs font-mono text-zinc-200 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Elemento visual lateral alinhado ao wireframe */}
        <div className="lg:col-span-5 flex justify-center">
          <TiltCard className="w-full max-w-sm">
            <div className="w-full max-w-sm h-64 border border-green-500/50 rounded-lg bg-black/60 p-5 font-mono text-xs text-green-500/75 overflow-hidden select-none shadow-[0_0_25px_rgba(34,197,94,0.08)] flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-green-500/20 pb-2 text-green-400">
                <span>stack_matrix.sh</span>
                <span className="text-green-500/60">active</span>
              </div>

              <div className="space-y-1 my-auto text-[11px] leading-relaxed text-green-400/85">
                <p>01010TS 10110NEXT 01001</p>
                <p>11001PY 01110DJNG 10110</p>
                <p>00111SQL 10010GIT 01101</p>
                <p>10100DKR 01101UI 11001</p>
              </div>

              <div className="border-t border-green-500/20 pt-2 text-[11px] text-green-500/60 flex justify-between">
                <span>core: web_dev</span>
                <span>&#47;&#47; ready</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}