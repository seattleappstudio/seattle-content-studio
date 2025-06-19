import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const serviceCategories = [
    { name: 'AI-Driven Content', link: '/services/ai-driven-content' },
    { name: 'Technical Documentation', link: '/services/technical-documentation' },
    { name: 'Whitepapers & Case Studies', link: '/services/whitepapers-and-case-studies' },
    { name: 'Tech Event Coverage', link: '/services/tech-event-coverage' },
    { name: 'AI Automation Services', link: '/services/ai-automation-services' },
    { name: 'App-Based Content & Sites', link: '/services/app-based-content-and-sites' },
    { name: 'Bookmaking Services', link: '/services/bookmaking-services' },
    { name: 'WordPress Websites', link: '/services/wordpress-websites' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your trusted{' '}
            <span className="text-emerald-600">content creator</span>{' '}
            and AI consultant
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Photo */}
            <div className="lg:order-1">
              <img 
                src="/images/joe-at-coffee.png" 
                alt="Joe Perez, professional content creator and AI consultant, working at Seattle coffee shop"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="lg:order-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Founded in 2025 by Expert Content Creator Joe Perez
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Seattle Content Studio emerges as the unified home of services previously 
                offered under Seattle AI Studio and Seattle App Studio. As a seasoned 
                <strong> content creator</strong>, <strong>blog writer</strong>, and 
                <strong> AI consultant</strong>, Joe brings deep expertise in creating 
                compelling digital experiences that drive business results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our founder combines years of experience as a professional <strong>blog writer</strong> 
                and <strong>app developer</strong> with cutting-edge AI consulting expertise. 
                This unique blend allows us to serve Pacific Northwest businesses with 
                comprehensive content strategies that leverage both human creativity and 
                artificial intelligence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As your dedicated <strong>content creator</strong> and <strong>AI consultant</strong>, 
                we specialize in transforming complex technical concepts into engaging content 
                that resonates with your audience while implementing smart automation solutions 
                that scale with your business growth.
              </p>
            </div>
          </div>

          {/* Mission, Focus, Approach - Now below the photo and text */}
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <Target className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-700">
                    Empowering tech businesses through expert content creation, strategic 
                    blog writing, and intelligent AI consulting services.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Focus</h4>
                  <p className="text-gray-700">
                    Tech-savvy businesses seeking a reliable content creator and AI consultant 
                    who understands both technology and effective communication.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Lightbulb className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Approach</h4>
                  <p className="text-gray-700">
                    Combining professional blog writing expertise with advanced AI consulting 
                    to create content that engages audiences and drives measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Content Creator & AI Consultant Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <span className="font-medium text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;