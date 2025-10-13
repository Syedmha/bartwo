
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import StoryPage from './components/StoryPage';
import SystemPage from './components/SystemPage';
import InterfacePage from './components/InterfacePage';

type Section = 'story' | 'system' | 'interface';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('story');

  const storyRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);
  const interfaceRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    story: storyRef,
    system: systemRef,
    interface: interfaceRef,
  };

  const handleNavClick = (section: Section) => {
    sectionRefs[section].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-slate-900 text-gray-200 font-sans antialiased">
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <div id="story" ref={storyRef}>
          <StoryPage onScrollDown={() => handleNavClick('system')} />
        </div>
        <div id="system" ref={systemRef}>
          <SystemPage />
        </div>
        <div id="interface" ref={interfaceRef}>
          <InterfacePage />
        </div>
      </main>
    </div>
  );
};

export default App;
