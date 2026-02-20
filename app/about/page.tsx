'use client';

import Header from '@/components/Header';
import { useEffect, useRef } from 'react';

export default function About() {
  const formationRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          // Délai d'animation pour chaque enfant
          const children = entry.target.querySelectorAll('.animate-item');
          children.forEach((child, index) => {
            (child as HTMLElement).style.setProperty('--delay', `${index * 0.1}s`);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (formationRef.current) observer.observe(formationRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => {
      if (formationRef.current) observer.unobserve(formationRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
    };
  }, []);

  return (
    <main className="min-h-screen relative">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 pt-40">
        <div className="container max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">À propos de moi</h1>
            <p className="text-xl text-gray-300">
              Développeur logiciel passionné par les solutions innovantes et les technologies modernes.
            </p>
          </div>

          {/* Intro */}
          <div className="mb-16 bg-black/40 backdrop-blur-3xl border border-white/30 rounded-2xl p-8 hover:bg-black/50 transition-all duration-300 shadow-2xl shadow-black/50">
            <p className="text-lg text-gray-300 leading-relaxed">
              Je suis <span className="text-white font-semibold">Abdou Aziz Ba</span>, alternant développeur logiciel motivé par la création de solutions performantes et évolutives. Passionné par l'architecture logicielle, le développement fullstack et l'innovation technologique, je m'investis dans des environnements collaboratifs où la qualité et la rigueur sont essentielles.
            </p>
          </div>

          {/* Formation */}
          <div className="mb-16 fade-in-up opacity-0" ref={formationRef}>
            <h2 className="text-3xl font-bold text-white mb-8">Formation</h2>
            <div className="space-y-4">
              <div className="animate-item bg-black/40 backdrop-blur-3xl border border-white/30 rounded-xl p-6 hover:bg-black/50 transition-all duration-300 shadow-lg shadow-black/50">
                <h3 className="text-xl font-bold text-white mb-2">Master Expert en Architecture et Développement Logiciel</h3>
                <p className="text-gray-400">EPITA Paris • 2025 - 2027</p>
              </div>
              <div className="animate-item bg-black/40 backdrop-blur-3xl border border-white/30 rounded-xl p-6 hover:bg-black/50 transition-all duration-300 shadow-lg shadow-black/50">
                <h3 className="text-xl font-bold text-white mb-2">Master Informatique</h3>
                <p className="text-gray-400">EPITA Paris • 2020 - 2023</p>
              </div>
              <div className="animate-item bg-black/40 backdrop-blur-3xl border border-white/30 rounded-xl p-6 hover:bg-black/50 transition-all duration-300 shadow-lg shadow-black/50">
                <h3 className="text-xl font-bold text-white mb-2">Licence Professionnelle en Génie Logiciel, Réseaux et Systèmes</h3>
                <p className="text-gray-400">EPITA • 2020 - 2023</p>
              </div>
            </div>
          </div>

          {/* Expérience */}
          <div className="mb-16 fade-in-up opacity-0" ref={experienceRef}>
            <h2 className="text-3xl font-bold text-white mb-8">Expérience</h2>
            <div className="space-y-4">
              <div className="animate-item bg-gray-800/30 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-cyan-400">IT Support & Junior Developer</h3>
                  <span className="text-sm text-gray-400">Septembre - Décembre 2024</span>
                </div>
                <p className="text-gray-300 mb-3">Jungeheinrich • Villepreux, France</p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Développement d'applications en C# et .NET</li>
                  <li>• Support technique et maintenance de systèmes</li>
                  <li>• Collaboration avec les équipes IT</li>
                </ul>
              </div>
              <div className="animate-item bg-black/40 backdrop-blur-3xl border border-white/30 rounded-xl p-6 hover:bg-black/50 transition-all duration-300 shadow-lg shadow-black/50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">IT Support & Junior Developer</h3>
                  <span className="text-sm text-gray-400">Septembre 2023 - Juillet 2024</span>
                </div>
                <p className="text-gray-300 mb-3">Seoul Peche SARL</p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Configuration d'applications d'entreprise</li>
                  <li>• Support technique utilisateurs</li>
                  <li>• Participation à des projets agiles</li>
                </ul>
              </div>
              <div className="animate-item bg-black/40 backdrop-blur-3xl border border-white/30 rounded-xl p-6 hover:bg-black/50 transition-all duration-300 shadow-lg shadow-black/50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">Assistant Informatique</h3>
                  <span className="text-sm text-gray-400">Juillet - Septembre 2022</span>
                </div>
                <p className="text-gray-300 mb-3">ONAS Sénégal • Dakar</p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Configuration et sécurisation des équipements réseau</li>
                  <li>• Diagnostic rapide des incidents réseau</li>
                  <li>• Support des utilisateurs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/contact" className="btn-primary">
              Me Contacter
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
