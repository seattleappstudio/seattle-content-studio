import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, CheckCircle, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';

const TechEventCoverage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-700 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-orange-200 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Calendar className="h-12 w-12 text-orange-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">Tech Event Coverage</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-8">
              Comprehensive event coverage that captures key insights, extends your event ROI, 
              and keeps your audience engaged before, during, and after the event.
            </p>
            
            <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
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
                  Maximize Your Event Investment
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Tech events represent significant investments in time, money, and resources. Whether you're 
                  attending conferences, hosting webinars, or participating in trade shows, the value of these 
                  events extends far beyond the days they occur. Our comprehensive event coverage services 
                  help you capture, amplify, and extend the impact of your event participation.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We understand that effective event coverage requires more than just live-tweeting or taking 
                  notes. It demands strategic planning, real-time content creation, and post-event amplification 
                  that turns momentary interactions into lasting business relationships and thought leadership 
                  opportunities. Our team brings both technical expertise and marketing savvy to every event.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Coverage Process</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-orange-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pre-Event Planning</h4>
                      <p className="text-gray-700">
                        We research speakers, agenda topics, and attendee demographics to identify key 
                        opportunities for content creation. We develop a comprehensive coverage strategy 
                        that aligns with your business goals and target audience interests.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-orange-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Live Event Coverage</h4>
                      <p className="text-gray-700">
                        Our team provides real-time coverage through social media, live blogging, and 
                        multimedia content creation. We capture key insights, quotes, and moments that 
                        resonate with your audience and industry.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-orange-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Post-Event Content</h4>
                      <p className="text-gray-700">
                        We transform event insights into valuable long-form content including detailed 
                        summaries, trend analyses, and actionable takeaways that continue to drive 
                        engagement and leads long after the event ends.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Coverage Services</h3>
                
                 <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Live blogging and real-time updates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Session recaps and conference summaries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Executive and keynote speech highlights</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Speaker interviews and Q&A features</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Social media and newsletter recaps</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Event landing page and content hub creation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Panel discussion synthesis and insights</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Photo galleries and visual documentation</span>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Coverage Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Extended Reach:</strong> Share insights with those who couldn't attend</li>
                    <li>• <strong>Thought Leadership:</strong> Position your company as an industry insider</li>
                    <li>• <strong>Content Library:</strong> Build a repository of industry insights and trends</li>
                    <li>• <strong>Network Amplification:</strong> Strengthen relationships with speakers and attendees</li>
                    <li>• <strong>Lead Generation:</strong> Attract prospects interested in industry developments</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Virtual and Hybrid Events</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The rise of virtual and hybrid events has created new opportunities for content creation 
                  and audience engagement. We adapt our coverage strategies for digital formats, leveraging 
                  chat interactions, breakout sessions, and virtual networking opportunities to create 
                  compelling content that captures the unique dynamics of online events.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Measuring Event ROI</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We help you track the impact of your event participation through comprehensive analytics 
                  including social media engagement, website traffic, lead generation, and brand mention 
                  analysis. Our reporting demonstrates the tangible business value of your event investment.
                </p>

                {/* Related Blog Posts Link */}
                <div className="mb-8">
                  <Link 
                    to="/blog?category=Tech%20Event%20Coverage"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300 group"
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
              {/* Tech Event Image */}
              <div className="mb-8">
                <a 
                  href="https://www.pexels.com/photo/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-1181533/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="People attending tech conference and taking notes"
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Metrics</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">1-3 days</div>
                      <div className="text-sm text-gray-600">Event duration coverage</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">100+ events</div>
                      <div className="text-sm text-gray-600">Successfully covered</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">250% increase</div>
                      <div className="text-sm text-gray-600">In social engagement</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Event?</h3>
                <p className="text-gray-700 mb-6">
                  Don't let your event investment go to waste. Let's discuss how we can 
                  maximize your event ROI through comprehensive coverage.
                </p>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
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

export default TechEventCoverage;