'use client';

import { useState } from "react";
import { TiltCard } from "./TiltCard";
import { TypewriterStack } from "./TypewriterStack";

export function HomeSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="perfil" className="min-h-[85vh] flex flex-col justify-center px-8 md:px-16 max-w-6xl mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-green-400 tracking-tight font-mono">
            Gabriel Oliveira
          </h1>
          
          <TypewriterStack/>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-mono">
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

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <TiltCard className="max-w-sm">
            {isHovered ? (
              /* Smile Active */
              <svg
                viewBox="0 0 12 12"
                className="w-48 h-48 md:w-56 md:h-56 text-green-400 drop-shadow-[0_0_18px_rgba(34,197,94,0.2)]"
                fill="currentColor"
                shapeRendering="crispEdges"
                aria-label="Ícone pixelado sorridente ativo"
              >
                <rect x="3" y="1" width="6" height="1" />
                <rect x="2" y="2" width="1" height="1" />
                <rect x="9" y="2" width="1" height="1" />
                <rect x="1" y="3" width="1" height="6" />
                <rect x="10" y="3" width="1" height="6" />
                <rect x="4" y="4" width="1" height="1" />
                <rect x="7" y="4" width="1" height="1" />
                <rect x="3" y="6" width="1" height="1" />
                <rect x="8" y="6" width="1" height="1" />
                <rect x="4" y="7" width="4" height="1" />
                <rect x="2" y="9" width="1" height="1" />
                <rect x="9" y="9" width="1" height="1" />
                <rect x="3" y="10" width="6" height="1" />
              </svg>
            ) : (
              /* Smile Default */
              <svg
                viewBox="0 0 12 12"
                className="w-48 h-48 md:w-56 md:h-56 text-green-400 drop-shadow-[0_0_18px_rgba(34,197,94,0.2)]"
                fill="currentColor"
                shapeRendering="crispEdges"
                aria-label="Ícone pixelado sorridente"
              >
                <rect x="3" y="1" width="6" height="1" />
                <rect x="2" y="2" width="1" height="1" />
                <rect x="9" y="2" width="1" height="1" />
                <rect x="1" y="3" width="1" height="6" />
                <rect x="10" y="3" width="1" height="6" />
                <rect x="4" y="4" width="1" height="1" />
                <rect x="7" y="4" width="1" height="1" />
                <rect x="3" y="7" width="1" height="1" />
                <rect x="8" y="7" width="1" height="1" />
                <rect x="4" y="8" width="4" height="1" />
                <rect x="2" y="9" width="1" height="1" />
                <rect x="9" y="9" width="1" height="1" />
                <rect x="3" y="10" width="6" height="1" />
              </svg>
            )}
          </TiltCard>
        </div>
      </div>
    </section>
  );
}