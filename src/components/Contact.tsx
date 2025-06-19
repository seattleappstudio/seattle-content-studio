import React, { useState } from 'react';
import { MapPin, Mail, Calendar, Send, Phone, ChevronDown, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const services = [
    'AI-Driven Content',
    'Technical Documentation',
    'Whitepapers & Case Studies',
    'Tech Event Coverage',
    'AI Automation Services',
    'App-Based Content & Sites',
    'Other'
  ];

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Reset submit status when user makes changes
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate individual field on blur
    const fieldErrors = validateForm();
    setErrors(prev => ({
      ...prev,
      [name]: fieldErrors[name as keyof FormErrors]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      service: true,
      message: true
    });

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      // Focus on first error field
      const firstErrorField = Object.keys(formErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      
      // Reset form on success
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setTouched({});
      setErrors({});
      setSubmitStatus('success');
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClassName = (fieldName: keyof FormErrors, baseClassName: string) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const isValid = touched[fieldName] && !errors[fieldName] && formData[fieldName];
    
    if (hasError) {
      return `${baseClassName} border-red-300 focus:border-red-500 focus:ring-red-500`;
    } else if (isValid) {
      return `${baseClassName} border-green-300 focus:border-green-500 focus:ring-green-500`;
    }
    return `${baseClassName} border-gray-300 focus:border-emerald-500 focus:ring-emerald-500`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your content strategy? Get in touch and let's discuss 
            how we can help your business tell better stories and automate smarter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white text-gray-900 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-medium">Something went wrong</p>
                  <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getFieldClassName('name', 'w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-200')}
                  placeholder="Your full name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {touched.name && errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getFieldClassName('email', 'w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-200')}
                  placeholder="your.email@company.com"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
              
              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>

              {/* Service Field */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest *
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getFieldClassName('service', 'w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent appearance-none bg-white pr-10 transition-colors duration-200')}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
                {touched.service && errors.service && (
                  <p id="service-error" className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.service}
                  </p>
                )}
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={getFieldClassName('message', 'w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent resize-vertical transition-colors duration-200')}
                    placeholder="Tell us about your project and how we can help..."
                    aria-describedby={errors.message ? 'message-error' : 'message-help'}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                    {formData.message.length}/1000
                  </div>
                </div>
                {touched.message && errors.message ? (
                  <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                ) : (
                  <p id="message-help" className="mt-2 text-sm text-gray-500">
                    Please provide details about your project, timeline, and specific needs.
                  </p>
                )}
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              {/* Form Footer */}
              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" className="text-emerald-600 hover:text-emerald-700 underline">
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a href="/terms-of-service" className="text-emerald-600 hover:text-emerald-700 underline">
                  Terms of Service
                </a>
                .
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">
                      Based in Seattle, Washington<br />
                      Serving clients globally
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:hello@seattlecontentstudio.com"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    >
                      hello@seattlecontentstudio.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:+12065550123"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    >
                      (206) 555-0123
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-emerald-300 mr-3" />
                <h4 className="text-xl font-semibold">Free Discovery Call</h4>
              </div>
              <p className="text-emerald-100 mb-4">
                Book a 15-minute discovery call to discuss your content needs and 
                explore how we can help your business grow.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Schedule Call
              </button>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;