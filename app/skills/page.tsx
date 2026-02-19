import Header from '@/components/Header';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase', 'REST APIs'],
  },
  {
    category: 'DevOps & Déploiement',
    items: ['Docker', 'GitHub', 'Vercel', 'AWS', 'CI/CD', 'Linux'],
  },
  {
    category: 'Outils & Autres',
    items: ['Git', 'VS Code', 'Figma', 'Postman', 'ESLint', 'npm/yarn'],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Compétences</h1>
          <p className="text-xl text-gray-600 mb-12">
            Voici les technologies et outils que je maîtrise et utilise régulièrement.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{skillGroup.category}</h2>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Section supplémentaire */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Apprentissage Continu</h2>
            <p className="text-gray-700 leading-relaxed">
              Je suis toujours en train d'apprendre et d'explorer de nouvelles technologies. 
              Actuellement, je m'intéresse à l'intelligence artificielle, les Web3/Blockchain, 
              et les pratiques modernes de développement cloud.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
