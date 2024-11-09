import { Suspense } from 'react';
import { PortfolioProvider } from './contexts/PortfolioContext';
import HeroSection from './components/sections/HeroSection';
import ExperienceSection from './components/sections/ExperienceSection';
import PerformanceMetrics from './components/sections/PerformanceMetrics';
import CertificationSection from './components/sections/CertificationSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#64FFDA]"></div>
  </div>
);

const App = () => (
  <PortfolioProvider>
    <div className="min-h-screen bg-white">
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <main>
          <ExperienceSection />
          <CertificationSection />
          <SkillsSection />
          <PerformanceMetrics />
          <ContactSection />
        </main>
      </Suspense>
    </div>
  </PortfolioProvider>
);

export default App;

