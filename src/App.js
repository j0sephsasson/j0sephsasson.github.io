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
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Load Link</h3>
              <p className="text-gray-600 mb-4">Distributed real-time logistics platform with event-driven architecture</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Kubernetes</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Redis</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">WebSockets</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">PostgreSQL</span>
              </div>
              <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
                <li>Real-time event streaming architecture</li>
                <li>Bidirectional WebSocket communication</li>
                <li>Distributed pub/sub system</li>
              </ul>
              <a href="https://github.com/j0sephsasson" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <ExternalLink size={16} />
                View Project
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">SuperDocs-AI</h3>
              <p className="text-gray-600 mb-4">Modular, containerized document understanding pipeline</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Docker</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Redis</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">AWS</span>
              </div>
              <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
                <li>Production-grade microservices architecture</li>
                <li>Deployed at multiple Fortune 500 companies</li>
                <li>Scalable document processing pipeline</li>
              </ul>
              <div className="flex items-center gap-4">
                <a href="https://github.com/j0sephsasson" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  <Github size={16} />
                  View Code
                </a>
              </div>
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