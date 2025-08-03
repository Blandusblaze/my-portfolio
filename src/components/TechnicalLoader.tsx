import React, { useState, useEffect } from 'react';
import { Terminal, Database, Cpu } from 'lucide-react';

const TechnicalLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { icon: Terminal, text: 'Initializing system...', delay: 0 },
    { icon: Database, text: 'Cache syncing...', delay: 800 },
    { icon: Cpu, text: 'Loading microservices...', delay: 1600 },
    { icon: Database, text: 'Connecting to data pipeline...', delay: 2400 },
    { icon: Terminal, text: 'System ready.', delay: 3200 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearInterval(stepTimer);
    };
  }, []);

  if (!isVisible) return null;

  const CurrentIcon = loadingSteps[currentStep].icon;

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30"></div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
            <CurrentIcon className="w-8 h-8 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        <div className="font-mono text-cyan-400 text-lg mb-2">
          {loadingSteps[currentStep].text}
        </div>
        
        <div className="flex justify-center space-x-1">
          {loadingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentStep ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalLoader;