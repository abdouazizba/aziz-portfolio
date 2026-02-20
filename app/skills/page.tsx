import Header from '@/components/Header';
import Image from 'next/image';

const skillsCategories = [
  {
    title: 'Frontend & UI',
    skills: ['React', 'Next.js', 'Angular', 'Flutter', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Bootstrap']
  },
  {
    title: 'Backend & API',
    skills: ['Node.js', 'Express', 'Python', 'Spring Boot', 'REST API', 'RabbitMQ', 'Java', 'C#']
  },
  {
    title: 'Database & Data',
    skills: ['PostgreSQL', 'MongoDB']
  },
  {
    title: 'Tools & Testing',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Jest', 'Vercel', 'CI/CD']
  }
];

const API_TOKEN = process.env.NEXT_PUBLIC_LOGO_API_TOKEN || 'pk_JB2h024uR1OpkGxh2SYE8w';

// Mapping des compétences vers leurs domaines
const skillDomainMap: Record<string, string> = {
  'React': 'react.dev',
  'Next.js': 'nextjs.org',
  'Angular': 'angular.io',
  'Flutter': 'flutter.dev',
  'TypeScript': 'typescriptlang.org',
  'Tailwind CSS': 'tailwindcss.com',
  'HTML/CSS': 'html5.org',
  'Bootstrap': 'getbootstrap.com',
  'Node.js': 'nodejs.org',
  'Express': 'expressjs.com',
  'Python': 'python.org',
  'Spring Boot': 'spring.io',
  'REST API': 'restfulapi.net',
  'RabbitMQ': 'rabbitmq.com',
  'Java': 'java.com',
  'C#': 'microsoft.com',
  'PostgreSQL': 'postgresql.org',
  'MongoDB': 'mongodb.com',
  'Git': 'git-scm.com',
  'GitHub': 'github.com',
  'VS Code': 'code.visualstudio.com',
  'Postman': 'postman.com',
  'Docker': 'docker.com',
  'Jest': 'jestjs.io',
  'Vercel': 'vercel.com',
  'CI/CD': 'github.com',
  'Vitest': 'vitest.dev',
  'Linux': 'kernel.org',
};

const getSkillLogoUrl = (skill: string) => {
  const domain = skillDomainMap[skill] || skill.toLowerCase().replace(/\s+/g, '') + '.com';
  return `https://img.logo.dev/${domain}?token=${API_TOKEN}&retina=true`;
};

export default function Skills() {
  return (
    <main className="min-h-screen relative">
      <Header />

      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 pt-48">
        <div className="flex justify-center">
          <div className="w-[95%]">
            <div className="mb-32">
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-8">Compétences</h1>
              <p className="text-gray-300 text-xl">
                Technologies et outils que je maîtrise et utilise régulièrement
              </p>
            </div>

            {/* Grille 2x2 avec gap minimal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {skillsCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className="fade-in-up opacity-0 bg-black/30 backdrop-blur-sm rounded-lg p-8 hover:bg-black/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-10 tracking-wide">{category.title}</h2>
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill} 
                        className="flex flex-col items-center justify-center gap-3 text-gray-300 group cursor-pointer py-4 px-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                      >
                        <span className="flex-shrink-0 w-8 h-8 relative">
                          <Image
                            src={getSkillLogoUrl(skill)}
                            alt={skill}
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            unoptimized
                          />
                        </span>
                        <span className="text-sm font-medium group-hover:text-white transition-colors text-center">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
