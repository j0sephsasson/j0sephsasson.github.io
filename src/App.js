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
          I build distributed AI systems and production-grade MLOps infrastructure. Currently focused on developing scalable LLM applications and real-time ML systems.
        </p>
      </section>

      {/* Projects & Work */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Notable Work</h2>
        <ul className="space-y-3">
          <li>• Architected serverless distributed LLM agent system that dynamically orchestrates 19 different API endpoints through function calling, each interacting with specialized views of a 216M row data lake</li>
          <li>• Built event-driven architecture handling 250k+ annual RFPs using Azure Functions and LLMs</li>
          <li>• Developed open-source RAG implementation (38 stars, 30k reads) <a href="https://medium.com/towards-data-science/local-rag-from-scratch-3afc6d3dea08" className="text-blue-600 hover:underline">[Link]</a></li>
          <li>• Created real-time logistics platform with WebSocket-based event streaming <a href="https://loadlink-devtest-platform-001.livelyforest-e29e2b6d.eastus2.azurecontainerapps.io" className="text-blue-600 hover:underline">[Link]</a></li>
          <li>• Implemented neural network framework from scratch using NumPy <a href="https://medium.com/towards-data-science/coding-a-neural-network-from-scratch-in-numpy-31f04e4d605" className="text-blue-600 hover:underline">[Link]</a></li>
        </ul>
      </section>

      {/* Hacking & Research */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Current Interests</h2>
        <ul className="space-y-3">
          <li>• Contributing to and creating open-source projects</li>
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