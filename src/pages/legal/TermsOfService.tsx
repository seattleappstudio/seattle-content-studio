import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
              <Shield className="h-8 w-8 text-emerald-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using the services provided by Seattle Content Studio ("we," "our," or "us"), 
                    you accept and agree to be bound by the terms and provision of this agreement. If you do not 
                    agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Seattle Content Studio provides content creation, technical documentation, AI automation, 
                    and related digital services to businesses and organizations. Our services include but are 
                    not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>AI-driven content creation and strategy</li>
                    <li>Technical documentation and writing</li>
                    <li>Whitepapers and case studies</li>
                    <li>Tech event coverage</li>
                    <li>AI automation services</li>
                    <li>App-based content and site development</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Clients are responsible for providing accurate information, timely feedback, and necessary 
                    access to systems or data required for project completion. Clients must also ensure they 
                    have the right to use any materials, trademarks, or proprietary information they provide 
                    to us for use in our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Upon full payment for services, clients retain ownership of the final deliverables created 
                    specifically for their project. However, Seattle Content Studio retains the right to use 
                    general methodologies, techniques, and know-how developed during the course of providing 
                    services. We also retain the right to showcase completed work in our portfolio unless 
                    otherwise agreed upon in writing.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Payment terms are specified in individual project agreements. Generally, we require a 50% 
                    deposit before beginning work, with the remainder due upon project completion. Late payments 
                    may incur additional fees. We reserve the right to suspend services for accounts with 
                    overdue payments.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We understand that clients may share confidential information during the course of our 
                    business relationship. We commit to maintaining the confidentiality of all proprietary 
                    information and will not disclose such information to third parties without written consent, 
                    except as required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Seattle Content Studio's liability for any claim arising from our services shall not exceed 
                    the total amount paid by the client for the specific services giving rise to the claim. 
                    We are not liable for any indirect, incidental, special, or consequential damages.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Either party may terminate a project agreement with written notice. In case of termination, 
                    the client is responsible for payment of all work completed up to the termination date. 
                    Any deliverables completed will be provided to the client upon full payment.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Revisions and Changes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Project scope and deliverables are defined in individual agreements. Changes to project 
                    scope may result in additional charges and timeline adjustments. We include a reasonable 
                    number of revisions in our standard pricing, with additional revisions billed separately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Force Majeure</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Neither party shall be liable for any failure or delay in performance under this agreement 
                    which is due to fire, flood, earthquake, elements of nature, acts of God, acts of war, 
                    terrorism, riots, civil disorders, rebellions, or other similar causes beyond the reasonable 
                    control of such party.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of the State of 
                    Washington, without regard to its conflict of law provisions. Any disputes arising from 
                    these terms or our services shall be resolved in the courts of King County, Washington.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately 
                    upon posting to our website. Continued use of our services after changes constitutes 
                    acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="text-gray-700 leading-relaxed">
                    <p className="font-semibold">Seattle Content Studio</p>
                    <p>Email: hello@seattlecontentstudio.com</p>
                    <p>Phone: (206) 555-0123</p>
                    <p>Seattle, Washington</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions?</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these terms or our services, we're here to help.
                  </p>
                  <Link 
                    to="/#contact"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
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

export default TermsOfService;