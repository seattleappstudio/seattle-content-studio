import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-emerald-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-600">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you contact us for services, 
                    subscribe to our newsletter, or interact with our website. This may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Name and contact information (email, phone number, company)</li>
                    <li>Project requirements and business information</li>
                    <li>Communication preferences</li>
                    <li>Payment and billing information</li>
                    <li>Website usage data and analytics</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Personalize and improve your experience</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction. 
                    These measures include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure backup and recovery procedures</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our website uses cookies and similar tracking technologies to enhance your browsing 
                    experience and analyze website traffic. You can control cookie settings through your 
                    browser preferences. We use:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand website usage</li>
                    <li>Marketing cookies for relevant advertising (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may use third-party services to help us operate our business and website or administer 
                    activities on our behalf. These parties may have access to your personal information only 
                    to perform specific tasks and are obligated not to disclose or use it for other purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes 
                    outlined in this privacy policy, unless a longer retention period is required or 
                    permitted by law. When we no longer need your information, we will securely delete 
                    or anonymize it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Access: Request a copy of the personal information we hold about you</li>
                    <li>Correction: Request correction of inaccurate or incomplete information</li>
                    <li>Deletion: Request deletion of your personal information</li>
                    <li>Portability: Request transfer of your information to another service</li>
                    <li>Opt-out: Unsubscribe from marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly 
                    collect personal information from children under 18. If we become aware that we have 
                    collected personal information from a child under 18, we will take steps to delete 
                    such information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure that such transfers comply with applicable data protection laws and implement 
                    appropriate safeguards to protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes 
                    by posting the new privacy policy on this page and updating the "Last updated" date. 
                    We encourage you to review this privacy policy periodically.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this privacy policy or our privacy practices, please 
                    contact us at:
                  </p>
                  <div className="text-gray-700 leading-relaxed">
                    <p className="font-semibold">Seattle Content Studio</p>
                    <p>Email: hello@seattlecontentstudio.com</p>
                    <p>Phone: (206) 555-0123</p>
                    <p>Seattle, Washington</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Questions?</h3>
                  <p className="text-gray-700 mb-4">
                    We're committed to protecting your privacy. If you have any questions or concerns, 
                    please don't hesitate to reach out.
                  </p>
                  <Link 
                    to="/#contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;