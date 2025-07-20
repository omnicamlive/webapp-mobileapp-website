import { SectionTitle } from './common';

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS',
  'Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Firebase', 'Vite'
];

const TechStack = () => {
  return (
    <section className="py-16 sm:py-24 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
      <SectionTitle title="Our Technology Stack" subtitle="Tools We Love to Use" />
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium ring-1 ring-slate-700 transition-all duration-200 hover:ring-cyan-500 hover:text-cyan-300 cursor-default"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
