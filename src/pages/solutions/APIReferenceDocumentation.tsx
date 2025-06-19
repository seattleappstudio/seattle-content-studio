import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ArrowRight } from 'lucide-react';

const APIReferenceDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <Link 
            to="/services/technical-documentation" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Technical Documentation
          </Link>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">API Reference Documentation Solutions</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Description */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Solution Description</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Description Text */}
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our API reference documentation solutions transform complex technical specifications into clear, 
                  developer-friendly resources that accelerate integration and reduce support overhead. We understand 
                  that great API documentation is the foundation of developer adoption and product success.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our comprehensive approach includes interactive examples, clear endpoint descriptions, authentication 
                  guides, and real-world use cases that help developers understand not just what your API does, but 
                  how to implement it effectively in their projects.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We create documentation that serves both as a learning resource for new developers and a quick 
                  reference for experienced users. Our structured approach ensures consistency across all endpoints 
                  while maintaining the flexibility to highlight unique features and capabilities.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  From OpenAPI specifications to interactive documentation portals, we deliver solutions that make 
                  your API accessible, understandable, and actionable for developers at every skill level.
                </p>

                {/* Related Blog Post Link */}
                <div className="mt-8">
                  <Link 
                    to="/blog"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group"
                  >
                    Related blog post...
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              {/* Stock Photo */}
              <div>
                <img 
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Developer working with API documentation and code"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Snapshots */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Example Snapshots</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Placeholder Text</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Placeholder Text</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Placeholder Text</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Documentation Types</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                to="/blog" 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    Developer tutorials & walkthroughs
                  </span>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link 
                to="/blog" 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    How-to guides
                  </span>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link 
                to="/blog" 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    Technical editing
                  </span>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link 
                to="/blog" 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    User guides and onboarding
                  </span>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link 
                to="/blog" 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    Integration guides
                  </span>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your API Documentation?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's create API documentation that developers love to use and that drives adoption of your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Schedule Consultation
              </button>
              <Link 
                to="/services/technical-documentation"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View All Documentation Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIReferenceDocumentation;