'use client';

import { useTranslation } from 'react-i18next';

export default function HomeClient() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4 pt-40">
        <div className="container max-w-2xl text-center">
          {/* Avatar */}
          <div className="mb-8">
            <div className="inline-flex w-32 h-32 rounded-full bg-black/40 backdrop-blur-3xl border border-white/30 items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-black/50">BA</div>
          </div>

          {/* Nom et titre */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('home.title')}
          </h2>
          <p className="text-xl text-white font-semibold mb-6">
            {t('home.subtitle')}
          </p>

          {/* Bio */}
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            {t('home.bio')}
          </p>

          {/* Réseaux sociaux */}
          <div className="flex justify-center gap-5 mb-12">
            <a 
              href="https://github.com/abdouazizba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-3xl text-white hover:bg-black/50 transition border border-white/30 shadow-lg shadow-black/50"
              title="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/abdouazizba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-3xl text-white hover:bg-black/50 transition border border-white/30 shadow-lg shadow-black/50"
              title="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="mailto:mameabdoudabakh2002@gmail.com"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-3xl text-white hover:bg-black/50 transition border border-white/30 shadow-lg shadow-black/50"
              title="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/_aziz_ba_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-3xl text-white hover:bg-black/50 transition border border-white/30 shadow-lg shadow-black/50"
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z"/>
              </svg>
            </a>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/projects"
              className="btn-primary"
            >
              {t('home.myProjects')}
            </a>
            <a 
              href="/contact"
              className="btn-secondary"
            >
              {t('home.contactMe')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
