import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CTO, TechNova Solutions',
      content: 'Seattle Content Studio transformed our technical documentation. Their AI-driven approach saved us countless hours while significantly improving clarity and user engagement.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Marketing Director, GreenTech Innovations',
      content: 'The team\'s ability to blend technical expertise with compelling storytelling is unmatched. Our content strategy has never been more effective.',
      rating: 5
    },
    {
      name: 'Jennifer Park',
      title: 'Founder, Northwest Analytics',
      content: 'Working with Seattle Content Studio was a game-changer. They automated our content workflows and delivered consistent, high-quality results that drive real business impact.',
      rating: 5
    },
    {
      name: 'David Kim',
      title: 'VP of Engineering, CloudScale Systems',
      content: 'Their technical writing expertise is exceptional. Complex API documentation became accessible and user-friendly, reducing our support tickets by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      title: 'Head of Content, Pacific Ventures',
      content: 'The whitepapers they created positioned us as thought leaders in our industry. The research depth and writing quality exceeded our expectations completely.',
      rating: 5
    },
    {
      name: 'Alex Morgan',
      title: 'CEO, Seattle StartupHub',
      content: 'From event coverage to app development, Seattle Content Studio delivers on every front. Their integrated approach to content and technology is exactly what modern businesses need.',
      rating: 5
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const getCurrentTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped transform their content strategy.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300" />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8 px-4">
                    {testimonials
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((testimonial, index) => (
                        <div
                          key={`${slideIndex}-${index}`}
                          className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                        >
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          
                          <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                          
                          <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                            "{testimonial.content}"
                          </p>
                          
                          <div className="border-t pt-4 mt-auto">
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-emerald-600">{testimonial.title}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-emerald-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Get weekly insights on content strategy, AI trends, and automation tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;