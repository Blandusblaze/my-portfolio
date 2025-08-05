import React from 'react';
import { Code, Server, Cloud, Brain, Database, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript'],
      color: 'blue'
    },
    {
      icon: Server,
      title: 'Backend Frameworks',
      skills: ['FastAPI', 'Spring Boot', 'Django', 'Flask'],
      color: 'green'
    },
    {
      icon: Database,
      title: 'Databases & Messaging',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ'],
      color: 'purple'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS EC2', 'AWS S3', 'Docker', 'Linux'],
      color: 'orange'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['LangChain', 'LLMs', 'RAG', 'Transformers', 'OpenAI'],
      color: 'cyan'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Git', 'Memcached', 'ELK Stack', 'System Design'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        title: 'text-blue-900',
        skill: 'bg-blue-100 text-blue-800 border-blue-200'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        title: 'text-green-900',
        skill: 'bg-green-100 text-green-800 border-green-200'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        title: 'text-purple-900',
        skill: 'bg-purple-100 text-purple-800 border-purple-200'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        title: 'text-orange-900',
        skill: 'bg-orange-100 text-orange-800 border-orange-200'
      },
      cyan: {
        bg: 'bg-cyan-50',
        border: 'border-cyan-200',
        icon: 'text-cyan-600',
        title: 'text-cyan-900',
        skill: 'bg-cyan-100 text-cyan-800 border-cyan-200'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'text-red-600',
        title: 'text-red-900',
        skill: 'bg-red-100 text-red-800 border-red-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <div
                  key={index}
                  className={`${colors.bg} rounded-2xl p-8 border-2 ${colors.border} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm`}>
                      <Icon className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colors.title}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${colors.skill} hover:scale-105 transition-all duration-200 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Strengths */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Quick Learner', desc: 'Rapidly adapts to new technologies', color: 'cyan' },
                { title: 'Solution Driven', desc: 'Focus on practical problem-solving', color: 'green' },
                { title: 'System Design', desc: 'Scalable architecture expertise', color: 'blue' },
                { title: 'Clean Code', desc: 'Maintainable and efficient code', color: 'purple' }
              ].map((strength, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${strength.color}-400 to-${strength.color}-600 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{strength.title.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{strength.title}</h4>
                  <p className="text-gray-600 text-sm">{strength.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;