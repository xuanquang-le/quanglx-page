
import React from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV' },
    { id: 'ai-assistant', label: 'AI Insights' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="serif text-xl font-bold text-slate-900 cursor-pointer" onClick={() => onNavigate('home')}>
              Dr. Nguyen
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`${
                    activeSection === link.id
                      ? 'text-blue-700 font-semibold'
                      : 'text-slate-500 hover:text-slate-900'
                  } px-3 py-2 rounded-md text-sm transition-colors duration-200`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <span className="text-xs text-slate-400">PhD / Reseracher</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
