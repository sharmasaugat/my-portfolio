import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PortfolioProvider } from './contexts/PortfolioContext';
import SectionDivider from './components/Sections/SectionDivider';
import Loading from './components/Common/Loading';
import HeroSection from './components/Sections/HeroSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import PerformanceMetrics from './components/Sections/PerformanceMetrics';
import CertificationSection from './components/Sections/CertificationSection';
import SkillsSection from './components/Sections/SkillsSection';
import ContactSection from './components/Sections/ContactSection';
import './styles/globals.css';

const App = () => (
  <PortfolioProvider>
    <Router>
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
    </Router>
  </PortfolioProvider>
);

export default memo(App);

