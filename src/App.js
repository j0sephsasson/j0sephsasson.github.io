import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-gray-800">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-2xl font-bold mb-1">Joe Sasson</h1>
        <p className="text-gray-600 mb-4">Machine Learning Architect</p>
        
        <div className="flex gap-4">
          <a href="https://github.com/j0sephsasson" className="text-gray-600 hover:text-gray-900">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/joseph-sasson23/" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={18} />
          </a>
          <a href="https://sassonjoe66.medium.com/" className="text-gray-600 hover:text-gray-900">
            <FileText size={18} />
          </a>
        </div>
      </header>

      {/* About */}
      <section className="mb-12">
        <p className="text-lg">
          I build distributed AI systems and production-grade MLOps infrastructure. Currently focused on architecting scalable LLM applications and real-time ML systems.
        </p>
      </section>

      {/* Projects & Work */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Notable Work</h2>
        <ul className="space-y-3">
          <li>• Architected distributed LLM system processing 216M records for enterprise call centers</li>
          <li>• Built event-driven architecture handling 250k+ annual RFPs using Azure Functions</li>
          <li>• Developed open-source RAG implementation (38 stars, 30k reads)</li>
          <li>• Created real-time logistics platform with WebSocket-based event streaming</li>
          <li>• Implemented neural network framework from scratch using NumPy</li>
        </ul>
      </section>

      {/* Hacking & Research */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Current Interests</h2>
        <ul className="space-y-3">
          <li>• Exploring efficient RAG architectures for enterprise-scale deployment</li>
          <li>• Building distributed systems for real-time ML inference</li>
          <li>• Optimizing large-scale data processing pipelines</li>
        </ul>
      </section>

      {/* Contact */}
      <footer className="text-sm text-gray-600">
        sassonjoe66@gmail.com
      </footer>
    </div>
  );
};

export default Portfolio;