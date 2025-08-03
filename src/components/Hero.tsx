import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText, Film, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'Software Engineer',
    'Backend Developer', 
    'AI Engineering Enthusiast',
    'System Design Expert'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const links = [
    { href: 'https://github.com/Blandusblaze', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/blandusblaze', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:bharathkuppu2000@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://drive.google.com/file/d/1k_mCaT05-Eqziw3K59hyB0MoVEkO29eq/view?usp=sharing', icon: FileText, label: 'Resume' },
    { href: 'https://letterboxd.com/BlazeZoro/films/', icon: Film, label: 'Letterboxd' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
            Bharath Kuppusamy
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <span className="text-xl md:text-2xl text-gray-300 font-mono">
              {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Quick-learning Software Engineer with 4.5+ years of experience building scalable microservices, 
            AI pipelines, and distributed systems. Solution-driven professional passionate about tackling 
            complex challenges through clean code, rapid adaptation, and intelligent automation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="inline-block">
            <div className="bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-lg p-1">
              <div className="bg-gray-800 rounded-lg px-6 py-3">
                <span className="text-green-400 font-mono">#OpenToWork</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-cyan-400 font-mono">#BackendEngineer</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-orange-400 font-mono">#AIEngineer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;