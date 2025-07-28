import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Menu, X, ExternalLink } from 'lucide-react';

const PersonalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;
      
      // Check if we're near the bottom of the page (within 100px)
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      
      if (isNearBottom) {
        setActiveSection('contact');
        return;
      }
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      company: "Cisco",
      role: "Senior AI Solutions Engineer",
      period: "April 2024 - Present",
      location: "Chicago, IL",
      description: "Technical sales role working with enterprise customers to develop and sell AI and HPC infrastructure solutions.",
      responsibilities: [
        "Partner with customers to architect AI/ML infrastructure solutions",
        "Drive technical sales for high-performance computing systems", 
        "Develop custom AI infrastructure proposals for enterprise clients",
        "Lead technical discussions with C-level executives and engineering teams"
      ]
    },
    {
      company: "Ashling Partners",
      role: "Applied AI Manager",
      period: "January 2024 - April 2024", 
      location: "Chicago, IL",
      description: "Led applied AI initiatives and managed cross-functional teams delivering production ML solutions.",
      responsibilities: [
        "Managed team of ML engineers and data scientists",
        "Oversaw deployment of AI systems at Fortune 500 companies",
        "Drove strategic AI adoption across client organizations",
        "Led technical architecture decisions for enterprise AI solutions"
      ]
    },
    {
      company: "Ashling Partners",
      role: "Senior Machine Learning Consultant",
      period: "February 2023 - January 2024",
      location: "Chicago, IL",
      description: "Led ML initiatives and architected production AI systems for Fortune 500 companies.",
      responsibilities: [
        "Architected serverless LLM agent reducing call center interaction time from 12 to 4 minutes",
        "Built distributed system orchestrating 19 API endpoints with 216M row data lake",
        "Deployed production AI systems at Fortune 500 companies",
        "Implemented comprehensive observability layer for monitoring agent decision paths"
      ]
    },
    {
      company: "Ashling Partners",
      role: "Machine Learning Consultant",
      period: "June 2021 - February 2023",
      location: "Chicago, IL",
      description: "Full-stack ML development from conception to production deployment.",
      responsibilities: [
        "Led resume classification system processing 20,000+ resumes monthly",
        "Built AI inbox handling 250,000+ RFPs annually, reducing processing time by 90%",
        "Designed intelligent search engine for 3.5M SKUs using Azure Cognitive Search",
        "Automated M&A contract data extraction from 500+ page documents",
        "Developed real-estate forecasting app analyzing 500,000+ deals",
        "Designed and conducted AI training sessions for 15 analysts and engineers"
      ]
    }
  ];

  const projects = [
    {
      title: "Load Link: Real-time Logistics Brokerage & Freight-Forwarding Platform",
      description: "Distributed real-time logistics platform with native mobile app",
      technologies: "Python | Docker | Kubernetes | PostgreSQL | Redis | WebSockets | React/Redux | React Native",
      details: [
        "Built distributed event streaming architecture handling real-time telematics data through WebSocket connections, with Samsara and Highway integrations",
        "Engineered bidirectional real-time data flow between mobile clients and server through WebSocket channels for instant updates",
        "Implemented pub/sub system for real-time event propagation across microservices",
        "Developed comprehensive API layer enabling third-party integrations and real-time data access",
        "Lead team of engineers developing a React Native mobile app with background location services and offline synchronization"
      ]
    },
    {
      title: "Local RAG from Scratch",
      description: "Entirely local RAG system using raw Python | Towards Data Science",
      technologies: "Python | Docker",
      details: [
        "Open-source, entirely local, and modular RAG system",
        "46 GitHub stars and over 50k reads"
      ]
    },
    {
      title: "Coding A Neural Network From Scratch in NumPy",
      description: "Open-source ANN library & publication | Towards Data Science",
      technologies: "Python | LaTeX",
      details: [
        "Open-source ANN library built in raw Python, using only NumPy. Very similar to keras (without GPU capabilities)",
        "5 GitHub stars, 5 Forks, and 20k reads"
      ]
    },
    {
      title: "SuperDocs-AI",
      description: "Suite of modular, containerized microservices for developing document understanding pipelines",
      technologies: "Python | Redis | AWS | Docker",
      details: [
        "Designed and developed the containers and application to deploy intelligent document understanding processes",
        "Currently in production at two household name public companies (financial services & energy) and one large private company"
      ]
    },
    {
      title: "Dojo-AI",
      description: "Automated ML application and marketplace that enables users to create, buy, and sell AI on the Ethereum blockchain",
      technologies: "Python | JavaScript | AWS | Docker | Redis | Solidity | PostgreSQL",
      details: [
        "Designed and deployed the end-to-end system from ML models, to blockchain integration, to front-end UI",
        "Listed AI models for sale on the marketplace"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 bg-white border-b transition-shadow duration-200 ${
        scrollY > 0 ? 'shadow-sm' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">Joe Sasson</h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium ${
                    activeSection === item.id 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 text-sm ${
                    activeSection === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Joe Sasson</h1>
              <p className="text-xl text-gray-600 mb-2">Senior AI Solutions Engineer at Cisco</p>
              <p className="text-lg text-gray-500 mb-6">Technical Sales | AI & HPC Infrastructure</p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:josasson@cisco.com" className="hover:text-blue-600">josasson@cisco.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>248.819.9608</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Chicago, IL</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/j0sephsasson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/joseph-sasson23/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="https://sassonjoe66.medium.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Medium
                </a>
              </div>
            </div>

            <div className="prose max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                I'm a machine learning engineer turned engineering leader, now architecting AI infrastructure for enterprises at scale. 
                Built my career designing, developing, and deploying full-stack ML applications. Currently, I partner with C-level executives to architect hybrid AI/HPC systems, 
                translating complex technical requirements into scalable infrastructure solutions. Expertise spans distributed systems, 
                LLM deployment, and production ML architecture with a focus on performance and reliability at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                    <p className="text-gray-500 md:text-right mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-2">•</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Projects & Publications</h2>
            
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="text-sm text-blue-600 font-medium mb-4">{project.technologies}</p>
                  
                  <ul className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact</h2>
            
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div>
                <Mail className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:josasson@cisco.com" className="text-blue-600 hover:underline">
                  josasson@cisco.com
                </a>
              </div>
              
              <div>
                <Phone className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-700">248.819.9608</p>
              </div>
              
              <div>
                <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Chicago, IL</p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/j0sephsasson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/joseph-sasson23/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm">&copy; 2025 Joe Sasson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalPortfolio;