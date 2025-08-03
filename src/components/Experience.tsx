import React from 'react';
import { Award, Calendar, Briefcase, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const workExperience = [
    {
      title: 'Python Developer',
      company: 'YourScope - Optanium',
      period: 'Apr 2024 – Present',
      achievements: [
        'Developed robust APIs in FastAPI for scalable microservices with error handling and test coverage',
        'Quickly mastered and engineered HuggingFace models (AI) for data analysis and business intelligence',
        'Built a data type detection module using NLP, spaCy, and Gliner to classify entities',
        'Orchestrated Docker Compose for efficient deployments',
        'Enabled microservices communication via Kafka and Memcached',
        'Rapidly adapted to new testing frameworks, wrote comprehensive unit tests and participated in code reviews'
      ],
      tech: ['FastAPI', 'HuggingFace', 'NLP', 'spaCy', 'Gliner', 'Docker', 'Kafka', 'Memcached'],
      color: 'cyan'
    },
    {
      title: 'Java Developer',
      company: 'Crisis Management - Zuci Systems',
      period: 'Jul 2023 – Apr 2024',
      achievements: [
        'Quickly learned aviation domain requirements and integrated client APIs with secure validation',
        'Automated deployments via shell scripts, increasing productivity by 80%',
        'Solution-focused approach to designing efficient backend endpoints for core business logic'
      ],
      tech: ['Java', 'Spring Boot', 'API Integration', 'Shell Scripting', 'Backend Development'],
      color: 'green'
    },
    {
      title: 'Data Engineer',
      company: 'HALO-ZIO - Zuci Systems',
      period: 'Dec 2020 – Jun 2023',
      achievements: [
        'Rapidly learned ML frameworks and automated model development (Python, FastAPI, Django)',
        'Improved performance by 60% with SQL indexing',
        'Quick adaptation to streaming technologies - built Kafka pipelines and automated builds with Bash/Python',
        'Deployed services in AWS EC2 and uploaded files in AWS S3 buckets using boto3',
        'Fast learning of monitoring solutions - gained hands-on experience with the ELK Stack'
      ],
      tech: ['Python', 'FastAPI', 'Django', 'SQL', 'Kafka', 'AWS EC2', 'AWS S3', 'ELK Stack', 'boto3'],
      color: 'orange'
    }
  ];

  const certifications = [
    'Prompt Engineering for Everyone – Cognitive AI',
    'System Design Practical Case Studies – Udemy',
    'Apache Kafka Series – Udemy',
    'Python with Data Science – IBM',
    'Digital Marketing – MyCaptain'
  ];

  const openToRoles = [
    'Backend Developer Roles',
    'AI Engineer Roles',
    'System Design-Heavy Roles',
    'Product-Focused Engineering Teams'
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        bg: 'from-cyan-400/20 to-cyan-600/20',
        border: 'border-cyan-400/30',
        text: 'text-cyan-400',
        dot: 'bg-cyan-400'
      },
      green: {
        bg: 'from-green-400/20 to-green-600/20',
        border: 'border-green-400/30',
        text: 'text-green-400',
        dot: 'bg-green-400'
      },
      orange: {
        bg: 'from-orange-400/20 to-orange-600/20',
        border: 'border-orange-400/30',
        text: 'text-orange-400',
        dot: 'bg-orange-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Experience & Growth
          </h2>

          {/* Work Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-cyan-400 flex items-center justify-center space-x-2">
              <Briefcase className="h-6 w-6" />
              <span>Work Experience</span>
            </h3>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => {
                const colors = getColorClasses(job.color);
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colors.bg} rounded-lg p-6 border ${colors.border} hover:scale-[1.02] transition-all duration-300 group relative`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-3 top-8 w-6 h-6 ${colors.dot} rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300`}></div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className={`text-xl font-semibold ${colors.text} mb-1`}>
                          {job.title}
                        </h4>
                        <p className="text-white font-medium mb-2">{job.company}</p>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0">
                        <div className="flex flex-wrap gap-2">
                          {job.tech.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 py-1 rounded-full text-xs border ${colors.text.replace('text-', 'bg-').replace('400', '400/10')} ${colors.text} ${colors.border}`}
                            >
                              {tech}
                            </span>
                          ))}
                          {job.tech.length > 4 && (
                            <span className="px-2 py-1 rounded-full text-xs border border-gray-600 text-gray-400">
                              +{job.tech.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                          <p className="text-gray-300 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Performance indicator for specific achievements */}
                    {job.achievements.some(achievement => achievement.includes('80%') || achievement.includes('60%')) && (
                      <div className="mt-4 p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                          <span className="text-green-400 font-semibold text-sm">Performance Impact</span>
                        </div>
                        <div className="mt-2 text-gray-400 text-sm">
                          {job.achievements.find(achievement => achievement.includes('80%') || achievement.includes('60%'))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-orange-400/30 transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Open To Opportunities */}
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Currently Open To</h3>
              </div>

              <div className="space-y-4">
                {openToRoles.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-lg border border-green-400/30 hover:border-green-400/50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      {role}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-400/5 to-green-400/5 rounded-lg border border-cyan-400/20">
                <p className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-cyan-400 font-mono">[STATUS]</span> Actively seeking opportunities to contribute to innovative teams building scalable systems and AI-driven solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Summary */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-cyan-400">Career Highlights</h3>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-400 font-mono text-sm">[EXPERIENCE_LEVEL]</span>
                <span className="text-orange-400 font-mono text-sm">4.5+ YEARS</span>
              </div>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-400 text-sm">Microservices Built</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-2">5+</div>
                  <div className="text-gray-400 text-sm">AI Projects Delivered</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-2">80%</div>
                  <div className="text-gray-400 text-sm">Productivity Increase</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-gray-400 text-sm">Performance Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;