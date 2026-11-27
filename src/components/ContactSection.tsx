"use client";

import { useState } from "react";
import { TiltCard } from "./TiltCard";

const EMAIL = "gabriel.codart@gmail.com";

export function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      id="contato"
      className="flex flex-col justify-center px-6 sm:px-8 md:px-16 max-w-6xl mx-auto py-28 md:pt-58 md:py-42 border-t border-green-500/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Coluna de informações e botões */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-extrabold text-green-400 font-mono tracking-tight">
              Contato
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl font-mono">
              Disponível para vagas front end, back end e full stack, consultoria técnica ou um café virtual. Resposta em até 24h.
            </p>
          </div>

          {/* Caixa para copiar e-mail */}
          <div className="max-w-sm">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md border border-green-500/60 bg-linear-to-r from-green-950/70 to-50% hover:border-green-400 transition-all font-mono text-sm text-zinc-100 cursor-pointer"
              title="Clique para copiar o e-mail"
            >
              <span className="truncate">{EMAIL}</span>
              <span className="text-xs text-green-400 shrink-0">
                {copied ? "Copiado!" : "[Copiar]"}
              </span>
            </button>
          </div>

          {/* Botões de acesso rápido */}
          <div className="flex flex-col gap-3 max-w-40 pt-1 font-mono text-sm">
            <a
              href={`mailto:${EMAIL}`}
              className="border border-green-500/70 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-4 py-2 rounded text-center transition-all"
            >
              Gmail
            </a>
            <a
              href="https://linkedin.com/in/gabriel-codart/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500/70 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-4 py-2 rounded text-center transition-all"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/gabriel-codart"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500/70 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-4 py-2 rounded text-center transition-all"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Elemento visual em pixel art inspirado no wireframe */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="lg:col-span-5 flex justify-center"
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