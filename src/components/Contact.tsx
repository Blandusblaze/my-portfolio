import React from 'react';
import { Mail, Github, Linkedin, FileText, Film, MapPin, Coffee, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bharathkuppu2000@gmail.com',
      href: 'mailto:bharathkuppu2000@gmail.com',
      color: 'blue'
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100',
      gray: 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100',
      green: 'bg-green-50 border-green-200 text-green-600 hover:bg-green-100'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {method.label}
                        </div>
                        <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Personal Touch */}
              <div className="space-y-6">
                <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Coffee className="h-6 w-6 text-orange-400" />
                    <span className="text-white font-semibold text-lg">Quick Learner & Problem Solver</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I rapidly adapt to new technologies and frameworks, bringing a solution-driven approach 
                    to tackle complex engineering challenges with clean, efficient code.
                  </p>
                </div>

                <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Film className="h-6 w-6 text-purple-400" />
                    <span className="text-white font-semibold text-lg">Beyond Code</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    When I'm not building systems, you can find me exploring cinema on{' '}
                    <a 
                      href="https://letterboxd.com/BlazeZoro/films/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline transition-colors"
                    >
                      Letterboxd
                    </a>
                    {' '}or learning about the latest tech trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Status & Footer */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-500/20 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Available for new opportunities</span>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> Built with React + TypeScript + Tailwind CSS
              </p>
              <p className="text-gray-600 text-xs">
                © 2025 Bharath Kuppusamy. Crafted with passion and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;