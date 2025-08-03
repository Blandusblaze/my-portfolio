import React from 'react';
import { Code, Server, Cloud, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Frameworks',
      skills: ['Python', 'Java', 'SQL', 'FastAPI', 'Spring Boot', 'Flask', 'Django'],
      color: 'cyan'
    },
    {
      icon: Server,
      title: 'DevOps & Tools',
      skills: ['Kafka', 'RabbitMQ', 'Docker', 'Kubernetes', 'Redis', 'Memcached', 'Git', 'Linux'],
      color: 'green'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      skills: ['AWS EC2', 'AWS S3', 'Microservices', 'System Design', 'Performance Optimization'],
      color: 'orange'
    },
    {
      icon: Brain,
      title: 'AI Engineering',
      skills: ['LangChain', 'LLMs', 'ReACT', 'RAG', 'Qdrant', 'Transformers', 'Pydantic', 'OpenAI', 'Ollama'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        bg: 'from-cyan-400/20 to-cyan-600/20',
        border: 'border-cyan-400/30',
        text: 'text-cyan-400',
        skill: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30'
      },
      green: {
        bg: 'from-green-400/20 to-green-600/20',
        border: 'border-green-400/30',
        text: 'text-green-400',
        skill: 'bg-green-400/10 text-green-300 border-green-400/30'
      },
      orange: {
        bg: 'from-orange-400/20 to-orange-600/20',
        border: 'border-orange-400/30',
        text: 'text-orange-400',
        skill: 'bg-orange-400/10 text-orange-300 border-orange-400/30'
      },
      purple: {
        bg: 'from-purple-400/20 to-purple-600/20',
        border: 'border-purple-400/30',
        text: 'text-purple-400',
        skill: 'bg-purple-400/10 text-purple-300 border-purple-400/30'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} rounded-lg p-6 border ${colors.border} hover:scale-105 transition-all duration-300 group`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-gray-900/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h3 className={`text-xl font-semibold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm border ${colors.skill} hover:scale-105 transition-all duration-200 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Core Strengths</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Quick Learner', 'Solution Driven', 'Backend Development', 'AI Engineering', 'System Design'].map((discipline, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-green-400/10 text-cyan-300 rounded-lg border border-cyan-400/30 font-medium hover:scale-105 transition-all duration-200 ${
                      ['Quick Learner', 'Solution Driven'].includes(discipline) ? 'ring-2 ring-cyan-400/20' : ''
                    }`}
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;