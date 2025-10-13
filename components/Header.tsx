
import React from 'react';

type Section = 'story' | 'system' | 'interface';

interface HeaderProps {
  activeSection: Section;
  onNavClick: (section: Section) => void;
}

const NavLink: React.FC<{
  section: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
  children: React.ReactNode;
}> = ({ section, activeSection, onClick, children }) => {
  const isActive = activeSection === section;
  return (
    <button
      onClick={() => onClick(section)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-brand-primary text-white'
          : 'text-gray-300 hover:bg-slate-700 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            <h1 className="text-lg font-bold text-white">
              <span className="text-brand-primary">AI Design Day</span> | Bartwo | Concept Showcase
            </h1>
            <p className="text-xs text-gray-400">
              Explore how teams are using AI to solve real problems today.
            </p>
          </div>
          <nav className="flex space-x-2 bg-slate-800 p-1 rounded-lg">
            <NavLink section="story" activeSection={activeSection} onClick={onNavClick}>
              Story
            </NavLink>
            <NavLink section="system" activeSection={activeSection} onClick={onNavClick}>
              System
            </NavLink>
            <NavLink section="interface" activeSection={activeSection} onClick={onNavClick}>
              Interface
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
