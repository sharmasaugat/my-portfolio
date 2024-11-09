import ContactSection from './components/ContactSection';
import SkillsRadar from './components/SkillsRadar';
import MetricCard from './components/MetricCard';
import ExperienceCard from './components/ExperienceCard';
import CertificationSection from './components/CertificationSection';
import HeroSection from './components/HeroSection';
import PerformanceMetrics from './components/PerformanceMetrics'; // Import the new component


import { experiences, performanceData, skills, metrics } from './data/portfolioData';

// Main Portfolio Component
const App = () => {

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection metrics={metrics} />
      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Professional Journey</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <CertificationSection />

      {/* Performance Metrics */}
      <PerformanceMetrics data={performanceData} />

    {/* Skills Section Continued */}
    <section className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Technical Arsenal</h2>
            <div className="max-w-4xl mx-auto flex justify-center">
                <SkillsRadar />
            </div>
        </div>
    </section>
      
      <section className="py-20">
        <ContactSection />
      </section>
    </div>
  );
};

export default App;

