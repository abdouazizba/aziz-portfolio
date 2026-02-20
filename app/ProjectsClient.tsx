'use client';

import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    id: 1,
    titleKey: 'projects.list.project1.title',
    descKey: 'projects.list.project1.desc',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'EmailJS', 'Vercel'],
    codeLink: 'https://github.com/abdouazizba/aziz-portfolio',
    demoLink: 'https://aziz-portfolio.vercel.app',
  },
  {
    id: 2,
    titleKey: 'projects.list.project2.title',
    descKey: 'projects.list.project2.desc',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 3,
    titleKey: 'projects.list.project3.title',
    descKey: 'projects.list.project3.desc',
    technologies: ['Node.js', 'React', 'MongoDB', 'Stripe', 'Express'],
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 4,
    titleKey: 'projects.list.project4.title',
    descKey: 'projects.list.project4.desc',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Swagger'],
    codeLink: '#',
    demoLink: '#',
  },
];

export default function ProjectsClient() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 pt-40">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('projects.title')}</h1>
          <p className="text-xl text-gray-300">
            {t('projects.description')}
          </p>
        </div>

        {/* Colonne verticale de projets */}
        <div className="space-y-6">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group relative bg-black/40 backdrop-blur-3xl border border-white/30 rounded-2xl overflow-hidden hover:bg-black/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-black/50"
            >
              <div className="relative z-10 p-6 md:p-8">
                {/* Titre */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {t(project.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t(project.descKey)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 bg-black/40 text-gray-300 border border-white/30 rounded-full text-xs font-medium hover:bg-black/60 hover:border-white/60 transition-colors backdrop-blur-3xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Boutons */}
                <div className="flex gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-black/40 backdrop-blur-3xl border border-white/30 text-white rounded-xl font-medium hover:bg-black/50 hover:border-white/60 transition-all duration-300 gap-2 shadow-lg shadow-black/50"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {t('projects.code')}
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t('projects.demo')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
