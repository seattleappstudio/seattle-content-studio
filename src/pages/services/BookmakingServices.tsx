import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ArrowLeft, CheckCircle, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';

const BookmakingServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-700 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-amber-200 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Book className="h-12 w-12 text-amber-300 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">Bookmaking Services</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-amber-100 leading-relaxed mb-8">
              Comprehensive book writing, editing, and publishing services for authors and creative 
              professionals looking to bring their stories and expertise to life.
            </p>
            
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
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
                  From Concept to Published Work
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While our primary focus is on business and technical content, we're proud to extend our 
                  expertise to creative professionals and authors who need comprehensive bookmaking services. 
                  Our team brings the same attention to detail, strategic thinking, and quality standards 
                  that we apply to corporate content to the world of book creation and publishing.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Whether you're a busy executive who wants to share your expertise through a business book, 
                  a creative professional working on a novel, or an organization that needs comprehensive 
                  editing and indexing services, we provide the full spectrum of bookmaking support to bring 
                  your vision to life with professional quality and attention to detail.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Bookmaking Process</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-amber-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Concept Development & Planning</h4>
                      <p className="text-gray-700">
                        We work with you to refine your book concept, develop a comprehensive outline, 
                        and create a realistic timeline for completion. Our planning process ensures 
                        your book has clear structure and compelling narrative flow.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-amber-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Writing & Collaboration</h4>
                      <p className="text-gray-700">
                        Through ghostwriting services or collaborative writing partnerships, we help 
                        bring your ideas to life with professional prose that captures your unique 
                        voice and expertise while maintaining engaging readability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Editing & Refinement</h4>
                      <p className="text-gray-700">
                        Our comprehensive editing process includes developmental editing for structure 
                        and flow, copy editing for clarity and style, and proofreading for final 
                        polish. We ensure your book meets professional publishing standards.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bookmaking Solutions</h3>
                
                 <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Ghostwriting for nonfiction and memoir</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Book proposal writing and development</span> 
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Print and ebook formatting and design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Developmental and copy editing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Indexing and glossary creation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Book selling microsites</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Self-publishing consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Citation and reference editing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Author branding and marketing content</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Creative writing coaching and mentoring</span>
                  </div>
                  
                </div>

                <div className="bg-amber-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Books We Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Business Books:</strong> Share your expertise and build thought leadership</li>
                    <li>• <strong>Memoirs & Biographies:</strong> Tell compelling personal or professional stories</li>
                    <li>• <strong>Technical Guides:</strong> Transform complex knowledge into accessible content</li>
                    <li>• <strong>Fiction Projects:</strong> Novels, screenplays, and creative writing</li>
                    <li>• <strong>Academic Works:</strong> Research publications and scholarly writing</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality and Confidentiality</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We understand that book projects often involve personal stories, proprietary business 
                  insights, or sensitive information. Our team maintains strict confidentiality agreements 
                  and professional standards throughout the entire process. Whether you're working on a 
                  ghostwritten business book or a personal memoir, your privacy and intellectual property 
                  are completely protected.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Publishing Support</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Beyond writing and editing, we provide guidance on publishing options, from traditional 
                  publishing to self-publishing platforms. Our team can help you understand the publishing 
                  landscape, prepare submission materials, and choose the path that best aligns with your 
                  goals and timeline.
                </p>

                {/* Related Blog Posts Link */}
                <div className="mb-8">
                  <Link 
                    to="/blog"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300 group"
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
              {/* Bookmaking Image */}
              <div className="mb-8">
                <a 
                  href="https://www.pexels.com/photo/person-writing-on-notebook-669615/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Person writing in notebook for book creation and editing"
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Metrics</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">3-12 months</div>
                      <div className="text-sm text-gray-600">Typical book timeline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">15+ books</div>
                      <div className="text-sm text-gray-600">Successfully completed</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-amber-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">100% satisfaction</div>
                      <div className="text-sm text-gray-600">Client completion rate</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Write?</h3>
                <p className="text-gray-700 mb-6">
                  Whether you have a complete manuscript or just an idea, let's discuss 
                  how we can help bring your book to life.
                </p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
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

export default BookmakingServices;