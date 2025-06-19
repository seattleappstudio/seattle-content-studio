import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, ArrowLeft, CheckCircle, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';

const AIAutomationServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-indigo-200 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Settings className="h-12 w-12 text-indigo-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">AI Automation Services</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed mb-8">
              Streamline your business operations with intelligent automation solutions that 
              save time, reduce errors, and scale with your growing business needs.
            </p>
            
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
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
                  Automate Your Way to Efficiency
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Business automation isn't just about saving time—it's about transforming how your 
                  organization operates. Our AI automation services help companies eliminate repetitive 
                  tasks, reduce human error, and free up valuable resources to focus on strategic growth 
                  initiatives. We specialize in creating intelligent workflows that adapt and improve 
                  over time.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  From simple task automation to complex AI-driven decision-making systems, we design 
                  solutions that integrate seamlessly with your existing tools and processes. Our approach 
                  combines proven automation platforms with custom development to create systems that 
                  truly serve your unique business needs.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Automation Process</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-indigo-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Workflow Analysis</h4>
                      <p className="text-gray-700">
                        We conduct a comprehensive audit of your current processes to identify automation 
                        opportunities. Our team maps out workflows, identifies bottlenecks, and calculates 
                        potential time and cost savings for each automation opportunity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-indigo-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution Design</h4>
                      <p className="text-gray-700">
                        We design custom automation solutions that integrate with your existing systems. 
                        Our solutions are built for scalability and reliability, ensuring they can grow 
                        with your business and handle increasing volumes of work.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-indigo-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Implementation & Testing</h4>
                      <p className="text-gray-700">
                        We implement automation solutions in phases, thoroughly testing each component 
                        before full deployment. Our approach minimizes disruption to your operations 
                        while ensuring reliable, error-free automation.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Automation Solutions</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Link to="/blog" className="flex items-center hover:text-indigo-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 hover:text-indigo-600">Workflow automation using Make, Zapier</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-indigo-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 hover:text-indigo-600">CRM/email/scheduling integrations</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-indigo-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 hover:text-indigo-600">AI agents for business ops</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-indigo-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 hover:text-indigo-600">Custom automation solutions</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-indigo-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 hover:text-indigo-600">Data synchronization and migration</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-indigo-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 hover:text-indigo-600">Automated reporting and analytics</span>
                  </Link>
                </div>

                <div className="bg-indigo-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Automation Use Cases</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Lead Management:</strong> Automatically route and qualify leads from multiple sources</li>
                    <li>• <strong>Customer Onboarding:</strong> Streamline new customer setup and communication</li>
                    <li>• <strong>Invoice Processing:</strong> Automate invoice creation, approval, and payment tracking</li>
                    <li>• <strong>Social Media Management:</strong> Schedule posts and respond to mentions automatically</li>
                    <li>• <strong>Data Entry:</strong> Eliminate manual data entry between systems</li>
                    <li>• <strong>Report Generation:</strong> Create and distribute reports automatically</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI-Powered Automation</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Beyond simple task automation, we implement AI-powered solutions that can make decisions, 
                  learn from patterns, and adapt to changing conditions. Our AI agents can handle customer 
                  inquiries, analyze data for insights, and even generate content based on your specifications. 
                  These intelligent systems work 24/7 to keep your business running smoothly.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">ROI and Performance Tracking</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive analytics and reporting to track the performance and ROI of your 
                  automation investments. Our dashboards show time saved, errors reduced, and productivity 
                  gains, helping you understand the tangible business impact of automation.
                </p>

                {/* Related Blog Posts Link */}
                <div className="mb-8">
                  <Link 
                    to="/blog?category=AI%20Automation%20Services"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300 group"
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
              {/* AI Automation Image */}
              <div className="mb-8">
                <a 
                  href="https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Programming code for automation and AI systems"
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automation Impact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">2-4 weeks</div>
                      <div className="text-sm text-gray-600">Implementation timeline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">40+ workflows</div>
                      <div className="text-sm text-gray-600">Successfully automated</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">70% time saved</div>
                      <div className="text-sm text-gray-600">On average per workflow</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Automate?</h3>
                <p className="text-gray-700 mb-6">
                  Stop doing repetitive tasks manually. Let's identify automation 
                  opportunities in your business and build solutions that scale.
                </p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
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

export default AIAutomationServices;