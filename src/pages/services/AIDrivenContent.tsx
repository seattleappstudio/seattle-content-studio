import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, CheckCircle, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';

const AIDrivenContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-emerald-200 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Brain className="h-12 w-12 text-emerald-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">AI-Driven Content</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-8">
              Leverage artificial intelligence to create compelling, targeted content that resonates 
              with your audience while maintaining the human touch that builds trust and engagement.
            </p>
            
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
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
                  Transform Your Content Strategy with AI
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In today's fast-paced digital landscape, businesses need to produce high-quality content 
                  at scale while maintaining authenticity and relevance. Our AI-driven content services 
                  combine cutting-edge artificial intelligence with human expertise to deliver content 
                  that not only engages your audience but drives measurable business results.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We don't believe in replacing human creativity with machines. Instead, we use AI as a 
                  powerful tool to enhance research capabilities, accelerate content production, and 
                  optimize for search engines and user engagement. Every piece of content is carefully 
                  reviewed and refined by our expert team to ensure it meets your brand standards and 
                  business objectives.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our AI Content Process</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-emerald-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategy & Research</h4>
                      <p className="text-gray-700">
                        We begin by understanding your business goals, target audience, and competitive 
                        landscape. Our AI tools analyze market trends, competitor content, and audience 
                        preferences to inform our content strategy and topic selection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-emerald-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-emerald-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">AI-Assisted Creation</h4>
                      <p className="text-gray-700">
                        Using advanced AI models, we generate initial content drafts, research supporting 
                        data, and optimize for SEO keywords. This accelerates the creation process while 
                        ensuring comprehensive coverage of your topics.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-emerald-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-emerald-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Human Review & Optimization</h4>
                      <p className="text-gray-700">
                        Our expert writers review, edit, and enhance all AI-generated content to ensure 
                        accuracy, brand alignment, and emotional resonance. We add the human insights 
                        and creativity that make content truly compelling.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What You Get</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Link to="/blog" className="flex items-center hover:text-emerald-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700 hover:text-emerald-600">Weekly/monthly blog posts</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-emerald-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700 hover:text-emerald-600">Newsletter content</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-emerald-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700 hover:text-emerald-600">SEO optimization</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-emerald-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700 hover:text-emerald-600">Industry insights</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-emerald-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700 hover:text-emerald-600">Social media content</span>
                  </Link>
                  <Link to="/blog" className="flex items-center hover:text-emerald-600 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700 hover:text-emerald-600">Content performance analytics</span>
                  </Link>
                </div>

                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose AI-Driven Content?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Faster Production:</strong> Reduce content creation time by 60-70%</li>
                    <li>• <strong>Consistent Quality:</strong> Maintain high standards across all content</li>
                    <li>• <strong>Data-Driven Insights:</strong> Content optimized based on real performance data</li>
                    <li>• <strong>Scalable Solutions:</strong> Easily increase content volume as your business grows</li>
                    <li>• <strong>Cost-Effective:</strong> More content for your budget compared to traditional methods</li>
                  </ul>
                </div>

                {/* Related Blog Posts Link */}
                <div className="mb-8">
                  <Link 
                    to="/blog?category=AI-Driven%20Content"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300 group"
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
              {/* AI Content Image */}
              <div className="mb-8">
                <a 
                  href="https://www.pexels.com/photo/person-using-macbook-pro-on-person-s-lap-1181298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Person working on laptop with AI content creation"
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Metrics</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-emerald-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">2-4 weeks</div>
                      <div className="text-sm text-gray-600">Typical project timeline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-emerald-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">50+ clients</div>
                      <div className="text-sm text-gray-600">Successfully served</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-emerald-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">300% avg</div>
                      <div className="text-sm text-gray-600">Content engagement increase</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6">
                  Book a free consultation to discuss your content needs and see how AI can 
                  transform your content strategy.
                </p>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
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

export default AIDrivenContent;