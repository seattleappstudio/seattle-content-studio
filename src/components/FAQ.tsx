import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Seattle Content Studio different from other content agencies?",
      answer: "We uniquely combine AI-driven content creation with human expertise, specializing in technical and B2B content for Pacific Northwest businesses. Our background in both AI consulting and app development allows us to create content that's not just engaging, but also technically accurate and strategically aligned with your business goals."
    },
    {
      question: "How do you ensure content quality when using AI tools?",
      answer: "AI is our starting point, not our endpoint. We use AI to accelerate research, generate initial drafts, and optimize for SEO, but every piece of content is reviewed, edited, and refined by our human experts. This hybrid approach allows us to maintain high quality while delivering content faster and more cost-effectively than traditional agencies."
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We primarily serve tech-savvy B2B companies, SaaS startups, consulting firms, and established businesses looking to modernize their content strategy. Our sweet spot is working with companies that value innovation, data-driven approaches, and measurable results from their content investments."
    },
    {
      question: "Can you help with both content creation and technical implementation?",
      answer: "Absolutely! That's one of our key differentiators. We can create your content strategy, write the content, build the WordPress site or web app to showcase it, and even set up automation workflows to distribute it. This end-to-end approach ensures consistency and eliminates the coordination headaches of working with multiple vendors."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on scope, but most content projects range from 2-8 weeks. After our free discovery call, we'll provide a detailed proposal with timeline and pricing. Our goal is to be transparent about costs upfront so you can make informed decisions."
    },
    {
      question: "What's your pricing structure?",
      answer: "We offer both project-based pricing and monthly retainers depending on your needs. Pricing varies based on project scope, complexity, and timeline requirements. We believe in transparent pricing and will provide a detailed quote after understanding your specific requirements during our free consultation."
    },
    {
      question: "Do you work with creative professionals on novels, screenplays, ghostwriting, book editing, and book indexing?",
      answer: "While this isn't our most common request, we are proud to say that we have experience in these domains and are capable of delivering quality work. Our content creation expertise extends beyond business writing to include creative projects, and we'd be happy to discuss how we can help with your specific creative writing needs."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes! We offer various ongoing support options including monthly content retainers, quarterly strategy reviews, and technical maintenance for websites and apps we've built. Many of our clients start with a project and then move to an ongoing relationship as they see the value of consistent, strategic content creation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our services, process, and approach to content strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-emerald-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                We're here to help! Book a free 15-minute discovery call to discuss your specific needs.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;