import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';

const WhitepapersAndCaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <BookOpen className="h-12 w-12 text-purple-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">Whitepapers & Case Studies</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8">
              In-depth research and analysis that positions your company as a thought leader 
              in your industry while demonstrating real-world value to prospects.
            </p>
            
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
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
                  Establish Thought Leadership Through Research
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In today's competitive B2B landscape, buyers conduct extensive research before making 
                  purchasing decisions. Whitepapers and case studies serve as powerful tools to educate 
                  prospects, demonstrate expertise, and build trust throughout the buyer's journey. Our 
                  research-driven approach creates compelling narratives that showcase your company's 
                  unique value proposition and industry expertise.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We specialize in transforming complex technical concepts and business outcomes into 
                  accessible, engaging content that resonates with decision-makers. Our team combines 
                  deep research capabilities with strategic storytelling to create content that not only 
                  informs but persuades and converts prospects into customers.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Research Process</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Topic Research & Validation</h4>
                      <p className="text-gray-700">
                        We identify trending topics and knowledge gaps in your industry through market 
                        research, competitor analysis, and audience surveys. This ensures your content 
                        addresses real market needs and positions you ahead of the competition.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Data Collection & Analysis</h4>
                      <p className="text-gray-700">
                        Our team conducts primary research through interviews, surveys, and data analysis, 
                        supplemented by secondary research from industry reports and academic sources. 
                        We ensure all claims are backed by credible data and evidence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Professional Writing & Design</h4>
                      <p className="text-gray-700">
                        We craft compelling narratives that transform data into insights and insights into 
                        actionable recommendations. Our content is professionally designed and formatted 
                        for maximum impact and readability.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Content Types</h3>
                
                 <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Technical whitepapers and R&D summaries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Data-driven industry analysis reports</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Customer success case studies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Vision and roadmap whitepapers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Thought leadership content development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Solution briefs and executive summaries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Use case and implementation guides</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Vertical-specific market reports</span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Power of Strategic Content</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Lead Generation:</strong> High-quality content generates 3x more leads than traditional marketing</li>
                    <li>• <strong>Sales Enablement:</strong> Equip your sales team with credible, persuasive materials</li>
                    <li>• <strong>Thought Leadership:</strong> Position your company as an industry authority</li>
                    <li>• <strong>Trust Building:</strong> Demonstrate expertise and build credibility with prospects</li>
                    <li>• <strong>Competitive Advantage:</strong> Differentiate your company through unique insights</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Case Study Success Stories</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our case studies have helped clients achieve remarkable results, including a 400% increase 
                  in qualified leads for a SaaS company, a 250% boost in sales cycle acceleration for a 
                  consulting firm, and industry recognition as thought leaders for multiple technology companies. 
                  We focus on measurable outcomes and compelling storytelling that resonates with your target audience.
                </p>

                {/* Related Blog Posts Link */}
                <div className="mb-8">
                  <Link 
                    to="/blog?category=Whitepapers%20%26%20Case%20Studies"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300 group"
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
              {/* Research & Analysis Image */}
              <div className="mb-8">
                <a 
                  href="https://www.pexels.com/photo/person-holding-white-stylus-pen-590016/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Person analyzing data and research for whitepapers"
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Stats</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-purple-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">4-8 weeks</div>
                      <div className="text-sm text-gray-600">Typical project timeline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">25+ reports</div>
                      <div className="text-sm text-gray-600">Published successfully</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-purple-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">400% increase</div>
                      <div className="text-sm text-gray-600">In qualified leads</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Build Authority</h3>
                <p className="text-gray-700 mb-6">
                  Ready to establish your company as a thought leader? Let's create 
                  compelling research that drives leads and builds trust.
                </p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
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

export default WhitepapersAndCaseStudies;