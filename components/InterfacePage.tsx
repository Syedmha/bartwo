
import React, { useState } from 'react';
import { BellAlertIcon, PresentationChartBarIcon, UserCircleIcon, CheckCircleIcon, RocketLaunchIcon, ChatBubbleBottomCenterTextIcon } from './icons/HeroIcons';
import MockupModal from './MockupModal';

// Data structure for mockups
interface MockupData {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactElement;
  iconColor: string;
}

// Array of mockup data
const mockups: MockupData[] = [
  {
    id: 'anomaly',
    title: 'Anomaly Detected',
    description: 'AI flags an unusual access request, sending an alert for manual review.',
    detailedDescription: 'The system uses a baseline of normal user behavior to identify outliers. When a request deviates significantly—such as an after-hours access attempt from an unusual location for a sensitive system—it is immediately flagged. This view shows the alert details presented to an IT administrator, including the user, the requested resource, the reason for the flag, and one-click actions to approve or deny.',
    icon: <BellAlertIcon />,
    iconColor: 'text-red-500',
  },
  {
    id: 'dashboard',
    title: 'Real-time Dashboard',
    description: 'Dashboard updates in real time, showing provisioning status and system health.',
    detailedDescription: 'This Power BI dashboard provides a high-level overview of the user provisioning system. Key metrics include the number of automated provisions in the last 24 hours, average time to provision, number of open alerts, and system health status for connected APIs. The interface allows drilling down into specific events for audit and review purposes.',
    icon: <PresentationChartBarIcon />,
    iconColor: 'text-blue-500',
  },
  {
    id: 'notification',
    title: 'Technician Notified',
    description: 'A technician receives a notification with context and action buttons.',
    detailedDescription: 'Notifications are delivered via Microsoft Teams or email, integrating seamlessly into existing workflows. The notification provides all necessary context for a quick decision, including user details from the HRIS, the specific access request, and the AI\'s risk assessment. The technician can approve, deny, or escalate the request directly from the notification, dramatically reducing response time.',
    icon: <UserCircleIcon />,
    iconColor: 'text-green-500',
  },
];


const MockupCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; onClick: () => void }> = ({ title, children, icon, onClick }) => (
  <div 
    className="bg-slate-800 rounded-xl shadow-lg overflow-hidden animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-brand-primary/20 cursor-pointer"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === 'Enter' && onClick()}
  >
    <div className="p-4 bg-slate-700 flex items-center space-x-2">
      <div className="h-3 w-3 rounded-full bg-red-500"></div>
      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
      <div className="h-3 w-3 rounded-full bg-green-500"></div>
    </div>
    <div className="p-6">
      <div className="aspect-video bg-slate-900/50 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
      <p className="text-sm text-gray-400 text-center mt-1">{children}</p>
    </div>
  </div>
);


const ActionFooter: React.FC = () => (
    <div className="w-full bg-slate-800 mt-16 rounded-t-xl">
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 text-left">
            <div>
                <div className="flex items-center mb-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3"/>
                    <h3 className="text-xl font-bold text-white">Feasibility & Readiness</h3>
                </div>
                <p className="text-gray-400">
                    The entry point is high due to low-code tools like Power Automate and Co-Pilot Studio. Initial automation can be built in weeks, providing a strong foundation for future AI enhancements.
                </p>
            </div>
            <div>
                <div className="flex items-center mb-3">
                    <RocketLaunchIcon className="h-6 w-6 text-brand-primary mr-3"/>
                    <h3 className="text-xl font-bold text-white">The Ask / Next Steps</h3>
                </div>
                <p className="text-gray-400 mb-4">
                    Proceed by mapping current processes and building an MVP automation for a pilot group.
                </p>
                <button className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-2" />
                    Share Feedback
                </button>
            </div>
        </div>
    </div>
);


const InterfacePage: React.FC = () => {
  const [selectedMockup, setSelectedMockup] = useState<MockupData | null>(null);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">The Experience</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Click on a card to see a more detailed view of the interaction.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
              {mockups.map((mockup) => (
                <MockupCard 
                  key={mockup.id}
                  title={mockup.title} 
                  icon={React.cloneElement(mockup.icon, { className: `h-16 w-16 ${mockup.iconColor}` })}
                  onClick={() => setSelectedMockup(mockup)}
                >
                  {mockup.description}
                </MockupCard>
              ))}
          </div>
        </div>
        <ActionFooter />
      </section>

      {selectedMockup && (
        <MockupModal 
          mockup={selectedMockup} 
          onClose={() => setSelectedMockup(null)} 
        />
      )}
    </>
  );
};

export default InterfacePage;
