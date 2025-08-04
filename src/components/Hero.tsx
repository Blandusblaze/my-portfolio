import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText, Film, ArrowDown } from 'lucide-react';

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
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-green-100 bg-clip-text text-transparent leading-tight">
              Bharath
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Kuppusamy
            </h1>
          </div>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <div className="text-2xl md:text-3xl text-gray-300 font-light">
              <span className="text-cyan-400 font-mono">&gt;</span> {typedText}
              <span className="animate-pulse text-cyan-400 font-mono">_</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Quick-learning Software Engineer with <span className="text-cyan-400 font-semibold">4.5+ years</span> of experience building 
            scalable microservices, AI pipelines, and distributed systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium">Available for new opportunities</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;