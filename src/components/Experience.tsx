import React from 'react';
import { Calendar, MapPin, TrendingUp, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const workExperience = [
    {
      title: 'Python Developer',
      company: 'YourScope - Optanium',
      period: 'Apr 2024 – Present',
      location: 'Remote',
      achievements: [
        'Developed robust APIs in FastAPI for scalable microservices with comprehensive error handling and test coverage',
        'Quickly mastered and engineered HuggingFace models (AI) for data analysis and business intelligence solutions',
        'Built a data type detection module using NLP, spaCy, and Gliner to classify entities with 95% accuracy',
        'Orchestrated Docker Compose for efficient deployments, reducing deployment time by 60%',
        'Enabled microservices communication via Kafka and Memcached for real-time data processing',
        'Rapidly adapted to new testing frameworks, wrote comprehensive unit tests and participated in code reviews'
      ],
      tech: ['FastAPI', 'HuggingFace', 'NLP', 'spaCy', 'Gliner', 'Docker', 'Kafka', 'Memcached'],
      color: 'cyan'
    },
    {
      title: 'Java Developer',
      company: 'Crisis Management - Zuci Systems',
      period: 'Jul 2023 – Apr 2024',
      location: 'Chennai, India',
      achievements: [
        'Quickly learned aviation domain requirements and integrated client APIs with secure validation protocols',
        'Automated deployments via shell scripts, increasing team productivity by 80%',
        'Solution-focused approach to designing efficient backend endpoints for core business logic',
        'Collaborated with cross-functional teams to deliver mission-critical aviation management systems'
      ],
      tech: ['Java', 'Spring Boot', 'API Integration', 'Shell Scripting', 'Backend Development'],
      color: 'green'
    },
    {
      title: 'Data Engineer',
      company: 'HALO-ZIO - Zuci Systems',
      period: 'Dec 2020 – Jun 2023',
      location: 'Chennai, India',
      achievements: [
        'Rapidly learned ML frameworks and automated model development using Python, FastAPI, and Django',
        'Improved database performance by 60% through strategic SQL indexing and query optimization',
        'Quick adaptation to streaming technologies - built Kafka pipelines and automated builds with Bash/Python',
        'Deployed services in AWS EC2 and managed file uploads in AWS S3 buckets using boto3',
        'Fast learning of monitoring solutions - gained hands-on experience with the ELK Stack for log analysis'
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

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        bg: 'bg-cyan-50',
        border: 'border-cyan-200',
        text: 'text-cyan-600',
        dot: 'bg-cyan-500'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        dot: 'bg-green-500'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        dot: 'bg-orange-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous learning, growth, and delivering impactful solutions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-green-400"></div>

            <div className="space-y-12">
              {workExperience.map((job, index) => {
                const colors = getColorClasses(job.color);
                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 ${colors.dot} rounded-full border-4 border-white shadow-lg z-10`}></div>
                    
                    {/* Content Card */}
                    <div className="ml-20">
                      <div className={`${colors.bg} rounded-2xl p-8 border-2 ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300`}>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div>
                            <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
                              {job.title}
                            </h3>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">
                              {job.company}
                            </h4>
                            <div className="flex flex-wrap items-center gap-4 text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>{job.period}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 lg:mt-0">
                            <div className="flex flex-wrap gap-2">
                              {job.tech.slice(0, 4).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                                >
                                  {tech}
                                </span>
                              ))}
                              {job.tech.length > 4 && (
                                <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                                  +{job.tech.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                              <p className="text-gray-700 leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>

                        {/* Performance Highlight */}
                        {job.achievements.some(achievement => achievement.includes('80%') || achievement.includes('60%')) && (
                          <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="h-5 w-5 text-green-600" />
                              <span className="text-green-800 font-semibold">Performance Impact</span>
                            </div>
                            <p className="text-green-700 text-sm mt-2">
                              {job.achievements.find(achievement => achievement.includes('80%') || achievement.includes('60%'))}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Award className="h-8 w-8 text-orange-500" />
                <h3 className="text-3xl font-bold text-gray-900">Certifications</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-gray-700 font-medium text-center">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;