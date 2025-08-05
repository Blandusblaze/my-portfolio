import React from 'react';
import { User, Code, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '4.5+', label: 'Years Experience', color: 'cyan' },
    { number: '10+', label: 'Projects Delivered', color: 'green' },
    { number: '5+', label: 'AI Solutions Built', color: 'orange' },
    { number: '80%', label: 'Productivity Increase', color: 'purple' },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Backend Excellence',
      description: 'Specialized in building scalable microservices with Python, FastAPI, and modern architectures'
    },
    {
      icon: Zap,
      title: 'Rapid Learning',
      description: 'Quick adaptation to new technologies and frameworks, staying ahead of industry trends'
    },
    {
      icon: Target,
      title: 'Solution-Focused',
      description: 'Problem-solving approach with clean code practices and performance optimization'
    }
  ];

  const getStatColor = (color: string) => {
    const colors = {
      cyan: 'text-cyan-400',
      green: 'text-green-400',
      orange: 'text-orange-400',
      purple: 'text-purple-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Personal Info */}
            <div>
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <User className="h-8 w-8 text-cyan-500" />
                  <h3 className="text-3xl font-bold text-gray-900">Hello, I'm Bharath</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A passionate Software Engineer with over 4.5 years of experience in building robust, 
                  scalable systems. I specialize in backend development, AI engineering, and system design, 
                  with a proven track record of delivering high-impact solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My approach combines rapid learning with solution-driven development, enabling me to 
                  quickly adapt to new technologies and deliver efficient, maintainable code that drives 
                  business value.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-6">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Career Highlights
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-4xl font-bold mb-2 ${getStatColor(stat.color)}`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Block */}
              <div className="mt-8 bg-gray-900 rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-500 text-sm ml-4 font-mono">engineer.py</span>
                </div>
                <div className="font-mono text-sm text-gray-300 leading-relaxed">
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-400">SoftwareEngineer</span>:
                  <br />
                  <span className="ml-4 text-purple-400">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(self):
                  <br />
                  <span className="ml-8">self.name = </span>
                  <span className="text-green-400">"Bharath"</span>
                  <br />
                  <span className="ml-8">self.role = </span>
                  <span className="text-green-400">"Backend Engineer"</span>
                  <br />
                  <span className="ml-8">self.skills = [</span>
                  <br />
                  <span className="ml-12 text-green-400">"Python", "FastAPI", "AI"</span>
                  <br />
                  <span className="ml-8">]</span>
                  <br />
                  <span className="ml-8">self.passion = </span>
                  <span className="text-green-400">"Problem Solving"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;