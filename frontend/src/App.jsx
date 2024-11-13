import React, { Suspense, memo } from 'react';
import { PortfolioProvider } from './contexts/PortfolioContext';

// Components
import Loading from './components/Common/Loading';
import HeroSection from './components/Sections/HeroSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import PerformanceMetrics from './components/Sections/PerformanceMetrics';
import CertificationSection from './components/Sections/CertificationSection';
import SkillsSection from './components/Sections/SkillsSection';
import ContactSection from './components/Sections/ContactSection';

// Styles
import './styles/globals.css';

/* Section Divider Component */
const SectionDivider = memo(() => (
  <div className="section-divider-waves">
    <div className="wave" />
    <div className="wave-2" />
    <div className="wave-3" />
    <div className="floating-particles" />
    <div className="section-divider-glow" />
  </div>
));

const App = () => (
  <PortfolioProvider>
    <div className="min-h-screen">
      <Suspense fallback={<Loading size="lg" />}>
        {/* Hero Section */}
        <HeroSection />
        <main>
          {/* Experience Section */}
          <section className="bg-white py-20">
            <ExperienceSection />
          </section>
          {/* Certification Section */}
          <section className="bg-[#0A192F] py-20">
            <CertificationSection />
          </section>
          {/* Skills Section */}
          <section className="bg-white py-20">
            <SkillsSection />
          </section>
          {/* Performance Metrics Section */}
          <section className="py-20">
            <PerformanceMetrics />
          </section>
          {/* Section Divider */}
          <SectionDivider />
          {/* Contact Section */}
          <section className="bg-[#0A192F]">
            <ContactSection />
          </section>
        </main>
      </Suspense>
    </div>
  </PortfolioProvider>
);

export default memo(App);

