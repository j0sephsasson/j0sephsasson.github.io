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
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Languages</h3>
              <div className="space-y-1">
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Python</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">JavaScript</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">C++</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tools & Technologies</h3>
              <div className="space-y-1">
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2">Docker</span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2">AWS</span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2">Azure</span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded">Kubernetes</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">ML/AI</h3>
              <div className="space-y-1">
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">PyTorch</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">TensorFlow</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded">LLMs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Senior Machine Learning Consultant</h3>
                <span className="text-gray-600">Feb 2024 - Present</span>
              </div>
              <p className="text-gray-600 mb-2">Ashling Partners, Chicago</p>
              <p className="mb-2">Led the development of an LLM-powered call center agent that reduced interaction time from 12 to 4 minutes through intelligent API orchestration and custom routing logic.</p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Machine Learning Consultant</h3>
                <span className="text-gray-600">June 2021 - Feb 2024</span>
              </div>
              <p className="text-gray-600 mb-2">Ashling Partners, Chicago</p>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Developed an AI-powered inbox processing 250,000+ RFPs annually</li>
                <li>Built intelligent search engine for 3.5M SKUs using Cognitive Search</li>
                <li>Led M&A contract automation pipeline using OCR and RAG</li>
                <li>Designed real-estate forecasting app using LSTM and KNN</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Load Link</h3>
              <p className="text-gray-600 mb-4">Real-time logistics platform with native mobile app</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Python</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Docker</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">React Native</span>
              </div>
              <a href="https://github.com/j0sephsasson" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <ExternalLink size={16} />
                View Project
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Local RAG from Scratch</h3>
              <p className="text-gray-600 mb-4">Entirely local RAG system using raw Python</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Python</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">Docker</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/j0sephsasson" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  <Github size={16} />
                  38 Stars
                </a>
                <a href="https://sassonjoe66.medium.com/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  <FileText size={16} />
                  Read Article
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