import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  FileText, 
  BookOpen, 
  Calendar, 
  Settings, 
  Smartphone,
  Book,
  Globe,
  ArrowRight 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Content Creator Services',
      description: 'Professional blog writer leveraging AI to create compelling, targeted content that resonates with your audience and drives engagement.',
      offerings: [
        'Expert blog writing and content creation',
        'AI-powered newsletter content',
        'SEO-optimized content strategy',
        'Industry insights and thought leadership'
      ],
      link: '/services/ai-driven-content'
    },
    {
      icon: FileText,
      title: 'Technical Documentation',
      description: 'Professional technical writer creating clear, comprehensive documentation that makes complex technology accessible to your users.',
      offerings: [
        'API reference documentation',
        'Developer tutorials & walkthroughs',
        'User guides and how-to content',
        'Technical editing and content review'
      ],
      link: '/services/technical-documentation'
    },
    {
      icon: BookOpen,
      title: 'Whitepapers & Case Studies',
      description: 'Expert content creator specializing in in-depth research and analysis that positions your company as a thought leader.',
      offerings: [
        'Technical whitepapers and research',
        'Customer success case studies',
        'Industry analysis and reports',
        'Thought leadership content'
      ],
      link: '/services/whitepapers-and-case-studies'
    },
    {
      icon: Calendar,
      title: 'Tech Event Coverage',
      description: 'Professional blog writer providing comprehensive event coverage that captures key insights and extends your event ROI.',
      offerings: [
        'Live event coverage and blogging',
        'Post-event content and summaries',
        'Speaker interviews and insights',
        'Industry trend analysis'
      ],
      link: '/services/tech-event-coverage'
    },
    {
      icon: Settings,
      title: 'AI Consultant & Automation',
      description: 'Expert AI consultant streamlining your business operations with intelligent automation solutions that scale.',
      offerings: [
        'AI consulting and strategy',
        'Workflow automation (Make, Zapier)',
        'CRM and business integrations',
        'Custom automation development'
      ],
      link: '/services/ai-automation-services'
    },
    {
      icon: Smartphone,
      title: 'App Developer Services',
      description: 'Professional app developer creating interactive applications and microsites that engage users and deliver content innovatively.',
      offerings: [
        'Custom app development',
        'Bubble.io microapp creation',
        'Interactive content platforms',
        'Mobile-responsive web applications'
      ],
      link: '/services/app-based-content-and-sites'
    },
    {
      icon: Book,
      title: 'Bookmaking Services',
      description: 'Professional content creator offering comprehensive book writing, editing, and publishing services for authors and creative professionals.',
      offerings: [
        'Ghostwriting',
        'Books and Ebooks',
        'Book Editing',
        'Book Indexing'
      ],
      link: '/services/bookmaking-services'
    },
    {
      icon: Globe,
      title: 'WordPress Websites',
      description: 'Professional WordPress developer creating custom websites that combine beautiful design with powerful functionality and SEO optimization.',
      offerings: [
        'Marketing websites',
        'Landing pages and microsites',
        'SEO optimization',
        'Custom themes & plugins'
      ],
      link: '/services/wordpress-websites'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Content Creator & AI Consultant Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional blog writer, app developer, and AI consultant helping businesses 
            simplify and amplify their content strategy through expert creation and intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.offerings.map((offering, offeringIndex) => (
                    <li key={offeringIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {offering}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={service.link}
                  className="text-emerald-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center group">
            Book a Free Consultation with Our AI Consultant
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;