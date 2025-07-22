import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import CTA from './components/CTA';

import { getAuth, signInAnonymously } from "firebase/auth";
import { app } from "./firebase";
import { useEffect } from 'react';
import BannerCarousel from './components/BannerCarousel';
import SiteHeader from './components/SiteHeader';
import HubSpotChat from './components/HubSpotChat';

function App() {
  const auth = getAuth(app);

  useEffect(() => {
    signInAnonymously(auth);
  }, [auth]);

  return (

   


    <div className="bg-slate-900 text-white font-sans antialiased">
       {/* //make some thing like a big header */}
      <SiteHeader />
       
      <BannerCarousel />
     
      <div className="relative isolate overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div 
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" 
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
        <main className="container mx-auto px-6 md:px-8">
          <Hero />
          <Services />
          
          <TechStack />
          <CTA />





        </main>

        
      </div>

      <HubSpotChat />
    </div>
  );
}

export default App;