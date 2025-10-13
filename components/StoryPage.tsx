import React from 'react';
import { UserGroupIcon, WrenchScrewdriverIcon, ChartBarIcon, ArrowDownCircleIcon, UserCircleIcon, CheckCircleIcon, ExclamationTriangleIcon } from './icons/HeroIcons';

const StoryCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-brand-primary/20 hover:scale-105 transition-all duration-300 animate-fade-in-up">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-slate-700 rounded-full mr-4 text-brand-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{children}</p>
  </div>
);

const PersonaChip: React.FC<{ name: string; icon: React.ReactNode }> = ({ name, icon }) => (
    <div className="flex items-center bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm animate-fade-in-up" style={{ animationDelay: '1s' }}>
      {icon}
      <span className="ml-2">{name}</span>
    </div>
);

const VisualAnchor: React.FC = () => (
  <div className="w-full max-w-4xl bg-slate-800 p-4 sm:p-6 rounded-xl shadow-2xl mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
    <div className="bg-slate-900/50 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4 px-2">
            <h4 className="font-bold text-white">AI Provisioning Dashboard</h4>
            <div className="flex items-center text-sm text-green-400">
                <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                System Active
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {/* Card 1: Standard Provisioning */}
            <div className="bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                    <UserCircleIcon className="h-8 w-8 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                        <p className="font-semibold text-white">Maria Garcia</p>
                        <p className="text-xs text-gray-400">Sales Associate</p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-gray-300 font-medium text-xs">Provisioning Status:</p>
                    <div className="flex items-center justify-between text-gray-400"><span className="truncate">Active Directory</span><CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" /></div>
                    <div className="flex items-center justify-between text-gray-400"><span className="truncate">Office 365</span><CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" /></div>
                    <div className="flex items-center justify-between text-gray-400"><span className="truncate">Salesforce</span><CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" /></div>
                </div>
            </div>
            
            {/* Card 2: Anomaly */}
            <div className="bg-slate-700 p-4 rounded-lg border border-yellow-500/50">
                <div className="flex items-center mb-3">
                    <UserCircleIcon className="h-8 w-8 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                        <p className="font-semibold text-white">Kenji Tanaka</p>
                        <p className="text-xs text-gray-400">Data Analyst</p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center text-yellow-400">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                        <p className="font-semibold">Anomaly Detected</p>
                    </div>
                    <p className="text-gray-400 text-xs">Admin access to finance DB requested. Manual approval required.</p>
                </div>
            </div>
            
            {/* Card 3: In Progress */}
            <div className="bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                    <UserCircleIcon className="h-8 w-8 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                        <p className="font-semibold text-white">Chloe Dubois</p>
                        <p className="text-xs text-gray-400">UX Designer</p>
                    </div>
                </div>
                 <div className="space-y-2 text-sm">
                    <p className="text-gray-300 font-medium text-xs">Provisioning Status:</p>
                    <div className="flex items-center justify-between text-gray-400"><span className="truncate">Active Directory</span><CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" /></div>
                    <div className="flex items-center justify-between text-gray-400"><span className="truncate">Figma</span><div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-500 border-t-brand-primary flex-shrink-0"></div></div>
                    <div className="flex items-center justify-between text-gray-400"><span className="truncate">Adobe Suite</span><span className="text-slate-500 text-xs font-mono">Queued</span></div>
                </div>
            </div>
        </div>
    </div>
</div>
);


const StoryPage: React.FC<{ onScrollDown: () => void }> = ({ onScrollDown }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-up">
          Smart User Provisioning
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Automating user provisioning to reduce manual workload, minimize errors, and enhance security across all systems.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
           <StoryCard title="Problem / Opportunity" icon={<WrenchScrewdriverIcon className="h-6 w-6" />}>
            High-frequency manual tasks lead to errors and security gaps. Automating user access lifecycle is a key efficiency and security opportunity.
          </StoryCard>
           <StoryCard title="Idea / Vision" icon={<UserGroupIcon className="h-6 w-6" />}>
            An intelligent system that automates account creation, updates, and removal, using AI to infer roles and detect access anomalies.
          </StoryCard>
           <StoryCard title="Impact & Value" icon={<ChartBarIcon className="h-6 w-6" />}>
            Significant time savings for IT & HR, improved security posture through fewer errors, better compliance, and scalable risk reduction.
          </StoryCard>
        </div>

        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <PersonaChip name="IT Admins" icon={<WrenchScrewdriverIcon className="h-5 w-5"/>} />
                <PersonaChip name="HR Staff" icon={<UserGroupIcon className="h-5 w-5"/>} />
                <PersonaChip name="Planners" icon={<ChartBarIcon className="h-5 w-5"/>} />
            </div>

            <VisualAnchor />
            
            <button
              onClick={onScrollDown}
              className="flex items-center text-brand-primary hover:text-white transition-colors duration-300 animate-bounce"
            >
              <span className="mr-2">Next Page: Systems View</span>
              <ArrowDownCircleIcon className="h-6 w-6" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default StoryPage;