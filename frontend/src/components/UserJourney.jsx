import React from 'react';
import { Phone, ClipboardCheck, CreditCard } from 'lucide-react';

const JourneyStep = ({ icon: Icon, title, description, isLast }) => (
  <div className="flex-shrink-0 w-80 last:mr-0 relative">
    <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 justify-center items-center">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-4 text-white self-start mb-6">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow text-center leading-relaxed">{description}</p>
      {!isLast && (
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const UserJourney = () => {
  const steps = [
    {
      icon: Phone,
      title: "Give the Agent a Call",
      description: "Start your journey by reaching out to one of our friendly agents. They're here to guide you through the process and answer any initial questions you may have."
    },
    {
      icon: ClipboardCheck,
      title: "Eligibility Check by Agent",
      description: "Our experienced agent will conduct a thorough eligibility check. They'll review your financial situation and help determine the best loan options for you."
    },
    {
      icon: CreditCard,
      title: "Loan Disbursement",
      description: "Once approved, your loan will be quickly disbursed. Our efficient process ensures you receive your funds as soon as possible, allowing you to meet your financial needs."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-12 py-12">
          Your Loan Journey
        </h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-gray-50 to-transparent w-10 z-10"></div>
          <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-gray-50 to-transparent w-10 z-10"></div>
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex items-center justify-evenly">
              {steps.map((step, index) => (
                <JourneyStep
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourney;
