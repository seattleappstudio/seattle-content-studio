import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ArrowLeft, CheckCircle, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';

const AppBasedContentAndSites: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-teal-200 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Smartphone className="h-12 w-12 text-teal-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">App-Based Content & Sites</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-teal-100 leading-relaxed mb-8">
              Interactive applications and microsites that engage users and deliver content 
              in innovative ways, creating memorable experiences that drive results.
            </p>
            
            <button className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
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
                  Interactive Content That Engages
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In an era where attention spans are shrinking and competition for user engagement 
                  is fierce, traditional static content often falls short. Our app-based content 
                  solutions transform passive reading experiences into interactive journeys that 
                  captivate users, encourage exploration, and drive meaningful engagement with your brand.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We specialize in creating custom applications and microsites that serve as powerful 
                  content delivery platforms. Whether you need an interactive product showcase, a 
                  data visualization tool, or a gamified learning experience, we combine cutting-edge 
                  technology with strategic content design to create solutions that achieve your 
                  business objectives.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Development Process</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-teal-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Concept & Design</h4>
                      <p className="text-gray-700">
                        We begin with user research and content strategy to understand your audience's 
                        needs and preferences. Our design process focuses on creating intuitive, 
                        engaging experiences that align with your brand and business goals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-teal-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Development & Testing</h4>
                      <p className="text-gray-700">
                        Using modern development frameworks and no-code platforms like Bubble.io, 
                        we build responsive, fast-loading applications that work seamlessly across 
                        all devices and browsers. Rigorous testing ensures optimal performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-teal-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Launch & Optimization</h4>
                      <p className="text-gray-700">
                        We deploy your application with comprehensive analytics tracking and provide 
                        ongoing optimization based on user behavior data. Our iterative approach 
                        ensures continuous improvement in engagement and conversion rates.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">App Solutions</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Link to="/blog" className="flex items-center hover:text-teal-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700 hover:text-teal-600">Interactive apps for publishing content</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-teal-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700 hover:text-teal-600">Bubble.io-based microapps</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-teal-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700 hover:text-teal-600">Storytelling tools for mobile/web</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-teal-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700 hover:text-teal-600">Custom web applications</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-teal-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700 hover:text-teal-600">Progressive web apps (PWAs)</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-teal-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-gray-700 hover:text-teal-600">Data visualization dashboards</span>
                  </Link>
                </div>

                <div className="bg-teal-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose App-Based Content?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Higher Engagement:</strong> Interactive content generates 2x more engagement than static content</li>
                    <li>• <strong>Better Data Collection:</strong> Gather detailed insights about user preferences and behavior</li>
                    <li>• <strong>Memorable Experiences:</strong> Create lasting impressions that differentiate your brand</li>
                    <li>• <strong>Mobile-First Design:</strong> Optimized for the way modern users consume content</li>
                    <li>• <strong>Scalable Solutions:</strong> Applications that grow with your content needs</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We leverage modern development tools and platforms to create robust, scalable applications. 
                  Our technology stack includes React for dynamic user interfaces, Node.js for backend services, 
                  Bubble.io for rapid prototyping, and cloud hosting solutions for reliable performance. We 
                  choose the right tools for each project based on your specific requirements and constraints.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Success Stories</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our app-based content solutions have helped clients achieve remarkable results, including 
                  a 300% increase in user engagement for a B2B software company, a 150% improvement in lead 
                  generation for a consulting firm, and a 200% boost in content consumption time for a 
                  technology publication. We focus on creating measurable business impact through innovative 
                  content experiences.
                </p>

                {/* Related Blog Posts Link */}
                <div className="mb-8">
                  <Link 
                    to="/blog?category=App-Based%20Content%20%26%20Sites"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-300 group"
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
              {/* App Development Image */}
              <div className="mb-8">
                <a 
                  href="https://www.pexels.com/photo/person-holding-iphone-showing-social-networks-folder-267350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Person holding smartphone with app development interface"
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">App Development Stats</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">4-12 weeks</div>
                      <div className="text-sm text-gray-600">Development timeline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">30+ apps</div>
                      <div className="text-sm text-gray-600">Successfully launched</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">500% increase</div>
                      <div className="text-sm text-gray-600">In user engagement</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Build?</h3>
                <p className="text-gray-700 mb-6">
                  Transform your content strategy with interactive applications that 
                  engage users and deliver measurable results.
                </p>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
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

export default AppBasedContentAndSites;