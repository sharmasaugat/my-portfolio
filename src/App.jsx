import React from 'react';
import { Suspense, memo } from 'react';
import { PortfolioProvider } from './contexts/PortfolioContext';
import Loading from './components/common/Loading';
import HeroSection from './components/sections/HeroSection';
import ExperienceSection from './components/sections/ExperienceSection';
import PerformanceMetrics from './components/sections/PerformanceMetrics';
import CertificationSection from './components/sections/CertificationSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import './styles/index.css';
import './styles/globals.css';

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
        <HeroSection />
        <main>
          <section className="bg-white py-20">
            <ExperienceSection />
          </section>
          <section className="bg-[#0A192F] py-20">
            <CertificationSection />
          </section>
          <section className="bg-white py-20">
            <SkillsSection />
          </section>
          <section className="py-20">
            <PerformanceMetrics />
          </section>
          <SectionDivider />
          <section className="bg-[#0A192F]">
            <ContactSection />
          </section>
        </main>
      </Suspense>
    </div>
  </PortfolioProvider>
);

export default memo(App);

