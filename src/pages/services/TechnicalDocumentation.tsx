import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, CheckCircle, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';

const TechnicalDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <FileText className="h-12 w-12 text-blue-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">Technical Documentation</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Clear, comprehensive documentation that makes complex technology accessible to your users, 
              developers, and stakeholders while reducing support overhead.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentation That Actually Gets Used
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Great technical documentation is the bridge between complex technology and user success. 
                  Our approach focuses on creating documentation that developers, end-users, and stakeholders 
                  actually want to use. We understand that documentation isn't just about explaining features—it's 
                  about enabling users to achieve their goals quickly and efficiently.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With years of experience in both technical writing and software development, we bring a 
                  unique perspective to documentation projects. We know what developers need because we've 
                  been in their shoes. We understand user frustrations because we've experienced them ourselves. 
                  This dual perspective allows us to create documentation that truly serves its intended audience.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Documentation Approach</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">User Research & Analysis</h4>
                      <p className="text-gray-700">
                        We start by understanding your users' goals, technical background, and common pain points. 
                        Through interviews, surveys, and usage analytics, we identify what information users need 
                        and how they prefer to consume it.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Information Architecture</h4>
                      <p className="text-gray-700">
                        We design logical, intuitive structures that help users find information quickly. 
                        Our information architecture considers user journeys, task flows, and the relationship 
                        between different pieces of content.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Content Creation & Testing</h4>
                      <p className="text-gray-700">
                        We create clear, actionable content with practical examples and test it with real users. 
                        Our iterative approach ensures that documentation actually helps users accomplish their goals.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Documentation Types</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Link to="/services/solutions/api-reference-documentation" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 hover:text-blue-600">API reference documentation</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 hover:text-blue-600">Developer tutorials & walkthroughs</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 hover:text-blue-600">How-to guides</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 hover:text-blue-600">Technical editing</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 hover:text-blue-600">User guides and onboarding</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 hover:text-blue-600">Integration guides</span>
                  </Link>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Business Impact of Great Documentation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Reduced Support Tickets:</strong> Clear documentation can reduce support volume by 40-60%</li>
                    <li>• <strong>Faster User Onboarding:</strong> Well-structured guides accelerate time-to-value</li>
                    <li>• <strong>Improved Developer Experience:</strong> Quality docs attract and retain developers</li>
                    <li>• <strong>Increased Product Adoption:</strong> Users who understand your product use it more</li>
                    <li>• <strong>Competitive Advantage:</strong> Superior documentation differentiates your product</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Documentation Philosophy</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We believe that great technical documentation should be discoverable, scannable, and actionable. 
                  Users should be able to find what they need quickly, understand it at a glance, and successfully 
                  complete their tasks. We achieve this through clear headings, logical organization, practical 
                  examples, and continuous user feedback.
                </p>

                {/* Related Blog Posts Link */}
                <div className="mb-8">
                  <Link 
                    to="/blog?category=Technical%20Documentation"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    Related Blog Posts...
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Technical Documentation Image */}
              <div className="mb-8">
                <a 
                  href="https://www.pexels.com/photo/person-writing-on-notebook-669615/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Person writing technical documentation in notebook"
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Metrics</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">3-6 weeks</div>
                      <div className="text-sm text-gray-600">Typical project timeline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">75+ projects</div>
                      <div className="text-sm text-gray-600">Successfully completed</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">60% reduction</div>
                      <div className="text-sm text-gray-600">In support tickets</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Better Docs?</h3>
                <p className="text-gray-700 mb-6">
                  Let's discuss how we can transform your technical documentation to better 
                  serve your users and reduce support overhead.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalDocumentation;