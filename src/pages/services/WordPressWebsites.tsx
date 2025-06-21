import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowLeft, CheckCircle, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';

const WordPressWebsites: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Globe className="h-12 w-12 text-green-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">WordPress Website Services</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8">
              Custom WordPress websites that combine beautiful design with powerful functionality, 
              SEO optimization, and content management systems that grow with your business.
            </p>
            
            <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
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
                  Professional WordPress Development
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  WordPress powers over 40% of all websites on the internet, and for good reason. As both 
                  a content creator and WordPress developer, we understand how to leverage this powerful 
                  platform to create websites that not only look stunning but also drive business results. 
                  Our approach combines technical expertise with content strategy to deliver websites that 
                  engage visitors and convert them into customers.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We specialize in creating custom WordPress solutions that go beyond basic templates. 
                  Whether you need a marketing website that showcases your services, landing pages that 
                  convert visitors into leads, or a complex site with custom functionality, we build 
                  WordPress websites that are fast, secure, SEO-optimized, and easy for you to manage 
                  and update.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Development Process</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategy & Planning</h4>
                      <p className="text-gray-700">
                        We begin by understanding your business goals, target audience, and content 
                        strategy. Our planning process includes site architecture, user experience 
                        design, and technical requirements to ensure your website serves your 
                        business objectives effectively.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Design & Development</h4>
                      <p className="text-gray-700">
                        Our team creates custom designs that reflect your brand and engage your 
                        audience. We develop responsive WordPress themes that work flawlessly across 
                        all devices and browsers, with clean code that ensures fast loading times 
                        and optimal performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Launch & Optimization</h4>
                      <p className="text-gray-700">
                        We handle the complete launch process including hosting setup, domain 
                        configuration, and SEO optimization. Post-launch, we provide training 
                        and ongoing support to ensure you can manage your website effectively 
                        and continue to achieve your business goals.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">WordPress Solutions</h3>
                
                 <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Custom WordPress site development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Landing pages, microsites, and funnels</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">SEO audit and optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Headless WordPress with front-end frameworks</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">WooCommerce setup and customization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Migrating WordPress to Confluence</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Plugin configuration and custom plugin dev</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Theme modifications and custom theme dev</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Integration with CRM and marketing tools</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Ongoing maintenance and performance tuning</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose WordPress?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Content Management:</strong> Easy-to-use interface for updating content without technical knowledge</li>
                    <li>• <strong>SEO-Friendly:</strong> Built-in features and plugins that help your site rank higher in search results</li>
                    <li>• <strong>Scalable:</strong> Grows with your business from simple sites to complex web applications</li>
                    <li>• <strong>Cost-Effective:</strong> Lower development and maintenance costs compared to custom solutions</li>
                    <li>• <strong>Flexible:</strong> Thousands of themes and plugins to extend functionality as needed</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Content-First Approach</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a professional content creator, we understand that great websites start with great content. 
                  Our WordPress development process integrates content strategy from the beginning, ensuring that 
                  your website structure, navigation, and design all support your content goals. We create sites 
                  that make it easy for you to publish, organize, and promote your content effectively.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security and Performance</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We implement industry best practices for WordPress security and performance optimization. 
                  Our websites include security hardening, regular backups, performance monitoring, and 
                  ongoing maintenance to ensure your site remains fast, secure, and reliable. We also 
                  provide training on WordPress best practices to help you maintain your site effectively.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our relationship doesn't end at launch. We offer comprehensive support packages including 
                  regular updates, security monitoring, performance optimization, and content strategy 
                  consultation. Whether you need technical support or content creation assistance, we're 
                  here to help your website continue driving business results.
                </p>

                {/* Related Blog Posts Link */}
                <div className="mb-8">
                  <Link 
                    to="/blog"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300 group"
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
              {/* WordPress Development Image */}
              <div className="mb-8">
                <a 
                  href="https://www.pexels.com/photo/person-using-macbook-pro-on-person-s-lap-1181298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Person working on WordPress website development on laptop"
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Metrics</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">2-6 weeks</div>
                      <div className="text-sm text-gray-600">Typical development timeline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">100+ websites</div>
                      <div className="text-sm text-gray-600">Successfully launched</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">200% increase</div>
                      <div className="text-sm text-gray-600">In organic traffic average</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Build?</h3>
                <p className="text-gray-700 mb-6">
                  Let's create a WordPress website that showcases your brand and 
                  drives real business results through strategic design and content.
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
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

export default WordPressWebsites;