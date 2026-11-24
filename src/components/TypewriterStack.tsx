"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Next.js • TypeScript • ShadcnUI",
  "Django • Python",
  "PostgreSQL • MySQL • NoSQL",
  "Git • GitHub",
];

interface TypewriterState {
  phraseIndex: number;
  charIndex: number;
  isDeleting: boolean;
  pauseTicks: number;
}

export function TypewriterStack() {
  const [state, setState] = useState<TypewriterState>({
    phraseIndex: 0,
    charIndex: 0,
    isDeleting: false,
    pauseTicks: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => {
        const currentPhrase = PHRASES[prev.phraseIndex];

        if (prev.pauseTicks > 0) {
          return { ...prev, pauseTicks: prev.pauseTicks - 1 };
        }

        if (!prev.isDeleting) {
          if (prev.charIndex < currentPhrase.length) {
            return { ...prev, charIndex: prev.charIndex + 1 };
          }
          // Terminou de digitar: pausa ~1.6s (32 ticks * 50ms) antes de apagar
          return { ...prev, isDeleting: true, pauseTicks: 32 };
        }

        if (prev.charIndex > 0) {
          return { ...prev, charIndex: prev.charIndex - 1 };
        }

        // Terminou de apagar: vai para a próxima frase
        return {
          phraseIndex: (prev.phraseIndex + 1) % PHRASES.length,
          charIndex: 0,
          isDeleting: false,
          pauseTicks: 3,
        };
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const visibleText = PHRASES[state.phraseIndex].slice(0, state.charIndex);

  return (
    <p
      aria-live="polite"
      className="min-h-[1.75rem] text-green-500/80 font-mono text-sm md:text-base flex items-center"
    >
      <span>{visibleText}</span>
      <span className="animate-pulse text-green-400 font-bold">_</span>
    </p>
  );
}