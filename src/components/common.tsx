import { ReactNode } from 'react';

// Section Title Component
export const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center">
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    <p className="mt-2 text-lg leading-8 text-slate-400">{subtitle}</p>
  </div>
);

// Service Card Component
export const ServiceCard = ({ icon, title, description }: { icon: ReactNode, title: string, description: string }) => (
  <div className="p-8 bg-slate-800/50 rounded-xl ring-1 ring-slate-700 hover:ring-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex-shrink-0">{icon}</div>
    <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-base text-slate-400">{description}</p>
  </div>
);

// SVG Icons
export const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const IosIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

export const AndroidIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4.586a2 2 0 012.828 0l.01.01a2 2 0 010 2.828L13.657 12l5.181 5.182a2 2 0 010 2.828l-.01.01a2 2 0 01-2.828 0L12 14.343l-5.182 5.181a2 2 0 01-2.828 0l-.01-.01a2 2 0 010-2.828L9.657 12 4.475 6.818a2 2 0 010-2.828l.01-.01a2 2 0 012.828 0L12 9.657l5.182-5.181zM19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
