import React from 'react';
import { Server, Brain, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Server,
      title: 'Rapid Backend Development',
      description: 'Quick adaptation to new technologies, building scalable microservices with Python, FastAPI, and Kafka'
    },
    {
      icon: Brain,
      title: 'Solution-Focused AI',
      description: 'Fast learning of emerging AI technologies - LLMs, LangChain, RAG systems for intelligent problem-solving'
    },
    {
      icon: Code,
      title: 'Adaptive System Design',
      description: 'Quick grasp of complex architectures, designing clean, distributed systems with performance focus'
    },
    {
      icon: Zap,
      title: 'Agile DevOps',
      description: 'Rapidly mastering deployment technologies - Docker, Kubernetes, AWS, and efficient CI/CD solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-gray-500 text-sm ml-4 font-mono">~/about</span>
                </div>
                <div className="font-mono text-sm text-gray-300 leading-relaxed">
                  <span className="text-cyan-400">const</span>{' '}
                  <span className="text-green-400">engineer</span> = {'{'}
                  <br />
                  <span className="ml-4 text-orange-400">name</span>: <span className="text-yellow-400">"Bharath Kuppusamy"</span>,
                  <br />
                  <span className="ml-4 text-orange-400">experience</span>: <span className="text-yellow-400">"4.5+ years"</span>,
                  <br />
                  <span className="ml-4 text-orange-400">specialization</span>: [
                  <br />
                  <span className="ml-8 text-yellow-400">"Backend Development"</span>,
                  <br />
                  <span className="ml-8 text-yellow-400">"AI Engineering"</span>,
                  <br />
                  <span className="ml-8 text-yellow-400">"System Design"</span>
                  <br />
                  <span className="ml-4">],</span>
                  <br />
                  <span className="ml-4 text-orange-400">traits</span>: [
                  <br />
                  <span className="ml-8 text-yellow-400">"Quick Learner"</span>,
                  <br />
                  <span className="ml-8 text-yellow-400">"Solution Driven"</span>
                  <br />
                  <span className="ml-4">],</span>
                  <br />
                  <span className="ml-4 text-orange-400">passion</span>: <span className="text-yellow-400">"Solving complex problems"</span>
                  <br />
                  {'};'}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;