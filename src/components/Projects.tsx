import React from 'react';
import { ExternalLink, Github, Zap, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered JIRA Assistant',
      description: 'Built an intelligent AI agent to answer JIRA queries using Retrieval-Augmented Generation (RAG) architecture with real-time data processing.',
      tech: ['FastAPI', 'n8n', 'LangChain', 'Qdrant', 'Ollama', 'RAG'],
      features: [
        'Real-time query processing',
        'Vector database integration',
        'Microservices architecture',
        'REST API endpoints'
      ],
      status: 'Production',
      icon: Zap
    },
    {
      title: 'Invoice OCR Pipeline',
      description: 'Developed a robust OCR pipeline that converts scanned invoices to structured data using computer vision and machine learning techniques.',
      tech: ['FastAPI', 'EasyOCR', 'OpenCV', 'pdf2image', 'Pydantic'],
      features: [
        'Multi-format document support',
        'Bounding box detection',
        'Key-value extraction',
        'Data validation pipeline'
      ],
      status: 'Deployed',
      icon: FileText
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Production' 
                            ? 'bg-green-400/10 text-green-400 border border-green-400/30' 
                            : 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-cyan-400/50 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-lg border border-cyan-400/30 hover:bg-cyan-400/20 transition-all duration-200">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-green-400/10 text-green-400 rounded-lg border border-green-400/30 hover:bg-green-400/20 transition-all duration-200">
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;