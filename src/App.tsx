import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MarketingAnalyticsDifferentiator } from './components/MarketingAnalyticsDifferentiator';
import { Skills } from './components/Skills';
import { SocialMediaExperience } from './components/SocialMediaExperience';
import { Projects } from './components/Projects';
import { CreativeShowcase } from './components/CreativeShowcase';
import { MarketingProcess } from './components/MarketingProcess';
import { TrainingAndLearning } from './components/TrainingAndLearning';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { CaseStudyModal } from './components/CaseStudyModal';
import { ImagePreviewModal } from './components/ImagePreviewModal';
import { ResumeModal } from './components/ResumeModal';

import type { Project, CreativeItem } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCreative, setSelectedCreative] = useState<CreativeItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // ScrollSpy to track active main navbar tab (hero, about, projects, contact)
  useEffect(() => {
    const sectionToNavMap: { [key: string]: string } = {
      hero: 'hero',
      about: 'about',
      skills: 'about',
      'social-experience': 'about',
      projects: 'projects',
      showcase: 'projects',
      process: 'projects',
      training: 'projects',
      resume: 'contact',
      contact: 'contact'
    };

    const sectionIds = [
      'hero',
      'about',
      'skills',
      'social-experience',
      'projects',
      'showcase',
      'process',
      'training',
      'resume',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const mappedNav = sectionToNavMap[id] || 'hero';
            setActiveSection(mappedNav);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const sectionToNavMap: { [key: string]: string } = {
      hero: 'hero',
      about: 'about',
      skills: 'about',
      'social-experience': 'about',
      projects: 'projects',
      showcase: 'projects',
      process: 'projects',
      training: 'projects',
      resume: 'contact',
      contact: 'contact'
    };

    setActiveSection(sectionToNavMap[sectionId] || sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EA] text-[#111111] font-sans selection:bg-[#FF5A1F] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections (Exact requested structure: Home -> About -> Skills -> Social Media Experience -> Projects -> Creative Work -> Marketing Process -> Training & Learning -> Resume -> Contact) */}
      <main>
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        
        <About onNavigate={handleNavigate} />
        
        {/* Signature Advantage: Creative Marketing + Data-Driven Thinking */}
        <MarketingAnalyticsDifferentiator />

        <Skills />

        {/* Real-World Social Media Experience: @pratik.ide & 65K+ Reach */}
        <SocialMediaExperience onSelectItem={(item) => setSelectedCreative(item)} />

        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        <CreativeShowcase onSelectItem={(item) => setSelectedCreative(item)} />

        <MarketingProcess />

        {/* Training & Learning: 2-Month Digital Marketing Course @ Horyzen Technologies */}
        <TrainingAndLearning />
        
        <ResumeSection
          onOpenResumeModal={() => setIsResumeOpen(true)}
          onNavigateContact={() => handleNavigate('contact')}
        />
        
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateContact={() => handleNavigate('contact')}
      />

      <ImagePreviewModal
        item={selectedCreative}
        onClose={() => setSelectedCreative(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
