import React, { useState, useEffect } from 'react';
import { Code, Plane, Github, Linkedin, Mail, ChevronDown, User, Calendar, MapPin, Briefcase } from 'lucide-react';

// Main App Component
const PilotCoderPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Background animation */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute w-full h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-5"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `pulse ${Math.random() * 5 + 5}s infinite ${Math.random() * 5}s ease-in-out`,
                transform: `translateY(${scrollY * (i % 5) * 0.1}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm transition-all duration-300">
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <div className="flex items-center relative">
            <Plane className="text-blue-400 animate-bounce-slow mr-2" size={28} />
            <Code className="text-green-400 absolute top-0 left-0 animate-pulse" size={28} />
          </div>
          <span>Alex Skycode</span>
        </div>
        
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
        
        {/* Desktop links */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors hover:text-blue-400 ${activeSection === item ? 'text-blue-400' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-2xl capitalize hover:text-blue-400"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-blue-400">Pilot</span> by day,<br />
            <span className="text-green-400">Coder</span> by night
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-slide-up animation-delay-200">
            Navigating both the skies and the code with precision and passion
          </p>
          <div className="flex justify-center space-x-4 animate-slide-up animation-delay-400">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full font-medium flex items-center"
            >
              View Projects <ChevronDown className="ml-2" size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-white hover:border-blue-400 hover:text-blue-400 transition-colors rounded-full font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Animated airplane path */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="animate-fly-path" style={{
            position: 'absolute',
            animation: 'fly-path 20s linear infinite',
            transformOrigin: 'center'
          }}>
            <Plane size={40} className="text-blue-400" style={{transform: 'rotate(-45deg)'}} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-400">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <User size={100} className="text-white/80" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <User className="text-blue-400" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-400">Name</h3>
                  <p className="text-xl">Alex Skycode</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Briefcase className="text-blue-400" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-400">Profession</h3>
                  <p className="text-xl">Commercial Pilot & Full-Stack Developer</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Calendar className="text-blue-400" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-400">Experience</h3>
                  <p className="text-xl">8+ Years Flying, 5+ Years Coding</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-400">Location</h3>
                  <p className="text-xl">Seattle, Washington</p>
                </div>
              </div>
              
              <p className="text-gray-300 mt-6">
                I blend my passion for aviation and programming to create unique solutions. 
                With experience managing complex systems in the cockpit and building robust
                applications in code, I bring a disciplined and detail-oriented approach to 
                every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            My <span className="text-blue-400">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Aviation Skills */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-6">
                <Plane size={32} className="text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Aviation</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { name: 'Commercial Pilot License', level: 95 },
                  { name: 'Instrument Rating', level: 90 },
                  { name: 'Multi-Engine Rating', level: 85 },
                  { name: 'Flight Planning', level: 92 },
                  { name: 'Aviation Navigation', level: 88 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-blue-400 h-2.5 rounded-full animate-skill" 
                        style={{ width: `${skill.level}%`, animationDelay: `${Math.random() * 0.5}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Coding Skills */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-6">
                <Code size={32} className="text-green-400 mr-3" />
                <h3 className="text-2xl font-bold">Development</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { name: 'JavaScript/React', level: 92 },
                  { name: 'Python', level: 85 },
                  { name: 'Node.js/Express', level: 88 },
                  { name: 'Database Management', level: 80 },
                  { name: 'AWS/Cloud Services', level: 78 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-green-400 h-2.5 rounded-full animate-skill" 
                        style={{ width: `${skill.level}%`, animationDelay: `${Math.random() * 0.5}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "FlightPath",
                description: "Aviation route planning app with weather integration for pilots",
                tags: ["React", "Node.js", "Weather API", "Maps"],
                color: "from-blue-600 to-indigo-800"
              },
              {
                title: "CodePilot",
                description: "AI-assisted coding platform for real-time code suggestions",
                tags: ["Machine Learning", "Python", "JavaScript", "API"],
                color: "from-green-600 to-emerald-800"
              },
              {
                title: "SkyLogger",
                description: "Digital logbook for pilots with analytics and visualizations",
                tags: ["React Native", "Firebase", "Charts", "Mobile"],
                color: "from-purple-600 to-indigo-800"
              },
              {
                title: "AeroCode",
                description: "Aviation data analysis toolkit for flight performance optimization",
                tags: ["Python", "Data Science", "Pandas", "Visualization"],
                color: "from-red-600 to-pink-800"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-blue-400/20"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center p-6`}>
                  {index % 2 === 0 ? (
                    <Plane size={64} className="text-white/80" />
                  ) : (
                    <Code size={64} className="text-white/80" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Let's Work Together</h3>
              <p className="text-gray-300">
                Whether you need a pilot's perspective on your next project or looking for a 
                developer who can deliver precision code, I'm ready to collaborate and bring 
                your ideas to life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400" size={24} />
                  <span>alex@skycode.dev</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-400" size={24} />
                  <span>Seattle, WA, USA</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-24"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center text-gray-400">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-4">
            <Plane className="text-blue-400 mr-2" size={20} />
            <Code className="text-green-400" size={20} />
          </div>
          <p>© {new Date().getFullYear()} Alex Skycode. All rights reserved.</p>
        </div>
      </footer>

      {/* Custom style for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.5); opacity: 0.2; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fly-path {
          0% { top: 100%; left: 0%; }
          25% { top: 75%; left: 25%; }
          50% { top: 50%; left: 50%; }
          75% { top: 25%; left: 75%; }
          100% { top: 0%; left: 100%; }
        }
        
        @keyframes skill-animation {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: slide-up 0.8s forwards;
        }
        
        @keyframes slide-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animate-skill {
          animation: skill-animation 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PilotCoderPortfolio;
