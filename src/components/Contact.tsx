import React from 'react';
import { Mail, Github, Linkedin, FileText, Film, MapPin, Coffee } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bharathkuppu2000@gmail.com',
      href: 'mailto:bharathkuppu2000@gmail.com',
      color: 'cyan'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Blandusblaze',
      href: 'https://github.com/Blandusblaze',
      color: 'gray'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/blandusblaze',
      href: 'https://www.linkedin.com/in/blandusblaze',
      color: 'blue'
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download PDF',
      href: 'https://drive.google.com/file/d/1k_mCaT05-Eqziw3K59hyB0MoVEkO29eq/view?usp=sharing',
      color: 'green'
    }
  ];

  const hashtags = [
    '#QuickLearner', '#SolutionDriven', '#PythonDeveloper', '#BackendEngineer', 
    '#FastAPI', '#Kafka', '#SystemDesign', '#CleanCode', '#OpenToWork', 
    '#GitHubPortfolio', '#Microservices', '#CloudNative'
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'text-cyan-400 border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-400/10',
      gray: 'text-gray-400 border-gray-400/30 hover:border-gray-400/50 hover:bg-gray-400/10',
      blue: 'text-blue-400 border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-400/10',
      green: 'text-green-400 border-green-400/30 hover:border-green-400/50 hover:bg-green-400/10'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">Get In Touch</h3>
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 bg-gray-900/30 rounded-lg border transition-all duration-300 group ${getColorClasses(method.color)}`}
                  >
                    <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-current transition-colors">
                        {method.label}
                      </div>
                      <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Personal Touch */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">Beyond Code</h3>
              
              <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-3 mb-3">
                  <Film className="h-5 w-5 text-orange-400" />
                  <span className="text-white font-medium">Film Enthusiast</span>
                </div>
                <p className="text-gray-400 text-sm">
                  When I'm not building systems, you can find me exploring cinema on{' '}
                  <a 
                    href="https://letterboxd.com/BlazeZoro/films/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 underline transition-colors"
                  >
                    Letterboxd
                  </a>
                </p>
              </div>

              <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-3 mb-3">
                  <Coffee className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">Quick Learner & Problem Solver</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Rapidly adapts to new technologies and frameworks. Solution-driven approach to tackling complex engineering challenges with clean, efficient code.
                </p>
              </div>
            </div>
          </div>

          {/* Hashtags */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-cyan-400 mb-6">Find Me By</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-900/50 text-gray-400 rounded-full text-sm border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 cursor-default font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <p className="text-gray-500 font-mono text-sm">
                <span className="text-cyan-400">$</span> Built with React + TypeScript + Tailwind CSS
              </p>
              <p className="text-gray-600 text-xs mt-2">
                © 2025 Bharath Kuppusamy. Deployed with ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;