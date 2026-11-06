import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center border-b border-green-500/20 bg-black/60 backdrop-blur-md sticky top-0 z-50">
      <Link href="#perfil" className="text-green-400 font-mono font-bold tracking-wider hover:text-green-300 transition-colors">
        /GABRIEL-CODART
      </Link>

      <nav className="hidden md:flex gap-8 font-mono text-sm text-gray-300">
        <Link href="#perfil" className="hover:text-green-400 transition-colors">Perfil</Link>
        <Link href="#sobre" className="hover:text-green-400 transition-colors">Sobre Mim</Link>
        <Link href="#habilidades" className="hover:text-green-400 transition-colors">Habilidades</Link>
        <Link href="#experiencias" className="hover:text-green-400 transition-colors">Experiências</Link>
        <Link href="#projetos" className="hover:text-green-400 transition-colors">Projetos</Link>
        <Link href="#contato" className="hover:text-green-400 transition-colors">Contato</Link>
      </nav>
    </header>
  );
}