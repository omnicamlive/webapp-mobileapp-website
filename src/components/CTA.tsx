import { SectionTitle } from './common';

const CTA = () => {
  return (
    <section className="py-16 sm:py-24 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      <div className="text-center">
        <SectionTitle title="Have a project in mind?" subtitle="Let's create something amazing together." />
        <div className="mt-8">
          <a
            href="mailto:contact@yourdevstudio.com"
            className="inline-block px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Let's Build Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
