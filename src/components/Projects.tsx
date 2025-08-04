import React from 'react';
import { ExternalLink, Github, Zap, FileText, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered JIRA Assistant',
      description: 'Built an intelligent AI agent to answer JIRA queries using Retrieval-Augmented Generation (RAG) architecture with real-time data processing and vector database integration.',
      tech: ['FastAPI', 'n8n', 'LangChain', 'Qdrant', 'Ollama', 'RAG'],
      features: [
        'Real-time query processing with sub-second response times',
        'Vector database integration for semantic search',
        'Microservices architecture with Docker deployment',
        'RESTful API endpoints with comprehensive documentation'
      ],
      status: 'Production',
      icon: Zap,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Invoice OCR Pipeline',
      description: 'Developed a robust OCR pipeline that converts scanned invoices to structured data using computer vision and machine learning techniques with high accuracy rates.',
      tech: ['FastAPI', 'EasyOCR', 'OpenCV', 'pdf2image', 'Pydantic'],
      features: [
        'Multi-format document support (PDF, JPG, PNG)',
        'Intelligent bounding box detection and text extraction',
        'Key-value pair extraction with validation',
        'Automated data validation and error handling pipeline'
      ],
      status: 'Deployed',
      icon: FileText,
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate technical expertise and problem-solving capabilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Project Image/Visual */}
                  <div className="lg:w-1/2">
                    <div className={`relative bg-gradient-to-br ${project.gradient} rounded-2xl p-8 shadow-2xl`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <Icon className="h-16 w-16 text-white mb-6" />
                        <div className="space-y-3">
                          <div className="h-4 bg-white/30 rounded w-3/4"></div>
                          <div className="h-4 bg-white/20 rounded w-1/2"></div>
                          <div className="h-4 bg-white/25 rounded w-2/3"></div>
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Production' 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-cyan-100 text-cyan-800 border border-cyan-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <Github className="h-5 w-5" />
                        <span>View Code</span>
                      </button>
                      <button className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to see more projects?
              </h3>
              <p className="text-gray-600 mb-6">
                Check out my GitHub for additional projects and contributions
              </p>
              <a
                href="https://github.com/Blandusblaze"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="h-5 w-5" />
                <span>Visit GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;