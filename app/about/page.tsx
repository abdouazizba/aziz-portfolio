import Header from '@/components/Header';

export default function About() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <section className="flex-1 py-20 px-4">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">À propos</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Bonjour, je suis Abdou Aziz Ba, un développeur fullstack passionné par la création 
              de solutions numériques innovantes et performantes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Mon parcours</h2>
            <p>
              Depuis mes débuts en développement, j'ai eu l'opportunité de travailler sur diverses 
              technologies et projets. Mon expérience couvre le développement frontend moderne avec 
              React, la création d'APIs robustes avec Node.js, et le déploiement d'applications 
              scalables sur le cloud.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ma philosophie</h2>
            <p>
              J'allie créativité, rigueur technique et sens du détail pour construire des applications 
              qui non seulement fonctionnent bien, mais qui apportent une véritable valeur. Chaque 
              projet est une opportunité d'apprendre et de créer quelque chose de significatif.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">En dehors du code</h2>
            <p>
              Quand je ne code pas, je suis impliqué dans la communauté tech, je contribue à des 
              projets open-source, et je partage mes connaissances avec d'autres développeurs. 
              J'aime aussi explorer les nouvelles technologies et tendances du web.
            </p>
          </div>

          <div className="mt-12">
            <a href="/contact" className="btn-primary">
              Me contacter
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full py-8 px-4 border-t border-gray-100 bg-gray-50">
        <div className="container text-center text-gray-600 text-sm">
          <p>© 2026 Abdou Aziz Ba. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
