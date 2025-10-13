
import React from 'react';
import { XMarkIcon } from './icons/HeroIcons';

interface MockupData {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactElement;
  iconColor: string;
}

interface MockupModalProps {
  mockup: MockupData;
  onClose: () => void;
}

const MockupModal: React.FC<MockupModalProps> = ({ mockup, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in-up" 
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mockup-title"
    >
      <div 
        className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl m-4 relative border border-slate-700"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-32 h-32 bg-slate-900/50 rounded-lg flex items-center justify-center">
              {React.cloneElement(mockup.icon, { className: `h-20 w-20 ${mockup.iconColor}` })}
            </div>
            <div className="text-center md:text-left">
              <h2 id="mockup-title" className="text-2xl font-bold text-white mb-2">{mockup.title}</h2>
              <p className="text-gray-400">{mockup.detailedDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupModal;
