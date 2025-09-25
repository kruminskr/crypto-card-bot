import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services
          </p>
          <div className="mt-4 text-sm text-slate-400">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                Acceptance of Terms
              </h2>
              <p className="text-slate-300 leading-relaxed">
                By accessing and using our virtual crypto card services through our Telegram bot, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                Service Description
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our service provides virtual cryptocurrency cards that allow users to spend their digital assets at merchants that accept traditional payment cards. The service includes:
              </p>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Virtual card issuance and management
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Cryptocurrency to fiat conversion
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Real-time transaction processing
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Account management through Telegram bot
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                User Responsibilities
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Users are responsible for:
              </p>
              <ul className="text-slate-300 space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Providing accurate and truthful information during registration
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Maintaining the security of their account credentials
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Complying with all applicable laws and regulations
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Using the service only for legitimate purposes
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                Privacy and Data Protection
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We are committed to protecting your privacy and personal data. We collect and process personal information in accordance with our Privacy Policy and applicable data protection laws. Your data is encrypted and stored securely using bank-level security protocols.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                Fees and Charges
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Our fee structure is transparent and clearly displayed before any transaction. Fees may include card issuance fees, transaction fees, and currency conversion fees. All fees are subject to change with prior notice to users.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                Risk Disclosure
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Cryptocurrency transactions involve inherent risks including price volatility, technical risks, and regulatory changes. Users acknowledge these risks and agree that they are solely responsible for their investment decisions. We do not provide investment advice.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                Limitation of Liability
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Our liability is limited to the maximum extent permitted by law. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
                Termination
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">9</span>
                Changes to Terms
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes through our Telegram bot or email. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">10</span>
                Contact Information
              </h2>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us through our Telegram bot or visit our contact page. Our support team is available 24/7 to assist you.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
              <p className="text-slate-400 text-sm">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;