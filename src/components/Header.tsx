"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { id: "perfil", label: "Perfil" },
  { id: "sobre", label: "Sobre Mim" },
  { id: "habilidades", label: "Habilidades" },
  { id: "experiencias", label: "Experiências" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("perfil");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pega a seção que entrou na área central da tela
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        // Cria uma faixa de detecção no meio da viewport (ignora topo e rodapé extremos)
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full py-6 px-8 flex fixed justify-between items-center border-b border-green-500/20 bg-black/60 backdrop-blur-md top-0 z-50">
      <Link
        href="#perfil"
        onClick={() => setActiveSection("perfil")}
        className="text-green-400 font-mono font-bold tracking-wider hover:text-green-300 transition-colors duration-300"
      >
        /GABRIEL-CODART
      </Link>

      <nav className="hidden md:flex gap-8 font-mono text-sm">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`relative py-1 transition-colors duration-300 ${
                isActive
                  ? "text-green-400 font-semibold"
                  : "text-gray-400 hover:text-green-300"
              }`}
            >
              {item.label}
              {/* Barra indicadora sutil abaixo do link ativo */}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-green-400 rounded-full transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}