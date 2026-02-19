import Header from '@/components/Header';

const projects = [
  {
    id: 1,
    title: 'Projet 1: E-commerce Platform',
    description: 'Une plateforme e-commerce complète avec panier d\'achat, paiement et tableau de bord admin.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    image: 'Project 1',
  },
  {
    id: 2,
    title: 'Projet 2: Application de Task Management',
    description: 'Application collaborative pour gérer les tâches avec système de notification en temps réel.',
    technologies: ['Next.js', 'Firebase', 'TailwindCSS'],
    link: '#',
    image: 'Project 2',
  },
  {
    id: 3,
    title: 'Projet 3: API RESTful',
    description: 'API robuste avec authentification JWT, validation de données et documentation Swagger.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    link: '#',
    image: 'Project 3',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <section className="flex-1 py-20 px-4">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Mes Projets</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-40 flex items-center justify-center text-white text-2xl font-bold">
                  {project.image}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="text-blue-600 hover:text-blue-700 font-semibold">
                    En savoir plus →
                  </a>
                </div>
              </article>
            ))}
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
