'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/projects', label: 'Travaux' },
    { href: '/skills', label: 'Compétences' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4">
      {/* Neon glow line derrière */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>

      {/* Navigation bar centrée */}
      <div className="relative flex items-center gap-8 bg-black/40 backdrop-blur-3xl border border-white/30 rounded-full px-8 py-3 shadow-2xl shadow-black/50 hover:bg-black/50 transition-all duration-300">
        
        {/* Petit logo discret à gauche */}
        <Link 
          href="/" 
          className="flex-shrink-0 text-xl font-bold text-white hover:text-gray-300 transition duration-300 tracking-wider"
        >
          AA
        </Link>

        {/* Séparateur vertical subtil */}
        <div className="hidden sm:block w-px h-5 bg-gradient-to-b from-transparent via-gray-600/50 to-transparent"></div>

        {/* Desktop Navigation - Centrée bien espacée */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm relative group tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] bg-black/40 backdrop-blur-3xl border border-white/20 rounded-2xl py-4 px-4 shadow-2xl shadow-black/50 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm px-4 py-2 rounded-lg hover:bg-white/10 block tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
