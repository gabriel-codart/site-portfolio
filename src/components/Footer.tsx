"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear().toString(), // Valor no Cliente
    () => "" // Valor inicial no Servidor (evita mismatch)
  );

  return (
    <footer className="border-t border-green-500/15 bg-black/50 px-8 md:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="text-green-400 font-bold">/GABRIEL-CODART</span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span>© {currentYear} Gabriel Oliveira. Todos os direitos reservados.</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/gabriel-codart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gabriel-codart/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-zinc-500">Teresina, PI</span>
        </div>
      </div>
    </footer>
  );
}