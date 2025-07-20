import { SectionTitle, ServiceCard, WebIcon, IosIcon, AndroidIcon } from './common';

const services = [
  {
    icon: <WebIcon />,
    title: 'Web Development',
    description: 'We create responsive, fast, and secure websites and web applications using modern technologies like React, Next.js, and Node.js.',
  },
  {
    icon: <IosIcon />,
    title: 'iOS App Development',
    description: 'From concept to launch, we build beautiful and intuitive native iOS applications for iPhone and iPad using Swift and SwiftUI.',
  },
  {
    icon: <AndroidIcon />,
    title: 'Android App Development',
    description: 'Engage your users with powerful and scalable native Android apps, expertly crafted with Kotlin and Jetpack Compose for any device.',
  },
];

const Services = () => {
  return (
    <section className="py-16 sm:py-24 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
      <SectionTitle title="Our Services" subtitle="What We Do Best" />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
