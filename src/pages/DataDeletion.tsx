import { AlertTriangle, Mail, Clock, Shield } from 'lucide-react';

export function DataDeletion() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Data Deletion Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Right to Data Deletion</h2>
            <p className="text-gray-600">
              At SocialWay.ai, we respect your right to control your personal data. You can request the deletion of your account and associated data at any time. This page explains how to request data deletion and what happens when you do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request Data Deletion</h2>
            <p className="text-gray-600 mb-4">You can request data deletion through any of the following methods:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Email Request</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Send an email to <a href="mailto:privacy@socialway.ai" className="text-blue-600 hover:underline">privacy@socialway.ai</a> with the subject line "Data Deletion Request" and include your account email address.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <Shield className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">In-App Request</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Log into your account, go to Settings &gt; Privacy &gt; Delete Account, and follow the prompts to delete your account and data.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data Will Be Deleted</h2>
            <p className="text-gray-600 mb-4">When you request data deletion, we will remove:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Your account information (name, email, password)</li>
              <li>Social media content created through our platform</li>
              <li>Connected social media account tokens</li>
              <li>Analytics and usage data</li>
              <li>Payment information (excluding records required for tax/legal purposes)</li>
              <li>AI-generated content and prompts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-gray-700">
                  Some data may be retained for legal, tax, or regulatory compliance purposes for a period of up to 7 years after account deletion. This includes transaction records and certain audit logs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Timeline</h2>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-600">
                  Data deletion requests are typically processed within <strong>30 days</strong>. You will receive a confirmation email once your data has been deleted. During this period, you may cancel your deletion request by contacting us.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Data</h2>
            <p className="text-gray-600">
              Please note that data you've posted to connected social media platforms (Twitter, LinkedIn, Facebook, Instagram, Bluesky) is governed by those platforms' policies. Deleting your SocialWay.ai account does not automatically delete content posted to those platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about data deletion or need assistance, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: <a href="mailto:privacy@socialway.ai" className="text-blue-600 hover:underline">privacy@socialway.ai</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
