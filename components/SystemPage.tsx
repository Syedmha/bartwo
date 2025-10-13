
import React from 'react';
import { ArrowLongRightIcon, CpuChipIcon, ShieldCheckIcon, CloudIcon, ExclamationTriangleIcon, CircleStackIcon } from './icons/HeroIcons';

const SystemBlock: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; className?: string }> = ({ title, children, icon, className = '' }) => (
  <div className={`bg-slate-800 p-6 rounded-xl shadow-lg text-center flex flex-col items-center animate-fade-in-up ${className}`}>
    <div className="p-3 bg-slate-700 rounded-full mb-4 text-brand-primary">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <div className="text-sm text-gray-400">{children}</div>
  </div>
);

const Arrow: React.FC = () => (
    <div className="flex items-center justify-center my-4 md:my-0">
        <ArrowLongRightIcon className="h-10 w-10 text-slate-600" />
    </div>
);

const SystemPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 bg-slate-900 border-t border-b border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">How It Works</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          A simplified flow of data and decision-making from input to impact.
        </p>

        <div className="grid md:grid-cols-5 items-center gap-4 md:gap-8">
          <SystemBlock title="Inputs" icon={<CircleStackIcon className="h-8 w-8" />}>
            <ul className="list-none space-y-1">
              <li>HRIS Data</li>
              <li>User Roles</li>
              <li>Identity Systems</li>
            </ul>
          </SystemBlock>
          
          <Arrow />

          <SystemBlock title="AI Engine" icon={<CpuChipIcon className="h-8 w-8" />} className="md:col-span-1">
            <ul className="list-none space-y-1">
              <li>Power Automate</li>
              <li>Co-pilot Studio</li>
              <li>Role Inference AI</li>
              <li>Anomaly Detection</li>
            </ul>
          </SystemBlock>

          <Arrow />
          
          <SystemBlock title="Outputs" icon={<ShieldCheckIcon className="h-8 w-8" />}>
            <ul className="list-none space-y-1">
              <li>Access Alerts</li>
              <li>Power BI Dashboards</li>
              <li>Audit Reports</li>
            </ul>
          </SystemBlock>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto text-left">
            <div className="bg-slate-800/50 border border-yellow-500/30 p-4 rounded-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center">
                    <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400 mr-3" />
                    <h4 className="font-semibold text-white">Challenges & Dependencies</h4>
                </div>
                <ul className="list-disc list-inside text-gray-400 mt-2 text-sm">
                    <li>Data availability & quality</li>
                    <li>API integration with legacy systems</li>
                    <li>Ensuring model accuracy and fairness</li>
                </ul>
            </div>
            <div className="bg-slate-800/50 border border-green-500/30 p-4 rounded-lg animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center">
                    <CloudIcon className="h-6 w-6 text-green-400 mr-3" />
                    <h4 className="font-semibold text-white">Key Technologies</h4>
                </div>
                <ul className="list-disc list-inside text-gray-400 mt-2 text-sm">
                    <li>Power Platform (BI, Automate)</li>
                    <li>Microsoft Copilot</li>
                    <li>Custom Python scripts</li>
                </ul>
            </div>
        </div>
        
        <div className="mt-16 bg-brand-secondary/20 border border-brand-primary/50 text-brand-primary/80 px-8 py-4 rounded-lg inline-block animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <p className="font-semibold">"This prototype can start fast using existing data and tools."</p>
        </div>
      </div>
    </section>
  );
};

export default SystemPage;
