import React from 'react';
import { Github, Linkedin, FileText, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Joe Sasson</h1>
          <p className="text-gray-600 mt-2">Senior Machine Learning Consultant</p>
          
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/j0sephsasson" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/joseph-sasson23/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://sassonjoe66.medium.com/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <FileText size={20} />
              Blog
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            I'm a machine learning architect specializing in distributed AI systems and production-grade MLOps infrastructure. With extensive experience deploying mission-critical AI solutions for Fortune 500 companies, I focus on building scalable, resilient architectures that deliver measurable business impact.
          </p>
        </section>

        {/* Updated Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Architecture & Systems</h3>
              <div className="space-y-1">
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Distributed Systems</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Microservices</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Event-Driven</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">Serverless</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Infrastructure & DevOps</h3>
              <div className="space-y-1">
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2">Docker</span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2">Kubernetes</span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2">AWS</span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded">Azure</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Data & AI Systems</h3>
              <div className="space-y-1">
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">Redis</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">PostgreSQL</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">PyTorch</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded">LLMs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Experience Section - focusing on architectural achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Senior Machine Learning Consultant</h3>
                <span className="text-gray-600">Feb 2024 - Present</span>
              </div>
              <p className="text-gray-600 mb-2">Ashling Partners, Chicago</p>
              <p className="mb-2">Architected a serverless distributed system powering an LLM call center agent that orchestrates 19 API endpoints through function calling, processing a 216M row data lake. Implemented comprehensive observability and custom routing logic, reducing interaction time by 67%.</p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Machine Learning Consultant</h3>
                <span className="text-gray-600">June 2021 - Feb 2024</span>
              </div>
              <p className="text-gray-600 mb-2">Ashling Partners, Chicago</p>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Designed distributed event-driven architecture for processing 250,000+ annual RFPs using Azure Functions and Docker</li>
                <li>Engineered scalable search engine with Redis caching and custom embedding models for 3.5M SKUs</li>
                <li>Architected containerized ML pipeline for M&A contract processing using OCR and RAG</li>
                <li>Developed horizontally scalable real-estate analytics platform with LSTM forecasting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Updated Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Engineering Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium">Load Link - Distributed Logistics Platform</h3>
                  <p className="text-gray-600 mt-1">Real-time event-driven logistics system with native mobile capabilities</p>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/j0sephsasson" className="text-gray-600 hover:text-gray-900">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Kubernetes</span>
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Redis</span>
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">PostgreSQL</span>
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">WebSockets</span>
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">React Native</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Architected distributed event streaming system handling real-time telematics data through WebSocket connections
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Implemented pub/sub architecture for real-time event propagation across microservices
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Led development of React Native mobile app with background location services and offline sync capabilities
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium">Local RAG System</h3>
                  <p className="text-gray-600 mt-1">Open-source RAG implementation with 38 GitHub stars and 30k reads</p>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/j0sephsasson" className="text-gray-600 hover:text-gray-900">
                    <Github size={20} />
                  </a>
                  <a href="https://medium.com" className="text-gray-600 hover:text-gray-900">
                    <FileText size={20} />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Python</span>
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Docker</span>
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">LLMs</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Engineered modular, production-ready RAG system using pure Python
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Implemented efficient vector storage and retrieval mechanisms
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Published detailed technical analysis reaching 30,000+ developers
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium">Neural Network Framework</h3>
                  <p className="text-gray-600 mt-1">Keras-like ANN library built from scratch using NumPy</p>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/j0sephsasson" className="text-gray-600 hover:text-gray-900">
                    <Github size={20} />
                  </a>
                  <a href="https://medium.com" className="text-gray-600 hover:text-gray-900">
                    <FileText size={20} />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Python</span>
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">NumPy</span>
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Deep Learning</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Developed complete neural network framework with familiar Keras-like API
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Implemented backpropagation, optimization algorithms, and activation functions
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Published technical documentation and examples reaching 20,000+ readers
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>Contact: sassonjoe66@gmail.com | 248.819.9608</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;